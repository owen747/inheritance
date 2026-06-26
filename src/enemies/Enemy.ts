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
import type { Hitstoppable, Knockbackable } from '../combat/CombatSystem';
import { damageThroughWard, regenEnergy } from '../combat/Health';
import { getVfx } from '../art/vfx';
import { HitFlash } from '../art/hitFlash';
import { COMBAT } from '../config/gameConfig';

/** Steering intent resolved into a unit world-space direction. */
export type SteerMode = 'seek' | 'strafe' | 'retreat';

/** Shared enemy tuning not specific to one archetype. */
export const ENEMY = {
  /** Energy regenerated per second by casters (Murtagh). */
  energyRegenPerSec: 10,
} as const;

/** Seconds to scale a freshly-spawned enemy up from ~0 to full (kills the pop-in). */
const SPAWN_DUR = 0.25;
/** Seconds an enemy shrinks/fades on death before the EntityManager removes it. */
const DEATH_DUR = 0.35;

const UP = new THREE.Vector3(0, 1, 0);
const _to = new THREE.Vector3();
const _tan = new THREE.Vector3();

/** Players (Characters) expose `invulnerable`; enemies/other combatants may not. */
interface MaybeInvulnerable {
  invulnerable: boolean;
}

/** True when a combatant structurally reports itself invulnerable (benched hero). */
function isInvulnerable(c: Combatant): boolean {
  return (c as Partial<MaybeInvulnerable>).invulnerable === true;
}

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
export abstract class Enemy extends Entity implements Combatant, Hitstoppable, Knockbackable {
  readonly team: Team = 'enemy';
  maxHealth: number;
  health: number;
  maxEnergy: number;
  energy: number;
  wardHp = 0;

  /** Brief freeze applied by the CombatSystem on a clean player hit. */
  hitstop = 0;

  readonly aggroRange: number;

  /**
   * Root-mesh scale at full health, composed with the spawn/death lifecycle scale.
   * Subclasses that build a larger body (brute, Shruikan) raise this so spawn-in
   * scales toward the right size. The base only DRIVES scale while spawning/dying.
   */
  protected baseScale = 1;

  /** Lazily-built per-instance white hit-flash (clones this mesh's materials). */
  private hitFlash: HitFlash | null = null;
  /** Decaying knockback impulse (units/sec); integrated + bled off each step. */
  private readonly knockVel = new THREE.Vector3();

