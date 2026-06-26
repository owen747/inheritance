// enemies/Galbatorix.ts
// The dark king — Level 3 Phase-2 finale boss. He is MECHANIC-GATED, deliberately
// NOT a DPS race: `takeDamage` is a PURE no-op for health (he never loses HP and
// never calls `damageThroughWard`). His invulnerability is fed by enslaved
// Eldunarí, modelled as `wardTier` (set by the level to the anchor count and
// decremented as anchors are destroyed) — distinct from the inherited `wardHp`,
// which he never uses. The level ends him ONLY via the typed unmaking once the
// last ward falls; nothing here can ever kill him.
//
// While anchored he tracks the active hero and casts telegraphed purple magic
// bolts on a cadence, with an occasional radial AoE. When the level flags
// `exposed = true` (wardTier hit 0) he REELS — overwhelmed, his attacks STOP — so
// the typed-unmaking window is dramatic, not a dodge-retry chore.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import type { Combatant } from '../core/Entity';
import { Enemy } from './Enemy';
import { buildGalbatorix } from '../art/meshes';
import { getVfx } from '../art/vfx';
import { GALBATORIX, GROUND } from '../config/gameConfig';

/** Purple arcane glow for his magic + ward deflects. */
const MAGIC_COLOR = 0x9b59ff;
/** Hand/chest cast height above his feet. */
const CAST_HEIGHT = 1.9;

type CastState = 'idle' | 'telegraph';

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _flat = new THREE.Vector3();
const _muzzle = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _faceQuat = new THREE.Quaternion();

/**
 * Galbatorix — the unkillable dark king. The level owns his fate:
 * - sets {@link wardTier} on spawn (= anchor count) and decrements it per anchor,
 * - sets {@link exposed} to true when `wardTier` reaches 0 (he then reels),
 * - relocates him to {@link GROUND.groundY} on exposure and runs the typed cast.
 */
export class Galbatorix extends Enemy {
  /**
   * Ward tiers fed by the Eldunarí, set by the level to the anchor count and
   * decremented as anchors die. DISTINCT from the inherited `wardHp` (unused). At
   * 0 he is exposable but STILL takes no HP damage — the typed cast ends him.
   */
  wardTier = 0;

  /** Set true by the level when `wardTier` hits 0 — he reels and stops attacking. */
  exposed = false;

  private castState: CastState = 'idle';
  private castTimer: number = GALBATORIX.attackCadence;
  private attackCount = 0;
  private pendingRadial = false;

