// src/art/textures.ts
// Procedural surface textures for the BIG flat surfaces only (terrain ground,
// siege street + stone, citadel floor). Generated ONCE on a 2D canvas via tileable
// value-noise (+ a brick/cobble mortar grid) and wrapped in a THREE.CanvasTexture
// with sRGB colour space, repeat wrapping, and mipmaps.
//
// These back DEDICATED MeshStandardMaterials — deliberately NOT the shared cached
// flat materials in art/materials.ts. That keeps the low-poly characters/props
// flat-shaded while only the large grounds/streets/walls/floor get a texture, and
// it means nothing here ever mutates a cached material. Everything is module-level
// cached (generate-once) and released by {@link disposeTextures} on full art
// teardown, alongside materials.disposeMaterials() / meshes.disposeGeometryCache().
//
// Pure art layer — no engine imports.
import * as THREE from 'three';

/** Canvas resolution for every generated texture (mipmapped down at distance). */
const SIZE = 256;

// --- tiny deterministic PRNG so textures are reproducible across loads ---------
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}
function hexRGB(hex: number): RGB {
  return { r: ((hex >> 16) & 255) / 255, g: ((hex >> 8) & 255) / 255, b: (hex & 255) / 255 };
}

/**
 * A TILEABLE value-noise field: a `cells`×`cells` grid of random values, smoothly
 * (smoothstep) bilinearly interpolated up to `size`×`size`, wrapping at the edges
 * (so the texture repeats seamlessly).
 */
function noiseField(size: number, cells: number, rng: () => number): Float32Array {
  const grid = new Float32Array(cells * cells);
  for (let i = 0; i < grid.length; i++) grid[i] = rng();
  const out = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const gx = (x / size) * cells;
      const gy = (y / size) * cells;
      const x0 = Math.floor(gx) % cells;
      const y0 = Math.floor(gy) % cells;
      const x1 = (x0 + 1) % cells;
      const y1 = (y0 + 1) % cells;
      const fx = gx - Math.floor(gx);
      const fy = gy - Math.floor(gy);
      const sx = fx * fx * (3 - 2 * fx);
      const sy = fy * fy * (3 - 2 * fy);
      const v00 = grid[y0 * cells + x0];
      const v10 = grid[y0 * cells + x1];
      const v01 = grid[y1 * cells + x0];
      const v11 = grid[y1 * cells + x1];
      const top = v00 + (v10 - v00) * sx;
      const bot = v01 + (v11 - v01) * sx;
      out[y * size + x] = top + (bot - top) * sy;
    }
  }
  return out;
}

function createCtx(size: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D canvas context unavailable for procedural textures');
  return { canvas, ctx };
}

/** A two-tone value-noise fill (coarse blotches + fine grain + per-pixel speckle). */
interface NoiseSpec {
  seed: number;
  /** Color at noise=0 and noise=1 (blended per pixel). */
  low: number;
  high: number;
  /** Coarse + fine grid resolutions. */
  coarse: number;
  fine: number;
  /** Contrast around the midpoint (1 = none). */
  contrast?: number;
  /** Per-pixel white-noise speckle amplitude (0..1). */
  speckle?: number;
}
function paintNoise(ctx: CanvasRenderingContext2D, size: number, spec: NoiseSpec): void {
  const rng = mulberry32(spec.seed);
  const coarse = noiseField(size, spec.coarse, rng);
  const fine = noiseField(size, spec.fine, rng);
  const low = hexRGB(spec.low);
  const high = hexRGB(spec.high);
  const contrast = spec.contrast ?? 1;
  const speckle = spec.speckle ?? 0;
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let i = 0; i < size * size; i++) {
    let n = coarse[i] * 0.6 + fine[i] * 0.4;
    n = (n - 0.5) * contrast + 0.5;
    if (speckle > 0) n += (rng() - 0.5) * speckle;
    const t = clamp01(n);
    d[i * 4 + 0] = Math.round(clamp01(lerp(low.r, high.r, t)) * 255);
    d[i * 4 + 1] = Math.round(clamp01(lerp(low.g, high.g, t)) * 255);
    d[i * 4 + 2] = Math.round(clamp01(lerp(low.b, high.b, t)) * 255);
    d[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
}

/** Overlay a (tileable) staggered brick/cobble mortar grid of dark recessed lines. */
function drawMortar(
  ctx: CanvasRenderingContext2D,
  size: number,
  cols: number,
  rows: number,
  darkness: number,
  stagger: boolean,
): void {
  ctx.strokeStyle = `rgba(0,0,0,${darkness})`;
  ctx.lineWidth = Math.max(1, (size / cols) * 0.1);
  const cw = size / cols;
  const ch = size / rows;
  for (let r = 0; r < rows; r++) {
    const y0 = r * ch;
    ctx.beginPath();
    ctx.moveTo(0, y0);
    ctx.lineTo(size, y0);
    ctx.stroke();
    const off = stagger && r % 2 === 1 ? cw / 2 : 0;
    for (let c = 0; c <= cols; c++) {
      const x = (c * cw + off) % size;
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x, y0 + ch);
      ctx.stroke();
    }
  }
}

