// src/world/Siege.ts
// Layout helper that assembles the besieged Dras-Leona urban set into a scene:
// the city wall with a BREACHED gate, a street lined with buildings + banners, a
// few rooftop perches for archers, the Helgrind four-spire backdrop, and a
// Terrain (grimy ground + soot smoke columns).
//
// Pure art/scene layer — NO game logic. It only imports the art layer
// (Terrain / meshes / materials / palette); it never touches src/core or
// src/characters. The level consumes the exposed world positions / objects.
//
// Axis & scale conventions (match meshes.ts): FORWARD is -Z, ground at y=0,
// roughly 1 unit ≈ 1 metre (a hero is ~1.8 tall). The street runs along Z: the
// breached gate sits at +Z and the cathedral approach is far at -Z. Heroes push
// from the breach (+Z) inward toward the cathedral (-Z); Saphira flies above.
import * as THREE from 'three';
import { Terrain } from './Terrain';
import { GateParts, buildWall, buildGate, buildBuilding, buildBanner, buildHelgrind, buildPerch, setCastShadow } from '../art/meshes';
import { materialFor } from '../art/materials';
import { streetMaterial, wallMaterial } from '../art/textures';
import { toColor } from '../art/palette';

/** Tunables for the Dras-Leona siege set. */
export interface SiegeOptions {
  /** Z of the city wall / breached gate. Default 18. */
  wallZ?: number;
  /** Z of the cathedral approach (street far end). Default -44. */
  cathedralZ?: number;
  /** Half-width of the open street between the building rows. Default 6. */
  streetHalfWidth?: number;
}

/** Dispose a group's (unique/cached) geometries and detach it from its parent.
 * Cached flat materials are released globally on teardown, never here — mirrors
 * AerialDuelLevel.disposeGroup + Terrain.dispose. */
function disposeGroup(group: THREE.Object3D): void {
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) mesh.geometry?.dispose();
  });
  group.removeFromParent();
}

interface BuildingSpec {
  x: number;
  z: number;
  w: number;
  h: number;
  d: number;
  /** Place a rooftop archer perch on this building. */
  perch?: boolean;
  /** Hang an Empire banner on the street-facing wall. */
  banner?: boolean;
}

export class Siege {
  /** All set-piece scene objects (added to the scene as one group). */
  readonly group: THREE.Group;
  /** The grimy terrain (ground/water/smoke). Call {@link Terrain.update} each frame. */
  readonly terrain: Terrain;
  /** World positions a rooftop archer stands at (just above each perch deck). */
  readonly perchPositions: THREE.Vector3[] = [];
  /** The intact gate-door leaves — the breach cutscene removes these (see {@link openBreach}). */
  readonly gateDoors: THREE.Group;
  /** Suggested world position just inside the breach (Phase-2 ground push start). */
  readonly breachPosition: THREE.Vector3;
  /** Suggested world position of the cathedral approach (Phase-2 objective / final wave). */
  readonly cathedralPosition: THREE.Vector3;

  private readonly rubble: THREE.Group;
  private breached = false;

  // Unique (non-cached) geometries this Siege owns and must dispose itself.
  private readonly ownedGeometries: THREE.BufferGeometry[] = [];

