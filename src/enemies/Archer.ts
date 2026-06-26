// enemies/Archer.ts
// Ranged Empire archer — fires REAL pooled projectiles via `ctx.spawnProjectile`,
// LEADING the active hero (velocity estimate like Ballista.fire) on a
// reload+telegraph cadence. Two variants share one class:
//  - Ground archer: kites — retreats if the target gets too close, seeks back to a
//    stand-off band otherwise.
//  - Rooftop archer (`{ rooftop: true }`): sits at a FIXED elevated y (the level
//    assigns it AFTER construction); it never moves and its perch height puts it
//    out of reach of ground-melee `currentStrike` spheres (whose centres sit ~1u
//    off the floor). Only SAPHIRA in FLIGHT can reach it: Eragon's brisingr is a
//    FLAT horizontal bolt at y≈1 (see spells.ts) that sails harmlessly under a
//    y≈7-8 perch, so ground attacks of every kind miss. This is the hard counter
//    that forces an AIR swap to Saphira.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy } from './Enemy';
import { buildRider } from '../art/meshes';
import { getVfx } from '../art/vfx';
import { GROUND } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const ARCHER = {
  maxHealth: 45,
  aggroRange: 90,
  colliderRadius: 0.7,
  moveSpeed: 5.5,
  /** Orientation slerp rate (lambda). */
  turnRate: 9,
  /** Retreat if the (ground) target closes inside this distance. */
  minRange: 12,
  /** Seek back toward the band when farther than this. */
  maxRange: 24,
  /** Reload time between shots (seconds). */
  reload: 2.4,
  /** Draw/telegraph time before the arrow looses (solution locked). */
  telegraph: 0.7,
  arrowSpeed: 38,
  arrowDamage: 12,
  arrowRadius: 0.4,
  arrowTtl: 3.0,
  /** Height of the firing muzzle above the archer's base. */
  muzzleHeight: 1.4,
  /** Cap on predictive lead so a juking hero isn't perfectly sniped. */
  maxLeadTime: 1.2,
  /** Smoothing lambda for the estimated target velocity. */
  velLambda: 8,
} as const;

/** Pale-fletched arrow color. */
const ARROW_COLOR = 0xddddcc;

type FireState = 'reload' | 'aim';

export interface ArcherOptions {
  /**
   * When true the archer is a fixed elevated rooftop sniper: it never moves, keeps
   * the elevated y the level assigns after construction, and is unreachable by
   * ground melee (only projectiles can hit it).
   */
  rooftop?: boolean;
}

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _flat = new THREE.Vector3();
const _faceQuat = new THREE.Quaternion();
const _muzzle = new THREE.Vector3();
const _toTarget = new THREE.Vector3();
const _instVel = new THREE.Vector3();
const _aimPoint = new THREE.Vector3();
const _move = new THREE.Vector3();

/** Archer — leads + looses pooled arrows; ground kiter or fixed rooftop sniper. */
export class Archer extends Enemy {
  private readonly rooftop: boolean;
  private state: FireState = 'reload';
  private timer: number = ARCHER.reload;

  /** Smoothed velocity of the tracked target (for predictive lead). */
  private readonly estVel = new THREE.Vector3();
  private readonly prevTargetPos = new THREE.Vector3();
  private hasPrev = false;

  /** Locked firing solution (full velocity vector), captured when aiming begins. */
  private readonly lockedVel = new THREE.Vector3(0, 0, -ARCHER.arrowSpeed);

  constructor(opts: ArcherOptions = {}, audio: AudioManager | null = null) {
    super(
      {
        maxHealth: ARCHER.maxHealth,
        colliderRadius: ARCHER.colliderRadius,
        aggroRange: ARCHER.aggroRange,
      },
      audio,
    );
    this.rooftop = opts.rooftop ?? false;

    const rider = buildRider({ garb: 'bannerRed', hair: 'eragonHair' });
    this.mesh = rider;
    // Ground archers stand on the plane; rooftop archers KEEP the elevated y the
    // level assigns after construction (so do NOT pin y here for rooftops).
    if (!this.rooftop) this.position.y = GROUND.groundY;
  }