  /** Throttles the deflect VFX/SFX so a stream of hits can't spam it. */
  private deflectTimer = 0;

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: GALBATORIX.maxHealth,
        colliderRadius: GALBATORIX.colliderRadius,
        aggroRange: GALBATORIX.aggroRange,
      },
      audio,
    );
    this.mesh = buildGalbatorix();
    this.position.y = GROUND.groundY;
  }

  /**
   * PURE no-op for health — Galbatorix can NEVER be killed by damage. He never
   * writes `health` and never calls `damageThroughWard`; he is ended only by the
   * level's typed unmaking. Each incoming hit plays a throttled deflect: a strong
   * ward burst while tiers stand, a softer flicker once exposed.
   */
  override takeDamage(_amount: number, _src?: Combatant, _opts?: { finisher?: boolean }): void {
    this.maybeDeflect();
  }

  private maybeDeflect(): void {
    if (this.deflectTimer > 0) return;
    this.deflectTimer = GALBATORIX.deflectThrottle;
    _muzzle.set(this.position.x, this.position.y + CAST_HEIGHT, this.position.z);
    if (this.wardTier > 0) {
      // Warded: a bright deflect + the loud ward-break tone.
      getVfx()?.burst(_muzzle, { count: 14, color: MAGIC_COLOR, speed: 6, life: 0.4, gravity: 0 });
      this.audio?.play('ward-break');
    } else {
      // Exposed: a softer flicker — still no health loss, only the typed cast ends him.
      getVfx()?.burst(_muzzle, { count: 6, color: MAGIC_COLOR, speed: 3, life: 0.3, gravity: 0 });
    }
  }

  protected think(dt: number, ctx: EngineContext): void {
    if (this.deflectTimer > 0) this.deflectTimer = Math.max(0, this.deflectTimer - dt);

    // Exposed: overwhelmed by empathy — he REELS and does NOT attack. The level
    // owns the empathy-flood VFX + the typed-unmaking window from here.
    if (this.exposed) {
      this.castState = 'idle';
      return;
    }

    const target = this.target;
    if (!target) return;

    // Face the active hero horizontally (he stays enthroned — no wandering).
    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    const dist = _flat.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _faceQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_faceQuat, 1 - Math.exp(-GALBATORIX.turnRate * dt)).normalize();
    }

    // Cadenced, telegraphed casting.
    this.castTimer -= dt;
    if (this.castState === 'telegraph') {
      // Telegraph: gather a purple charge at his hands before the cast resolves.
      _muzzle.set(this.position.x, this.position.y + CAST_HEIGHT, this.position.z);
      getVfx()?.burst(_muzzle, { count: 3, color: MAGIC_COLOR, speed: 2, life: 0.2, gravity: -1 });
      if (this.castTimer <= 0) {
        if (this.pendingRadial) this.castRadial(ctx);
        else this.castBolt(ctx, target.position);
        this.castState = 'idle';
        this.castTimer = GALBATORIX.attackCadence;
      }
      return;
    }

    // Idle: when the cadence elapses and the hero is in range, begin a telegraph.
    if (this.castTimer <= 0 && dist <= GALBATORIX.aggroRange) {
      this.attackCount += 1;
      this.pendingRadial = this.attackCount % GALBATORIX.aoeEvery === 0;
      this.castState = 'telegraph';
      this.castTimer = GALBATORIX.telegraph;
    }
  }

  /** A single tracked magic bolt aimed at the active hero. */
  private castBolt(ctx: EngineContext, targetPos: THREE.Vector3): void {
    _muzzle.set(this.position.x, this.position.y + CAST_HEIGHT, this.position.z);
    _dir.copy(targetPos).sub(_muzzle);
    if (_dir.lengthSq() < 1e-6) _dir.set(0, 0, -1).applyQuaternion(this.quaternion);
    _dir.normalize();
    ctx.spawnProjectile({
      position: _muzzle.clone(),
      velocity: _dir.clone().multiplyScalar(GALBATORIX.projSpeed),
      team: this.team,
      damage: GALBATORIX.projDamage,
      radius: GALBATORIX.projRadius,
      ttl: GALBATORIX.projTtl,
      color: MAGIC_COLOR,
    });
    getVfx()?.burst(_muzzle, { count: 8, color: MAGIC_COLOR, speed: 5, life: 0.3, gravity: 0 });
    this.audio?.play('cast');
  }

  /** A radial AoE burst — a ring of bolts on the horizontal plane. */
  private castRadial(ctx: EngineContext): void {
    _muzzle.set(this.position.x, this.position.y + CAST_HEIGHT, this.position.z);
    for (let i = 0; i < GALBATORIX.aoeCount; i++) {
      const a = (i / GALBATORIX.aoeCount) * Math.PI * 2;
      _dir.set(Math.cos(a), 0, Math.sin(a));
      ctx.spawnProjectile({
        position: _muzzle.clone(),
        velocity: _dir.clone().multiplyScalar(GALBATORIX.aoeSpeed),
        team: this.team,
        damage: GALBATORIX.aoeDamage,
        radius: GALBATORIX.projRadius,
        ttl: GALBATORIX.projTtl,
        color: MAGIC_COLOR,
      });
    }
    getVfx()?.burst(_muzzle, { count: 20, color: MAGIC_COLOR, speed: 8, life: 0.45, gravity: 0 });
    this.audio?.play('cast');
  }
}
