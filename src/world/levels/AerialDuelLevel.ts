// world/levels/AerialDuelLevel.ts
// Level 1 — "The Aerial Duel". TWO SEQUENTIAL PHASES (no simultaneous dual-front,
// so a dead air unit can never strand the win and no ally-AI is needed):
//
//   Phase 1 SKY    — pilot Saphira (FLIGHT) vs Thorn + Dauthdaert ballistae over a
//                    burning city. Saphira's death = LOSE (only she can fight Thorn).
//   (descent)      — Thorn defeated -> a brief "Saphira descends" beat.
//   Phase 2 GROUND — pilot Eragon vs Murtagh with free-swap (F) to Saphira (landed/
//                    auto-hover) or Roran. The non-piloted character is passive +
//                    invulnerable (PlayerController guarantees this). Collect ONE
//                    Eldunarí to grow the energy pool. Murtagh defeated = WIN.
//
// All wiring (PlayerController + roster + SpellSystem + ProjectilePool + VfxSystem +
// HudInfo provider) mirrors DevSandboxLevel — the reference host.
import * as THREE from 'three';
import { Entity } from '../../core/Entity';
import type { EngineContext } from '../../core/EngineContext';
import type { EntityManager } from '../../core/EntityManager';
import type { Input } from '../../core/Input';
import type { Level } from '../Level';
import { PlayerController, type PlayerHost } from '../../characters/PlayerController';
import { Saphira } from '../../characters/Saphira';
import { Eragon } from '../../characters/Eragon';
import { Roran } from '../../characters/Roran';
import type { Character } from '../../characters/Character';
import { SpellSystem } from '../../magic/SpellSystem';
import { DEFAULT_SPELL_LOADOUT } from '../../magic/spells';
import { VfxSystem, setVfx, getVfx } from '../../art/vfx';
import { ProjectilePool, setProjectilePool } from '../../combat/Projectile';
import { Thorn } from '../../enemies/Thorn';
import { Murtagh } from '../../enemies/Murtagh';
import { Ballista } from '../../enemies/Ballista';
import { Terrain } from '../Terrain';
import { placeCitySilhouette, createEldunari, type EldunariPickup } from '../props';
import { setCastShadow } from '../../art/meshes';
import { ELDUNARI_BONUS, GROUND, type LightingMood } from '../../config/gameConfig';
import type { HudInfo, HudInfoProvider, HudSpellSlot, HudRosterEntry } from '../../ui/HUD';

/** Everything the level needs from the Game to drive swap, HUD, and win/lose. */
export type AerialDuelHost = PlayerHost & {
  setHudInfoProvider(provider: HudInfoProvider | null): void;
  setLightingMood(mood: LightingMood): void;
  win(): void;
  lose(): void;
  setEndText(phase: 'WON' | 'LOST', title: string, subtitle: string): void;
};

type Phase = 'SKY' | 'DESCENDING' | 'GROUND' | 'DONE';

const SLOT_KEYS = ['1', '2', '3', '4'] as const;

/** How long the "Saphira descends" beat runs before Phase 2 begins. */
const DESCEND_TIME = 2.4;
/** Proximity (world units) at which the active character grabs the Eldunarí. */
const ELDUNARI_PICKUP_RADIUS = 2.2;
/** Stable save id for this level's single Eldunarí. */
const ELDUNARI_ID = 'aerial-duel:glaedr-shard';

const _v = new THREE.Vector3();

/** Dispose a decorative group's (unique) geometries and detach it. Cached materials
 * are released globally on teardown, so we never dispose them here. */
function disposeGroup(group: THREE.Object3D): void {
  group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) mesh.geometry?.dispose();
  });
  group.removeFromParent();
}

export class AerialDuelLevel implements Level {
  readonly id = 'aerial-duel';
  readonly title = 'The Aerial Duel';

  private phase: Phase = 'SKY';
  private resolved = false;
  private descendTimer = DESCEND_TIME;

  private entities: EntityManager | null = null;
  private readonly spawned: Entity[] = [];
  private controller: PlayerController | null = null;
  private spells: SpellSystem | null = null;

