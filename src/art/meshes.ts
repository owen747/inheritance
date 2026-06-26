// src/art/meshes.ts
// Procedural low-poly mesh builders, assembled from Three.js primitives
// (Box / Cone / Icosahedron / Cylinder / Sphere) in a faceted flat-shaded style.
// Pure art/geometry — no game logic, no engine imports.
//
// Conventions:
//  - FORWARD is -Z (Three.js camera-forward convention). Dragons and riders
//    face -Z; their "nose" points to negative Z.
//  - Builders return a THREE.Group (or Mesh for atomic props). Named, animatable
//    sub-parts are set on `group.name` AND mirrored on `group.userData` for typed
//    access (e.g. dragon wings, rider weapon mount). See each builder's docs.
//  - Geometry is shared via a cache; materials via art/materials.ts. NEVER call
//    computeVertexNormals() here — flatShading ignores vertex normals (plan gotcha).
import * as THREE from 'three';
import { ColorKey, colorOf } from './palette';
import { materialFor, glowMaterial } from './materials';

// ----------------------------------------------------------------------------
// Geometry cache — primitives are shared across all meshes; meshes only ever
// scale/position/rotate their own object, never mutate shared geometry.
// ----------------------------------------------------------------------------
const geoCache = new Map<string, THREE.BufferGeometry>();
/** Identity set of every geometry the cache owns — for O(1) shared-ownership checks. */
const cachedGeometries = new Set<THREE.BufferGeometry>();

function cached(key: string, make: () => THREE.BufferGeometry): THREE.BufferGeometry {
  const hit = geoCache.get(key);
  if (hit) return hit;
  const g = make();
  geoCache.set(key, g);
  cachedGeometries.add(g);
  return g;
}

/**
 * True if `g` is a shared cached geometry. Per-entity teardown (EntityManager)
 * MUST NOT dispose these — many living meshes share one instance; they are freed
 * once, globally, by {@link disposeGeometryCache}.
 */
export function isCachedGeometry(g: THREE.BufferGeometry): boolean {
  return cachedGeometries.has(g);
}

