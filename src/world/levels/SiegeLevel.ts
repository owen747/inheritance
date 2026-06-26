// world/levels/SiegeLevel.ts
// Level 2 — "Siege of Dras-Leona". TWO SEQUENTIAL PHASES, cloning AerialDuelLevel's
// structure (same resolve() latch + host hooks + PlayerController/SpellSystem/
// ProjectilePool/VfxSystem wiring + Eldunarí persistence):
//
//   Phase 1 SKY    — pilot Saphira (FLIGHT) over besieged Dras-Leona, strafing the
//                    four wall-mounted anti-dragon ballistae (tower archers harass).
//                    Saphira's death = LOSE (only she can clear the wall). Destroy
//                    all four -> the breach opens.
//   (breach)       — a brief beat: the gate doors fall (Siege.openBreach) and
//                    Saphira descends to a low hover over the rubble.
//   Phase 2 GROUND — pilot Eragon with free-swap (F) to Saphira / Roran against
//                    THREE escalating waves pushed by a WaveDirector, each carrying
//                    a HARD COUNTER that forces a specific hero (see WaveDirector):
//                      W1 Armored Brutes (only Roran's hammer breaks the plate),
//                      W2 Rooftop Archers (perched at y≈7-8, beyond every ground
//                         attack — Eragon's flat y≈1 brisingr passes under them, so
//                         ONLY Saphira in flight can reach them; forces an air swap),
//                      W3 a Laughing-Soldier elite (pain-immune — a ground FINISHER
//                         while it's staggered is the only kill).
//                    Clear the final wave = WIN. LOSE only when BOTH ground heroes
//                    (Eragon AND Roran) are downed — Saphira alone cannot take the
//                    city, which closes the finisher-gated soft-lock.
import * as THREE from 'three';
import { Entity } from '../../core/Entity';
import type { EngineContext } from '../../core/EngineContext';
import type { EntityManager } from '../../core/EntityManager';
import type { Input } from '../../core/Input';
import type { Level } from '../Level';
import type { AerialDuelHost } from './AerialDuelLevel';
import { PlayerController } from '../../characters/PlayerController';
import { Saphira } from '../../characters/Saphira';
import { Eragon } from '../../characters/Eragon';
import { Roran } from '../../characters/Roran';
import type { Character } from '../../characters/Character';
import { SpellSystem } from '../../magic/SpellSystem';
import { DEFAULT_SPELL_LOADOUT } from '../../magic/spells';
import { VfxSystem, setVfx, getVfx } from '../../art/vfx';
import { ProjectilePool, setProjectilePool, getProjectilePool } from '../../combat/Projectile';
import { Enemy } from '../../enemies/Enemy';
import { Ballista } from '../../enemies/Ballista';
import { Soldier } from '../../enemies/Soldier';
import { Archer } from '../../enemies/Archer';
import { ArmoredBrute } from '../../enemies/ArmoredBrute';
import { LaughingSoldier } from '../../enemies/LaughingSoldier';
import { Siege } from '../Siege';
import { createEldunari, type EldunariPickup } from '../props';
import { ELDUNARI_BONUS, GROUND, RALLY } from '../../config/gameConfig';
import type { HudInfo, HudSpellSlot, HudRosterEntry } from '../../ui/HUD';

type Phase = 'SKY' | 'BREACH' | 'GROUND' | 'DONE';

const SLOT_KEYS = ['1', '2', '3', '4'] as const;

/** Number of wall ballistae that must fall to open the breach. */
const BALLISTA_COUNT = 4;
/** How long the breach beat runs (gate falls + Saphira descends) before Phase 2. */
const BREACH_TIME = 2.4;
/** Proximity (world units) at which the active character grabs the Eldunarí. */
const ELDUNARI_PICKUP_RADIUS = 2.2;
/** Stable save id for this level's single Eldunarí. */
const ELDUNARI_ID = 'siege:helgrind-shard';

/** Wall geometry the ballistae/tower-archers are mounted on. */
const WALL_Z = 18;
/** Rampart height the ballistae sit on (wall is 6 tall — perch them on top). */
const WALL_Y = 6;

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

