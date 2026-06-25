import * as THREE from 'three';
import type { EntityManager } from './EntityManager';

const SKY_COLOR = 0x9fc6e8;
const GROUND_COLOR = 0x4f7a43;

/**
 * Owns the THREE renderer, scene, camera, base lighting, sky + fog, and the
 * resize handler. `render(alpha)` interpolates every entity's visual mesh from
 * its previous to its current sim transform by the leftover-accumulator alpha,
 * so motion stays smooth on non-60Hz displays despite a fixed simulation.
 */
export class Renderer {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SKY_COLOR);
    this.scene.fog = new THREE.Fog(SKY_COLOR, 80, 600);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
    this.camera.position.set(0, 6, 14);

    const hemi = new THREE.HemisphereLight(0xbfe3ff, 0x39482c, 1.1);
    this.scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff2d6, 1.4);
    sun.position.set(40, 80, 30);
    this.scene.add(sun);

    // Base ground plane (the scaffold floor; real terrain arrives in the art chunk).
    const groundGeo = new THREE.PlaneGeometry(1000, 1000);
    const groundMat = new THREE.MeshStandardMaterial({ color: GROUND_COLOR, roughness: 1 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    this.resize();
    window.addEventListener('resize', this.resize);
  }

  /** Render with interpolation. `alpha` is `acc / STEP` of the fixed loop. */
  render(alpha: number, entities: EntityManager): void {
    entities.forEach((entity) => {
      const mesh = entity.mesh;
      if (!mesh) return;
      mesh.position.lerpVectors(entity.prevPosition, entity.position, alpha);
      mesh.quaternion.slerpQuaternions(entity.prevQuat, entity.quaternion, alpha);
    });
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    window.removeEventListener('resize', this.resize);
    this.renderer.dispose();
  }

  private readonly resize = (): void => {
    const width = this.canvas.clientWidth || window.innerWidth;
    const height = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };
}