  // Scene decoration (not Entities) — disposed explicitly on unload.
  private terrain: Terrain | null = null;
  private city: THREE.Group | null = null;

  // Roster (Eragon/Roran spawn only at Phase 2 so air enemies never target them).
  private saphira: Saphira | null = null;
  private eragon: Eragon | null = null;
  private roran: Roran | null = null;

  // Enemies.
  private thorn: Thorn | null = null;
  private readonly ballistae: Ballista[] = [];
  private murtagh: Murtagh | null = null;

  // Progression.
  private eldunari: EldunariPickup | null = null;

  constructor(
    private readonly input: Input,
    private readonly host: AerialDuelHost,
  ) {}

  load(ctx: EngineContext): void {
    this.entities = ctx.entities;

    // Bright open-day mood (also resets the rig if we arrived from a darker level).
    this.host.setLightingMood('aerial');

    // Transient systems (VFX + projectile pool), as in the dev sandbox.
    const vfx = new VfxSystem();
    ctx.entities.add(vfx);
    setVfx(vfx);
    this.spawned.push(vfx);

    const pool = new ProjectilePool();
    ctx.entities.add(pool);
    setProjectilePool(pool);
    this.spawned.push(pool);

    this.spells = new SpellSystem();

    // --- Atmosphere: lake terrain + smoke columns + distant burning city. -----
    // Terrain ground sits a hair above the renderer's base plane to avoid z-fight.
    this.terrain = new Terrain(ctx.scene, {
      size: 600,
      groundY: 0.01,
      smoke: [
        { x: -40, z: -120, height: 36, radius: 4, count: 90 },
        { x: 10, z: -150, height: 44, radius: 5, count: 110 },
        { x: 64, z: -130, height: 30, radius: 3.5, count: 80 },
      ],
    });
    this.city = placeCitySilhouette(ctx.scene, {
      position: [10, 0, -170],
      span: 220,
      count: 30,
    });
    // Far backdrop — exclude from the tight sun-shadow frustum.
    setCastShadow(this.city, false);

    // --- Phase 1 roster: Saphira only (so Thorn/ballistae can't target ground). -
    const saphira = new Saphira(this.input, ctx.audio);
    saphira.position.set(0, 30, 20);
    this.saphira = saphira;
    this.spawn(saphira);

    this.controller = new PlayerController(this.input, this.host);
    this.controller.setRoster([saphira], 0);

    // --- Phase 1 threats: Thorn + a pair of Dauthdaert ballistae. --------------
    const thorn = new Thorn(ctx.audio);
    thorn.position.set(0, 34, -50);
    thorn.syncTransformImmediate();
    this.thorn = thorn;
    this.spawn(thorn);

    for (const [x, z] of [
      [-26, -10],
      [30, -18],
    ] as const) {
      const ballista = new Ballista(ctx.audio);
      ballista.position.set(x, GROUND.groundY, z);
      ballista.syncTransformImmediate();
      this.ballistae.push(ballista);
      this.spawn(ballista);
    }

    this.host.setHudInfoProvider(() => this.buildHudInfo());
  }

  update(dt: number, ctx: EngineContext): void {
    this.terrain?.update(dt);
    this.eldunari?.update(dt);
    this.controller?.update(dt);

    if (this.resolved) return;

    switch (this.phase) {
      case 'SKY':
        this.updateSky();
        break;
      case 'DESCENDING':
        this.updateDescending(dt, ctx);
        break;
      case 'GROUND':
        this.updateGround(ctx);
        break;
      case 'DONE':
        break;
    }
  }

  unload(): void {
    if (this.entities) {
      for (const e of this.spawned) this.entities.remove(e);
    }
    if (this.eldunari && !this.eldunari.collected) disposeGroup(this.eldunari.object);
    if (this.city) disposeGroup(this.city);
    this.terrain?.dispose();

    setVfx(null);
    setProjectilePool(null);
    this.host.setHudInfoProvider(null);
    this.host.setActiveEntity(null);

    this.spawned.length = 0;
    this.ballistae.length = 0;
    this.controller = null;
    this.entities = null;
    this.spells = null;
    this.terrain = null;
    this.city = null;
    this.saphira = null;
    this.eragon = null;
    this.roran = null;
    this.thorn = null;
    this.murtagh = null;
    this.eldunari = null;
  }

