// src/art/anim.ts
// Reusable, allocation-free procedural-mesh ANIMATION helpers. Driven per RENDER
// FRAME (real wall-clock dt) from each entity's `animate()` — NOT the fixed sim
// step — so motion is smooth at any refresh rate.
//
// HARD RULE (mirrors Entity.animate's contract + Renderer.ts): these helpers only
// ever mutate CHILD sub-parts (`.rotation`/`.position` of a dragon's wings/head/
// tail or a rider's body/weapon/legs). They NEVER touch the root group's
// position/quaternion, which the renderer overwrites every frame from the
// interpolated sim transform. Module-scope scratch is reused; nothing allocates.
import * as THREE from 'three';
import type { DragonParts, RiderParts } from './meshes';
import type { ComboState } from '../combat/ComboStateMachine';

// ---------------------------------------------------------------------------
// Tunables
// ---------------------------------------------------------------------------
const FLAP = {
  /** Base wing-beat frequency (rad/sec of the sine phase) at intensity 0. */
  freq: 5.0,
  /** Extra frequency per unit intensity. */
  freqPerIntensity: 4.0,
  /** Base flap amplitude (radians) at intensity 0. */
  amp: 0.35,
  /** Extra amplitude per unit intensity. */
  ampPerIntensity: 0.55,
  /** Resting dihedral — wings sit slightly raised so the beat reads as a swoop. */
  dihedral: 0.18,
  /** Tail sway. */
  tailFreq: 2.2,
  tailAmp: 0.22,
  /** Head bob. */
  headFreq: 2.0,
  headAmp: 0.08,
} as const;

const SWING = {
  /** Ready pose (matches buildRider's weaponMount.rotation). */
  readyX: -0.2,
  readyZ: 0.05,
  /** Fully wound-back (raised) pose. */
  windX: 1.15,
  windZ: -0.25,
  /** Follow-through (swung down/forward) pose. */
  swingX: -1.55,
  swingZ: 0.3,
  /** Faint idle sway. */
  idleFreq: 1.6,
  idleAmp: 0.05,
} as const;

const BOB = {
  /** Gentle idle breathing bob. */
  idleFreq: 1.8,
  idleAmp: 0.015,
  /** Bouncier locomotion bob (two bounces per stride). */
  strideFreq: 9.0,
  strideAmp: 0.07,
  /** Forward lean (radians) at full move speed. */
  lean: 0.18,
  /** Leg swing amplitude (radians) at full move speed. */
  legSwing: 0.5,
} as const;

// Module-scope scratch — reused every call, never reallocated.
const _v = new THREE.Vector3();

function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ---------------------------------------------------------------------------
// Dragon wing-beat
// ---------------------------------------------------------------------------
/**
 * Flap a dragon's wings about their local Z axis as a sine of `t`, plus a gentle
 * tail sway + slight head bob. `intensity` (~0..1.6) scales beat frequency AND
 * amplitude — bigger/faster beats when climbing or accelerating.
 *
 * Wings mirror about X: +1 of the phase raises both tips (upbeat), -1 lowers them
 * (downbeat). A resting dihedral keeps them slightly raised at rest.
 */
export function flapWings(parts: DragonParts, t: number, intensity: number): void {
  const freq = FLAP.freq + FLAP.freqPerIntensity * intensity;
  const amp = FLAP.amp + FLAP.ampPerIntensity * intensity;
  const beat = Math.sin(t * freq) * amp;
  const a = FLAP.dihedral + beat;
  // wingL fans along +X (rotation.z+ = tip up); wingR mirrors along -X.
  parts.wingL.rotation.z = a;
  parts.wingR.rotation.z = -a;

  // Tail sways side-to-side (and a little vertical) trailing the body.
  parts.tail.rotation.y = Math.sin(t * FLAP.tailFreq) * FLAP.tailAmp;
  parts.tail.rotation.x = Math.sin(t * FLAP.tailFreq * 0.5) * FLAP.tailAmp * 0.5;

  // Head bobs subtly out of phase with the wings.
  parts.head.rotation.x = Math.sin(t * FLAP.headFreq) * FLAP.headAmp;
}

// ---------------------------------------------------------------------------
// Weapon swing (combo-driven)
// ---------------------------------------------------------------------------
/**
 * Pose a rider's weaponMount rotation to match the combo timing:
 *  - WINDUP   : wind back/up toward the raised pose (eased-in).
 *  - ACTIVE   : fast swing forward/down through the arc (eased-out, so it snaps).
 *  - RECOVERY : ease back to the ready pose.
 *  - IDLE/ROLL: ready pose with a faint idle sway.
 * `progress` is 0..1 within the current phase; `t` drives the idle sway.
 */
