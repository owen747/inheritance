// src/world/Citadel.ts
// Layout helper for the Level-3 finale at Urû'baen. It assembles BOTH scenes the
// two-phase level toggles between, ONCE, at load:
//   (a) skyGroup    — the Phase-1 aerial approach: Galbatorix's black citadel
//                     mass, the iconic overhanging rock shelf, Helgrind-style
//                     spires, and a dark/dusk sky + fog. Saphira duels Shruikan
//                     in front of it.
//   (b) throneGroup — the Phase-2 throne-room interior: a flat dark floor at
//                     GROUND.groundY, dark pillars + perimeter walls, and the
//                     throne. Built but hidden (`.visible = false`) initially.
//
// Pure art/scene layer — NO game logic. It only imports three + the art layer
// (Terrain / meshes / materials / palette); it never touches src/core or
// src/characters. The level consumes the exposed world positions / objects and
// calls setPhase() at the Phase-1→Phase-2 transition.
//
// Axis & scale conventions (match meshes.ts): FORWARD is -Z, ~1 unit ≈ 1 metre.
// The throne sits at the room's far -Z end, rotated to FACE +Z (into the room),
// so an enthroned Galbatorix looks toward heroes entering from +Z.
import * as THREE from 'three';
import { Terrain } from './Terrain';
import { buildHelgrind, buildPillar, buildThrone, isCachedGeometry } from '../art/meshes';
import { materialFor } from '../art/materials';
import { toColor } from '../art/palette';
import { GROUND } from '../config/gameConfig';

/** Tunables for the Urû'baen citadel set. */
export interface CitadelOptions {
  /** Z of the throne at the far end of the room. Default -20. */
  throneZ?: number;
  /** Half-width (X) of the throne-room floor. Default 22. */
  roomHalfWidth?: number;
}

/**
 * Dispose a group's OWN (non-cached) geometries and detach it from its parent.
 * Cached builder geometries (pillars, throne, Helgrind) are shared and released
 * globally via meshes.disposeGeometryCache() — never here; cached flat materials
 * likewise via materials.disposeMaterials(). Mirrors Siege.dispose's traversal
 * but skips cached resources (consistent with EntityManager teardown).
 */
function disposeGroup(group: THREE.Object3D): void {
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh && mesh.geometry && !isCachedGeometry(mesh.geometry)) mesh.geometry.dispose();
  });
  group.removeFromParent();
}

export class Citadel {
  /** Phase-1 aerial approach backdrop (black citadel + overhang + spires). */
  readonly skyGroup: THREE.Group;
  /** Phase-2 throne-room interior (floor + pillars + walls + throne). Hidden until setPhase('throne'). */
  readonly throneGroup: THREE.Group;
  /** Shared terrain (dark ground far below in Phase 1, beneath the floor in Phase 2). Call {@link Terrain.update}. */
  readonly terrain: Terrain;
  /** World centre of the throne (base at GROUND.groundY); the level enthrones Galbatorix here. */
  readonly thronePosition: THREE.Vector3;
  /**
   * Four world positions for the Eldunarí ward-anchors around the throne. Two are
   * RAISED (y≈3.2 and y≈3.8) to FAVOUR Saphira; two sit near the ground. No anchor
   * REQUIRES a specific hero — the raised ones are merely easier to reach airborne,
   * yet still fall inside Eragon's thrysta-vindr shockwave reach from beneath.
   */
  readonly anchorPoints: THREE.Vector3[];

  constructor(scene: THREE.Scene, opts: CitadelOptions = {}) {
    const throneZ = opts.throneZ ?? -20;
    const roomHalf = opts.roomHalfWidth ?? 22;
    const groundY = GROUND.groundY;

    // -- Terrain: a dark plain far below the aerial duel / beneath the floor. ---
    // Terrain's default applySky paints a daytime sky; override it immediately to
    // a dark dusk so the black citadel + throne room read menacing (art-only).
    this.terrain = new Terrain(scene, { size: 800, groundY });
    scene.background = toColor(0x161320); // dark dusk over Urû'baen
    if (scene.fog) {
      scene.fog.color.copy(toColor(0x161320));
      if (scene.fog instanceof THREE.Fog) {
        scene.fog.near = 40;
        scene.fog.far = 360;
      }
    }

    this.skyGroup = this.buildSky();
    this.throneGroup = this.buildThroneRoom(throneZ, roomHalf, groundY);
    this.throneGroup.visible = false; // Phase-2 set starts hidden

    this.thronePosition = new THREE.Vector3(0, groundY, throneZ);
    this.anchorPoints = [
      new THREE.Vector3(9, groundY + 1.6, throneZ + 12), // ground, right
      new THREE.Vector3(-9, groundY + 1.6, throneZ + 12), // ground, left
      // RAISED (favours Saphira's aerial fire) but kept inside Eragon's
      // thrysta-vindr shockwave reach (3D radius 7 from a caster at y≈0): an
      // anchor at y≈3.2 is 3.2 units up, well within 7, so a GROUND hero
      // standing beneath it can also strip it. No anchor REQUIRES Saphira.
      new THREE.Vector3(5, groundY + 3.2, throneZ + 6), // raised (favours Saphira)
      new THREE.Vector3(-6, groundY + 3.8, throneZ + 9), // raised (favours Saphira)
    ];

    scene.add(this.skyGroup, this.throneGroup);
  }