  // -- Phase 1: Sky ----------------------------------------------------------

  private updateSky(): void {
    const saphira = this.saphira;
    if (!saphira) return;

    // Only Saphira can fight Thorn — her death is an unrecoverable loss.
    if (saphira.health <= 0) {
      this.host.setEndText('LOST', 'Saphira Falls', 'Thorn cannot be beaten without her. The skies are lost.');
      this.resolve(() => this.host.lose());
      return;
    }

    // Thorn driven down -> begin the descent beat into the ground duel.
    if (this.thorn && (!this.thorn.alive || this.thorn.health <= 0)) {
      this.beginDescent();
    }
  }

  private beginDescent(): void {
    this.phase = 'DESCENDING';
    this.descendTimer = DESCEND_TIME;
    // The siege breaks the instant Thorn falls — silence the ballistae so the
    // descent cutscene can't snipe Saphira from under the player.
    for (const ballista of this.ballistae) this.entities?.remove(ballista);
    this.ballistae.length = 0;
  }

  // -- Transition: Saphira descends -----------------------------------------

  private updateDescending(dt: number, ctx: EngineContext): void {
    const saphira = this.saphira;
    if (saphira) {
      // Damp the dragon down toward a low hover over the battlefield.
      const k = 1 - Math.exp(-2.5 * dt);
      saphira.position.y += (6 - saphira.position.y) * k;
      saphira.position.x += (-7 - saphira.position.x) * k;
      saphira.position.z += (6 - saphira.position.z) * k;
    }
    this.descendTimer -= dt;
    if (this.descendTimer <= 0) this.beginGround(ctx);
  }

  private beginGround(ctx: EngineContext): void {
    this.phase = 'GROUND';
    const spells = this.spells;
    const saphira = this.saphira;
    if (!spells || !saphira) return;

    // Land Saphira as a passive/auto-hover swap option.
    saphira.position.set(-7, 5, 6);
    saphira.syncTransformImmediate();

    const eragon = new Eragon(this.input, spells, ctx.audio);
    eragon.position.set(0, GROUND.groundY, 0);
    eragon.syncTransformImmediate();
    // Apply the PERSISTED Eldunarí bonus up front so the bigger bar survives reload.
    eragon.setMaxEnergy(eragon.maxEnergy + ctx.save.maxEnergyBonus);
    this.eragon = eragon;
    this.spawn(eragon);

    const roran = new Roran(this.input, ctx.audio);
    roran.position.set(4, GROUND.groundY, 2);
    roran.syncTransformImmediate();
    this.roran = roran;
    this.spawn(roran);

    const murtagh = new Murtagh(spells, ctx.audio);
    murtagh.position.set(4, GROUND.groundY, -12);
    murtagh.syncTransformImmediate();
    this.murtagh = murtagh;
    this.spawn(murtagh);

    // One Eldunarí — skipped entirely if a prior run already collected it.
    if (!ctx.save.isCollected(ELDUNARI_ID)) {
      const gem = createEldunari(ELDUNARI_ID, [-5, 1.2, -4]);
      ctx.scene.add(gem.object);
      this.eldunari = gem;
    }

    // Free-swap roster: Eragon (active) + Saphira + Roran.
    this.controller?.setRoster([eragon, saphira, roran], 0);
  }

  // -- Phase 2: Ground -------------------------------------------------------

