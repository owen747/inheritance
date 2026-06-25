// enemies/Ballista.ts
// Dauthdaert lance launcher (ground hazard). A static enemy `Combatant` (so the
// player's fire/projectiles can destroy it) that periodically LEADS the target
// dragon — estimating its velocity and aiming where it WILL be — then fires a
// green anti-dragon lance via `ctx.spawnProjectile`. The shot is telegraphed: it
// locks its firing solution and charges visibly for a beat, so a juking dragon
// can dodge a fixed lance rather than a perfectly-tracking one.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy } from './Enemy';
import { buildBallista, type BallistaParts } from '../art/meshes';
import { getVfx } from '../art/vfx';
import { GROUND } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const BALLISTA = {
  maxHealth: 80,
  aggroRange: 260,
  colliderRadius: 1.3,
  /** Reload time between shots (seconds). */
  reload: 4.5,
  /** Charge/telegraph time before the lance fires (solution is locked). */
  telegraph: 1.3,
  lanceSpeed: 62,
  lanceDamage: 45,
  lanceRadius: 0.85,
  lanceTtl: 4.0,
  /** Height of the firing muzzle above the base. */
  muzzleHeight: 1.1,
  /** Cap on predictive lead so a fast pass can't be perfectly sniped. */
  maxLeadTime: 1.5,
  /** Smoothing lambda for the estimated target velocity. */
  velLambda: 8,
} as const;

type FireState = 'reload' | 'aim';

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _muzzle = new THREE.Vector3();
const _toTarget = new THREE.Vector3();
const _instVel = new THREE.Vector3();
const _aimPoint = new THREE.Vector3();
const _flat = new THREE.Vector3();
const _faceQuat = new THREE.Quaternion();

/** Dauthdaert ballista — fires lethal green lances at the dragon; can be destroyed. */
export class Ballista extends Enemy {
  private state: FireState = 'reload';
  private timer: number = BALLISTA.reload;
  private readonly lance: THREE.Mesh;

  /** Smoothed velocity of the tracked target (for predictive lead). */
  private readonly estVel = new THREE.Vector3();
  private readonly prevTargetPos = new THREE.Vector3();
  private hasPrev = false;

  /** Locked firing solution (muzzle + velocity), captured when aiming begins. */
  private readonly lockedDir = new THREE.Vector3(0, 0, -1);

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: BALLISTA.maxHealth,
        colliderRadius: BALLISTA.colliderRadius,
        aggroRange: BALLISTA.aggroRange,
      },
      audio,
    );
    const mesh = buildBallista();
    this.mesh = mesh;
    this.position.y = GROUND.groundY;
    this.lance = (mesh.userData as BallistaParts).lance;
  }

  /** Anti-dragon: prefer the highest-flying player, ties broken by proximity. */
  protected override acquireTarget(ctx: EngineContext): void {
    const players = ctx.query('player');
    let best: typeof this.target = null;
    let bestY = -Infinity;
    let bestDist = Infinity;
    const r2 = this.aggroRange * this.aggroRange;
    for (const p of players) {
      if (!p.alive) continue;
      const d = p.position.distanceToSquared(this.position);
      if (d > r2) continue;
      if (p.position.y > bestY + 0.5 || (Math.abs(p.position.y - bestY) <= 0.5 && d < bestDist)) {
        bestY = p.position.y;
        bestDist = d;
        best = p;
      }
    }
    this.target = best;
  }

  protected think(dt: number, ctx: EngineContext): void {
    const target = this.target;
    if (!target) {
      this.hasPrev = false;
      this.lance.visible = true;
      return;
    }

    // Track the target's velocity (smoothed) for predictive leading.
    if (this.hasPrev && dt > 0) {
      const k = 1 - Math.exp(-BALLISTA.velLambda * dt);
      _instVel.copy(target.position).sub(this.prevTargetPos).multiplyScalar(1 / dt);
      this.estVel.lerp(_instVel, k);
    } else {
      this.hasPrev = true;
    }
    this.prevTargetPos.copy(target.position);

    // Face the target horizontally (cosmetic; the lance flies the locked vector).
    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _faceQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_faceQuat, 1 - Math.exp(-6 * dt)).normalize();
    }

    this.timer -= dt;
    switch (this.state) {
      case 'reload':
        this.lance.visible = true;
        if (this.timer <= 0) {
          this.lockSolution(target.position);
          this.state = 'aim';
          this.timer = BALLISTA.telegraph;
          this.audio?.play('ballista-charge');
        }
        break;
      case 'aim':
        // Telegraph: a green charge glow gathering at the lance head.
        this.muzzle(_muzzle);
        getVfx()?.burst(_muzzle, { count: 4, color: 0x6dff5a, speed: 2, life: 0.25, gravity: -2 });
        if (this.timer <= 0) {
          this.fire(ctx);
          this.state = 'reload';
          this.timer = BALLISTA.reload;
        }
        break;
    }
  }

  /** Compute + lock the predictive firing solution toward the target. */
  private lockSolution(targetPos: THREE.Vector3): void {
    this.muzzle(_muzzle);
    _toTarget.copy(targetPos).sub(_muzzle);
    const dist = _toTarget.length();
    const leadTime = Math.min(dist / BALLISTA.lanceSpeed, BALLISTA.maxLeadTime);
    _aimPoint.copy(targetPos).addScaledVector(this.estVel, leadTime);
    this.lockedDir.copy(_aimPoint).sub(_muzzle);
    if (this.lockedDir.lengthSq() < 1e-6) this.lockedDir.copy(FORWARD);
    this.lockedDir.normalize();
  }

  private fire(ctx: EngineContext): void {
    this.muzzle(_muzzle);
    ctx.spawnProjectile({
      position: _muzzle.clone(),
      velocity: this.lockedDir.clone().multiplyScalar(BALLISTA.lanceSpeed),
      team: this.team,
      damage: BALLISTA.lanceDamage,
      radius: BALLISTA.lanceRadius,
      ttl: BALLISTA.lanceTtl,
      color: 0x6dff5a,
    });
    getVfx()?.fireBurst(_muzzle, 10);
    getVfx()?.burst(_muzzle, { count: 16, color: 0x6dff5a, speed: 7, life: 0.4, gravity: 3 });
    this.audio?.play('ballista-fire');
    // Lance has left the rail — hide it until reloaded.
    this.lance.visible = false;
  }

  /** World-space muzzle position (above the base, biased forward). */
  private muzzle(out: THREE.Vector3): THREE.Vector3 {
    return out.set(this.position.x, this.position.y + BALLISTA.muzzleHeight, this.position.z);
  }
}