/**
 * Drives the Phase-2 ground waves. Spawns the next wave only once the current is
 * fully cleared, and `entities.remove()`s dead enemies every tick (siege enemies
 * decide their own death but do NOT self-detach), so corpses never pile up and the
 * "wave cleared" test is a clean `current.length === 0`.
 */
class WaveDirector {
  /** 0-based index of the wave currently on the field; -1 before the first spawn. */
  private waveIndex = -1;
  private current: Enemy[] = [];
  private done = false;

  /** Total number of waves (for HUD "Wave x/N"). */
  readonly total: number;

  constructor(
    private readonly waves: ((ctx: EngineContext) => Enemy[])[],
    private readonly onSpawn: (e: Enemy) => void,
  ) {
    this.total = waves.length;
  }

  /** 1-based wave number for the HUD (0 before the first spawn). */
  get wave(): number {
    return this.waveIndex + 1;
  }

  /** True once the FINAL wave has been cleared — the win condition. */
  get cleared(): boolean {
    return this.done;
  }

  /** True while a Laughing-Soldier elite on the field is staggered (HUD hint). */
  get eliteStaggered(): boolean {
    return this.current.some((e) => e instanceof LaughingSoldier && e.staggered);
  }

  /** Begin the first wave. */
  start(ctx: EngineContext): void {
    this.spawnNext(ctx);
  }

  /** Reap the dead, and advance to the next wave once the field is clear. */
  update(ctx: EngineContext): void {
    if (this.done) return;

    const alive: Enemy[] = [];
    for (const e of this.current) {
      if (e.alive && e.health > 0) alive.push(e);
      // Dead enemies drop from our tracking list (so the wave advances), but we do
      // NOT entities.remove() them — that would skip the death-fade. The dying-aware
      // EntityManager sweep disposes them after the shrink-out plays.
    }
    this.current = alive;

    if (this.current.length === 0) {
      if (this.waveIndex + 1 >= this.waves.length) {
        this.done = true; // final wave cleared
        return;
      }
      this.spawnNext(ctx);
    }
  }

  private spawnNext(ctx: EngineContext): void {
    this.waveIndex++;
    const enemies = this.waves[this.waveIndex](ctx);
    this.current = enemies;
    for (const e of enemies) this.onSpawn(e);
  }
}

export class SiegeLevel implements Level {
  readonly id = 'siege';
  readonly title = 'Siege of Dras-Leona';

  private phase: Phase = 'SKY';
  private resolved = false;
  private breachTimer = BREACH_TIME;

  private entities: EntityManager | null = null;
  private readonly spawned: Entity[] = [];
  private controller: PlayerController | null = null;
  private spells: SpellSystem | null = null;

  // Urban set-piece (walls / breached gate / street / Helgrind / perches).
  private siege: Siege | null = null;

  // Roster (Eragon/Roran spawn only at Phase 2 so the wall threats never target ground).
  private saphira: Saphira | null = null;
  private eragon: Eragon | null = null;
  private roran: Roran | null = null;

  // Phase-1 threats (removed wholesale at the breach so the cutscene can't snipe).
  private readonly ballistae: Ballista[] = [];
  private readonly towerArchers: Archer[] = [];

  // Phase-2 wave driver.
  private waves: WaveDirector | null = null;

  // Progression.
  private eldunari: EldunariPickup | null = null;

  constructor(
    private readonly input: Input,
    private readonly host: AerialDuelHost,
  ) {}