  /** Phase-1: the black citadel mass, overhanging rock shelf, and Helgrind spires. */
  private buildSky(): THREE.Group {
    const g = new THREE.Group();
    g.name = 'citadelSky';

    // The citadel mass — a cluster of huge black blocks rising far at -Z, the
    // duel staged in front of it. Owned BoxGeometry (non-cached → disposed here).
    const mass: ReadonlyArray<readonly [number, number, number, number, number, number]> = [
      // [x, z, w, h, d, y-base]
      [0, -130, 70, 60, 40, 0],
      [-26, -120, 26, 90, 26, 0],
      [22, -124, 30, 110, 28, 0],
      [0, -110, 20, 130, 20, 0],
    ];
    for (const [x, z, w, h, d, by] of mass) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), materialFor('citadelBlack'));
      mesh.position.set(x, by + h / 2, z);
      mesh.castShadow = true;
      g.add(mesh);
    }

    // The iconic overhanging rock shelf jutting over the citadel from above.
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(160, 14, 90), materialFor('throneDark'));
    shelf.position.set(-6, 96, -96);
    shelf.rotation.set(0.12, 0.18, -0.06);
    shelf.castShadow = true;
    g.add(shelf);

    // Helgrind-style black spires looming far behind the citadel.
    const spires = buildHelgrind();
    spires.position.set(-30, 0, -210);
    spires.scale.setScalar(2.2);
    g.add(spires);

    const spires2 = buildHelgrind();
    spires2.position.set(60, 0, -180);
    spires2.scale.setScalar(1.6);
    spires2.rotation.y = 0.6;
    g.add(spires2);

    return g;
  }

  /** Phase-2: dark floor at groundY, perimeter walls, two pillar rows, the throne. */
  private buildThroneRoom(throneZ: number, roomHalf: number, groundY: number): THREE.Group {
    const g = new THREE.Group();
    g.name = 'citadelThroneRoom';

    const frontZ = 16; // entrance / hero-approach end (+Z)
    const backZ = throneZ - 6; // behind the throne (-Z)
    const roomLen = frontZ - backZ;
    const midZ = (frontZ + backZ) / 2;
    const wallH = 18;

    // Dark stone floor slab just above terrain ground (owned PlaneGeometry).
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomHalf * 2, roomLen), materialFor('throneDark', { roughness: 1 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, groundY + 0.02, midZ);
    floor.receiveShadow = true;
    floor.name = 'throneFloor';
    g.add(floor);

    // Perimeter walls (owned BoxGeometry → disposed here). Back wall + two sides.
    const back = new THREE.Mesh(new THREE.BoxGeometry(roomHalf * 2 + 2, wallH, 1.5), materialFor('citadelBlack'));
    back.position.set(0, groundY + wallH / 2, backZ - 0.75);
    back.castShadow = true;
    g.add(back);

    for (const side of [-1, 1] as const) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(1.5, wallH, roomLen), materialFor('citadelBlack'));
      wall.position.set(side * (roomHalf + 0.75), groundY + wallH / 2, midZ);
      wall.castShadow = true;
      g.add(wall);
    }

    // Two rows of dark pillars flanking the central approach.
    const pillarX = roomHalf - 4;
    for (let i = 0; i < 4; i++) {
      const pz = frontZ - 5 - i * ((roomLen - 8) / 3);
      for (const side of [-1, 1] as const) {
        const pillar = buildPillar(wallH);
        pillar.position.set(side * pillarX, groundY, pz);
        g.add(pillar);
      }
    }

    // The throne at the far -Z end, rotated to FACE +Z (toward entering heroes).
    const throne = buildThrone();
    throne.position.set(0, groundY, throneZ);
    throne.rotation.y = Math.PI;
    g.add(throne);

    return g;
  }

  /** Toggle which set is visible at the Phase-1 (sky) → Phase-2 (throne) transition. */
  setPhase(phase: 'sky' | 'throne'): void {
    const throne = phase === 'throne';
    this.skyGroup.visible = !throne;
    this.throneGroup.visible = throne;
  }

  /**
   * Dispose every OWNED (non-cached) geometry in both sets + the terrain, then
   * detach from the scene. Shared cached geometries/materials are released
   * globally on full art teardown (disposeGeometryCache / disposeMaterials).
   */
  dispose(): void {
    this.terrain.dispose();
    disposeGroup(this.skyGroup);
    disposeGroup(this.throneGroup);
    this.anchorPoints.length = 0;
  }
}