export function swingWeapon(
  weaponMount: THREE.Object3D,
  state: ComboState,
  progress: number,
  t: number,
): void {
  let x: number;
  let z: number;
  switch (state) {
    case 'WINDUP': {
      const e = progress * progress; // ease-in
      x = lerp(SWING.readyX, SWING.windX, e);
      z = lerp(SWING.readyZ, SWING.windZ, e);
      break;
    }
    case 'ACTIVE': {
      const e = 1 - (1 - progress) * (1 - progress); // ease-out (snappy)
      x = lerp(SWING.windX, SWING.swingX, e);
      z = lerp(SWING.windZ, SWING.swingZ, e);
      break;
    }
    case 'RECOVERY': {
      x = lerp(SWING.swingX, SWING.readyX, progress);
      z = lerp(SWING.swingZ, SWING.readyZ, progress);
      break;
    }
    default: {
      // IDLE / ROLL — ready pose with a faint living sway.
      x = SWING.readyX + Math.sin(t * SWING.idleFreq) * SWING.idleAmp;
      z = SWING.readyZ;
      break;
    }
  }
  weaponMount.rotation.set(x, 0, z);
}

// ---------------------------------------------------------------------------
// Body bob + walk swing
// ---------------------------------------------------------------------------
/**
 * Bob a rider's `body` pivot vertically + lean it forward, blending an idle
 * breathing bob into a bouncier locomotion bob by `moveSpeed01` (0..1). Also
 * swings the leg hip-pivots for a simple walk cycle (scaled by move speed).
 */
export function bodyBob(parts: RiderParts, t: number, moveSpeed01: number): void {
  const s = clamp01(moveSpeed01);
  // Non-negative breathing bob so idle feet never dip below the ground plane.
  const breathe = (Math.sin(t * BOB.idleFreq) * 0.5 + 0.5) * BOB.idleAmp;
  // abs(sin) -> two bounces per stride cycle (a footfall bounce).
  const stride = Math.abs(Math.sin(t * BOB.strideFreq * 0.5)) * BOB.strideAmp;
  parts.body.position.y = lerp(breathe, stride, s);
  parts.body.rotation.x = -BOB.lean * s;

  const swing = Math.sin(t * BOB.strideFreq * 0.5) * BOB.legSwing * s;
  parts.legL.rotation.x = swing;
  parts.legR.rotation.x = -swing;
}

/** Snap a rider's body/legs back to the neutral rest pose (no bob, no lean, no swing). */
function restBody(parts: RiderParts): void {
  parts.body.position.y = 0;
  parts.body.rotation.x = 0;
  parts.legL.rotation.x = 0;
  parts.legR.rotation.x = 0;
}

// ---------------------------------------------------------------------------
// RiderAnimator — per-entity glue (constructed once, never per frame)
// ---------------------------------------------------------------------------
/**
 * Per-rider animation state: advances a time accumulator, derives a smoothed
 * normalized move speed from the entity's own position delta (works uniformly for
 * players AND enemies, no per-class plumbing), then applies {@link bodyBob} +
 * {@link swingWeapon}. One instance per entity; `update()` allocates nothing.
 */
export class RiderAnimator {
  private t = 0;
  private speed01 = 0;
  private readonly prevPos = new THREE.Vector3();
  private started = false;

  /**
   * @param staggered When true (e.g. a staggered LaughingSoldier), skip the bob/
   *   walk so it doesn't fight the entity's root squash; weapon rests neutral.
   */
  update(
    dt: number,
    parts: RiderParts,
    pos: THREE.Vector3,
    state: ComboState,
    progress: number,
    maxMoveSpeed: number,
    staggered: boolean,
  ): void {
    this.t += dt;

    // Smoothed horizontal speed from the entity's own movement.
    if (this.started && dt > 1e-5) {
      _v.copy(pos).sub(this.prevPos);
      _v.y = 0;
      const inst = _v.length() / dt;
      const target = maxMoveSpeed > 0 ? clamp01(inst / maxMoveSpeed) : 0;
      this.speed01 += (target - this.speed01) * Math.min(1, dt * 10);
    } else {
      this.started = true;
    }
    this.prevPos.copy(pos);

    if (staggered) {
      restBody(parts);
      swingWeapon(parts.weaponMount, 'IDLE', 0, this.t);
      return;
    }

    bodyBob(parts, this.t, this.speed01);
    swingWeapon(parts.weaponMount, state, progress, this.t);
  }
}