  load(ctx: EngineContext): void {
    this.entities = ctx.entities;

    // Warm low-dusk mood (long orange shadows) matching the sooty siege sky.
    this.host.setLightingMood('siege');

    // Transient systems (VFX + projectile pool), as in the aerial duel.
    const vfx = new VfxSystem();
    ctx.entities.add(vfx);
    setVfx(vfx);
    this.spawned.push(vfx);

    const pool = new ProjectilePool();
    ctx.entities.add(pool);
    setProjectilePool(pool);
    this.spawned.push(pool);

    this.spells = new SpellSystem();

    // --- Urban set: walls + breached gate + street + Helgrind backdrop. --------
    this.siege = new Siege(ctx.scene, { wallZ: WALL_Z, cathedralZ: -44, streetHalfWidth: 6 });

    // --- Phase 1 roster: Saphira only (so the wall can't target ground heroes). -
    const saphira = new Saphira(this.input, ctx.audio);
    saphira.position.set(0, 30, 40);
    saphira.syncTransformImmediate();
    this.saphira = saphira;
    this.spawn(saphira);

    this.controller = new PlayerController(this.input, this.host);
    this.controller.setRoster([saphira], 0);

    // --- Phase 1 threats: four wall ballistae + a pair of tower archers. -------
    // The Ballista ctor pins y=groundY, so the rampart y is set AFTER construction.
    const ballistaX = [-22, -8, 8, 22];
    for (const x of ballistaX) {
      const ballista = new Ballista(ctx.audio);
      ballista.position.set(x, WALL_Y, WALL_Z);
      ballista.syncTransformImmediate();
      this.ballistae.push(ballista);
      this.spawn(ballista);
    }

    // Tower archers on the wall flanks: fixed elevated snipers (rooftop variant
    // keeps its y + never kites) with reach to the airborne dragon.
    for (const x of [-30, 30] as const) {
      const archer = new Archer({ rooftop: true }, ctx.audio);
      archer.position.set(x, WALL_Y + 1, WALL_Z);
      archer.syncTransformImmediate();
      this.towerArchers.push(archer);
      this.spawn(archer);
    }

    this.host.setHudInfoProvider(() => this.buildHudInfo());
  }

