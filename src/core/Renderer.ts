import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import type { EntityManager } from './EntityManager';
import { LIGHTING, POSTFX, type LightingMood } from '../config/gameConfig';

const SKY_COLOR = 0x9fc6e8;
const GROUND_COLOR = 0x4f7a43;

/**
 * Owns the THREE renderer, scene, camera, base lighting, sky + fog, and the
 * resize handler. `render(alpha)` interpolates every entity's visual mesh from
 * its previous to its current sim transform by the leftover-accumulator alpha,
 * so motion stays smooth on non-60Hz displays despite a fixed simulation.
 *
 * Lighting rig: an ACES-tone-mapped pipeline with a single shadow-casting key
 * sun (tight ortho frustum fitted to the gameplay box at the origin), a
 * hemisphere fill, and a low rim/back light for character pop. `setLightingMood`
 * relights the whole rig per level (see {@link LightingMood}); the default mood
 * is 'aerial' so a level that never sets one still looks right.
 */
export class Renderer {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;

  /** Shadow-casting key sun (re-coloured/-positioned per mood). */
  private readonly sun: THREE.DirectionalLight;
  /** Sky/ground hemisphere fill (re-coloured per mood). */
  private readonly hemi: THREE.HemisphereLight;
  /** Low rim/back light for silhouette pop (never casts; re-coloured per mood). */
  private readonly rim: THREE.DirectionalLight;

