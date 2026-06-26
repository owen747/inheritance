// enemies/Shruikan.ts
// The enormous black dragon of Urû'baen — Level 3 Phase-1 aerial boss. Clones
// Thorn's flight brain (quaternion bearing slerp + an engagement-band weave) but
// is scaled ~1.8x with far higher HP, and reads DISTINCT from Thorn by adding a
// telegraphed DIVE-SWIPE: a locked-direction lunge that closes the gap with one
// big melee hit, on top of the shared fire-breath cone + a claw combo. Like
// Thorn, all hot-loop math reuses MODULE-SCOPE scratch — the boss allocates
// nothing per step (projectile velocities are cloned only at spawn).
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
const SHRUIKAN = {
  // Tough black boss: high HP + a big body (~1.8x Thorn).
  maxHealth: 420,
  aggroRange: 280,
  colliderRadius: 4.7,
  /** Visual scale of buildDragon('shruikan') (renderer preserves group scale). */
  meshScale: 1.8,
  /** Cruise speed (world units/sec) — a bit slower than Thorn; he's massive. */
  speed: 22,
  /** Orientation slerp rate (lambda for 1 - exp(-rate*dt)). */
  turnRate: 1.9,
  /** Preferred engagement band around Saphira (wider than Thorn — bigger body). */
  preferredMin: 22,
  preferredMax: 42,
  /** Never dive below this altitude (except mid dive-swipe, which is committed). */
  altitudeMin: 16,
  /** Fire-breath only inside this range AND facing cone. */
  breathRange: 52,
  /** cos() threshold: breathe only when forward·toTarget exceeds this. */
  breathFacingDot: 0.85,
  breathWindup: 0.6,
  breathDuration: 0.95,
  breathCooldown: 3.0,
  breathTickInterval: 0.05,
  breathDamage: 9,
  breathSpeed: 36,
  /** Trigger the claw combo within this range. */
  clawRange: 12,
  /** Seconds between strafe-direction flips (keeps the dogfight weaving). */
  strafeFlipInterval: 3.5,
  // ---- Dive-swipe: the signature, distinct-from-Thorn attack ----------------
  /** Engagement band that arms the dive (medium range — he lunges to close it). */
  diveRangeMin: 16,
  diveRangeMax: 60,
  /** Telegraph: he rears with a red wind-up glow before committing. */
  diveWindup: 0.7,
  /** Duration of the committed forward lunge. */
  diveDuration: 0.55,
  /** Recovery hang after the lunge (vulnerable beat). */
  diveRecover: 0.5,
  /** Cooldown before the dive can arm again. */
  diveCooldown: 4.5,
  /** Lunge speed (much faster than cruise — a real closing burst). */
  diveSpeed: 66,
  /** Forward offset of the dive hit-sphere from the body centre. */
  diveStrikeRange: 6.0,
  diveStrikeRadius: 4.2,
  diveStrikeDamage: 38,
  diveStrikeKnockback: 7.0,
} as const;

// Two scaled-up claws (bigger reach than Thorn) for when Saphira gets adjacent.
const CLAW_COMBO: ComboConfig = {
  steps: [
    { windup: 0.2, active: 0.18, recovery: 0.4, damage: 28, knockback: 3.0, range: 8.0, radius: 4.0 },
    { windup: 0.22, active: 0.2, recovery: 0.55, damage: 38, knockback: 4.0, range: 8.4, radius: 4.2 },
  ],
};

