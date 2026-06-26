// src/art/hitFlash.ts
// Per-instance "hit flash": pops a combatant's whole mesh bright white for a
// brief moment on damage, then decays back. Materials are SHARED/cached across
// entities (materials.ts), so we MUST NOT mutate the cached material — that would
// tint every entity sharing it. Instead, on first use we CLONE each distinct
// MeshStandardMaterial under the mesh into per-instance copies and drive their
// emissive. The clones are NOT cached, so EntityManager.disposeEntity frees them
// on removal (unique-resource disposal); the cached originals are untouched.
import * as THREE from 'three';

/** Seconds for a full-strength flash (1.0) to decay to 0. */
const FLASH_DECAY = 0.1;
/** Peak emissive intensity added at full flash. */
const FLASH_PEAK = 0.95;
const WHITE = new THREE.Color(0xffffff);

interface FlashMat {
  mat: THREE.MeshStandardMaterial;
  baseEmissive: number;
  baseIntensity: number;
}

/**
 * Drives the white-flash emissive on one entity's cloned materials. Build once
 * per entity (lazily, from its mesh) via {@link HitFlash.fromMesh}; call
 * {@link trigger} on damage and {@link update} every frame. Allocation-free in
 * the hot path (trigger/update only mutate existing material fields).
 */
export class HitFlash {
  private flash = 0;
  private readonly mats: FlashMat[];

  private constructor(mats: FlashMat[]) {
    this.mats = mats;
  }

  /**
   * Clone each distinct cached MeshStandardMaterial under `root` into a unique
   * per-instance copy and swap it onto its meshes, so flashing this entity never
   * tints others. Materials shared between pieces of THIS mesh share ONE clone
   * (kept minimal). Non-standard materials (Points/Basic) are left untouched.
   */
  static fromMesh(root: THREE.Object3D): HitFlash {
    const seen = new Map<THREE.Material, THREE.MeshStandardMaterial>();
    const mats: FlashMat[] = [];
    root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mat = mesh.material;
      if (Array.isArray(mat)) {
        mesh.material = mat.map((m) => HitFlash.cloneOf(m, seen, mats) ?? m);
      } else if (mat) {
        const cloned = HitFlash.cloneOf(mat, seen, mats);
        if (cloned) mesh.material = cloned;
      }
    });
    return new HitFlash(mats);
  }

  private static cloneOf(
    m: THREE.Material,
    seen: Map<THREE.Material, THREE.MeshStandardMaterial>,
    mats: FlashMat[],
  ): THREE.MeshStandardMaterial | null {
    if (!(m instanceof THREE.MeshStandardMaterial)) return null;
    const existing = seen.get(m);
    if (existing) return existing;
    const clone = m.clone();
    seen.set(m, clone);
    mats.push({
      mat: clone,
      baseEmissive: clone.emissive.getHex(),
      baseIntensity: clone.emissiveIntensity,
    });
    return clone;
  }

  /** Pop the flash to `strength` (0..1); keeps the brighter of current/strength. */
  trigger(strength = 1): void {
    this.flash = Math.min(1, Math.max(this.flash, strength));
  }

  /** Decay the flash and drive the emissive tint. No-op once fully decayed. */
  update(dt: number): void {
    if (this.flash <= 0) return;
    this.flash = Math.max(0, this.flash - dt / FLASH_DECAY);
    const f = this.flash;
    if (f <= 0) {
      for (const e of this.mats) {
        e.mat.emissive.setHex(e.baseEmissive);
        e.mat.emissiveIntensity = e.baseIntensity;
      }
      return;
    }
    for (const e of this.mats) {
      e.mat.emissive.copy(WHITE);
      e.mat.emissiveIntensity = e.baseIntensity + f * FLASH_PEAK;
    }
  }
}
