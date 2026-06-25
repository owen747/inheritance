import * as THREE from 'three';
import type { EngineContext } from './EngineContext';

export type Team = 'player' | 'enemy';

export interface Collider {
  /** Bounding sphere radius for primitive collision. */
  radius: number;
}

let nextEntityId = 1;

/**
 * Base updatable world object. Carries a transform, an optional visual mesh, a
 * primitive collider, and PREVIOUS-step transform snapshots used for render
 * interpolation (the renderer lerps `prev*` -> current by the leftover alpha).
 */
export abstract class Entity {
  readonly id: number = nextEntityId++;

  readonly position = new THREE.Vector3();
  readonly quaternion = new THREE.Quaternion();

  /** Transform at the start of the current fixed step (for render interpolation). */
  readonly prevPosition = new THREE.Vector3();
  readonly prevQuat = new THREE.Quaternion();

  mesh: THREE.Object3D | null = null;
  collider: Collider = { radius: 0.5 };

  alive = true;

  /** Set true by combatants so combat/spell systems can filter them cheaply. */
  isCombatant = false;

  abstract update(dt: number, ctx: EngineContext): void;

  /**
   * Snap the visual mesh and the prev-transform onto the current transform.
   * Call after positioning an entity at spawn so the first interpolated frame
   * does not lerp from the origin.
   */
  syncTransformImmediate(): void {
    if (this.mesh) {
      this.mesh.position.copy(this.position);
      this.mesh.quaternion.copy(this.quaternion);
    }
    this.prevPosition.copy(this.position);
    this.prevQuat.copy(this.quaternion);
  }
}

/**
 * A damageable, energy-bearing entity. The SINGLE shared combat contract:
 * characters AND enemies implement it, so combat and magic operate generically.
 *
 * NOTE: defined here (the engine foundation) rather than `combat/Health.ts` so
 * the `EngineContext` / `EntityManager` seams can reference it now. Later combat
 * work should import `Combatant` from this module.
 */
export interface Combatant extends Entity {
  team: Team;
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  wardHp: number;
  /** Floating Ancient-Language text + (guarded) synth SFX. */
  shout(word: string): void;
  takeDamage(amount: number, src?: Combatant): void;
}

/** Runtime narrowing from `Entity` to `Combatant`. */
export function isCombatant(entity: Entity): entity is Combatant {
  return entity.isCombatant === true;
}
