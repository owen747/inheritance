import * as THREE from 'three';
import { Combatant, Team } from './Entity';
import { EntityManager } from './EntityManager';
import type { AudioManager } from './AudioManager';
import { ProjectilePool, getProjectilePool, setProjectilePool } from '../combat/Projectile';
import { ELDUNARI_BONUS } from '../config/gameConfig';

/**
 * Progression save surface consumed by levels through `ctx.save`. The concrete
 * `SaveManager` (localStorage-backed) implements this; `createStubSave` provides
 * an in-memory implementation for tests / fallback. The max-energy bonus is
 * DERIVED from the collected set so it can never double-count on reload.
 */
export interface SaveLike {
  eldunariCollected: string[];
  unlockedSpells: string[];
  levelsCleared: string[];
  /** Derived bonus max-energy from the collected Eldunarí (never an imperative ++). */
  readonly maxEnergyBonus: number;
  /** Idempotent check used by `Level.load()` to skip already-collected pickups. */
  isCollected(id: string): boolean;
  /** Idempotently record a collected Eldunarí (and persist, for the real manager). */
  collect(id: string): void;
  /** Idempotently record a cleared level (and persist, for the real manager). */
  markLevelCleared(id: string): void;
}

/** In-memory `SaveLike` (no persistence). Used for tests / as a safe fallback. */
export function createStubSave(): SaveLike {
  const eldunariCollected: string[] = [];
  const unlockedSpells: string[] = [];
  const levelsCleared: string[] = [];
  return {
    eldunariCollected,
    unlockedSpells,
    levelsCleared,
    get maxEnergyBonus(): number {
      return eldunariCollected.length * ELDUNARI_BONUS;
    },
    isCollected: (id: string) => eldunariCollected.includes(id),
    collect(id: string): void {
      if (!eldunariCollected.includes(id)) eldunariCollected.push(id);
    },
    markLevelCleared(id: string): void {
      if (!levelsCleared.includes(id)) levelsCleared.push(id);
    },
  };
}

/** What `spawnProjectile` needs to launch a generic projectile. */
export interface ProjectileSpec {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  /** Owning team; the projectile damages the OPPOSITE team's combatants. */
  team: Team;
  damage: number;
  radius: number;
  /** Time-to-live in seconds. */
  ttl: number;
  color?: number;
}

/**
 * THE single world/spawn seam. One context is shared by spells, combat, enemies,
 * and `Level.load/update` — there is no separate `World` / `LevelContext`.
 */
export interface EngineContext {
  entities: EntityManager;
  scene: THREE.Scene;
  audio: AudioManager;
  save: SaveLike;
  spawnProjectile(spec: ProjectileSpec): void;
  /** Living combatants of a team. */
  query(team: Team): Combatant[];
}

/**
 * Concrete `EngineContext` wired to a single `EntityManager` + scene.
 *
 * `spawnProjectile` routes to the pooled `ProjectilePool` (one InstancedMesh for
 * all shots, with VFX on impact) — it replaces the foundation's throwaway
 * per-shot `SimpleProjectile`. If a level has not registered a pool, one is
 * lazily created + added here so the seam is always live.
 */
export class GameEngineContext implements EngineContext {
  constructor(
    public readonly entities: EntityManager,
    public readonly scene: THREE.Scene,
    public readonly audio: AudioManager,
    public readonly save: SaveLike,
  ) {}

  spawnProjectile(spec: ProjectileSpec): void {
    let pool = getProjectilePool();
    if (!pool) {
      pool = new ProjectilePool();
      this.entities.add(pool);
      setProjectilePool(pool);
    }
    pool.spawn(spec);
  }

  query(team: Team): Combatant[] {
    return this.entities.query(team);
  }
}