  /**
   * Post-processing pipeline: RenderPass -> Bloom -> SMAA -> OutputPass on
   * linear-HDR (HalfFloat) intermediate targets. We render through this instead
   * of `renderer.render(...)` so emissive/additive elements glow.
   */
  private readonly composer: EffectComposer;
  /** Bloom pass kept as a field so `setLightingMood` can retune its strength. */
  private readonly bloomPass: UnrealBloomPass;
  /** Every pass we own — disposed individually (composer.dispose only frees its RTs). */
  private readonly passes: ReadonlyArray<RenderPass | UnrealBloomPass | SMAAPass | OutputPass>;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Filmic tone mapping + sRGB output: emissive glows roll off instead of
    // clipping to flat white, and colours land in the right space. Exposure is
    // retuned per mood in setLightingMood().
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    // Single soft shadow map, driven only by the key sun (cheap + crisp).
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SKY_COLOR);
    this.scene.fog = new THREE.Fog(SKY_COLOR, 80, 600);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
    this.camera.position.set(0, 6, 14);

    // Post-processing pipeline. The EffectComposer's default intermediate render
    // targets are linear HDR (THREE.HalfFloatType), so bloom operates on values
    // >1 and nothing is tone-mapped/clamped until the very end. RenderPass writes
    // the raw lit scene to that HDR target (the WebGLRenderer applies tone mapping
    // + sRGB ONLY when drawing to the canvas, NOT to a render target, so there is
    // NO double tone-mapping here); OutputPass performs the single ACES tone-map +
    // sRGB encode last, reading `renderer.toneMapping`/`outputColorSpace`/exposure
    // (left intact above). Built before `setLightingMood` so it can retune bloom.
    const { width, height } = this.currentSize();
    const pixelRatio = this.renderer.getPixelRatio();
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    // UnrealBloomPass downsamples to half resolution internally (cheap). The
    // resolution vec2 is corrected by `composer.setSize` on the first resize().
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      POSTFX.bloom.strength,
      POSTFX.bloom.radius,
      POSTFX.bloom.threshold,
    );
    // EffectComposer renders into an offscreen target, so canvas MSAA (antialias:
    // true) no longer reaches the final image — SMAA restores edge AA.
    const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
    const outputPass = new OutputPass();
    this.composer.addPass(renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(smaaPass);
    this.composer.addPass(outputPass);
    this.passes = [renderPass, this.bloomPass, smaaPass, outputPass];

    this.hemi = new THREE.HemisphereLight(0xbfe3ff, 0x39482c, 1.0);
    this.scene.add(this.hemi);

    // Key sun. The shadow camera is a TIGHT ortho box fitted to the ±shadowBox
    // gameplay area at the origin (NOT the 2000-unit far plane), so shadow texels
    // stay dense and the single 2048 map is plenty. Bias/normalBias kill acne +
    // peter-panning. The frustum is constant; only the sun's direction changes
    // per mood (it always aims at the origin via the default target).
    this.sun = new THREE.DirectionalLight(0xfff2d6, 3.0);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(LIGHTING.shadowMapSize, LIGHTING.shadowMapSize);
    const cam = this.sun.shadow.camera;
    cam.left = -LIGHTING.shadowBox;
    cam.right = LIGHTING.shadowBox;
    cam.top = LIGHTING.shadowBox;
    cam.bottom = -LIGHTING.shadowBox;
    cam.near = LIGHTING.shadowNear;
    cam.far = LIGHTING.shadowFar;
    cam.updateProjectionMatrix();
    this.sun.shadow.bias = LIGHTING.shadowBias;
    this.sun.shadow.normalBias = LIGHTING.shadowNormalBias;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target); // keep the target (origin) in the graph

    // Low rim/back light: no shadow, just edge-pops characters out of the dark.
    this.rim = new THREE.DirectionalLight(0xffffff, 0.3);
    this.rim.position.set(...LIGHTING.rimPosition);
    this.scene.add(this.rim);
    this.scene.add(this.rim.target);

    // Default to the bright-day mood so a level that never sets one looks right.
    this.setLightingMood('aerial');

    // Base ground plane (the scaffold floor; real terrain arrives in the art chunk).
    const groundGeo = new THREE.PlaneGeometry(1000, 1000);
    const groundMat = new THREE.MeshStandardMaterial({ color: GROUND_COLOR, roughness: 1 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    this.resize();
    window.addEventListener('resize', this.resize);
  }

  /**
   * Relight the shared rig for a level's mood (key sun colour/intensity/angle,
   * hemisphere fill, rim light, and tone exposure). Mutates the existing lights
   * in place — NO per-frame or per-call allocation beyond colour `.set()`s. The
   * shadow frustum is unchanged (the sun still aims at the origin); only its
   * direction moves. Levels call this from `load()`.
   */
  setLightingMood(mood: LightingMood): void {
    const p = LIGHTING.presets[mood];
    this.sun.color.setHex(p.sunColor);
    this.sun.intensity = p.sunIntensity;
    this.sun.position.set(p.sunPosition[0], p.sunPosition[1], p.sunPosition[2]);
    this.hemi.color.setHex(p.hemiSky);
    this.hemi.groundColor.setHex(p.hemiGround);
    this.hemi.intensity = p.hemiIntensity;
    this.rim.color.setHex(p.rimColor);
    this.rim.intensity = p.rimIntensity;
    this.renderer.toneMappingExposure = p.exposure;
    // Per-mood bloom: the near-black Citadel leans on glow, so push bloom harder
    // there; the bright aerial day stays restrained. Cheap (one scalar).
    this.bloomPass.strength = POSTFX.bloom.strength * POSTFX.bloomByMood[mood];
  }

  /** Render with interpolation. `alpha` is `acc / STEP` of the fixed loop. */
  render(alpha: number, entities: EntityManager): void {
    entities.forEach((entity) => {
      const mesh = entity.mesh;
      if (!mesh) return;
      mesh.position.lerpVectors(entity.prevPosition, entity.position, alpha);
      mesh.quaternion.slerpQuaternions(entity.prevQuat, entity.quaternion, alpha);
    });
    // Drive the full post-processing pipeline instead of a bare scene render so
    // the bloom/SMAA/output passes run. OutputPass does the final tone-map + sRGB.
    this.composer.render();
  }

  dispose(): void {
    window.removeEventListener('resize', this.resize);
    // composer.dispose() only frees its own intermediate render targets; each pass
    // owns extra GPU resources (bloom mip chain, SMAA lookup textures), so dispose
    // them explicitly too.
    for (const pass of this.passes) pass.dispose();
    this.composer.dispose();
    this.renderer.dispose();
  }

  /** Current backing-store size in CSS pixels (canvas client, with a layout-0 fallback). */
  private currentSize(): { width: number; height: number } {
    return {
      width: this.canvas.clientWidth || window.innerWidth,
      height: this.canvas.clientHeight || window.innerHeight,
    };
  }

  private readonly resize = (): void => {
    const { width, height } = this.currentSize();
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    // Keep the composer + every pass (bloom + SMAA targets) in lock-step with the
    // canvas and DPR. setSize multiplies by the pixel ratio internally, so pass CSS
    // pixels here; bloom/SMAA targets are re-allocated at the correct resolution.
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(width, height);
  };
}
