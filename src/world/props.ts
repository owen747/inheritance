// src/world/props.ts
// Placement helpers / factories for static props (rocks, city silhouette) and the
// Eldunarí pickup object. Pure art/geometry — no game logic, no engine imports.
// The pickup type is defined locally (NOT imported from src/core) so this stays
// in the art layer; the level/save systems consume `id` + `position` for tracking.
import * as THREE from 'three';
import { ColorKey } from '../art/palette';
import { buildRock, buildCitySilhouette, buildEldunari } from '../art/meshes';

/** A rock to scatter into the world. */
export interface RockPlacement {
  position: THREE.Vector3 | [number, number, number];
  /** Overall scale. Default 1. */
  scale?: number;
  /** Y rotation in radians. Default random. */
  rotationY?: number;
}

function asVec3(p: THREE.Vector3 | [number, number, number]): THREE.Vector3 {
  return Array.isArray(p) ? new THREE.Vector3(p[0], p[1], p[2]) : p.clone();
}

/**
 * Build a group of scattered boulders and add it to `parent`. Returns the group
 * (and the individual meshes via `group.children`) for later disposal.
 */
export function scatterRocks(parent: THREE.Object3D, placements: RockPlacement[]): THREE.Group {
  const group = new THREE.Group();
  group.name = 'rocks';
  for (const p of placements) {
    const rock = buildRock(p.scale ?? 1);
    const pos = asVec3(p.position);
    rock.position.copy(pos);
    rock.rotation.y = p.rotationY ?? Math.random() * Math.PI * 2;
    group.add(rock);
  }
  parent.add(group);
  return group;
}

/** Options for placing the distant burning-city backdrop. */
export interface CitySilhouettePlacement {
  position: THREE.Vector3 | [number, number, number];
  /** Y rotation in radians (face the skyline toward the play area). Default 0. */
  rotationY?: number;
  /** Uniform scale. Default 1. */
  scale?: number;
  /** Skyline horizontal span passed to the builder. Default 160. */
  span?: number;
  /** Number of building blocks. Default 22. */
  count?: number;
}

/** Build the city silhouette backdrop and add it to `parent`. Returns the group. */
export function placeCitySilhouette(parent: THREE.Object3D, opts: CitySilhouettePlacement): THREE.Group {
  const city = buildCitySilhouette(opts.span ?? 160, opts.count ?? 22);
  city.position.copy(asVec3(opts.position));
  city.rotation.y = opts.rotationY ?? 0;
  if (opts.scale !== undefined) city.scale.setScalar(opts.scale);
  parent.add(city);
  return city;
}

/**
 * A collectible Eldunarí soul-gem.
 *
 * `id` is the stable save key (the level skips spawning a gem whose id is already
 * in `save.eldunariCollected`). `object` is the renderable group; `position` is a
 * convenience copy of its world spawn position for proximity checks. `collected`
 * is a runtime flag the gameplay layer flips on pickup — art does not read it.
 */
export interface EldunariPickup {
  readonly id: string;
  readonly object: THREE.Group;
  readonly position: THREE.Vector3;
  collected: boolean;
  /** Per-frame visual idle (spin + bob). Optional for the gameplay layer to call. */
  update(dt: number): void;
}

/**
 * Create an Eldunarí pickup at a world position. Adds nothing to a scene itself —
 * the caller adds `pickup.object` so placement/cleanup stay with the level.
 */
export function createEldunari(
  id: string,
  position: THREE.Vector3 | [number, number, number],
  colorKey: ColorKey = 'eldunariGlow',
): EldunariPickup {
  const object = buildEldunari(colorKey);
  const pos = asVec3(position);
  object.position.copy(pos);
  // Hover slightly above the ground.
  const baseY = pos.y;
  let t = 0;

  return {
    id,
    object,
    position: pos.clone(),
    collected: false,
    update(dt: number): void {
      t += dt;
      object.rotation.y += dt * 1.2;
      object.position.y = baseY + Math.sin(t * 2) * 0.2;
    },
  };
}