  protected think(dt: number, ctx: EngineContext): void {
    if (!this.rooftop) this.position.y = GROUND.groundY;

    const target = this.target;
    if (!target) {
      this.hasPrev = false;
      return;
    }

    // Track target velocity (smoothed) for predictive leading.
    if (this.hasPrev && dt > 0) {
      const k = 1 - Math.exp(-ARCHER.velLambda * dt);
      _instVel.copy(target.position).sub(this.prevTargetPos).multiplyScalar(1 / dt);
      this.estVel.lerp(_instVel, k);
    } else {
      this.hasPrev = true;
    }
    this.prevTargetPos.copy(target.position);

    // Face the target horizontally.
    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    const dist = _flat.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _faceQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_faceQuat, 1 - Math.exp(-ARCHER.turnRate * dt)).normalize();
    }

    // Ground archers kite to a stand-off band; rooftop snipers are immobile.
    if (!this.rooftop) {
      if (dist < ARCHER.minRange) {
        this.steer(_move, 'retreat', target.position);
        _move.y = 0;
        this.position.addScaledVector(_move, ARCHER.moveSpeed * dt);
      } else if (dist > ARCHER.maxRange) {
        this.steer(_move, 'seek', target.position);
        _move.y = 0;
        this.position.addScaledVector(_move, ARCHER.moveSpeed * dt);
      }
      this.position.y = GROUND.groundY;
    }

    // Reload -> telegraphed draw -> loose.
    this.timer -= dt;
    switch (this.state) {
      case 'reload':
        if (this.timer <= 0) {
          this.lockSolution(target.position);
          this.state = 'aim';
          this.timer = ARCHER.telegraph;
        }
        break;
      case 'aim':
        // Telegraph: a faint draw glow at the muzzle.
        this.muzzle(_muzzle);
        getVfx()?.burst(_muzzle, { count: 2, color: ARROW_COLOR, speed: 1.5, life: 0.2, gravity: -1 });
        if (this.timer <= 0) {
          this.fire(ctx);
          this.state = 'reload';
          this.timer = ARCHER.reload;
        }
        break;
    }
  }

  /** Compute + lock the predictive firing solution (full velocity) toward target. */
  private lockSolution(targetPos: THREE.Vector3): void {
    this.muzzle(_muzzle);
    _toTarget.copy(targetPos).sub(_muzzle);
    const dist = _toTarget.length();
    const leadTime = Math.min(dist / ARCHER.arrowSpeed, ARCHER.maxLeadTime);
    _aimPoint.copy(targetPos).addScaledVector(this.estVel, leadTime);
    this.lockedVel.copy(_aimPoint).sub(_muzzle);
    if (this.lockedVel.lengthSq() < 1e-6) this.lockedVel.copy(FORWARD);
    this.lockedVel.normalize().multiplyScalar(ARCHER.arrowSpeed);
  }

  private fire(ctx: EngineContext): void {
    this.muzzle(_muzzle);
    ctx.spawnProjectile({
      position: _muzzle.clone(),
      velocity: this.lockedVel.clone(),
      team: this.team,
      damage: ARCHER.arrowDamage,
      radius: ARCHER.arrowRadius,
      ttl: ARCHER.arrowTtl,
      color: ARROW_COLOR,
    });
    getVfx()?.burst(_muzzle, { count: 4, color: ARROW_COLOR, speed: 5, life: 0.25, gravity: 2 });
    this.audio?.play('ballista-fire');
  }

  /** World-space muzzle position (above the base). */
  private muzzle(out: THREE.Vector3): THREE.Vector3 {
    return out.set(this.position.x, this.position.y + ARCHER.muzzleHeight, this.position.z);
  }
}