  private updateGround(ctx: EngineContext): void {
    this.tryCollectEldunari(ctx);

    // WIN: Murtagh defeated.
    if (this.murtagh && (!this.murtagh.alive || this.murtagh.health <= 0)) {
      ctx.save.markLevelCleared(this.id);
      this.host.setEndText('WON', 'Victory', 'Murtagh is broken and the duel is won. The road to Urûʼbaen lies open.');
      this.resolve(() => this.host.win());
      return;
    }

    // LOSE: no swappable character can still fight. Only the PILOTED character is
    // vulnerable; when it is downed the PlayerController auto-swaps to the next
    // living member, so the player must let EACH of Eragon/Saphira/Roran fall in
    // turn before this fires — lose-by-play is reachable, not just a 3-way fluke.
    const roster: (Character | null)[] = [this.eragon, this.saphira, this.roran];
    const anyAlive = roster.some((c) => c !== null && !c.downed && c.health > 0);
    if (!anyAlive) {
      this.host.setEndText('LOST', 'Defeated', 'Eragon and his companions have fallen on the field.');
      this.resolve(() => this.host.lose());
    }
  }

  private tryCollectEldunari(ctx: EngineContext): void {
    const gem = this.eldunari;
    if (!gem || gem.collected) return;
    const active = this.controller?.active;
    if (!active) return;
    if (active.position.distanceTo(gem.position) > ELDUNARI_PICKUP_RADIUS) return;

    gem.collected = true;
    ctx.save.collect(gem.id); // idempotent + persisted -> never respawns, never double-counts
    active.setMaxEnergy(active.maxEnergy + ELDUNARI_BONUS); // grow the active energy pool
    ctx.audio.play('heal');
    getVfx()?.burst(_v.copy(gem.position), { count: 28, color: 0x8affc0, speed: 6, life: 0.7, gravity: -2 });
    disposeGroup(gem.object);
  }

  // -- Resolution + HUD ------------------------------------------------------

  /** Fire the win/lose transition exactly once. */
  private resolve(trigger: () => void): void {
    if (this.resolved) return;
    this.resolved = true;
    this.phase = 'DONE';
    trigger();
  }

  private buildHudInfo(): HudInfo {
    const active = this.controller?.active ?? null;
    return {
      objective: this.objectiveText(),
      spells: this.slotsFor(active),
      roster: this.rosterInfo(active),
    };
  }

  private objectiveText(): string {
    switch (this.phase) {
      case 'SKY':
        return 'Phase 1 — Defeat Thorn (juke the green lances)';
      case 'DESCENDING':
        return 'Saphira descends…';
      case 'GROUND':
        return 'Phase 2 — Defeat Murtagh · F to swap';
      case 'DONE':
        return '';
    }
  }

  /** Spell slots for Eragon; ability chips for the non-casters. */
  private slotsFor(active: Character | null): HudSpellSlot[] {
    if (active === this.eragon && this.eragon && this.spells) {
      const sys = this.spells;
      const caster = this.eragon;
      return DEFAULT_SPELL_LOADOUT.map((spell, i) => ({
        key: SLOT_KEYS[i] ?? '',
        name: spell.word,
        cooldownFrac: spell.cooldown > 0 ? sys.remainingCooldown(caster, spell.id) / spell.cooldown : 0,
        ready: sys.canCast(caster, spell),
      }));
    }
    if (active === this.saphira && this.saphira) {
      return [
        { key: '1', name: 'Fire Breath', cooldownFrac: 0, ready: this.saphira.energy > 0 },
        { key: 'LMB', name: 'Claw', cooldownFrac: 0, ready: true },
      ];
    }
    if (active === this.roran) {
      return [{ key: 'LMB', name: 'Hammer', cooldownFrac: 0, ready: true }];
    }
    return [];
  }

  private rosterInfo(active: Character | null): HudRosterEntry[] {
    const entries: { char: Character | null; name: string }[] = [
      { char: this.saphira, name: 'Saphira' },
      { char: this.eragon, name: 'Eragon' },
      { char: this.roran, name: 'Roran' },
    ];
    return entries
      .filter((e): e is { char: Character; name: string } => e.char !== null)
      .map(({ char, name }) => ({
        name,
        active: char === active,
        available: char.health > 0,
      }));
  }

  private spawn(entity: Entity): void {
    this.entities?.add(entity);
    this.spawned.push(entity);
  }
}
