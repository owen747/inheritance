// enemies/Enemy.ts
// Base enemy AI. Implements the SHARED `Combatant` contract (team 'enemy') so the
// player's CombatSystem, projectiles, and spells damage enemies generically, and
// `ctx.query('enemy')` discovers them. Provides the common machinery every enemy
// reuses: vitals + ward-absorbed damage + death, hitstop (so player melee freezes
// them), shout bookkeeping, nearest-target acquisition, and allocation-free
// steering primitives (seek / strafe / retreat). Subclasses implement `think()`.
//
// Movement integration differs per archetype (quaternion flight vs. ground yaw vs.
// a static turret), so `think()` is the single subclass hook; the base only hands
// it a resolved `target` and the shared steering helpers.
import * as THREE from 'three';
import { Entity, Combatant, Team } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import type { Hitstoppable } from '../combat/CombatSystem';
import { damageThroughWard, regenEnergy } from '../combat/Health';
import { getVfx } from '../art/vfx';

/** Steering intent resolved into a unit world-space direction. */
export type SteerMode = 'seek' | 'strafe' | 'retreat';

/** Shared enemy tuning not specific to one archetype. */
export const ENEMY = {
  /** Energy regenerated per second by casters (Murtagh). */
  energyRegenPerSec: 10,
} as const;

const UP = new THREE.Vector3(0, 1, 0);
const _to = new THREE.Vector3();
const _tan = new THREE.Vector3();

export interface EnemyOptions {
  maxHealth: number;
  /** 0 for non-casters (most enemies); >0 enables energy + per-step regen. */
  maxEnergy?: number;
  /** Bounding-sphere radius for primitive collision / hit tests. */
  colliderRadius: number;
  /** Pursue only players within this distance (world units). */
  aggroRange: number;
}

/**
 * Base for every enemy. An `Entity` (ticked by the EntityManager) that is also a
 * `Combatant` and `Hitstoppable`. Death is decided HERE (health <= 0 -> `die()`),
 * unlike player Characters whose death is interpreted by the level.
 */
export abstract class Enemy extends Entity implements Combatant, Hitstoppable {
  readonly team: Team = 'enemy';
  maxHealth: number;
  health: number;
  maxEnergy: number;
  energy: number;
  wardHp = 0;

  /** Brief freeze applied by the CombatSystem on a clean player hit. */
  hitstop = 0;

  readonly aggroRange: number;

  /** Last shouted word + age, mirrored to the HUD floating-text sink. */
  lastShoutWord: string | null = null;
  lastShoutAge = Infinity;
  onShout: ((word: string) => void) | null = null;

  protected readonly audio: AudioManager | null;
  /** Nearest living player in aggro range, refreshed each step (null = idle). */
  protected target: Combatant | null = null;

  constructor(options: EnemyOptions, audio: AudioManager | null = null) {
    super();
    this.isCombatant = true;
    this.audio = audio;
    this.maxHealth = options.maxHealth;
    this.health = options.maxHealth;
    this.maxEnergy = options.maxEnergy ?? 0;
    this.energy = this.maxEnergy;
    this.aggroRange = options.aggroRange;
    this.collider = { radius: options.colliderRadius };
  }

  shout(word: string): void {
    this.lastShoutWord = word;
    this.lastShoutAge = 0;
    this.audio?.play('shout');
    this.onShout?.(word);
  }

  takeDamage(amount: number, _src?: Combatant): void {
    if (!this.alive) return;
    damageThroughWard(this, amount);
    if (this.health <= 0) this.die();
  }

  override update(dt: number, ctx: EngineContext): void {
    this.lastShoutAge += dt;

    if (this.hitstop > 0) {
      // Frozen on a clean hit: bleed the timer, take no action this step.
      this.hitstop = Math.max(0, this.hitstop - dt);
      return;
    }

    this.acquireTarget(ctx);
    if (this.maxEnergy > 0) regenEnergy(this, dt, ENEMY.energyRegenPerSec);
    this.think(dt, ctx);
  }

  /** Subclass brain. `this.target` is already resolved (may be null). */
  protected abstract think(dt: number, ctx: EngineContext): void;

  /**
   * Resolve {@link target} to the nearest living player within aggro range.
   * Overridable (e.g. the Ballista prefers the highest-flying dragon).
   */
  protected acquireTarget(ctx: EngineContext): void {
    const players = ctx.query('player');
    let nearest: Combatant | null = null;
    let best = this.aggroRange * this.aggroRange;
    for (const p of players) {
      if (!p.alive) continue;
      const d = p.position.distanceToSquared(this.position);
      if (d <= best) {
        best = d;
        nearest = p;
      }
    }
    this.target = nearest;
  }

  /** Mark dead, emit a death burst, and run the subclass hook. Idempotent. */
  protected die(): void {
    if (!this.alive) return;
    this.alive = false;
    getVfx()?.burst(this.position, { count: 40, color: 0xff7a1a, speed: 9, life: 0.7, gravity: 4 });
    this.audio?.play('death');
    this.onDeath();
  }

  protected onDeath(): void {}

  /**
   * Write a UNIT steering direction into `out`: toward (`seek`), around
   * (`strafe`, horizontal tangent) or away from (`retreat`) `targetPos`.
   * Allocation-free; returns `out` (zero if degenerate).
   */
  protected steer(
    out: THREE.Vector3,
    mode: SteerMode,
    targetPos: THREE.Vector3,
    strafeSign: 1 | -1 = 1,
  ): THREE.Vector3 {
    _to.copy(targetPos).sub(this.position);
    if (_to.lengthSq() < 1e-8) return out.set(0, 0, 0);
    _to.normalize();
    if (mode === 'seek') return out.copy(_to);
    if (mode === 'retreat') return out.copy(_to).multiplyScalar(-1);
    // Strafe: tangent in the horizontal plane so circling stays level.
    _tan.copy(_to).cross(UP);
    if (_tan.lengthSq() < 1e-8) return out.set(0, 0, 0);
    return out.copy(_tan.normalize()).multiplyScalar(strafeSign);
  }

  /** Distance from this enemy to a world point. */
  protected distanceTo(p: THREE.Vector3): number {
    return this.position.distanceTo(p);
  }
}