function box(w: number, h: number, d: number): THREE.BufferGeometry {
  return cached(`box:${w}:${h}:${d}`, () => new THREE.BoxGeometry(w, h, d));
}
function cone(r: number, h: number, seg = 6): THREE.BufferGeometry {
  return cached(`cone:${r}:${h}:${seg}`, () => new THREE.ConeGeometry(r, h, seg));
}
function cyl(rt: number, rb: number, h: number, seg = 6): THREE.BufferGeometry {
  return cached(`cyl:${rt}:${rb}:${h}:${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg));
}
function ico(r: number, detail = 0): THREE.BufferGeometry {
  return cached(`ico:${r}:${detail}`, () => new THREE.IcosahedronGeometry(r, detail));
}

/** Dispose all cached geometry. Call on full art teardown alongside disposeMaterials(). */
export function disposeGeometryCache(): void {
  for (const g of geoCache.values()) g.dispose();
  geoCache.clear();
  cachedGeometries.clear();
}

// ----------------------------------------------------------------------------
// Small assembly helpers
// ----------------------------------------------------------------------------
interface PieceOptions {
  pos?: [number, number, number];
  rot?: [number, number, number];
  scale?: [number, number, number] | number;
  name?: string;
}

/** Create a flat-shaded mesh from shared geometry + a palette color. */
function piece(geo: THREE.BufferGeometry, color: ColorKey, opts: PieceOptions = {}): THREE.Mesh {
  const mesh = new THREE.Mesh(geo, materialFor(color));
  if (opts.pos) mesh.position.set(opts.pos[0], opts.pos[1], opts.pos[2]);
  if (opts.rot) mesh.rotation.set(opts.rot[0], opts.rot[1], opts.rot[2]);
  if (opts.scale !== undefined) {
    if (typeof opts.scale === 'number') mesh.scale.setScalar(opts.scale);
    else mesh.scale.set(opts.scale[0], opts.scale[1], opts.scale[2]);
  }
  if (opts.name) mesh.name = opts.name;
  mesh.castShadow = true;
  mesh.receiveShadow = false;
  return mesh;
}

// ----------------------------------------------------------------------------
// Dragon
// ----------------------------------------------------------------------------
/** Animatable handles attached to a dragon group's userData. */
export interface DragonParts {
  wingL: THREE.Group;
  wingR: THREE.Group;
  head: THREE.Group;
  tail: THREE.Group;
}

/**
 * Build a faceted low-poly dragon facing -Z. Serves any color-coded dragon
 * (Saphira = 'saphira', Thorn = 'thorn', ...).
 *
 * Returned group's userData is typed as {@link DragonParts}; the same children
 * are also reachable by name: 'wingL', 'wingR', 'head', 'tail'. Wings are pivoted
 * at the shoulder and flap by rotating about their local Z axis (a later chunk
 * animates them). The whole dragon spans roughly 6 units nose-to-tail.
 *
 * @param colorKey primary body color (also picks a matching dark/membrane tone)
 */
export function buildDragon(colorKey: ColorKey = 'saphira'): THREE.Group {
  const dark: ColorKey = colorKey === 'thorn' ? 'thornDark' : colorKey === 'saphira' ? 'saphiraDark' : colorKey;
  const group = new THREE.Group();
  group.name = 'dragon';

  // Body — tapered: chest box + rear box, belly plate underneath.
  const body = new THREE.Group();
  body.add(piece(box(1.3, 1.1, 1.8), colorKey, { pos: [0, 0, -0.2] })); // chest (toward -Z)
  body.add(piece(box(1.0, 0.9, 1.4), colorKey, { pos: [0, -0.05, 1.0] })); // hindquarters (+Z)
  body.add(piece(box(0.9, 0.4, 2.6), 'belly', { pos: [0, -0.55, 0.3] })); // pale underbelly
  group.add(body);

  // Neck — segmented, rising toward the head at -Z.
  const neck = new THREE.Group();
  neck.add(piece(cyl(0.42, 0.5, 0.9, 6), colorKey, { pos: [0, 0.45, -1.1], rot: [0.5, 0, 0] }));
  neck.add(piece(cyl(0.34, 0.42, 0.8, 6), colorKey, { pos: [0, 1.0, -1.65], rot: [0.75, 0, 0] }));
  group.add(neck);

  // Head — pivot group at the neck tip so it can turn; snout cone points -Z.
  const head = new THREE.Group();
  head.name = 'head';
  head.position.set(0, 1.45, -2.1);
  head.add(piece(box(0.5, 0.5, 0.7), colorKey, { pos: [0, 0, 0] })); // skull
  head.add(piece(cone(0.28, 0.7, 5), colorKey, { pos: [0, -0.05, -0.6], rot: [-Math.PI / 2, 0, 0] })); // snout
  head.add(piece(cone(0.1, 0.45, 4), 'horn', { pos: [-0.18, 0.4, 0.1], rot: [-0.4, 0, 0.2] })); // horn L
  head.add(piece(cone(0.1, 0.45, 4), 'horn', { pos: [0.18, 0.4, 0.1], rot: [-0.4, 0, -0.2] })); // horn R
  group.add(head);

  // Wings — pivot at shoulder; membrane fans out along ±X. Flap = rotate.z.
  const wingL = buildWing(colorKey, dark, +1);
  wingL.name = 'wingL';
  wingL.position.set(0.55, 0.55, -0.1);
  const wingR = buildWing(colorKey, dark, -1);
  wingR.name = 'wingR';
  wingR.position.set(-0.55, 0.55, -0.1);
  group.add(wingL, wingR);

  // Tail — pivot at the rear; tapering cones trailing +Z so it can sway.
  const tail = new THREE.Group();
  tail.name = 'tail';
  tail.position.set(0, -0.1, 1.7);
  tail.add(piece(cyl(0.3, 0.4, 0.9, 6), colorKey, { pos: [0, 0, 0.45], rot: [Math.PI / 2, 0, 0] }));
  tail.add(piece(cyl(0.18, 0.3, 0.9, 6), colorKey, { pos: [0, 0, 1.3], rot: [Math.PI / 2, 0, 0] }));
  tail.add(piece(cone(0.18, 0.7, 5), colorKey, { pos: [0, 0, 2.0], rot: [Math.PI / 2, 0, 0] })); // tail spike
  group.add(tail);

  // Legs — 4 simple boxes.
  const legGeo = box(0.3, 0.7, 0.3);
  group.add(piece(legGeo, dark, { pos: [0.5, -0.75, -0.5] }));
  group.add(piece(legGeo, dark, { pos: [-0.5, -0.75, -0.5] }));
  group.add(piece(legGeo, dark, { pos: [0.5, -0.75, 0.9] }));
  group.add(piece(legGeo, dark, { pos: [-0.5, -0.75, 0.9] }));

  const parts: DragonParts = { wingL, wingR, head, tail };
  group.userData = parts;
  return group;
}

/** A single wing: shoulder-pivoted group, membrane fanning out along `side` (+1 = left/+X). */
function buildWing(boneColor: ColorKey, membraneColor: ColorKey, side: 1 | -1): THREE.Group {
  const wing = new THREE.Group();
  // Main bone along ±X.
  wing.add(piece(box(2.2, 0.14, 0.16), boneColor, { pos: [side * 1.1, 0, 0] }));
  // Membrane — thin double-sided-ish panel; use a flattened box for faceting.
  const membrane = new THREE.Mesh(box(2.0, 0.04, 1.6), materialFor(membraneColor, { doubleSide: true }));
  membrane.position.set(side * 1.0, -0.02, 0.5);
  membrane.castShadow = true;
  wing.add(membrane);
  // A couple of finger struts for silhouette.
  wing.add(piece(box(1.4, 0.08, 0.1), boneColor, { pos: [side * 0.9, -0.02, 0.7], rot: [0, side * 0.5, 0] }));
  return wing;
}

// ----------------------------------------------------------------------------
// Rider (humanoid: Eragon / Murtagh / Roran)
// ----------------------------------------------------------------------------
export interface RiderOptions {
  /** Skin tone color key. Default 'eragonSkin'. */
  skin?: ColorKey;
  /** Body/garb color key. Default 'eragonGarb'. */
  garb?: ColorKey;
  /** Hair color key. Default 'eragonHair'. */
  hair?: ColorKey;
}

/** Animatable handles attached to a rider group's userData. */
export interface RiderParts {
  /** Empty Group at the right hand — `add()` a weapon (sword/hammer) here. */
  weaponMount: THREE.Group;
  head: THREE.Mesh;
}

/**
 * Build a faceted humanoid rider facing -Z, ~1.8 units tall, feet at y=0.
 * The returned group exposes a 'weapon' child (also in userData.weaponMount):
 * a weapon's own +Y axis becomes the held blade/haft direction.
 */
export function buildRider(opts: RiderOptions = {}): THREE.Group {
  const skin: ColorKey = opts.skin ?? 'eragonSkin';
  const garb: ColorKey = opts.garb ?? 'eragonGarb';
  const hair: ColorKey = opts.hair ?? 'eragonHair';

  const group = new THREE.Group();
  group.name = 'rider';

  // Torso + pelvis.
  group.add(piece(box(0.6, 0.7, 0.32), garb, { pos: [0, 1.15, 0] }));
  group.add(piece(box(0.5, 0.35, 0.3), garb, { pos: [0, 0.72, 0] }));

  // Head + hair cap.
  const head = piece(ico(0.24, 0), skin, { pos: [0, 1.7, 0], name: 'head' });
  group.add(head);
  group.add(piece(box(0.34, 0.2, 0.34), hair, { pos: [0, 1.82, -0.02] }));

  // Arms.
  group.add(piece(box(0.16, 0.62, 0.16), garb, { pos: [0.4, 1.15, 0] })); // left upper arm
  group.add(piece(box(0.16, 0.62, 0.16), garb, { pos: [-0.4, 1.15, 0] })); // right upper arm

  // Legs.
  group.add(piece(box(0.2, 0.75, 0.22), garb, { pos: [0.16, 0.38, 0] }));
  group.add(piece(box(0.2, 0.75, 0.22), garb, { pos: [-0.16, 0.38, 0] }));

  // Weapon mount at the right hand. A weapon built along +Y is held upright;
  // the mount is tilted slightly forward (-Z) for a ready pose.
  const weaponMount = new THREE.Group();
  weaponMount.name = 'weapon';
  weaponMount.position.set(-0.5, 0.95, 0.05);
  weaponMount.rotation.set(-0.2, 0, 0.05);
  group.add(weaponMount);

  const parts: RiderParts = { weaponMount, head };
  group.userData = parts;
  return group;
}

// ----------------------------------------------------------------------------
// Weapons (built along +Y so the rider weapon mount orients them)
// ----------------------------------------------------------------------------
/** A faceted sword, ~1.4 units, hilt near origin, blade pointing +Y. */
export function buildSword(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'sword';
  g.add(piece(box(0.07, 1.0, 0.02), 'steel', { pos: [0, 0.6, 0] })); // blade
  g.add(piece(cone(0.06, 0.16, 4), 'steel', { pos: [0, 1.18, 0] })); // tip
  g.add(piece(box(0.32, 0.08, 0.08), 'ironDark', { pos: [0, 0.08, 0] })); // crossguard
  g.add(piece(cyl(0.05, 0.05, 0.22, 6), 'wood', { pos: [0, -0.08, 0] })); // grip
  g.add(piece(ico(0.07, 0), 'ironDark', { pos: [0, -0.21, 0] })); // pommel
  return g;
}

/** A faceted war-hammer (Roran's kit), ~1.4 units, head near +Y top. */
export function buildHammer(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'hammer';
  g.add(piece(cyl(0.06, 0.07, 1.2, 6), 'wood', { pos: [0, 0.4, 0] })); // haft
  g.add(piece(box(0.36, 0.34, 0.34), 'ironDark', { pos: [0, 1.05, 0] })); // head
  g.add(piece(box(0.16, 0.3, 0.3), 'ironDark', { pos: [0.28, 1.05, 0] })); // claw side
  return g;
}

// ----------------------------------------------------------------------------
// Ballista (ground anti-dragon launcher) — faces -Z, loaded green lance
// ----------------------------------------------------------------------------
/**
 * Build a ground-mounted Dauthdaert ballista facing -Z. The userData exposes a
 * `lance` Mesh (the loaded green anti-dragon bolt) so it can be hidden/shown on fire.
 */
export interface BallistaParts {
  lance: THREE.Mesh;
}
export function buildBallista(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'ballista';

  // Base + legs.
  g.add(piece(box(1.6, 0.3, 1.6), 'wood', { pos: [0, 0.15, 0] }));
  g.add(piece(cyl(0.2, 0.25, 0.7, 6), 'wood', { pos: [0, 0.65, 0] })); // post

  // Cradle + bow arms (V toward -Z).
  const cradle = new THREE.Group();
  cradle.position.set(0, 1.0, 0);
  cradle.rotation.set(-0.35, 0, 0); // angled up toward the sky
  cradle.add(piece(box(0.3, 0.2, 1.4), 'wood', { pos: [0, 0, -0.2] })); // rail
  cradle.add(piece(box(1.8, 0.12, 0.12), 'ironDark', { pos: [0, 0.1, -0.7], rot: [0, 0, 0] })); // crossbar
  cradle.add(piece(box(1.0, 0.08, 0.08), 'wood', { pos: [0.5, 0.1, -0.4], rot: [0, 0.5, 0] })); // arm R
  cradle.add(piece(box(1.0, 0.08, 0.08), 'wood', { pos: [-0.5, 0.1, -0.4], rot: [0, -0.5, 0] })); // arm L

  // Loaded green lance pointing -Z (forward).
  const lance = new THREE.Mesh(cyl(0.04, 0.05, 1.6, 6), glowMaterial(0x6dff5a, 1.1));
  lance.position.set(0, 0.12, -0.2);
  lance.rotation.set(Math.PI / 2, 0, 0);
  lance.name = 'lance';
  lance.castShadow = true;
  const head = new THREE.Mesh(cone(0.09, 0.4, 5), glowMaterial(0x6dff5a, 1.3));
  head.position.set(0, 0.12, -1.0);
  head.rotation.set(-Math.PI / 2, 0, 0);
  cradle.add(lance, head);

  g.add(cradle);
  g.userData = { lance } satisfies BallistaParts;
  return g;
}

// ----------------------------------------------------------------------------
// Misc props
// ----------------------------------------------------------------------------
/** A faceted boulder. Non-uniformly scaled per call (geometry is shared). */
export function buildRock(scale = 1): THREE.Mesh {
  const m = new THREE.Mesh(ico(1, 0), materialFor('stone'));
  m.scale.set(scale * (0.8 + Math.random() * 0.6), scale * (0.6 + Math.random() * 0.5), scale * (0.8 + Math.random() * 0.6));
  m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/**
 * A glowing Eldunarí soul-gem (faceted icosahedron with an emissive material).
 * Returned group's userData.gem is the gem mesh (e.g. to spin it each frame).
 */
export interface EldunariParts {
  gem: THREE.Mesh;
}
export function buildEldunari(colorKey: ColorKey = 'eldunariGlow'): THREE.Group {
  const g = new THREE.Group();
  g.name = 'eldunari';
  const glow = colorOf(colorKey);
  const gem = new THREE.Mesh(ico(0.4, 0), glowMaterial(glow, 1.6));
  gem.name = 'gem';
  gem.castShadow = true;
  g.add(gem);
  // A faint outer shell for a halo silhouette.
  const halo = new THREE.Mesh(ico(0.55, 0), materialFor(colorKey, { transparent: true, opacity: 0.18, emissive: glow, emissiveIntensity: 0.8 }));
  g.add(halo);
  g.userData = { gem } satisfies EldunariParts;
  return g;
}

/**
 * A distant burning-city silhouette: a cluster of dark stone blocks of varying
 * height with a few fire-orange emissive embers. Meant to sit far on the horizon;
 * the caller positions/scales the whole group.
 *
 * @param spanX horizontal spread of the skyline (world units)
 * @param count number of building blocks
 */
export function buildCitySilhouette(spanX = 120, count = 18): THREE.Group {
  const g = new THREE.Group();
  g.name = 'city';
  const half = spanX / 2;
  for (let i = 0; i < count; i++) {
    const x = -half + (i / Math.max(1, count - 1)) * spanX + (Math.random() - 0.5) * 4;
    const w = 3 + Math.random() * 5;
    const h = 6 + Math.random() * 18;
    const d = 3 + Math.random() * 5;
    g.add(piece(box(w, h, d), 'cityStone', { pos: [x, h / 2, (Math.random() - 0.5) * 8] }));
    // Occasional roof ember (burning).
    if (Math.random() < 0.4) {
      const ember = new THREE.Mesh(ico(0.6, 0), glowMaterial(0xff7a1a, 1.8));
      ember.position.set(x, h + 0.4, 0);
      g.add(ember);
    }
  }
  return g;
}

// ----------------------------------------------------------------------------
// Siege of Dras-Leona — urban set pieces (walls, gate, buildings, banners,
// the Helgrind backdrop, rooftop perches). All faceted, shared geometry, -Z
// forward. The caller (world/Siege.ts) positions/rotates whole groups.
// ----------------------------------------------------------------------------

/**
 * A crenellated rampart segment lying along ±X, its inner/outer faces toward ±Z.
 * `length` spans X, `height` spans Y (base at y=0). Merlons line the top.
 */
export function buildWall(length = 12, height = 6): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wall';
  const thickness = 1.4;

  // Main rampart body + a darker, slightly proud base course.
  g.add(piece(box(length, height, thickness), 'wallStone', { pos: [0, height / 2, 0] }));
  g.add(piece(box(length + 0.2, height * 0.22, thickness + 0.3), 'wallStoneDark', { pos: [0, height * 0.11, 0] }));

  // Crenellations (merlons) evenly spaced across the top with gaps between.
  const merlonW = 1.0;
  const merlonH = 0.9;
  const step = merlonW + 0.8;
  const count = Math.max(1, Math.floor(length / step));
  const startX = -((count - 1) * step) / 2;
  for (let i = 0; i < count; i++) {
    g.add(piece(box(merlonW, merlonH, thickness), 'wallStone', { pos: [startX + i * step, height + merlonH / 2, 0] }));
  }
  return g;
}

/** Handles attached to a gate group's userData. */
export interface GateParts {
  /** The two closed door leaves blocking the opening — remove these on breach. */
  doors: THREE.Group;
  /** Rubble pile shown in the gap once breached. */
  rubble: THREE.Group;
}

/**
 * A walled gate: two flanking towers + a lintel over a central opening, facing
 * -Z. The opening is filled by a `doors` group (intact) and a `rubble` group
 * (the breached gap); exactly one is visible per {@link breached}. Both are on
 * userData ({@link GateParts}) so a breach cutscene can hide/remove the doors
 * and reveal the rubble.
 */
export function buildGate(breached = false): THREE.Group {
  const g = new THREE.Group();
  g.name = 'gate';

  const towerH = 8;
  const towerW = 2.4;
  const towerD = 2.4;
  const openW = 4.5;
  const halfOpen = openW / 2;
  const lintelY = 6.2;

  // Flanking towers with dark caps.
  for (const side of [-1, 1] as const) {
    const cx = side * (halfOpen + towerW / 2);
    g.add(piece(box(towerW, towerH, towerD), 'wallStone', { pos: [cx, towerH / 2, 0] }));
    g.add(piece(box(towerW + 0.4, 0.6, towerD + 0.4), 'wallStoneDark', { pos: [cx, towerH + 0.3, 0] }));
    // A couple of merlons per tower cap.
    g.add(piece(box(0.7, 0.7, towerD), 'wallStone', { pos: [cx - 0.6, towerH + 0.95, 0] }));
    g.add(piece(box(0.7, 0.7, towerD), 'wallStone', { pos: [cx + 0.6, towerH + 0.95, 0] }));
  }

  // Lintel beam bridging the opening.
  g.add(piece(box(openW + towerW * 0.6, 1.4, towerD), 'wallStone', { pos: [0, lintelY + 0.7, 0] }));

  // Intact doors (two wood leaves with iron bands) filling the opening.
  const doors = new THREE.Group();
  doors.name = 'gateDoors';
  const leafW = openW / 2 - 0.05;
  for (const side of [-1, 1] as const) {
    doors.add(piece(box(leafW, lintelY, 0.4), 'wood', { pos: [side * (openW / 4), lintelY / 2, 0] }));
  }
  doors.add(piece(box(openW, 0.22, 0.5), 'ironDark', { pos: [0, lintelY * 0.3, 0] }));
  doors.add(piece(box(openW, 0.22, 0.5), 'ironDark', { pos: [0, lintelY * 0.7, 0] }));

  // Rubble strewn through the gap (varied faceted chunks).
  const rubble = new THREE.Group();
  rubble.name = 'breachRubble';
  for (let i = 0; i < 8; i++) {
    const chunk = new THREE.Mesh(ico(1, 0), materialFor('breachRubble'));
    const s = 0.5 + Math.random() * 1.1;
    chunk.scale.set(s * (0.8 + Math.random() * 0.6), s * (0.6 + Math.random() * 0.5), s * (0.8 + Math.random() * 0.6));
    chunk.position.set((Math.random() - 0.5) * openW, s * 0.5, (Math.random() - 0.5) * 1.6);
    chunk.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    chunk.castShadow = true;
    rubble.add(chunk);
  }

  doors.visible = !breached;
  rubble.visible = breached;
  g.add(doors, rubble);

  g.userData = { doors, rubble } satisfies GateParts;
  return g;
}

/**
 * A low-poly town building (a walkable street-side block) facing -Z: stone body,
 * proud base course, a pyramidal tile roof, a street-side door and two windows.
 * Box top sits at y=`h`; the apex of the roof is higher.
 */
export function buildBuilding(w = 6, h = 7, d = 6): THREE.Group {
  const g = new THREE.Group();
  g.name = 'building';

  g.add(piece(box(w, h, d), 'wallStone', { pos: [0, h / 2, 0] }));
  g.add(piece(box(w + 0.2, h * 0.15, d + 0.2), 'wallStoneDark', { pos: [0, h * 0.075, 0] }));

  // Pyramidal tile roof (4-sided cone, rotated to align ridges with the box).
  const roof = new THREE.Mesh(cone(Math.max(w, d) * 0.78, h * 0.5, 4), materialFor('roofTile'));
  roof.position.set(0, h + h * 0.25, 0);
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  g.add(roof);

  // Street-facing door (-Z) + two windows.
  g.add(piece(box(1.0, 1.8, 0.2), 'wood', { pos: [0, 0.9, -d / 2 - 0.01] }));
  g.add(piece(box(0.8, 0.8, 0.15), 'wallStoneDark', { pos: [-w * 0.28, h * 0.6, -d / 2 - 0.01] }));
  g.add(piece(box(0.8, 0.8, 0.15), 'wallStoneDark', { pos: [w * 0.28, h * 0.6, -d / 2 - 0.01] }));
  return g;
}

/** Handles attached to a banner group's userData. */
export interface BannerParts {
  /** The hanging cloth panel (e.g. to sway it). */
  cloth: THREE.Mesh;
}

/**
 * A hanging siege banner: a short crossbar with a double-sided cloth panel
 * draping down (top at y=0, hanging into -Y), an emblem block, default Empire
 * red. The cloth faces ±Z. userData exposes {@link BannerParts}.
 */
export function buildBanner(colorKey: ColorKey = 'bannerRed'): THREE.Group {
  const g = new THREE.Group();
  g.name = 'banner';

  // Crossbar the banner hangs from (cylinder laid along X).
  g.add(piece(cyl(0.06, 0.06, 2.0, 6), 'wood', { pos: [0, 0, 0], rot: [0, 0, Math.PI / 2] }));

  // Cloth panel + a darker pointed foot (inverted 4-sided cone).
  const cloth = new THREE.Mesh(box(1.6, 3.0, 0.06), materialFor(colorKey, { doubleSide: true }));
  cloth.position.set(0, -1.6, 0);
  cloth.name = 'cloth';
  cloth.castShadow = true;
  g.add(cloth);

  const foot = new THREE.Mesh(cone(1.13, 0.7, 4), materialFor(colorKey, { doubleSide: true }));
  foot.position.set(0, -3.45, 0);
  foot.rotation.set(Math.PI, Math.PI / 4, 0);
  foot.castShadow = true;
  g.add(foot);

  // Emblem block in the centre.
  g.add(piece(box(0.7, 0.7, 0.08), 'wallStoneDark', { pos: [0, -1.6, 0.05] }));

  g.userData = { cloth } satisfies BannerParts;
  return g;
}

/**
 * The Helgrind backdrop: a dark stone massif crowned by FOUR black jagged
 * spires of varied height (palette `shruikan`/`stoneDark`). A dramatic distant
 * silhouette — the caller positions/scales the whole group far behind the city.
 */
export function buildHelgrind(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'helgrind';

  // Broad dark massif the spires rise from.
  const base = new THREE.Mesh(ico(1, 0), materialFor('stoneDark'));
  base.scale.set(34, 10, 22);
  base.position.set(0, 2, 0);
  base.castShadow = true;
  g.add(base);

  // Four jagged black spires (x, z, height, radius), deliberately uneven.
  const spires: ReadonlyArray<readonly [number, number, number, number]> = [
    [-14, 2, 46, 6],
    [-4, -3, 62, 7],
    [7, 1, 52, 6.5],
    [16, -2, 40, 5],
  ];
  for (const [x, z, h, r] of spires) {
    const spire = new THREE.Mesh(cone(r, h, 5), materialFor('shruikan'));
    spire.position.set(x, h / 2, z);
    spire.castShadow = true;
    g.add(spire);
    // A jagged shoulder mass to break up the cone silhouette near its base.
    const shoulder = new THREE.Mesh(ico(1, 0), materialFor('shruikan'));
    shoulder.scale.set(r * 0.9, h * 0.32, r * 0.9);
    shoulder.position.set(x + r * 0.4, h * 0.2, z + r * 0.3);
    shoulder.rotation.set(0.3, x, 0.2);
    shoulder.castShadow = true;
    g.add(shoulder);
  }
  return g;
}

/**
 * A small elevated rooftop platform a rooftop-archer stands on. The deck is a
 * thin slab centred at the group origin (top ≈ y=0.15); short posts drop below
 * it and a low parapet rims the front (-Z) edge. The caller places the group at
 * the rooftop height so the archer stands just above the origin.
 */
export function buildPerch(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'perch';
  const w = 2.6;
  const d = 2.6;

  // Deck slab.
  g.add(piece(box(w, 0.3, d), 'roofTile', { pos: [0, 0, 0] }));

  // Four short support posts under the deck.
  const postH = 1.2;
  const px = w / 2 - 0.25;
  const pz = d / 2 - 0.25;
  for (const sx of [-px, px]) {
    for (const sz of [-pz, pz]) {
      g.add(piece(box(0.2, postH, 0.2), 'wood', { pos: [sx, -postH / 2 - 0.15, sz] }));
    }
  }

  // Low front parapet for the archer to crouch behind.
  g.add(piece(box(w, 0.5, 0.2), 'wallStoneDark', { pos: [0, 0.4, -d / 2 + 0.1] }));
  return g;
}