type BreathState = 'ready' | 'windup' | 'breathing' | 'cooldown';
type DiveState = 'ready' | 'windup' | 'diving' | 'recover' | 'cooldown';

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _dir = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _vel = new THREE.Vector3();
const _spawn = new THREE.Vector3();
const _breathVel = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/** Shruikan — colossal black enemy dragon. Phase-1 boss; defeated normally at 0 HP. */
export class Shruikan extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;

  private breathState: BreathState = 'ready';
  private breathTimer = 0;
  private breathTick = 0;
  private strafeSign: 1 | -1 = 1;
  private strafeFlip = SHRUIKAN.strafeFlipInterval;

  // Dive-swipe: a locked-direction lunge with its own once-per-dive hit set.
  private diveState: DiveState = 'ready';
  private diveTimer = 0;
  private readonly diveDir = new THREE.Vector3(0, 0, -1);
  private readonly diveHitSet = new Set<number>();
  private readonly diveStrike: MeleeStrike;

  private readonly dragonParts: DragonParts;
  private animT = 0;

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: SHRUIKAN.maxHealth,
        colliderRadius: SHRUIKAN.colliderRadius,
        aggroRange: SHRUIKAN.aggroRange,
      },
      audio,
    );
    this.combo = new ComboStateMachine(CLAW_COMBO);
    const dragon = buildDragon('shruikan');
    dragon.scale.setScalar(SHRUIKAN.meshScale);
    this.baseScale = SHRUIKAN.meshScale; // compose spawn-in / death-fade with his size
    this.mesh = dragon;
    this.dragonParts = dragonPartsOf(dragon);
    this.position.y = 32;

    this.strike = {
      team: this.team,
      center: new THREE.Vector3(),
      radius: 0,
      damage: 0,
      knockback: 0,
      hitstop: COMBAT.hitstop,
      hitSet: this.combo.hitSet,
    };
    this.diveStrike = {
      team: this.team,
      center: new THREE.Vector3(),
      radius: SHRUIKAN.diveStrikeRadius,
      damage: SHRUIKAN.diveStrikeDamage,
      knockback: SHRUIKAN.diveStrikeKnockback,
      hitstop: COMBAT.hitstop,
      hitSet: this.diveHitSet,
    };
  }

  /** MeleeAttacker: the dive sphere takes priority over the claw during a lunge. */
  currentStrike(): MeleeStrike | null {
    if (this.diveState === 'diving') {
      _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
      this.diveStrike.center.copy(this.position).addScaledVector(_fwd, SHRUIKAN.diveStrikeRange);
      this.diveStrike.team = this.team;
      return this.diveStrike;
    }
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

  /** Per-frame wing-beat — massive slow beats, big surge during a dive-swipe. */
  protected override animateBody(dt: number): void {
    this.animT += dt;
    const diving = this.diveState === 'windup' || this.diveState === 'diving';
    const intensity = diving
      ? 1.6
      : this.combo.isAttacking || this.breathState === 'breathing'
        ? 1.2
        : 0.9;
    flapWings(this.dragonParts, this.animT, intensity);
  }

  protected think(dt: number, ctx: EngineContext): void {
    this.combo.update(dt);

    const target = this.target;
    if (!target) {
      // No prey: hold altitude, idle in place.
      if (this.position.y < SHRUIKAN.altitudeMin) this.position.y = SHRUIKAN.altitudeMin;
      return;
    }

    // Face the target (full-3D bearing -> slerp; renormalise to kill drift).
    _dir.copy(target.position).sub(this.position);
    const dist = _dir.length();
    if (dist > 1e-4) {
      _dir.multiplyScalar(1 / dist);
      _targetQuat.setFromUnitVectors(FORWARD, _dir);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-SHRUIKAN.turnRate * dt)).normalize();
    }

    // While committed to a dive (windup/lunge/recover) it OWNS movement — the
    // normal weave + breath + claw are suppressed so the lunge reads cleanly.
    if (this.diveState === 'windup' || this.diveState === 'diving' || this.diveState === 'recover') {
      this.updateDive(dt);
      if (this.position.y < SHRUIKAN.altitudeMin) this.position.y = SHRUIKAN.altitudeMin;
      return;
    }
    if (this.diveState === 'cooldown') {
      this.diveTimer -= dt;
      if (this.diveTimer <= 0) this.diveState = 'ready';
    }

    // Weave: flip the strafe direction on a timer.
    this.strafeFlip -= dt;
    if (this.strafeFlip <= 0) {
      this.strafeFlip = SHRUIKAN.strafeFlipInterval;
      this.strafeSign = this.strafeSign === 1 ? -1 : 1;
    }

    // Steer by engagement band: close, circle, or back off.
    const mode =
      dist > SHRUIKAN.preferredMax ? 'seek' : dist < SHRUIKAN.preferredMin ? 'retreat' : 'strafe';
    this.steer(_vel, mode, target.position, this.strafeSign);
    this.position.addScaledVector(_vel, SHRUIKAN.speed * dt);
    if (this.position.y < SHRUIKAN.altitudeMin) this.position.y = SHRUIKAN.altitudeMin;

    // Claw when adjacent.
    if (dist <= SHRUIKAN.clawRange && this.combo.state === 'IDLE') this.combo.pressAttack();

    // Fire-breath: facing cone + range, telegraphed windup before damage.
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    const facing = _fwd.dot(_dir) >= SHRUIKAN.breathFacingDot;
    this.updateBreath(dt, ctx, dist, facing);

    // Arm the dive-swipe: medium band, facing, and not mid another commitment.
    if (
      this.diveState === 'ready' &&
      dist >= SHRUIKAN.diveRangeMin &&
      dist <= SHRUIKAN.diveRangeMax &&
      facing &&
      this.breathState === 'ready' &&
      !this.combo.isAttacking
    ) {
      this.startDive(target.position);
    }
  }

  /** Lock the lunge bearing toward the target NOW, so a juking Saphira can dodge it. */
  private startDive(targetPos: THREE.Vector3): void {
    this.diveState = 'windup';
    this.diveTimer = SHRUIKAN.diveWindup;
    this.diveDir.copy(targetPos).sub(this.position);
    if (this.diveDir.lengthSq() < 1e-6) this.diveDir.set(0, 0, -1).applyQuaternion(this.quaternion);
    this.diveDir.normalize();
  }

  private updateDive(dt: number): void {
    this.diveTimer -= dt;
    switch (this.diveState) {
      case 'windup': {
        // Telegraph: a red charge glow gathering at the maw as he rears to strike.
        _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
        _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.6);
        getVfx()?.burst(_spawn, { count: 5, color: 0xff2a2a, speed: 3, life: 0.3, gravity: -3 });
        if (this.diveTimer <= 0) {
          this.diveState = 'diving';
          this.diveTimer = SHRUIKAN.diveDuration;
          this.diveHitSet.clear();
          this.audio?.play('dragon-roar');
        }
        break;
      }
      case 'diving': {
        // Committed lunge along the locked bearing — fast closing burst.
        this.position.addScaledVector(this.diveDir, SHRUIKAN.diveSpeed * dt);
        getVfx()?.burst(this.position, { count: 3, color: 0x552222, speed: 4, life: 0.25, gravity: 2 });
        if (this.diveTimer <= 0) {
          this.diveState = 'recover';
          this.diveTimer = SHRUIKAN.diveRecover;
        }
        break;
      }
      case 'recover': {
        if (this.diveTimer <= 0) {
          this.diveState = 'cooldown';
          this.diveTimer = SHRUIKAN.diveCooldown;
        }
        break;
      }
      default:
        break;
    }
  }

  private updateBreath(dt: number, ctx: EngineContext, dist: number, facing: boolean): void {
    switch (this.breathState) {
      case 'ready':
        if (dist <= SHRUIKAN.breathRange && facing && !this.combo.isAttacking) {
          this.breathState = 'windup';
          this.breathTimer = SHRUIKAN.breathWindup;
        }
        break;
      case 'windup':
        // Telegraph: a small fire glow gathering at the maw.
        this.breathTick -= dt;
        if (this.breathTick <= 0) {
          this.breathTick = 0.08;
          _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
          _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.5);
          getVfx()?.fireBurst(_spawn, 5);
        }
        this.breathTimer -= dt;
        if (this.breathTimer <= 0) {
          this.breathState = 'breathing';
          this.breathTimer = SHRUIKAN.breathDuration;
          this.audio?.play('fire');
        }
        break;
      case 'breathing':
        this.emitBreath(dt, ctx);
        this.breathTimer -= dt;
        if (this.breathTimer <= 0) {
          this.breathState = 'cooldown';
          this.breathTimer = SHRUIKAN.breathCooldown;
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
    this.breathTick = SHRUIKAN.breathTickInterval;

    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    _spawn.copy(this.position).addScaledVector(_fwd, this.collider.radius + 0.6);

    // Cone spread around the forward axis.
    _breathVel.copy(_fwd).multiplyScalar(SHRUIKAN.breathSpeed);
    _breathVel.x += (Math.random() - 0.5) * 10;
    _breathVel.y += (Math.random() - 0.5) * 10;
    _breathVel.z += (Math.random() - 0.5) * 10;

    ctx.spawnProjectile({
      position: _spawn,
      velocity: _breathVel.clone(),
      team: this.team,
      damage: SHRUIKAN.breathDamage,
      radius: 1.1,
      ttl: 0.6,
      color: 0xff5a1a,
    });
    getVfx()?.fireBreath(_spawn, _fwd, 13);
  }
}
