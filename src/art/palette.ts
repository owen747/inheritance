// src/art/palette.ts
// Central color palette for the procedural low-poly art layer.
// Pure data — no game logic, no engine imports. Colors are hex numbers so they
// can feed THREE.Color, MeshStandardMaterial(color), scene.background, fog, etc.
import * as THREE from 'three';

/**
 * The single source of truth for every color the art layer uses.
 * Keys double as `ColorKey`s passed to material/mesh builders so silhouettes
 * stay color-coded per the brief (Saphira sapphire, Thorn crimson, ...).
 */
export const PALETTE = {
  // Dragons (color-coded silhouettes)
  saphira: 0x2e6fe0, // sapphire-blue (player dragon)
  thorn: 0xc11f29, // crimson (enemy dragon)
  firnen: 0x33ab57, // green (Arya's dragon — roadmap)
  shruikan: 0x16181f, // black (Galbatorix's dragon — roadmap)

  // Dragon secondary tones (wing membranes, belly, horns)
  saphiraDark: 0x1b3f8c,
  thornDark: 0x781219,
  shruikanDark: 0x2b313f, // desaturated dark blue-grey for Shruikan's wings/legs (reads vs a dark sky)
  membrane: 0x2a2d3a, // dark leathery wing membrane
  horn: 0xe8e2cf, // bone/horn off-white (horns, spinal spikes, talons, tail blade)
  belly: 0xbfc7d6, // pale underbelly

  // Per-dragon glowing eye tints (emissive, fed through glowMaterial)
  saphiraEye: 0x7fe9ff, // Saphira — cyan/blue
  thornEye: 0xff3326, // Thorn — hot red
  shruikanEye: 0xc4d2e4, // Shruikan — pale, cold

  // Riders / humanoids
  eragonSkin: 0xd8a87a,
  eragonGarb: 0x4f6138, // muted green-brown traveling clothes
  eragonHair: 0x4a3320,
  murtaghGarb: 0x6c2f39, // dark red garb
  roranGarb: 0x6a5230, // earthy brown
  elfTone: 0xcfe6cf, // pale elven complexion accent

  // Rider detailing — cloaks, armor, leather, boots
  eragonCloak: 0x35507a, // Eragon's Rider blue-grey cape
  murtaghCloak: 0x3c141b, // Murtagh's dark crimson cape
  empireTabard: 0x8e1b1b, // Empire soldier front tabard (vs the garb red)
  leather: 0x4a3220, // belts, grip wraps, haft binding
  glove: 0x382615, // gloved hands
  armorSteel: 0x767c85, // plate armor, helms, pauldrons
  boot: 0x2f2417, // rider boots
  riderEye: 0x1c1d22, // small dark rider eyes

  // Materials / weapons
  steel: 0xb9c2cc, // sword blade
  ironDark: 0x4a4f57, // hammer head, hardware
  wood: 0x6e4a2b, // hafts, ballista frame
  rope: 0x9a8255,
  stone: 0x8b9097, // generic rock gray
  stoneDark: 0x595e66,

  // Magic / VFX-adjacent constants (used by art, not by the VFX system)
  fireOrange: 0xff7a1a,
  fireYellow: 0xffd24a,
  wardCyan: 0x4fe2ff,
  dauthdaertGreen: 0x6dff5a, // green-glowing anti-dragon lance
  eldunariGlow: 0xffcf5c, // warm soul-gem glow

  // Environment
  sky: 0x9fc6e8,
  skyDusk: 0xc98a5a, // warm burning-horizon tint
  fog: 0xb9cdd9,
  ground: 0x6f8f4f, // grassy plains
  groundDark: 0x556b3c,
  water: 0x2f6f8f,
  cityStone: 0x3c3a44, // distant burning-city silhouette
  smoke: 0x6b6b73, // smoke column particles

  // Siege of Dras-Leona — grimy urban set
  wallStone: 0x736f68, // grimy gray rampart/building stone
  wallStoneDark: 0x4b4842, // soot-darkened base courses, shadowed stone
  cobble: 0x5a5750, // worn cobblestone street
  breachRubble: 0x3b3833, // sooty rubble in the breached gate
  bannerRed: 0x9c1d1d, // Empire blood-red siege banner
  roofTile: 0x6b3a2c, // terracotta roof tiles

  // Urû'baen — Galbatorix's black citadel + throne room
  citadelBlack: 0x111016, // the near-black mass of the citadel / Galbatorix's robe
  throneDark: 0x23222a, // dark stone for the throne, pillars, and interior walls
  gold: 0xd4af37, // Galbatorix's crown / robe trim
} as const;

/** A type-safe key into {@link PALETTE}. */
export type ColorKey = keyof typeof PALETTE;

/** Resolve a {@link ColorKey} to its hex number. */
export function colorOf(key: ColorKey): number {
  return PALETTE[key];
}

/** Resolve a {@link ColorKey} (or raw hex) to a fresh {@link THREE.Color}. */
export function toColor(key: ColorKey | number): THREE.Color {
  return new THREE.Color(typeof key === 'number' ? key : PALETTE[key]);
}
