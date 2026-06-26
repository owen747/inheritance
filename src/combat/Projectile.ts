// combat/Projectile.ts
// Pooled projectiles (fireball / lance / breath puff) on ONE InstancedMesh. A
// single Entity owns a fixed-capacity ring of slots — never a Mesh per shot. It
// replaces the foundation's throwaway `SimpleProjectile`: `GameEngineContext`
// routes `spawnProjectile(spec)` here. Straight-line kinematics, sphere-overlap
// damage through wards, fire/spark VFX on impact.
import * as THREE from 'three';
import { Entity, Team } from '../core/Entity';
import type { EngineContext, ProjectileSpec } from '../core/EngineContext';
import { getVfx } from '../art/vfx';

const _matrix = new THREE.Matrix4();
const _pos = new THREE.Vector3();
const _scale = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _hidden = new THREE.Vector3(0, -10000, 0);
const _zero = new THREE.Vector3(0, 0, 0);
const _color = new THREE.Color();

/**
 * The pooled projectile world. Added once per level as an Entity; `spawn(spec)`
 * acquires a free slot. Inactive slots are scaled to zero (off-screen), so the
 * single InstancedMesh draws every live projectile in one call.
 */
export class ProjectilePool extends Entity {
  private readonly capacity: number;
  private readonly px: Float32Array;
  private readonly py: Float32Array;
  private readonly pz: Float32Array;
  private readonly vx: Float32Array;
  private readonly vy: Float32Array;
  private readonly vz: Float32Array;
  private readonly ttl: Float32Array;
  private readonly damage: Float32Array;
  private readonly radius: Float32Array;
  private readonly active: Uint8Array;
  /** Team this slot's projectile DAMAGES (the opposite of its owner). */
  private readonly targetTeam: Team[];
  private cursor = 0;

  private readonly instanced: THREE.InstancedMesh;
  /** A larger additive halo around each core, so shots read as energy not billiards. */
  private readonly halo: THREE.InstancedMesh;

