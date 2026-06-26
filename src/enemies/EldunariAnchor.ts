// enemies/EldunariAnchor.ts
// A floating Eldunarí ward-anchor — Level 3 Phase-2 puzzle piece. It is a plain
// destructible Combatant (team 'enemy', modest HP) that ANY hero or projectile
// can damage: NO hero-gating, so there is no soft-lock. It bobs + slowly spins in
// place at WHATEVER altitude the level spawned it (elevated ones stay high to
// FAVOUR — not require — Saphira). When destroyed it fires the level's
// `onDestroyed` callback exactly once (via the guarded `Enemy.die()` death hook),
// which the level uses to strip one of Galbatorix's ward tiers.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy, type EnemyOptions } from './Enemy';
import { buildEldunariAnchor, type EldunariParts } from '../art/meshes';
import { ANCHOR } from '../config/gameConfig';

/**
 * EldunariAnchor — destructible floating ward-anchor. Standard `Enemy.takeDamage`
 * (dies normally at 0 HP). The single net-new behaviour is the `onDestroyed`
 * callback fired from the death hook, plus the in-place bob/spin idle.
 */
export class EldunariAnchor extends Enemy {
  private readonly gem: THREE.Object3D | null;
  private bobPhase = Math.random() * Math.PI * 2;

  /** Captured spawn altitude — set on the first tick so the level can position us. */
  private baseY = 0;
  private anchored = false;

  constructor(
    private readonly onDestroyed: () => void,
    opts?: Partial<EnemyOptions>,
    audio: AudioManager | null = null,
  ) {
    super(
      {
        maxHealth: opts?.maxHealth ?? ANCHOR.hp,
        // Generous collider: Saphira fire / Eragon spells must connect at altitude.
        colliderRadius: opts?.colliderRadius ?? ANCHOR.colliderRadius,
        // It never pursues anyone — it is an inert, destructible target.
        aggroRange: opts?.aggroRange ?? 0,
      },
      audio,
    );
    const mesh = buildEldunariAnchor();
    this.mesh = mesh;
    this.gem = (mesh.userData as EldunariParts).gem ?? null;
  }

  protected think(dt: number, _ctx: EngineContext): void {
    // Capture the level's spawn altitude on the first tick, then bob around it
    // (do NOT pin to groundY — elevated anchors must stay high).
    if (!this.anchored) {
      this.baseY = this.position.y;
      this.anchored = true;
    }
    this.bobPhase += dt * ANCHOR.bobSpeed;
    this.position.y = this.baseY + Math.sin(this.bobPhase) * ANCHOR.bobAmplitude;

    // Slow soul-light spin (local gem transform; the renderer only syncs the
    // entity's own position/quaternion, so this child rotation persists).
    if (this.gem) this.gem.rotation.y += dt * ANCHOR.spinSpeed;
  }

  /** Death hook — `Enemy.die()` calls this exactly once (guarded on `!alive`). */
  protected override onDeath(): void {
    this.onDestroyed();
  }
}