  update(dt: number, ctx: EngineContext): void {
    this.siege?.terrain.update(dt);
    this.eldunari?.update(dt);
    this.controller?.update(dt);

    if (this.resolved) return;

    switch (this.phase) {
      case 'SKY':
        this.updateSky();
        break;
      case 'BREACH':
        this.updateBreach(dt, ctx);
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
    this.siege?.dispose();

    setVfx(null);
    setProjectilePool(null);
    this.host.setHudInfoProvider(null);
    this.host.setActiveEntity(null);

    this.spawned.length = 0;
    this.ballistae.length = 0;
    this.towerArchers.length = 0;
    this.controller = null;
    this.entities = null;
    this.spells = null;
    this.siege = null;
    this.saphira = null;
    this.eragon = null;
    this.roran = null;
    this.waves = null;
    this.eldunari = null;
  }

  // -- Phase 1: Sky ----------------------------------------------------------

  private updateSky(): void {
    const saphira = this.saphira;
    if (!saphira) return;

    // Only Saphira can clear the wall — her death is an unrecoverable loss.
    if (saphira.downed || saphira.health <= 0) {
      this.host.setEndText('LOST', 'Saphira Falls', 'The wall guns cannot be silenced without her. Dras-Leona holds.');
      this.resolve(() => this.host.lose());
      return;
    }

    // All four ballistae destroyed -> the breach opens.
    if (this.ballistae.every((b) => !b.alive || b.health <= 0)) {
      this.beginBreach();
    }
  }

  private beginBreach(): void {
    this.phase = 'BREACH';
    this.breachTimer = BREACH_TIME;
    // Silence EVERY Phase-1 threat (dead ballistae + the still-living tower
    // archers) so the descent beat can't snipe Saphira from under the player.
    for (const b of this.ballistae) this.entities?.remove(b);
    for (const a of this.towerArchers) this.entities?.remove(a);
    this.ballistae.length = 0;
    this.towerArchers.length = 0;
    // Flush in-flight ENEMY projectiles (lances/arrows already loosed before this
    // beat) so the ~2.4s descent cutscene can't down Saphira while no death path
    // is registered — preserving the Phase-1 "Saphira death = lose" invariant.
    getProjectilePool()?.clearTeam('enemy');
    // Blow the gate: remove the doors, reveal the rubble.
    this.siege?.openBreach();
  }

  // -- Transition: gate falls, Saphira descends ------------------------------

  private updateBreach(dt: number, ctx: EngineContext): void {
    const saphira = this.saphira;
    // Defensive: even if some stray hit lands during the cutscene, Saphira's
    // death must still register as the Phase-1 loss (updateBreach is the only
    // tick running this beat — updateGround does not yet check her).
    if (saphira && (saphira.downed || saphira.health <= 0)) {
      this.host.setEndText('LOST', 'Saphira Falls', 'The wall guns cannot be silenced without her. Dras-Leona holds.');
      this.resolve(() => this.host.lose());
      return;
    }
    const breach = this.siege?.breachPosition;
    if (saphira && breach) {
      // Damp the dragon down toward a low hover just inside the breach.
      const k = 1 - Math.exp(-2.5 * dt);
      saphira.position.y += (6 - saphira.position.y) * k;
      saphira.position.x += (breach.x - 4 - saphira.position.x) * k;
      saphira.position.z += (breach.z + 4 - saphira.position.z) * k;
    }
    this.breachTimer -= dt;
    if (this.breachTimer <= 0) this.beginGround(ctx);
  }

  private beginGround(ctx: EngineContext): void {
    this.phase = 'GROUND';
    const spells = this.spells;
    const saphira = this.saphira;
    const siege = this.siege;
    if (!spells || !saphira || !siege) return;

    const breach = siege.breachPosition;

    // Land Saphira as a passive/auto-hover swap option just inside the breach.
    saphira.position.set(breach.x - 5, 5, breach.z + 2);
    saphira.syncTransformImmediate();

    const eragon = new Eragon(this.input, spells, ctx.audio);
    eragon.position.set(breach.x, GROUND.groundY, breach.z);
    eragon.syncTransformImmediate();
    // Apply the PERSISTED Eldunarí bonus up front so the bigger bar survives reload.
    eragon.setMaxEnergy(eragon.maxEnergy + ctx.save.maxEnergyBonus);
    this.eragon = eragon;
    this.spawn(eragon);

    const roran = new Roran(this.input, ctx.audio);
    roran.position.set(breach.x + 3, GROUND.groundY, breach.z + 1);
    roran.syncTransformImmediate();
    this.roran = roran;
    this.spawn(roran);

    // One Eldunarí on the street — skipped entirely if a prior run collected it.
    if (!ctx.save.isCollected(ELDUNARI_ID)) {
      const gem = createEldunari(ELDUNARI_ID, [4, 1.2, breach.z - 10]);
      ctx.scene.add(gem.object);
      this.eldunari = gem;
    }

    // Free-swap roster: Eragon (active) + Saphira + Roran.
    this.controller?.setRoster([eragon, saphira, roran], 0);

    // Start the escalating ground waves at the cathedral approach.
    this.waves = new WaveDirector(
      [(c) => this.spawnWave1(c), (c) => this.spawnWave2(c), (c) => this.spawnWave3(c)],
      (e) => this.spawn(e),
    );
    this.waves.start(ctx);
  }

  // -- Phase 2: Ground waves -------------------------------------------------

  private updateGround(ctx: EngineContext): void {
    this.tryCollectEldunari(ctx);

    this.waves?.update(ctx);

    // WIN: the final wave is cleared.
    if (this.waves?.cleared) {
      ctx.save.markLevelCleared(this.id);
      this.host.setEndText('WON', 'Dras-Leona Falls', 'The cathedral approach is taken. The road to Urûʼbaen lies open.');
      this.resolve(() => this.host.win());
      return;
    }

    // LOSE: BOTH ground heroes are down. Saphira alone cannot take the city (and
    // cannot execute the Laughing-Soldier elite), so this is the only loss — it
    // closes the finisher-gated soft-lock rather than stranding the player.
    const eragonDown = !this.eragon || this.eragon.downed || this.eragon.health <= 0;
    const roranDown = !this.roran || this.roran.downed || this.roran.health <= 0;
    if (eragonDown && roranDown) {
      this.host.setEndText('LOST', 'The Push Breaks', 'Eragon and Roran have fallen. Saphira cannot hold the streets alone.');
      this.resolve(() => this.host.lose());
    }
  }

  // -- Wave definitions (each carries a hero-specific hard counter) -----------

  /** W1 — Armored Brutes (Roran-only) + soldier escorts. */
  private spawnWave1(ctx: EngineContext): Enemy[] {
    const z = -8;
    const out: Enemy[] = [
      this.placeEnemy(new ArmoredBrute(ctx.audio), -5, z - 2),
      this.placeEnemy(new ArmoredBrute(ctx.audio), 5, z - 2),
      this.placeEnemy(new Soldier(ctx.audio), -9, z),
      this.placeEnemy(new Soldier(ctx.audio), 0, z),
      this.placeEnemy(new Soldier(ctx.audio), 9, z),
    ];
    return out;
  }

  /** W2 — Rooftop Archers on the street perches (reachable ONLY by Saphira in flight —
   * Eragon's flat brisingr passes under the perch) + ground soldiers. */
  private spawnWave2(ctx: EngineContext): Enemy[] {
    const out: Enemy[] = [];
    const perches = this.siege?.perchPositions ?? [];
    for (const perch of perches) {
      const archer = new Archer({ rooftop: true }, ctx.audio);
      archer.position.copy(perch); // perch position already carries its elevated y
      archer.syncTransformImmediate();
      out.push(archer);
    }
    const z = -14;
    out.push(this.placeEnemy(new Soldier(ctx.audio), -6, z));
    out.push(this.placeEnemy(new Soldier(ctx.audio), 6, z));
    out.push(this.placeEnemy(new Soldier(ctx.audio), 0, z - 4));
    return out;
  }

  /** W3 — the Laughing-Soldier elite (ground finisher only) + soldier escorts. */
  private spawnWave3(ctx: EngineContext): Enemy[] {
    const cathZ = this.siege?.cathedralPosition.z ?? -40;
    const z = cathZ + 8;
    const out: Enemy[] = [
      this.placeEnemy(new LaughingSoldier(ctx.audio), 0, z - 2),
      this.placeEnemy(new Soldier(ctx.audio), -6, z + 2),
      this.placeEnemy(new Soldier(ctx.audio), 6, z + 2),
    ];
    return out;
  }

  /** Position a ground enemy on the plane at (x,z) and seed its render transform. */
  private placeEnemy<T extends Enemy>(enemy: T, x: number, z: number): T {
    enemy.position.set(x, GROUND.groundY, z);
    enemy.syncTransformImmediate();
    return enemy;
  }

  private tryCollectEldunari(ctx: EngineContext): void {
    const gem = this.eldunari;
    if (!gem || gem.collected) return;
    const active = this.controller?.active;
    if (!active) return;
    if (active.position.distanceTo(gem.position) > ELDUNARI_PICKUP_RADIUS) return;

    gem.collected = true;
    ctx.save.collect(gem.id); // idempotent + persisted -> never respawns, never double-counts
    // Credit ERAGON's pool specifically (the only caster who benefits), regardless of
    // who walked it over — consistent with the persisted-bonus path applied to Eragon
    // on load. Grabbing it as Roran (maxEnergy 0) would otherwise waste the bonus.
    this.eragon?.setMaxEnergy(this.eragon.maxEnergy + ELDUNARI_BONUS);
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
      case 'SKY': {
        const killed = BALLISTA_COUNT - this.ballistae.filter((b) => b.alive && b.health > 0).length;
        return `Phase 1 — Destroy the siege ballistae (${killed}/${BALLISTA_COUNT})`;
      }
      case 'BREACH':
        return 'The gate is breached!';
      case 'GROUND': {
        // While the elite is staggered the finisher prompt overrides everything.
        if (this.waves?.eliteStaggered) return 'Finish the laughing soldier! (heavy attack — RMB)';
        const w = this.waves;
        const wave = w?.wave ?? 1;
        const total = w?.total ?? 3;
        // Diegetic per-wave hint so each hard counter reads as a legible puzzle.
        let hint: string;
        switch (wave) {
          case 1:
            hint = "Armored brutes — only Roran's hammer can break their plate.";
            break;
          case 2:
            hint = 'Snipers on the rooftops — fly Saphira to reach them.';
            break;
          default:
            hint = 'Push the laughing soldier back to the cathedral.';
            break;
        }
        return `${hint} · Wave ${wave}/${total} · F to swap`;
      }
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
    if (active === this.roran && this.roran) {
      const roran = this.roran;
      return [
        { key: 'LMB', name: 'Hammer', cooldownFrac: 0, ready: true },
        { key: 'RMB', name: 'Finisher', cooldownFrac: 0, ready: true },
        {
          key: '1',
          name: 'Rally',
          cooldownFrac: roran.rallyCd > 0 ? roran.rallyCd / RALLY.cooldown : 0,
          ready: roran.rallyCd <= 0,
        },
      ];
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
