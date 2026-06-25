import * as THREE from 'three';
import { Entity, Combatant, Team, isCombatant } from './Entity';
import type { EngineContext } from './EngineContext';

/**
 * Owns every updatable `Entity`. Adds/removes their meshes from the scene,
 * disposes GPU resources on removal, and provides team + spatial queries used by
 * combat, magic, and AI. Systems must NOT hold entity refs across frames beyond
 * this list.
 */
export class EntityManager {
  private readonly entities: Entity[] = [];

  constructor(private readonly scene: THREE.Scene) {}

  add<T extends Entity>(entity: T): T {
    this.entities.push(entity);
    if (entity.mesh) {
      entity.mesh.position.copy(entity.position);
      entity.mesh.quaternion.copy(entity.quaternion);
      this.scene.add(entity.mesh);
    }
    entity.prevPosition.copy(entity.position);
    entity.prevQuat.copy(entity.quaternion);
    return entity;
  }

  remove(entity: Entity): void {
    const index = this.entities.indexOf(entity);
    if (index === -1) return;
    this.entities.splice(index, 1);
    this.disposeEntity(entity);
  }

  forEach(callback: (entity: Entity) => void): void {
    for (const entity of this.entities) callback(entity);
  }

  get count(): number {
    return this.entities.length;
  }

  /** Snapshot current transforms as previous, BEFORE a fixed step (for interp). */
  capturePrevTransforms(): void {
    for (const entity of this.entities) {
      entity.prevPosition.copy(entity.position);
      entity.prevQuat.copy(entity.quaternion);
    }
  }

  /** Advance all living entities one fixed step, then sweep + dispose the dead. */
  update(dt: number, ctx: EngineContext): void {
    // Iterate a snapshot so an entity may spawn/remove others mid-update.
    for (const entity of this.entities.slice()) {
      if (entity.alive) entity.update(dt, ctx);
    }
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const entity = this.entities[i];
      if (!entity.alive) {
        this.entities.splice(i, 1);
        this.disposeEntity(entity);
      }
    }
  }

  /** Living combatants of a team. */
  query(team: Team): Combatant[] {
    const result: Combatant[] = [];
    for (const entity of this.entities) {
      if (entity.alive && isCombatant(entity) && entity.team === team) {
        result.push(entity);
      }
    }
    return result;
  }

  /** Living entities whose centre lies within `radius` of `center`. */
  queryRadius(center: THREE.Vector3, radius: number): Entity[] {
    const r2 = radius * radius;
    const result: Entity[] = [];
    for (const entity of this.entities) {
      if (entity.alive && entity.position.distanceToSquared(center) <= r2) {
        result.push(entity);
      }
    }
    return result;
  }

  /** Remove + dispose every entity (level unload). */
  clear(): void {
    for (const entity of this.entities) this.disposeEntity(entity);
    this.entities.length = 0;
  }

  private disposeEntity(entity: Entity): void {
    const mesh = entity.mesh;
    if (!mesh) return;
    this.scene.remove(mesh);
    mesh.traverse((object) => {
      const asMesh = object as THREE.Mesh;
      if (asMesh.isMesh) {
        asMesh.geometry?.dispose();
        const material = asMesh.material;
        if (Array.isArray(material)) {
          for (const m of material) m.dispose();
        } else {
          material?.dispose();
        }
      }
    });
  }
}