  constructor(scene: THREE.Scene, opts: SiegeOptions = {}) {
    const wallZ = opts.wallZ ?? 18;
    const cathedralZ = opts.cathedralZ ?? -44;
    const streetHalf = opts.streetHalfWidth ?? 6;

    this.group = new THREE.Group();
    this.group.name = 'siege';

    // -- Terrain: grimy ground + soot smoke columns over the burning city. -----
    this.terrain = new Terrain(scene, {
      size: 600,
      smoke: [
        { x: -22, z: -10, height: 26, radius: 2.2 },
        { x: 24, z: -26, height: 30, radius: 2.6 },
        { x: 0, z: cathedralZ - 8, height: 34, radius: 3.0 },
        { x: -30, z: 20, height: 22, radius: 1.8 },
      ],
    });
    // Dusk-tinted, sooty sky to sell the siege (art-only scene tweak). Fog is
    // tinted to the gradient-sky horizon (siege preset skyHorizon 0x9c6238) so the
    // burning-city horizon blends seamlessly into the dusk-orange sky dome.
    scene.background = toColor('skyDusk');
    if (scene.fog) scene.fog.color.copy(toColor(0x9c6238));

    // -- Cobbled street running down the centre toward the cathedral. ----------
    // DEDICATED procedural cobble material (textured MeshStandardMaterial) — not
    // the shared cached flat one.
    const streetLen = wallZ - cathedralZ + 16;
    const streetGeo = new THREE.PlaneGeometry(streetHalf * 2 + 4, streetLen, 1, 1);
    this.ownedGeometries.push(streetGeo);
    const street = new THREE.Mesh(streetGeo, streetMaterial());
    street.rotation.x = -Math.PI / 2;
    street.position.set(0, 0.02, (wallZ + cathedralZ) / 2 - 8);
    street.receiveShadow = true;
    street.name = 'street';
    this.group.add(street);

    // -- City wall with the breached gate at the street mouth. -----------------
    // Doors begin intact (visible); the Phase-1→Phase-2 breach cutscene calls
    // openBreach() to remove them and reveal the rubble.
    const gate = buildGate(false);
    gate.position.set(0, 0, wallZ);
    this.group.add(gate);
    const gateParts = gate.userData as GateParts;
    this.gateDoors = gateParts.doors;
    this.rubble = gateParts.rubble;

    // Wall segments fanning out to either side of the gate.
    const wallLen = 14;
    for (let i = 1; i <= 3; i++) {
      for (const side of [-1, 1] as const) {
        const w = buildWall(wallLen, 6);
        w.position.set(side * (4 + (i - 0.5) * wallLen), 0, wallZ);
        this.group.add(w);
      }
    }

    // -- Buildings lining the street (with perches + banners). -----------------
    const rowX = streetHalf + 3.5;
    const buildings: BuildingSpec[] = [
      { x: -rowX, z: wallZ - 8, w: 6, h: 6.5, d: 6, banner: true },
      { x: rowX, z: wallZ - 12, w: 6, h: 7.5, d: 6 },
      { x: -rowX, z: wallZ - 24, w: 6, h: 8, d: 6, perch: true },
      { x: rowX, z: wallZ - 22, w: 6, h: 7, d: 6, perch: true, banner: true },
      { x: -rowX, z: wallZ - 40, w: 6, h: 7.5, d: 6 },
      { x: rowX, z: wallZ - 38, w: 6, h: 6.5, d: 6, banner: true },
      { x: -rowX, z: cathedralZ + 6, w: 7, h: 9, d: 7 },
      { x: rowX, z: cathedralZ + 6, w: 7, h: 9, d: 7 },
    ];
    for (const b of buildings) this.addBuilding(b);

    // Cathedral approach marker block (a tall stone facade closing the street).
    const cathedral = buildBuilding(16, 16, 8);
    cathedral.position.set(0, 0, cathedralZ - 4);
    this.group.add(cathedral);

    // -- Helgrind: four black spires looming far behind the cathedral. ---------
    const helgrind = buildHelgrind();
    helgrind.position.set(-26, 0, cathedralZ - 110);
    helgrind.scale.setScalar(1.6);
    setCastShadow(helgrind, false); // far backdrop — keep it out of the shadow frustum
    this.group.add(helgrind);

    this.breachPosition = new THREE.Vector3(0, 0, wallZ - 6);
    this.cathedralPosition = new THREE.Vector3(0, 0, cathedralZ + 4);

    // Texture the big stone surfaces: swap every mesh that uses the shared cached
    // 'wallStone' flat material (walls, towers, gate, building bodies, merlons) to
    // the DEDICATED procedural stone material. This re-points mesh.material only —
    // the cached flat material is never mutated, so non-siege wallStone stays flat.
    // Helgrind (stoneDark/shruikan) and wood/iron/banner parts are untouched.
    const wallStoneMat = materialFor('wallStone');
    const stoneMat = wallMaterial();
    this.group.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh && mesh.material === wallStoneMat) mesh.material = stoneMat;
    });

    scene.add(this.group);
  }

  private addBuilding(spec: BuildingSpec): void {
    const b = buildBuilding(spec.w, spec.h, spec.d);
    b.position.set(spec.x, 0, spec.z);
    this.group.add(b);

    // Street-facing banner near the top of the wall facing the street centre.
    if (spec.banner) {
      const banner = buildBanner('bannerRed');
      const streetSide = spec.x < 0 ? 1 : -1; // +X faces street for left row, -X for right row
      banner.position.set(spec.x + streetSide * (spec.w / 2 + 0.05), spec.h - 0.4, spec.z);
      banner.rotation.y = streetSide > 0 ? Math.PI / 2 : -Math.PI / 2;
      this.group.add(banner);
    }

    // Rooftop perch pushed to the street eave so it clears the central roof cone.
    if (spec.perch) {
      const perch = buildPerch();
      const streetSide = spec.x < 0 ? 1 : -1;
      const px = spec.x + streetSide * (spec.w / 2 - 1.0);
      const py = spec.h; // perch deck sits on the box top
      const pz = spec.z;
      perch.position.set(px, py, pz);
      this.group.add(perch);
      // Archer stands just above the deck slab (deck top ≈ py + 0.15).
      this.perchPositions.push(new THREE.Vector3(px, py + 0.3, pz));
    }
  }

  /**
   * Open the breach: remove the intact gate doors and reveal the rubble pile.
   * The level's Phase-1→Phase-2 cutscene calls this once the wall is cleared.
   * Idempotent.
   */
  openBreach(): void {
    if (this.breached) return;
    this.breached = true;
    disposeGroup(this.gateDoors);
    this.rubble.visible = true;
  }

  /**
   * Dispose every geometry this Siege owns (set-piece meshes + the street plane)
   * and the Terrain, then detach from the scene. Shared flat materials are
   * released globally via art/materials.disposeMaterials() on full teardown.
   */
  dispose(): void {
    this.terrain.dispose();
    disposeGroup(this.group); // also disposes gateDoors if openBreach() was never called
    for (const g of this.ownedGeometries) g.dispose();
    this.ownedGeometries.length = 0;
    this.perchPositions.length = 0;
  }
}