  constructor(capacity = 160) {
    super();
    this.capacity = capacity;
    this.px = new Float32Array(capacity);
    this.py = new Float32Array(capacity);
    this.pz = new Float32Array(capacity);
    this.vx = new Float32Array(capacity);
    this.vy = new Float32Array(capacity);
    this.vz = new Float32Array(capacity);
    this.ttl = new Float32Array(capacity);
    this.damage = new Float32Array(capacity);
    this.radius = new Float32Array(capacity);
    this.active = new Uint8Array(capacity);
    this.targetTeam = new Array<Team>(capacity).fill('enemy');

    const geo = new THREE.SphereGeometry(1, 8, 6);
    // Additive + bright so a fireball/lance/bolt glows like energy. Vertex colors
    // carry each shot's hue.
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending });
    this.instanced = new THREE.InstancedMesh(geo, mat, capacity);
    this.instanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.instanced.frustumCulled = false;

    // Halo: same sphere, a soft additive shell scaled up around each core.
    const haloMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.halo = new THREE.InstancedMesh(geo, haloMat, capacity);
    this.halo.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.halo.frustumCulled = false;

    // Park every instance off-screen initially.
    for (let i = 0; i < capacity; i++) {
      _matrix.compose(_hidden, _quat, _zero);
      this.instanced.setMatrixAt(i, _matrix);
      this.halo.setMatrixAt(i, _matrix);
      this.instanced.setColorAt(i, _color.set(0xffaa33));
      this.halo.setColorAt(i, _color);
    }
    this.instanced.instanceMatrix.needsUpdate = true;
    this.halo.instanceMatrix.needsUpdate = true;
    if (this.instanced.instanceColor) this.instanced.instanceColor.needsUpdate = true;
    if (this.halo.instanceColor) this.halo.instanceColor.needsUpdate = true;

    const root = new THREE.Group();
    root.add(this.instanced, this.halo);
    this.mesh = root;
    this.collider = { radius: 0 };
  }

  /** Scale factor of the halo shell relative to the projectile core radius. */
  private static readonly HALO_SCALE = 2.1;

  /** Launch a projectile from a spec. Overwrites the oldest slot if full. */
  spawn(spec: ProjectileSpec): void {
    const i = this.acquire();
    this.px[i] = spec.position.x;
    this.py[i] = spec.position.y;
    this.pz[i] = spec.position.z;
    this.vx[i] = spec.velocity.x;
    this.vy[i] = spec.velocity.y;
    this.vz[i] = spec.velocity.z;
    this.ttl[i] = spec.ttl;
    this.damage[i] = spec.damage;
    this.radius[i] = spec.radius;
    this.active[i] = 1;
    this.targetTeam[i] = spec.team === 'player' ? 'enemy' : 'player';
    _color.set(spec.color ?? 0xffaa33);
    this.instanced.setColorAt(i, _color);
    this.halo.setColorAt(i, _color);
    if (this.instanced.instanceColor) this.instanced.instanceColor.needsUpdate = true;
    if (this.halo.instanceColor) this.halo.instanceColor.needsUpdate = true;
  }

  override update(dt: number, ctx: EngineContext): void {
    for (let i = 0; i < this.capacity; i++) {
      if (this.active[i] === 0) continue;

      this.px[i] += this.vx[i] * dt;
      this.py[i] += this.vy[i] * dt;
      this.pz[i] += this.vz[i] * dt;
      this.ttl[i] -= dt;

      if (this.ttl[i] <= 0) {
        this.deactivate(i);
        continue;
      }

      _pos.set(this.px[i], this.py[i], this.pz[i]);
      const targets = ctx.query(this.targetTeam[i]);
      let consumed = false;
      for (const target of targets) {
        if (!target.alive) continue;
        const reach = this.radius[i] + target.collider.radius;
        if (_pos.distanceToSquared(target.position) <= reach * reach) {
          target.takeDamage(this.damage[i], undefined);
          getVfx()?.fireBurst(_pos);
          this.deactivate(i);
          consumed = true;
          break;
        }
      }
      if (consumed) continue;

      const r = this.radius[i];
      _scale.set(r, r, r);
      _matrix.compose(_pos, _quat, _scale);
      this.instanced.setMatrixAt(i, _matrix);
      const hr = r * ProjectilePool.HALO_SCALE;
      _scale.set(hr, hr, hr);
      _matrix.compose(_pos, _quat, _scale);
      this.halo.setMatrixAt(i, _matrix);
    }
    this.instanced.instanceMatrix.needsUpdate = true;
    this.halo.instanceMatrix.needsUpdate = true;
  }

  /**
   * Neutralize every in-flight projectile OWNED by `team`, parking its slot
   * off-screen. Used at a cutscene boundary (e.g. the Siege breach beat) to flush
   * enemy arrows/lances already loosed so they can't deal damage during a beat
   * where no death is registered. A slot's stored `targetTeam` is the OPPOSITE of
   * its owner, so an enemy-owned shot targets 'player'.
   */
  clearTeam(team: Team): void {
    let changed = false;
    for (let i = 0; i < this.capacity; i++) {
      if (this.active[i] === 0) continue;
      const owner: Team = this.targetTeam[i] === 'player' ? 'enemy' : 'player';
      if (owner === team) {
        this.deactivate(i);
        changed = true;
      }
    }
    if (changed) {
      this.instanced.instanceMatrix.needsUpdate = true;
      this.halo.instanceMatrix.needsUpdate = true;
    }
  }

  private deactivate(i: number): void {
    this.active[i] = 0;
    _matrix.compose(_hidden, _quat, _zero);
    this.instanced.setMatrixAt(i, _matrix);
    this.halo.setMatrixAt(i, _matrix);
  }

  private acquire(): number {
    for (let scan = 0; scan < this.capacity; scan++) {
      const i = (this.cursor + scan) % this.capacity;
      if (this.active[i] === 0) {
        this.cursor = (i + 1) % this.capacity;
        return i;
      }
    }
    // Pool saturated — reuse the slot at the cursor (oldest by rotation).
    const i = this.cursor;
    this.cursor = (i + 1) % this.capacity;
    return i;
  }
}

// ---------------------------------------------------------------------------
// Module singleton — `GameEngineContext.spawnProjectile` routes here. The level
// owns the pool's lifecycle (create -> add as Entity -> register -> drop on
// unload), mirroring the VFX system registration so both transient systems share
// ONE pattern.
// ---------------------------------------------------------------------------
let activePool: ProjectilePool | null = null;

/** Register the level's projectile pool (or `null` on unload). */
export function setProjectilePool(pool: ProjectilePool | null): void {
  activePool = pool;
}

/** Current projectile pool, or null if none is registered. */
export function getProjectilePool(): ProjectilePool | null {
  return activePool;
}
