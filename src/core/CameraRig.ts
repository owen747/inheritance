import * as THREE from 'three';
import { CAMERA } from '../config/gameConfig';

export type CameraMode = 'FLIGHT' | 'GROUND';

/**
 * Minimal transform the camera needs to follow a target. Includes the PREVIOUS
 * fixed-step snapshot so the rig can sample the SAME `alpha`-interpolated pose the
 * renderer lerps the mesh to — keeping camera and world perfectly in sync. `Entity`
 * satisfies this interface directly.
 */
export interface FollowTarget {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  prevPosition: THREE.Vector3;
  prevQuat: THREE.Quaternion;
}

// Module-scope scratch — reused every frame, never reallocated.
const _tPos = new THREE.Vector3();
const _tQuat = new THREE.Quaternion();
const _desired = new THREE.Vector3();
const _look = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _lead = new THREE.Vector3();

/**
 * Cheap deterministic [0,1) hash for per-frame shake noise. Keyed by a frame
 * counter so it varies every frame without `Math.random` (and stays allocation-free).
 */
function hash01(n: number): number {
  let t = (n + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), 1 | t);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/**
 * Third-person damped follow camera with two modes:
 *  - FLIGHT: a chase cam trailing behind the target's orientation.
 *  - GROUND: an over-shoulder cam.
 *
 * Driven once per RENDER frame (NOT inside the fixed sim step) from the target's
 * `alpha`-interpolated transform, so it never micro-judders against the smoothly
 * interpolated world on >60Hz displays. Adds a subtle look-ahead lead and a
 * decaying trauma-based screen shake. `setMode` is called FROM the character-swap
 * handler so framing switches atomically with the controlled character.
 * Allocation-free per frame.
 */
export class CameraRig {
  private mode: CameraMode = 'GROUND';
  private readonly currentPos = new THREE.Vector3();
  private readonly currentLook = new THREE.Vector3();
  private readonly currentLead = new THREE.Vector3();
  private trauma = 0;
  private shakeFrame = 0;
  private initialized = false;

  constructor(private readonly camera: THREE.PerspectiveCamera) {}

  setMode(mode: CameraMode): void {
    this.mode = mode;
  }

  getMode(): CameraMode {
    return this.mode;
  }

  /**
   * Add screen-shake trauma (0..1, CLAMPED so it can never accumulate unbounded).
   * The per-frame offset scales by trauma^2 and decays each frame, so a big hit
   * shakes hard but briefly. Subtle by design.
   */
  addShake(amount: number): void {
    if (amount <= 0) return;
    this.trauma = Math.min(1, this.trauma + amount);
  }

  /**
   * Follow the target's interpolated transform. `frameDt` is the real wall-clock
   * frame delta; `alpha` is the renderer's leftover-accumulator fraction — the SAME
   * value used to lerp the meshes, so camera and world stay locked together.
   */
  update(frameDt: number, alpha: number, target: FollowTarget): void {
    // Interpolated target pose (matches the mesh the renderer draws this frame).
    _tPos.lerpVectors(target.prevPosition, target.position, alpha);
    _tQuat.slerpQuaternions(target.prevQuat, target.quaternion, alpha);

    const offset = this.mode === 'FLIGHT' ? CAMERA.flightOffset : CAMERA.groundOffset;
    _desired
      .set(offset[0], offset[1], offset[2])
      .applyQuaternion(_tQuat)
      .add(_tPos);

    // Look-ahead: lead the aim point toward where the target is facing.
    _fwd.set(0, 0, -1).applyQuaternion(_tQuat);
    _lead.copy(_fwd).multiplyScalar(CAMERA.lookAhead);
    _look
      .set(CAMERA.lookOffset[0], CAMERA.lookOffset[1], CAMERA.lookOffset[2])
      .add(_tPos);

    if (!this.initialized) {
      // Snap on first frame so we do not lerp from the renderer's default pose.
      this.currentPos.copy(_desired);
      this.currentLead.copy(_lead);
      this.currentLook.copy(_look).add(_lead);
      this.initialized = true;
    } else {
      const posT = 1 - Math.exp(-CAMERA.followLambda * frameDt);
      const lookT = 1 - Math.exp(-CAMERA.lookLambda * frameDt);
      const leadT = 1 - Math.exp(-CAMERA.lookAheadLambda * frameDt);
      this.currentPos.lerp(_desired, posT);
      this.currentLead.lerp(_lead, leadT);
      _look.add(this.currentLead);
      this.currentLook.lerp(_look, lookT);
    }

    // Final camera position = smoothed follow + decaying shake offset. Keeping the
    // shake OUT of `currentPos` means it never pollutes the smoothing base.
    this.camera.position.copy(this.currentPos);
    if (this.trauma > 0) {
      this.shakeFrame++;
      const mag = this.trauma * this.trauma * CAMERA.shakeScale;
      this.camera.position.x += (hash01(this.shakeFrame * 3 + 1) * 2 - 1) * mag;
      this.camera.position.y += (hash01(this.shakeFrame * 3 + 2) * 2 - 1) * mag;
      this.camera.position.z += (hash01(this.shakeFrame * 3 + 3) * 2 - 1) * mag;
      this.trauma = Math.max(0, this.trauma - CAMERA.shakeDecay * frameDt);
    }

    this.camera.lookAt(this.currentLook);
  }

  /** Reset interpolation so the next `update` snaps (use after a hard swap/teleport). */
  resnap(): void {
    this.initialized = false;
    // Clear residual shake so a mid-combat swap doesn't hard-cut to a jittering camera.
    this.trauma = 0;
    this.shakeFrame = 0;
  }
}

// ---------------------------------------------------------------------------
// Module singleton — the cross-cutting screen-shake sink used by combat (mirrors
// the `getVfx()` pattern). Null-guarded, so a missing rig degrades to "no shake".
// ---------------------------------------------------------------------------
let activeRig: CameraRig | null = null;

/** Register the live camera rig as the shake sink (or `null` to clear). */
export function setCameraShakeSink(rig: CameraRig | null): void {
  activeRig = rig;
}

/** Add screen-shake trauma through the registered rig, if any. */
export function addCameraShake(amount: number): void {
  activeRig?.addShake(amount);
}
