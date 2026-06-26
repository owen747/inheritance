// enemies/Thorn.ts
// Enemy DRAGON AI (air). Thorn dogfights the player dragon (Saphira): he closes,
// circles at a preferred engagement band, claws when adjacent, and breathes a
// telegraphed fire cone when facing her in range. Orientation is a quaternion
// slerped toward the bearing-to-target (gimbal-safe, renormalised), using
// MODULE-SCOPE scratch objects so the hot loop allocates nothing.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy } from './Enemy';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { buildDragon, dragonPartsOf, type DragonParts } from '../art/meshes';
import { flapWings } from '../art/anim';
import { getVfx } from '../art/vfx';
import { COMBAT } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const THORN = {
  maxHealth: 260,
  aggroRange: 240,
  colliderRadius: 2.6,
  /** Cruise speed (world units/sec). */
  speed: 26,
  /** Orientation slerp rate (lambda for 1 - exp(-rate*dt)). */
  turnRate: 2.4,
  /** Preferred engagement band around Saphira. */
  preferredMin: 16,
  preferredMax: 32,
  /** Never dive below this altitude. */
  altitudeMin: 14,
  /** Fire-breath only inside this range AND facing cone. */
  breathRange: 44,
  /** cos() threshold: breathe only when forward·toTarget exceeds this. */
  breathFacingDot: 0.86,
  breathWindup: 0.55,
  breathDuration: 0.8,
  breathCooldown: 2.6,
  breathTickInterval: 0.05,
  breathDamage: 7,
  breathSpeed: 34,
  /** Trigger a claw combo within this range. */
  clawRange: 8,
  /** Seconds between strafe-direction flips (keeps the dogfight weaving). */
  strafeFlipInterval: 3.5,
} as const;

const CLAW_COMBO: ComboConfig = {
  steps: [
    { windup: 0.18, active: 0.16, recovery: 0.36, damage: 22, knockback: 2.2, range: 4.6, radius: 2.4 },
    { windup: 0.2, active: 0.18, recovery: 0.5, damage: 30, knockback: 3.0, range: 4.8, radius: 2.5 },
  ],
};

type BreathState = 'ready' | 'windup' | 'breathing' | 'cooldown';

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _dir = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _vel = new THREE.Vector3();
const _spawn = new THREE.Vector3();
const _breathVel = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/** Thorn — crimson enemy dragon. Dogfights Saphira; can be defeated. */
export class Thorn extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;

  private breathState: BreathState = 'ready';
  private breathTimer = 0;
  private breathTick = 0;
  private strafeSign: 1 | -1 = 1;
  private strafeFlip = THORN.strafeFlipInterval;

  private readonly dragonParts: DragonParts;
  private animT = 0;

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: THORN.maxHealth,
        colliderRadius: THORN.colliderRadius,
        aggroRange: THORN.aggroRange,
      },
      audio,
    );
    this.combo = new ComboStateMachine(CLAW_COMBO);
    const dragon = buildDragon('thorn');
    this.mesh = dragon;
    this.dragonParts = dragonPartsOf(dragon);
    this.position.y = 28;
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

  /** MeleeAttacker: live claw hit sphere during ACTIVE frames, else null. */
  currentStrike(): MeleeStrike | null {
    const step = this.combo.activeStep;
    if (!step) return null;
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    this.strike.center.copy(this.position).addScaledVector(_fwd, step.range);
    this.strike.radius = step.radius;
    this.strike.damage = step.damage;
    this.strike.knockback = step.knockback;
    this.strike.team = this.team;
    return this.strike;
  }

  /** Per-frame wing-beat — a strong steady cruise, deeper while attacking/breathing. */
  protected override animateBody(dt: number): void {
    this.animT += dt;
    const intensity = this.breathState === 'breathing' || this.combo.isAttacking ? 1.3 : 1.0;
    flapWings(this.dragonParts, this.animT, intensity);
  }

  protected think(dt: number, ctx: EngineContext): void {
    this.combo.update(dt);

    const target = this.target;
    if (!target) {
      // No prey: hold altitude, idle in place.
      if (this.position.y < THORN.altitudeMin) this.position.y = THORN.altitudeMin;
      return;
    }

    // Face the target (full-3D bearing -> slerp; renormalise to kill drift).
    _dir.copy(target.position).sub(this.position);
    const dist = _dir.length();
    if (dist > 1e-4) {
      _dir.multiplyScalar(1 / dist);
      _targetQuat.setFromUnitVectors(FORWARD, _dir);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-THORN.turnRate * dt)).normalize();
    }

    // Weave: flip the strafe direction on a timer.
    this.strafeFlip -= dt;
    if (this.strafeFlip <= 0) {
      this.strafeFlip = THORN.strafeFlipInterval;
      this.strafeSign = this.strafeSign === 1 ? -1 : 1;
    }

    // Steer by engagement band: close, circle, or back off.
    const mode = dist > THORN.preferredMax ? 'seek' : dist < THORN.preferredMin ? 'retreat' : 'strafe';
    this.steer(_vel, mode, target.position, this.strafeSign);
    this.position.addScaledVector(_vel, THORN.speed * dt);
    if (this.position.y < THORN.altitudeMin) this.position.y = THORN.altitudeMin;

    // Claw when adjacent.
    if (dist <= THORN.clawRange && this.combo.state === 'IDLE') this.combo.pressAttack();

    // Fire-breath: facing cone + range, telegraphed windup before damage.
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    const facing = _fwd.dot(_dir) >= THORN.breathFacingDot;
    this.updateBreath(dt, ctx, dist, facing);
  }

  private updateBreath(dt: number, ctx: EngineContext, dist: number, facing: boolean): void {
    switch (this.breathState) {
      case 'ready':
        if (dist <= THORN.breathRange && facing && !this.combo.isAttacking) {
          this.breathState = 'windup';
          this.breathTimer = THORN.breathWindup;
        }
        break;
      case 'windup':
        // Telegraph: a small fire glow gathering at the maw.
        this.breathTick -= dt;
        if (this.breathTick <= 0) {
          this.breathTick = 0.08;
          _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
          _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.4);
          getVfx()?.fireBurst(_spawn, 4);
        }
        this.breathTimer -= dt;
        if (this.breathTimer <= 0) {
          this.breathState = 'breathing';
          this.breathTimer = THORN.breathDuration;
          this.audio?.play('fire');
        }
        break;
      case 'breathing':
        this.emitBreath(dt, ctx);
        this.breathTimer -= dt;
        if (this.breathTimer <= 0) {
          this.breathState = 'cooldown';
          this.breathTimer = THORN.breathCooldown;
        }
        break;
      case 'cooldown':
        this.breathTimer -= dt;
        if (this.breathTimer <= 0) this.breathState = 'ready';
        break;
    }
  }

  private emitBreath(dt: number, ctx: EngineContext): void {
    this.breathTick -= dt;
    if (this.breathTick > 0) return;
    this.breathTick = THORN.breathTickInterval;

    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.5);

    // Cone spread around the forward axis.
    _breathVel.copy(_fwd).multiplyScalar(THORN.breathSpeed);
    _breathVel.x += (Math.random() - 0.5) * 9;
    _breathVel.y += (Math.random() - 0.5) * 9;
    _breathVel.z += (Math.random() - 0.5) * 9;

    ctx.spawnProjectile({
      position: _spawn,
      velocity: _breathVel.clone(),
      team: this.team,
      damage: THORN.breathDamage,
      radius: 0.95,
      ttl: 0.55,
      color: 0xff5a1a,
    });
    getVfx()?.fireBreath(_spawn, _fwd, 11);
  }
}
