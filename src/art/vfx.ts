// src/art/vfx.ts
// Pooled particle bursts (fire puffs, hit sparks) on a SINGLE THREE.Points cloud.
// One fixed-capacity buffer is reused for the whole level — never a Mesh/Points
// per particle (plan anti-pattern). Combat / projectiles / spells emit through the
// module singleton (`getVfx()`); the level owns its lifecycle (create -> register
// -> add as an Entity -> dispose on unload).
//
// PointsMaterial draws EVERY vertex at one global size, so inactive/dead particles
// are parked far off-screen (HIDDEN_Y) rather than relying on a per-point size.
import * as THREE from 'three';
import { Entity } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';

const HIDDEN_Y = -100000;

export interface BurstOptions {
  /** Number of particles to emit (clamped to capacity). */
  count?: number;
  /** Particle color (hex). */
  color?: number;
  /** Base outward speed (units/sec). */
  speed?: number;
  /** Random extra speed added on top of `speed`. */
  speedJitter?: number;
  /** Lifetime in seconds. */
  life?: number;
  /** Constant downward acceleration (units/sec^2); negative = float up. */
  gravity?: number;
}

const _color = new THREE.Color();

/**
 * Owns one pooled `THREE.Points` cloud. An `Entity` so the game loop ticks its
 * `update(dt)` and the renderer disposes its geometry/material on level unload.
 * Particle positions are absolute world-space; the object sits at the origin.
 */
export class VfxSystem extends Entity {
  private readonly capacity: number;
  private readonly positions: Float32Array;
  private readonly colors: Float32Array;
  private readonly velX: Float32Array;
  private readonly velY: Float32Array;
  private readonly velZ: Float32Array;
  private readonly life: Float32Array;
  private readonly gravity: Float32Array;
  private cursor = 0;

  private readonly geometry: THREE.BufferGeometry;
  private readonly posAttr: THREE.BufferAttribute;
  private readonly colorAttr: THREE.BufferAttribute;

  constructor(capacity = 600) {
    super();
    this.capacity = capacity;
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.velX = new Float32Array(capacity);
    this.velY = new Float32Array(capacity);
    this.velZ = new Float32Array(capacity);
    this.life = new Float32Array(capacity);
    this.gravity = new Float32Array(capacity);

    // Park every particle off-screen until used.
    for (let i = 0; i < capacity; i++) this.positions[i * 3 + 1] = HIDDEN_Y;

    this.geometry = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.positions, 3);
    this.colorAttr = new THREE.BufferAttribute(this.colors, 3);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.colorAttr.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('position', this.posAttr);
    this.geometry.setAttribute('color', this.colorAttr);

    const material = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(this.geometry, material);
    points.frustumCulled = false;
    this.mesh = points;
    this.collider = { radius: 0 };
  }

  /** Emit a generic burst at a world position. Allocation-free. */
  burst(position: THREE.Vector3, options: BurstOptions = {}): void {
    const count = Math.min(options.count ?? 12, this.capacity);
    const color = options.color ?? 0xffaa33;
    const speed = options.speed ?? 6;
    const jitter = options.speedJitter ?? 4;
    const life = options.life ?? 0.5;
    const gravity = options.gravity ?? 9;
    _color.set(color);

    for (let n = 0; n < count; n++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % this.capacity;

      const i3 = i * 3;
      this.positions[i3] = position.x;
      this.positions[i3 + 1] = position.y;
      this.positions[i3 + 2] = position.z;

      // Random direction on the unit sphere, biased upward so bursts plume.
      const theta = Math.random() * Math.PI * 2;
      const z = Math.random() * 2 - 1;
      const r = Math.sqrt(Math.max(0, 1 - z * z));
      const sp = speed + Math.random() * jitter;
      this.velX[i] = Math.cos(theta) * r * sp;
      this.velY[i] = Math.abs(z) * sp;
      this.velZ[i] = Math.sin(theta) * r * sp;

      this.colors[i3] = _color.r;
      this.colors[i3 + 1] = _color.g;
      this.colors[i3 + 2] = _color.b;
      this.life[i] = life;
      this.gravity[i] = gravity;
    }
  }

  /** Orange/yellow fire plume (fireball impact, breath). */
  fireBurst(position: THREE.Vector3, count = 16): void {
    this.burst(position, { count, color: 0xff8a1e, speed: 4, speedJitter: 5, life: 0.5, gravity: -2 });
  }

  /** Quick white/yellow sparks (melee + projectile hits). */
  sparkBurst(position: THREE.Vector3, count = 12): void {
    this.burst(position, { count, color: 0xfff2a0, speed: 8, speedJitter: 6, life: 0.3, gravity: 14 });
  }

  override update(dt: number, _ctx: EngineContext): void {
    for (let i = 0; i < this.capacity; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      const i3 = i * 3;
      if (this.life[i] <= 0) {
        this.positions[i3 + 1] = HIDDEN_Y; // park dead particle off-screen
        continue;
      }
      this.velY[i] -= this.gravity[i] * dt;
      this.positions[i3] += this.velX[i] * dt;
      this.positions[i3 + 1] += this.velY[i] * dt;
      this.positions[i3 + 2] += this.velZ[i] * dt;
    }
    this.posAttr.needsUpdate = true;
    this.colorAttr.needsUpdate = true;
  }
}

// ---------------------------------------------------------------------------
// Module singleton — the cross-cutting emit seam used by combat/projectile/spell.
// Null-guarded everywhere so a missing system degrades to "no particles", never
// a crash.
// ---------------------------------------------------------------------------
let active: VfxSystem | null = null;

/** Register the level's VFX system (or `null` on unload). */
export function setVfx(system: VfxSystem | null): void {
  active = system;
}

/** Current VFX system, or null if none is registered. */
export function getVfx(): VfxSystem | null {
  return active;
}
