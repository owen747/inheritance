// src/art/materials.ts
// Flat-shaded MeshStandardMaterial factory with a cache so we never allocate a
// material per mesh/entity (that tanks perf and leaks GPU memory — see plan gotcha).
// Pure art layer: no engine imports.
import * as THREE from 'three';
import { ColorKey, colorOf } from './palette';

/** Tuning knobs for a flat-shaded material variant. */
export interface FlatMaterialOptions {
  /** 0 = glossy, 1 = matte. Default 0.85 for a chalky low-poly look. */
  roughness?: number;
  /** 0 = dielectric, 1 = metal. Default 0. */
  metalness?: number;
  /** Emissive color (hex). Used for glowing props (Eldunarí, fire). */
  emissive?: number;
  /** Emissive strength. Default 0. */
  emissiveIntensity?: number;
  /** Enable transparency (water, wards). Default false. */
  transparent?: boolean;
  /** Opacity when {@link transparent}. Default 1. */
  opacity?: number;
  /** Render both faces (thin membranes / planes). Default false. */
  doubleSide?: boolean;
}

interface ResolvedOptions {
  roughness: number;
  metalness: number;
  emissive: number;
  emissiveIntensity: number;
  transparent: boolean;
  opacity: number;
  doubleSide: boolean;
}

function resolve(options: FlatMaterialOptions): ResolvedOptions {
  return {
    roughness: options.roughness ?? 0.85,
    metalness: options.metalness ?? 0.0,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0.0,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1.0,
    doubleSide: options.doubleSide ?? false,
  };
}

const cache = new Map<string, THREE.MeshStandardMaterial>();

function cacheKey(color: number, o: ResolvedOptions): string {
  return [
    color,
    o.roughness,
    o.metalness,
    o.emissive,
    o.emissiveIntensity,
    o.transparent ? 1 : 0,
    o.opacity,
    o.doubleSide ? 1 : 0,
  ].join(':');
}

/**
 * Get a cached flat-shaded MeshStandardMaterial for a hex color + options.
 * Identical (color, options) pairs return the SAME material instance — callers
 * must treat the result as shared/read-only and never mutate it in place.
 *
 * NOTE: flatShading is always on; we deliberately never call
 * computeVertexNormals() on geometry used with these materials (flatShading
 * derives face normals in-shader and ignores vertex normals).
 */
export function flatMaterial(color: number, options: FlatMaterialOptions = {}): THREE.MeshStandardMaterial {
  const o = resolve(options);
  const key = cacheKey(color, o);
  const existing = cache.get(key);
  if (existing) return existing;

  const mat = new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    roughness: o.roughness,
    metalness: o.metalness,
    emissive: o.emissive,
    emissiveIntensity: o.emissiveIntensity,
    transparent: o.transparent,
    opacity: o.opacity,
    side: o.doubleSide ? THREE.DoubleSide : THREE.FrontSide,
  });
  cache.set(key, mat);
  return mat;
}

/** Convenience: cached flat material from a palette {@link ColorKey}. */
export function materialFor(key: ColorKey, options: FlatMaterialOptions = {}): THREE.MeshStandardMaterial {
  return flatMaterial(colorOf(key), options);
}

/** Cached emissive/glow material (Eldunarí gem, fire accents). */
export function glowMaterial(color: number, intensity = 1.4): THREE.MeshStandardMaterial {
  return flatMaterial(color, { emissive: color, emissiveIntensity: intensity, roughness: 0.4 });
}

/** How many distinct materials are currently cached (diagnostics/tests). */
export function materialCacheSize(): number {
  return cache.size;
}

/**
 * Dispose every cached material and clear the cache. Call on full teardown
 * (e.g. unloading all art). Geometries are cached/disposed separately in
 * meshes.ts (see {@link import('./meshes').disposeGeometryCache}).
 */
export function disposeMaterials(): void {
  for (const mat of cache.values()) mat.dispose();
  cache.clear();
}
