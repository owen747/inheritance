// characters/Saphira.ts
// Flight controller. Orientation is a quaternion accumulated with LOCAL-axis delta
// rotations (gimbal-safe) using MODULE-SCOPE scratch objects (zero per-frame
// allocation) and renormalised every step to kill float drift. Fire-breath is a
// cone of pooled projectiles (energy cost); claw/tail is an input-buffered melee.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { Input } from '../core/Input';
import type { AudioManager } from '../core/AudioManager';
import { Character, type ControlMode } from './Character';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { buildDragon, dragonPartsOf, type DragonParts } from '../art/meshes';
import { flapWings } from '../art/anim';
import { getVfx } from '../art/vfx';
import { clamp } from '../core/mathx';
import { FLIGHT, ENERGY, COMBAT } from '../config/gameConfig';

// Module-scope scratch — reused every step, never reallocated.
const _dq = new THREE.Quaternion();
const _e = new THREE.Euler();
const _fwd = new THREE.Vector3();
const _spawn = new THREE.Vector3();
const _vel = new THREE.Vector3();

const CLAW_COMBO: ComboConfig = {
  steps: [
    { windup: 0.12, active: 0.16, recovery: 0.3, damage: 26, knockback: 1.5, range: 4.0, radius: 2.0 },
    { windup: 0.14, active: 0.18, recovery: 0.42, damage: 34, knockback: 2.5, range: 4.4, radius: 2.2 },
  ],
};

/** Saphira — sapphire dragon. Pitch=mouseY, yaw=A/D, roll=Q/E, throttle=Shift/Ctrl. */
export class Saphira extends Character implements MeleeAttacker {
  readonly controlMode: ControlMode = 'FLIGHT';
  readonly magicEnabled = false;

  private throttle: number = FLIGHT.cruiseSpeed;
  private hoverPhase = 0;
  private hoverBaseY = 30;
  private breathCd = 0;

  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;

  private readonly dragonParts: DragonParts;
  private animT = 0;

  constructor(input: Input, audio: AudioManager | null = null) {
    super(input, { team: 'player', maxHealth: 220, maxEnergy: 90 }, audio);
    this.combo = new ComboStateMachine(CLAW_COMBO);
    this.collider = { radius: 2.6 };
    const dragon = buildDragon('saphira');
    this.mesh = dragon;
    this.dragonParts = dragonPartsOf(dragon);
    this.strike = {
      team: this.team,
      center: new THREE.Vector3(),
      radius: 0,
      damage: 0,
      knockback: 0,
      hitstop: COMBAT.hitstop,
      hitSet: this.combo.hitSet,
    };
  }

  protected override get inIFrames(): boolean {
    return false; // dragons don't dodge-roll; rely on mobility
  }

  currentStrike(): MeleeStrike | null {
    if (this.downed) return null;
    const step = this.combo.activeStep;
    if (!step) return null;
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    this.strike.center.copy(this.position).addScaledVector(_fwd, step.range);
    this.strike.radius = step.radius;
    this.strike.damage = step.damage;
    this.strike.knockback = step.knockback;
    this.strike.team = this.team;
    // Saphira cannot execute the laughing-soldier elite — never a finisher.
    this.strike.finisher = false;
    return this.strike;
  }

  protected override controlActive(dt: number, ctx: EngineContext): void {
    // Pitch is a raw mouse-radian delta; yaw/roll are keyboard rates * dt.
    const pitch = this.input.axis('pitch');
    const yaw = this.input.axis('yaw') * FLIGHT.yawRate * dt;
    const roll = this.input.axis('roll') * FLIGHT.rollRate * dt;
    _e.set(pitch * FLIGHT.pitchRate, yaw, roll, 'XYZ');
    _dq.setFromEuler(_e);
    this.quaternion.multiply(_dq).normalize();

    this.throttle = clamp(
      this.throttle + this.input.axis('throttle') * FLIGHT.throttleAccel * dt,
      FLIGHT.minSpeed,
      FLIGHT.maxSpeed,
    );

    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    this.position.addScaledVector(_fwd, this.throttle * dt);
    this.hoverBaseY = this.position.y;

    // Claw/tail melee.
    if (this.justPressedStep('attack')) this.combo.pressAttack();
    this.combo.update(dt);

    // Fire-breath cone (sustained, energy cost). spell1 held to breathe.
    if (this.input.pressed('spell1')) this.breatheFire(dt, ctx);
    else this.breathCd = 0;
  }

  protected override controlPassive(dt: number, _ctx: EngineContext): void {
    // Landed/auto-hover: gentle bob in place; invulnerable while not piloted.
    this.combo.update(dt);
    this.hoverPhase += dt;
    this.position.y = this.hoverBaseY + Math.sin(this.hoverPhase * FLIGHT.passiveHoverBob) * 0.3;
  }

  protected override onActiveChanged(on: boolean): void {
    if (!on) this.hoverBaseY = this.position.y;
    else this.throttle = FLIGHT.cruiseSpeed;
  }

  /** Per-frame wing-beat — faster/deeper the harder she's driving (throttle). */
  override animate(dt: number): void {
    this.animT += dt;
    const speedN =
      (this.throttle - FLIGHT.minSpeed) / Math.max(1e-3, FLIGHT.maxSpeed - FLIGHT.minSpeed);
    // Gentle wing idle when landed/auto-hovering (benched); stronger when piloted.
    const intensity = this.active ? 0.6 + speedN * 0.8 : 0.2;
    flapWings(this.dragonParts, this.animT, intensity);
  }

  private breatheFire(dt: number, ctx: EngineContext): void {
    if (this.energy <= 0) return;
    this.energy = Math.max(0, this.energy - ENERGY.breathCostPerSec * dt);

    this.breathCd -= dt;
    if (this.breathCd > 0) return;
    this.breathCd = 0.05;

    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.4);

    // Cone spread: jitter the velocity around the forward axis.
    _vel.copy(_fwd).multiplyScalar(30);
    _vel.x += (Math.random() - 0.5) * 8;
    _vel.y += (Math.random() - 0.5) * 8;
    _vel.z += (Math.random() - 0.5) * 8;

    ctx.spawnProjectile({
      position: _spawn,
      velocity: _vel.clone(),
      team: this.team,
      damage: 6,
      radius: 0.9,
      ttl: 0.55,
      color: 0xff7a1a,
    });
    getVfx()?.fireBurst(_spawn, 6);
  }
}
