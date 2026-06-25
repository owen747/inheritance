import * as THREE from 'three';
import { CAMERA } from '../config/gameConfig';

export type CameraMode = 'FLIGHT' | 'GROUND';

/** Minimal transform the camera needs to follow a target. */
export interface FollowTarget {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
}

const _desired = new THREE.Vector3();
const _look = new THREE.Vector3();

/**
 * Third-person damped follow camera with two modes:
 *  - FLIGHT: a chase cam trailing behind the target's orientation.
 *  - GROUND: an over-shoulder cam.
 *
 * `setMode` is called FROM the character-swap handler so the camera framing
 * switches atomically with the controlled character. Allocation-free per frame.
 */
export class CameraRig {
  private mode: CameraMode = 'GROUND';
  private readonly currentLook = new THREE.Vector3();
  private initialized = false;

  constructor(private readonly camera: THREE.PerspectiveCamera) {}

  setMode(mode: CameraMode): void {
    this.mode = mode;
  }

  getMode(): CameraMode {
    return this.mode;
  }

  update(dt: number, target: FollowTarget): void {
    const offset = this.mode === 'FLIGHT' ? CAMERA.flightOffset : CAMERA.groundOffset;
    _desired
      .set(offset[0], offset[1], offset[2])
      .applyQuaternion(target.quaternion)
      .add(target.position);

    _look
      .set(CAMERA.lookOffset[0], CAMERA.lookOffset[1], CAMERA.lookOffset[2])
      .add(target.position);

    if (!this.initialized) {
      // Snap on first frame so we do not lerp from the renderer's default pose.
      this.camera.position.copy(_desired);
      this.currentLook.copy(_look);
      this.initialized = true;
    } else {
      const posT = 1 - Math.exp(-CAMERA.followLambda * dt);
      const lookT = 1 - Math.exp(-CAMERA.lookLambda * dt);
      this.camera.position.lerp(_desired, posT);
      this.currentLook.lerp(_look, lookT);
    }

    this.camera.lookAt(this.currentLook);
  }

  /** Reset interpolation so the next `update` snaps (use after a hard swap/teleport). */
  resnap(): void {
    this.initialized = false;
  }
}