// --- module-level cache (generate-once) ---------------------------------------
const cachedTextures = new Set<THREE.Texture>();
const cachedMaterials = new Set<THREE.Material>();

function makeTexture(
  paint: (ctx: CanvasRenderingContext2D, size: number) => void,
  repeatX: number,
  repeatY: number,
): THREE.CanvasTexture {
  const { canvas, ctx } = createCtx(SIZE);
  paint(ctx, SIZE);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.generateMipmaps = true;
  // Anisotropic filtering — the ground/street are viewed at grazing angles where
  // mip-only filtering shimmers/blurs; 8 keeps them crisp at distance.
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  cachedTextures.add(tex);
  return tex;
}

function standardMat(map: THREE.Texture): THREE.MeshStandardMaterial {
  // color left white so the map shows true; roughness 1 / metalness 0 keeps the
  // chalky low-poly read consistent with the flat materials around it.
  const mat = new THREE.MeshStandardMaterial({ map, color: 0xffffff, roughness: 1, metalness: 0 });
  cachedMaterials.add(mat);
  return mat;
}

let _ground: THREE.MeshStandardMaterial | null = null;
let _street: THREE.MeshStandardMaterial | null = null;
let _wall: THREE.MeshStandardMaterial | null = null;
let _floor: THREE.MeshStandardMaterial | null = null;

/** Grass/dirt ground — coarse blotchy patches with fine grain. */
export function groundMaterial(): THREE.MeshStandardMaterial {
  if (!_ground) {
    const tex = makeTexture(
      (ctx, size) => paintNoise(ctx, size, { seed: 7, low: 0x4a5d30, high: 0x7c9a55, coarse: 5, fine: 22, contrast: 1.25, speckle: 0.1 }),
      64,
      64,
    );
    _ground = standardMat(tex);
  }
  return _ground;
}

/** Worn cobblestone street — warm-grey value noise under a staggered mortar grid. */
export function streetMaterial(): THREE.MeshStandardMaterial {
  if (!_street) {
    const tex = makeTexture(
      (ctx, size) => {
        paintNoise(ctx, size, { seed: 23, low: 0x46443d, high: 0x6b6760, coarse: 6, fine: 18, contrast: 1.15, speckle: 0.08 });
        drawMortar(ctx, size, 6, 7, 0.4, true);
      },
      6,
      26,
    );
    _street = standardMat(tex);
  }
  return _street;
}

/** Grimy rampart/building stone — blocky courses (brick mortar) over grey noise. */
export function wallMaterial(): THREE.MeshStandardMaterial {
  if (!_wall) {
    const tex = makeTexture(
      (ctx, size) => {
        paintNoise(ctx, size, { seed: 51, low: 0x5d5953, high: 0x817c74, coarse: 5, fine: 16, contrast: 1.1, speckle: 0.07 });
        drawMortar(ctx, size, 4, 6, 0.32, true);
      },
      2,
      2,
    );
    _wall = standardMat(tex);
  }
  return _wall;
}

/** Dark citadel floor — low-contrast near-black stone with large faint slabs. */
export function floorMaterial(): THREE.MeshStandardMaterial {
  if (!_floor) {
    const tex = makeTexture(
      (ctx, size) => {
        paintNoise(ctx, size, { seed: 88, low: 0x1c1b22, high: 0x2c2a33, coarse: 4, fine: 14, contrast: 1.0, speckle: 0.05 });
        drawMortar(ctx, size, 3, 3, 0.45, false);
      },
      10,
      10,
    );
    _floor = standardMat(tex);
  }
  return _floor;
}

/**
 * Dispose every cached procedural texture + its material and clear the cache.
 * Call on FULL art teardown alongside materials.disposeMaterials() and
 * meshes.disposeGeometryCache(). The dedicated materials are shared/read-only —
 * per-level teardown (Terrain/Siege/Citadel.dispose, which only free their own
 * geometries) MUST NOT dispose them.
 */
export function disposeTextures(): void {
  for (const m of cachedMaterials) m.dispose();
  for (const t of cachedTextures) t.dispose();
  cachedMaterials.clear();
  cachedTextures.clear();
  _ground = _street = _wall = _floor = null;
}
