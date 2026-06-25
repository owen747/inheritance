// src/world/Terrain.ts
// Procedural environment: ground plane, water plane, sky color + fog helper, and
// animated smoke columns rendered as THREE.Points (one geometry, not one Mesh per
// particle). Pure art/geometry — no game logic, no engine imports (no src/core).
import * as THREE from 'three';
import { PALETTE } from '../art/palette';
import { materialFor } from '../art/materials';

/** Where to plant a rising smoke column (world XZ). */
export interface SmokeColumnSpec {
  x: number;
  z: number;
  /** Particles in this column. Default 60. */
  count?: number;
  /** Column height in world units. Default 22. */
  height?: number;
  /** Base radius particles spawn within. Default 1.5. */
  radius?: number;
}

export interface TerrainOptions {
  /** Side length of the (square) ground/water planes. Default 600. */
  size?: number;
  /** Ground plane Y. Default 0. groundHeightAt() returns this constant. */
  groundY?: number;
  /** Water plane Y (slightly below ground for a lake basin). Default -0.4. */
  waterY?: number;
  /** Smoke columns to spawn (e.g. over the burning city). Default none. */
  smoke?: SmokeColumnSpec[];
  /** Also apply sky background + fog to the scene. Default true. */
  applySky?: boolean;
}

/** Set scene background color + linear fog for the low-poly horizon haze. */
export function setupSky(scene: THREE.Scene, near = 60, far = 480): void {
  scene.background = new THREE.Color(PALETTE.sky);
  scene.fog = new THREE.Fog(PALETTE.fog, near, far);
}

interface SmokeColumn {
  points: THREE.Points;
  positions: THREE.BufferAttribute;
  /** Per-particle rise speed. */
  rise: Float32Array;
  baseX: number;
  baseZ: number;
  height: number;
  radius: number;
  count: number;
}

/**
 * Procedural terrain. Construct with a scene to add ground/water/smoke to it;
 * call {@link update} each frame for smoke drift; {@link dispose} on teardown.
 */
export class Terrain {
  readonly group: THREE.Group;
  private readonly groundY: number;
  private readonly columns: SmokeColumn[] = [];
  // Module-scope-style scratch reused across frames (no per-frame allocation).
  private readonly windX = 1.6;
  private readonly windZ = 0.4;

  constructor(scene: THREE.Scene, opts: TerrainOptions = {}) {
    const size = opts.size ?? 600;
    this.groundY = opts.groundY ?? 0;
    const waterY = opts.waterY ?? -0.4;

    this.group = new THREE.Group();
    this.group.name = 'terrain';

    // Ground — a large faceted plane lying in the XZ plane.
    const groundGeo = new THREE.PlaneGeometry(size, size, 1, 1);
    const ground = new THREE.Mesh(groundGeo, materialFor('ground', { roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = this.groundY;
    ground.receiveShadow = true;
    ground.name = 'ground';
    this.group.add(ground);

    // Water — a translucent plane just below ground level (a lake/sea).
    const waterGeo = new THREE.PlaneGeometry(size, size, 1, 1);
    const water = new THREE.Mesh(
      waterGeo,
      materialFor('water', { transparent: true, opacity: 0.72, roughness: 0.3, metalness: 0.1 }),
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = waterY;
    water.name = 'water';
    this.group.add(water);

    // Smoke columns.
    if (opts.smoke) {
      for (const spec of opts.smoke) this.addSmokeColumn(spec);
    }

    if (opts.applySky ?? true) setupSky(scene);

    scene.add(this.group);
  }

  private addSmokeColumn(spec: SmokeColumnSpec): void {
    const count = spec.count ?? 60;
    const height = spec.height ?? 22;
    const radius = spec.radius ?? 1.5;

    const arr = new Float32Array(count * 3);
    const rise = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const y = Math.random() * height;
      const ang = Math.random() * Math.PI * 2;
      const rad = Math.random() * radius * (0.4 + y / height); // widen as it rises
      arr[i * 3 + 0] = spec.x + Math.cos(ang) * rad;
      arr[i * 3 + 1] = this.groundY + y;
      arr[i * 3 + 2] = spec.z + Math.sin(ang) * rad;
      rise[i] = 2.5 + Math.random() * 3.5;
    }

    const geo = new THREE.BufferGeometry();
    const positions = new THREE.BufferAttribute(arr, 3);
    geo.setAttribute('position', positions);

    const mat = new THREE.PointsMaterial({
      color: PALETTE.smoke,
      size: 2.4,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    points.name = 'smoke';
    points.frustumCulled = false;
    this.group.add(points);

    this.columns.push({ points, positions, rise, baseX: spec.x, baseZ: spec.z, height, radius, count });
  }

  /** Advance smoke drift. Call once per fixed step with the timestep in seconds. */
  update(dt: number): void {
    for (const col of this.columns) {
      const arr = col.positions.array as Float32Array;
      for (let i = 0; i < col.count; i++) {
        const yi = i * 3 + 1;
        let y = arr[yi] - this.groundY;
        y += col.rise[i] * dt;
        arr[i * 3 + 0] += this.windX * dt;
        arr[i * 3 + 2] += this.windZ * dt;
        if (y >= col.height) {
          // Recycle to the base with a fresh ring offset.
          y = 0;
          const ang = Math.random() * Math.PI * 2;
          const rad = Math.random() * col.radius * 0.5;
          arr[i * 3 + 0] = col.baseX + Math.cos(ang) * rad;
          arr[i * 3 + 2] = col.baseZ + Math.sin(ang) * rad;
        }
        arr[yi] = this.groundY + y;
      }
      col.positions.needsUpdate = true;
    }
  }

  /** Ground height at a world XZ. Flat terrain → constant groundY. */
  groundHeightAt(_x: number, _z: number): number {
    return this.groundY;
  }

  /**
   * Dispose this terrain's OWN geometries + Points materials and remove it from
   * its parent. Shared flat materials (ground/water) live in the materials cache
   * and are released via art/materials.disposeMaterials() on global teardown.
   */
  dispose(): void {
    this.group.traverse((obj) => {
      if (obj instanceof THREE.Points) {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      } else if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose(); // ground/water plane geometries are unique to this terrain
      }
    });
    this.group.removeFromParent();
    this.columns.length = 0;
  }
}