  /** Spawn scale-in progress (seconds elapsed; done at SPAWN_DUR). */
  private spawnElapsed = 0;
  /** Death-fade progress (seconds elapsed once `die()` fires). */
  private deathElapsed = 0;

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
    this.triggerHitFlash();
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
    this.integrateKnockback(dt);
  }

  /**
   * Per-render-frame cosmetic pass. The base decays the hit-flash and drives the
   * spawn-in / death-fade ROOT scale (the renderer preserves group scale, unlike
   * position/quaternion). Subclasses add mesh animation via {@link animateBody}.
   */
  override animate(dt: number): void {
    this.hitFlash?.update(dt);
    this.animateBody(dt);
    this.updateLifecycleScale(dt);
  }

  /** Subclass cosmetic mesh animation hook (walk bob / wing-beat / weapon swing). */
  protected animateBody(_dt: number): void {}

  /** Build (once) + pop the white hit-flash on this enemy's mesh. */
  protected triggerHitFlash(strength = 1): void {
    if (!this.hitFlash && this.mesh) this.hitFlash = HitFlash.fromMesh(this.mesh);
    this.hitFlash?.trigger(strength);
  }

  /**
   * Knockbackable: add a horizontal impulse (decaying shove) instead of teleporting.
   * `dirX/dirZ` is a unit XZ direction; `strength` is the strike's knockback value.
   */
  applyKnockback(dirX: number, dirZ: number, strength: number): void {
    const k = strength * COMBAT.knockImpulse;
    this.knockVel.x += dirX * k;
    this.knockVel.z += dirZ * k;
    const len2 = this.knockVel.x * this.knockVel.x + this.knockVel.z * this.knockVel.z;
    const max = COMBAT.knockMax;
    if (len2 > max * max) {
      const s = max / Math.sqrt(len2);
      this.knockVel.x *= s;
      this.knockVel.z *= s;
    }
  }

  /** Integrate + exponentially decay the knockback shove (allocation-free). */
  private integrateKnockback(dt: number): void {
    if (this.knockVel.x === 0 && this.knockVel.z === 0) return;
    this.position.x += this.knockVel.x * dt;
    this.position.z += this.knockVel.z * dt;
    const decay = Math.exp(-COMBAT.knockDecay * dt);
    this.knockVel.x *= decay;
    this.knockVel.z *= decay;
    if (this.knockVel.x * this.knockVel.x + this.knockVel.z * this.knockVel.z < 0.01) {
      this.knockVel.set(0, 0, 0);
    }
  }

  /**
   * Drive the spawn-in / death-fade root scale. While dying, shrink to 0 over
   * DEATH_DUR then clear `dying` so the EntityManager disposes us. While spawning,
   * ease 0 -> baseScale over SPAWN_DUR. When neither, leave scale to the subclass
   * (e.g. LaughingSoldier's staggered hunch) — the base does not touch it.
   */
  private updateLifecycleScale(dt: number): void {
    if (!this.mesh) return;
    if (this.dying) {
      this.deathElapsed += dt;
      const t = Math.min(1, this.deathElapsed / DEATH_DUR);
      const s = (1 - t) * this.baseScale;
      this.mesh.scale.setScalar(Math.max(0.0001, s));
      if (t >= 1) this.dying = false; // released -> EntityManager sweeps us next step
      return;
    }
    if (this.spawnElapsed < SPAWN_DUR) {
      this.spawnElapsed += dt;
      const t = Math.min(1, this.spawnElapsed / SPAWN_DUR);
      const eased = 1 - (1 - t) * (1 - t); // ease-out
      this.mesh.scale.setScalar(eased * this.baseScale);
    }
  }

  /** Subclass brain. `this.target` is already resolved (may be null). */
  protected abstract think(dt: number, ctx: EngineContext): void;

  /**
   * Resolve {@link target} to the nearest VULNERABLE (i.e. ACTIVE, piloted) player
   * within aggro range, so crowds attack the hero you're flying — not the benched
   * invulnerable mannequins. Falls back to the nearest living player if none is
   * vulnerable. Overridable (e.g. the Ballista prefers the highest-flying dragon).
   */
  protected acquireTarget(ctx: EngineContext): void {
    const players = ctx.query('player');
    const rangeSq = this.aggroRange * this.aggroRange;
    let nearestVulnerable: Combatant | null = null;
    let bestVulnerable = rangeSq;
    let nearestLiving: Combatant | null = null;
    let bestLiving = rangeSq;
    for (const p of players) {
      if (!p.alive) continue;
      const d = p.position.distanceToSquared(this.position);
      if (d <= bestLiving) {
        bestLiving = d;
        nearestLiving = p;
      }
      if (!isInvulnerable(p) && d <= bestVulnerable) {
        bestVulnerable = d;
        nearestVulnerable = p;
      }
    }
    this.target = nearestVulnerable ?? nearestLiving;
  }

  /**
   * Mark dead, emit a death burst, and run the subclass hook. Idempotent.
   *
   * Instead of vanishing instantly (a jarring blink, esp. across the siege waves),
   * the enemy enters a brief `dying` shrink/fade driven in {@link animate}: it is
   * non-colliding and excluded from queries at once (`alive=false`), but the
   * EntityManager RETAINS its mesh until the fade ends. The death VFX burst stays.
   */
  protected die(): void {
    if (!this.alive) return;
    this.alive = false;
    this.dying = true;
    this.deathElapsed = 0;
    this.collider = { radius: 0 }; // non-colliding while it fades out
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
