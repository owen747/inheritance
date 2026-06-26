// world/levels/UrubaenLevel.ts
// Level 3 — "Assault on Urûʼbaen". The climactic TWO-PHASE finale, cloning
// SiegeLevel's structure (same resolve() latch + host hooks + PlayerController/
// SpellSystem/ProjectilePool/VfxSystem wiring):
//
//   Phase 1 SKY        — pilot Saphira (FLIGHT) over Galbatorix's black citadel,
//                        duelling the enormous black dragon SHRUIKAN under the
//                        overhanging rock shelf. Saphira's death = LOSE (only she
//                        can fight Shruikan). Shruikan defeated -> the descent.
//   (descent)          — a brief beat: Saphira drops toward the citadel; enemy
//                        projectiles are flushed; the throne-room set swaps in.
//   Phase 2 THRONE     — the Galbatorix finale, a MECHANIC-GATED puzzle (NOT a DPS
//                        race). Galbatorix is unkillable behind wards fed by enslaved
//                        Eldunarí (his `wardTier` = anchor count). A small explicit
//                        sub-state machine drives the climax:
//                          ANCHORS  — destroy the floating Eldunarí anchors; each
//                                     death strips one ward tier (Galbatorix attacks
//                                     the active hero meanwhile).
//                          EXPOSED  — at wardTier 0 he REELS (attacks STOP); an
//                                     empathy-flood VFX plays + the player TYPES the
//                                     Ancient-Language unmaking word `WAISE NEIAT`.
//                          UNMADE   — the typed cast lands -> dramatic VFX -> WIN.
//                        Free-swap roster (Eragon + Saphira + Roran). Lose when all
//                        THREE roster heroes are downed.
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
import { Shruikan } from '../../enemies/Shruikan';
import { Galbatorix } from '../../enemies/Galbatorix';
import { EldunariAnchor } from '../../enemies/EldunariAnchor';
import { Soldier } from '../../enemies/Soldier';
import { Citadel } from '../Citadel';
import { GROUND, RALLY } from '../../config/gameConfig';
import type { HudInfo, HudSpellSlot, HudRosterEntry } from '../../ui/HUD';

type Phase = 'SKY' | 'DESCENDING' | 'THRONE' | 'DONE';
/** The Phase-2 climax sub-state machine. */
type FinaleState = 'ANCHORS' | 'EXPOSED' | 'UNMADE';

const SLOT_KEYS = ['1', '2', '3', '4'] as const;

/** How long the "Saphira descends" beat runs before the throne room begins. */
const DESCEND_TIME = 2.4;
/** Number of Eldunarí ward-anchors (= Galbatorix's starting ward tiers). */
const ANCHOR_COUNT = 4;
/** Seconds the Murtagh ward-break line shows before the typed-cast prompt. */
const MURTAGH_LINE_TIME = 3.0;
/** The Ancient-Language unmaking the player must type (ASCII, diacritic-free). */
const UNMAKE_TARGET = 'waise neiat';

const _v = new THREE.Vector3();

/** Strip spaces so the typed cast tolerates "waiseneiat" / "waise neiat" alike. */
function despace(s: string): string {
  return s.replace(/ /g, '');
}

export class UrubaenLevel implements Level {
  readonly id = 'urubaen';
  readonly title = 'Assault on Urûʼbaen';

  private phase: Phase = 'SKY';
  private finaleState: FinaleState = 'ANCHORS';
  private resolved = false;
  private descendTimer = DESCEND_TIME;
  private exposedTimer = 0;

  private entities: EntityManager | null = null;
  private ctx: EngineContext | null = null;
  private readonly spawned: Entity[] = [];
  private controller: PlayerController | null = null;
  private spells: SpellSystem | null = null;

  // The Urû'baen set (sky approach + throne-room interior; built once in load).
  private citadel: Citadel | null = null;

  // Roster (Eragon/Roran spawn only at Phase 2 so Shruikan never targets ground).
  private saphira: Saphira | null = null;
  private eragon: Eragon | null = null;
  private roran: Roran | null = null;

  // Phase-1 boss.
  private shruikan: Shruikan | null = null;

  // Phase-2 finale actors.
  private galbatorix: Galbatorix | null = null;
  private readonly anchors: EldunariAnchor[] = [];
  private readonly guards: Soldier[] = [];

  // Typed-unmaking capture (EXPOSED). The listener is added on EXPOSED and removed
  // on UNMADE/unload, so it never leaks and never double-handles on a restart.
  private typedBuffer = '';
  private keyListenerAttached = false;

  constructor(
    private readonly input: Input,
    private readonly host: AerialDuelHost,
  ) {}

  load(ctx: EngineContext): void {
    this.entities = ctx.entities;
    this.ctx = ctx;

    // Transient systems (VFX + projectile pool), as in the siege.
    const vfx = new VfxSystem();
    ctx.entities.add(vfx);
    setVfx(vfx);
    this.spawned.push(vfx);

    const pool = new ProjectilePool();
    ctx.entities.add(pool);
    setProjectilePool(pool);
    this.spawned.push(pool);

    this.spells = new SpellSystem();

    // --- The black citadel: both sets built once; throne room hidden initially. -
    this.citadel = new Citadel(ctx.scene);
    this.citadel.setPhase('sky');

    // --- Phase 1 roster: Saphira only (so Shruikan can't target ground heroes). -
    const saphira = new Saphira(this.input, ctx.audio);
    saphira.position.set(0, 32, 40);
    saphira.syncTransformImmediate();
    this.saphira = saphira;
    this.spawn(saphira);

    this.controller = new PlayerController(this.input, this.host);
    this.controller.setRoster([saphira], 0);

    // --- Phase 1 boss: Shruikan, hovering in front of Saphira over the citadel. -
    const shruikan = new Shruikan(ctx.audio);
    shruikan.position.set(0, 34, -30);
    shruikan.syncTransformImmediate();
    this.shruikan = shruikan;
    this.spawn(shruikan);

    this.host.setHudInfoProvider(() => this.buildHudInfo());
    this.phase = 'SKY';
  }

  update(dt: number, ctx: EngineContext): void {
    this.citadel?.terrain.update(dt);
    this.controller?.update(dt);

    if (this.resolved) return;

    switch (this.phase) {
      case 'SKY':
        this.updateSky();
        break;
      case 'DESCENDING':
        this.updateDescending(dt, ctx);
        break;
      case 'THRONE':
        this.updateThrone(dt, ctx);
        break;
      case 'DONE':
        break;
    }
  }

  unload(): void {
    this.removeKeyListener();
    this.input.setFrozen(false); // never leave input frozen on restart/quit

    if (this.entities) {
      for (const e of this.spawned) this.entities.remove(e);
    }
    this.citadel?.dispose();

    setVfx(null);
    setProjectilePool(null);
    this.host.setHudInfoProvider(null);
    this.host.setActiveEntity(null);

    this.spawned.length = 0;
    this.anchors.length = 0;
    this.guards.length = 0;
    this.controller = null;
    this.entities = null;
    this.ctx = null;
    this.spells = null;
    this.citadel = null;
    this.saphira = null;
    this.eragon = null;
    this.roran = null;
    this.shruikan = null;
    this.galbatorix = null;
  }

  // -- Phase 1: Sky ----------------------------------------------------------

  private updateSky(): void {
    const saphira = this.saphira;
    if (!saphira) return;

    // Only Saphira can fight Shruikan — her death is an unrecoverable loss.
    if (saphira.downed || saphira.health <= 0) {
      this.host.setEndText('LOST', 'Saphira Falls', 'Shruikan cannot be beaten without her. The skies over Urûʼbaen are lost.');
      this.resolve(() => this.host.lose());
      return;
    }

    // Shruikan driven down -> begin the descent into the citadel.
    if (this.shruikan && (!this.shruikan.alive || this.shruikan.health <= 0)) {
      this.beginDescent();
    }
  }

  private beginDescent(): void {
    this.phase = 'DESCENDING';
    this.descendTimer = DESCEND_TIME;
    // Silence the dead boss + flush in-flight ENEMY projectiles so the descent
    // cutscene can't down Saphira while no Phase-1 death path is registered.
    if (this.shruikan) this.entities?.remove(this.shruikan);
    this.shruikan = null;
    getProjectilePool()?.clearTeam('enemy');
  }

  // -- Transition: Saphira descends toward the citadel -----------------------

  private updateDescending(dt: number, ctx: EngineContext): void {
    const saphira = this.saphira;
    // Defensive: a stray hit during the cutscene still registers the Phase-1 loss.
    if (saphira && (saphira.downed || saphira.health <= 0)) {
      this.host.setEndText('LOST', 'Saphira Falls', 'Shruikan cannot be beaten without her. The skies over Urûʼbaen are lost.');
      this.resolve(() => this.host.lose());
      return;
    }
    if (saphira) {
      // Damp the dragon down toward a low hover near the citadel entrance.
      const k = 1 - Math.exp(-2.5 * dt);
      saphira.position.y += (6 - saphira.position.y) * k;
      saphira.position.x += (0 - saphira.position.x) * k;
      saphira.position.z += (14 - saphira.position.z) * k;
    }
    this.descendTimer -= dt;
    if (this.descendTimer <= 0) this.beginThrone(ctx);
  }

  private beginThrone(ctx: EngineContext): void {
    this.phase = 'THRONE';
    const spells = this.spells;
    const saphira = this.saphira;
    const citadel = this.citadel;
    if (!spells || !saphira || !citadel) return;

    // Swap the visible set: sky off, throne room on.
    citadel.setPhase('throne');

    // Land Saphira just inside the throne-room entrance (+Z side) as a swap option.
    saphira.position.set(5, 4, 12);
    saphira.syncTransformImmediate();

    const eragon = new Eragon(this.input, spells, ctx.audio);
    eragon.position.set(0, GROUND.groundY, 12);
    eragon.syncTransformImmediate();
    // Apply the PERSISTED Eldunarí bonus up front so the bigger bar survives reload.
    eragon.setMaxEnergy(eragon.maxEnergy + ctx.save.maxEnergyBonus);
    this.eragon = eragon;
    this.spawn(eragon);

    const roran = new Roran(this.input, ctx.audio);
    roran.position.set(3, GROUND.groundY, 13);
    roran.syncTransformImmediate();
    this.roran = roran;
    this.spawn(roran);

    // Free-swap roster: Eragon (active) + Saphira + Roran.
    this.controller?.setRoster([eragon, saphira, roran], 0);

    // The unkillable dark king, enthroned. wardTier = anchor count (his immunity
    // is fed by the Eldunarí; the level decrements it as anchors fall).
    const galbatorix = new Galbatorix(ctx.audio);
    galbatorix.position.copy(citadel.thronePosition);
    galbatorix.syncTransformImmediate();
    galbatorix.wardTier = ANCHOR_COUNT;
    this.galbatorix = galbatorix;
    this.spawn(galbatorix);

    // One Eldunarí anchor at EACH ward point. Each death strips one ward tier; at
    // 0 Galbatorix is exposed. NO hard hero-gating — the elevated anchors merely
    // FAVOUR Saphira (her fire reaches them), they never REQUIRE her.
    for (let i = 0; i < citadel.anchorPoints.length; i++) {
      const anchor = new EldunariAnchor(() => this.onAnchorDestroyed(), undefined, ctx.audio);
      anchor.position.copy(citadel.anchorPoints[i]);
      anchor.syncTransformImmediate();
      this.anchors.push(anchor);
      this.spawn(anchor);
    }

    // A couple of throne guards for flavour pressure (any hero can cut them down).
    for (const [x, z] of [
      [-7, 8],
      [7, 8],
    ] as const) {
      const guard = new Soldier(ctx.audio);
      guard.position.set(x, GROUND.groundY, z);
      guard.syncTransformImmediate();
      this.guards.push(guard);
      this.spawn(guard);
    }

    this.finaleState = 'ANCHORS';
  }

  // -- Phase 2: Throne room (ANCHORS -> EXPOSED -> UNMADE) --------------------

  private updateThrone(dt: number, _ctx: EngineContext): void {
    // Reap dead anchors/guards each tick (they don't self-detach — mirror the
    // WaveDirector), so corpses never linger in the room.
    this.reap(this.anchors);
    this.reap(this.guards);

    switch (this.finaleState) {
      case 'ANCHORS':
        // Galbatorix attacks the active hero on his own (via think). When the last
        // ward falls (onAnchorDestroyed -> wardTier 0) we enter EXPOSED.
        break;
      case 'EXPOSED':
        this.exposedTimer += dt;
        break;
      case 'UNMADE':
        break;
    }

    this.checkLose();
  }

  /** Anchor death hook — strip one ward tier; at 0 expose Galbatorix. */
  private onAnchorDestroyed(): void {
    const galb = this.galbatorix;
    if (!galb) return;
    galb.wardTier = Math.max(0, galb.wardTier - 1);
    this.ctx?.audio.play('ward-break');
    if (galb.wardTier === 0 && this.finaleState === 'ANCHORS') this.enterExposed();
  }

  /** Galbatorix reels: attacks stop, the empathy flood plays, the typed cast opens. */
  private enterExposed(): void {
    const galb = this.galbatorix;
    const citadel = this.citadel;
    if (!galb || !citadel) return;

    this.finaleState = 'EXPOSED';
    this.exposedTimer = 0;
    galb.exposed = true; // his think() now reels — no attacks during the type window

    // Make the typing window genuinely threat-free / dramatic: flush in-flight
    // enemy projectiles (stale bolts/AoE) and remove the throne guards so the
    // empathy/typing beat has no lingering threats.
    getProjectilePool()?.clearTeam('enemy');
    for (const g of this.guards) this.entities?.remove(g);
    this.guards.length = 0;

    // Freeze gameplay input so typing the unmaking (w/a/s/e == WASD) can't walk
    // or swing the hero during the window. Re-enabled in unmake() / unload().
    this.input.setFrozen(true);

    // Relocate him to groundY near the throne-room centre so the empathy VFX +
    // typed-cast prompt read clearly.
    galb.position.set(0, GROUND.groundY, citadel.thronePosition.z + 6);
    galb.syncTransformImmediate();

    // Empathy flood: several big pale bursts wash over him (the pain of all he wronged).
    _v.set(galb.position.x, galb.position.y + 2, galb.position.z);
    getVfx()?.burst(_v, { count: 80, color: 0xeaf2ff, speed: 5, life: 1.2, gravity: -1 });
    getVfx()?.burst(_v, { count: 60, color: 0xbcd0ff, speed: 9, life: 0.9, gravity: 0 });
    _v.y += 1.5;
    getVfx()?.burst(_v, { count: 40, color: 0xffffff, speed: 3, life: 1.4, gravity: -0.5 });
    this.ctx?.audio.play('cast');

    // Begin capturing the typed unmaking (works under pointer-lock).
    this.typedBuffer = '';
    this.addKeyListener();
  }

  /** The typed cast lands — Galbatorix is unmade. The only win path. */
  private unmake(): void {
    if (this.finaleState !== 'EXPOSED') return;
    this.finaleState = 'UNMADE';
    this.removeKeyListener();
    this.input.setFrozen(false); // typing done — restore gameplay input

    const galb = this.galbatorix;
    if (galb) {
      _v.set(galb.position.x, galb.position.y + 2, galb.position.z);
      getVfx()?.burst(_v, { count: 120, color: 0xffffff, speed: 14, life: 1.0, gravity: 2 });
      getVfx()?.burst(_v, { count: 80, color: 0x9b59ff, speed: 18, life: 0.8, gravity: 0 });
      this.entities?.remove(galb);
      this.galbatorix = null;
    }
    this.ctx?.audio.play('death');

    this.ctx?.save.markLevelCleared(this.id);
    this.host.setEndText(
      'WON',
      'The Empire Falls',
      'Galbatorix is unmade. Arya rises with the green dragon Fírnen — a new age of Riders begins.',
    );
    this.resolve(() => this.host.win());
  }

  /**
   * LOSE when BOTH ground heroes (Eragon AND Roran) are down. Saphira alone can't
   * finish the throne assault, and her death is permanent, so gating the loss on
   * her state could create a Saphira-only stuck run (unwinnable + unloseable).
   * Ignoring her state here removes that soft-lock and matches L2's lose rule.
   */
  private checkLose(): void {
    const eragonDown = !this.eragon || this.eragon.downed || this.eragon.health <= 0;
    const roranDown = !this.roran || this.roran.downed || this.roran.health <= 0;
    if (eragonDown && roranDown) {
      this.host.setEndText('LOST', 'The King Stands', 'Eragon and Roran have fallen. Urûʼbaen holds.');
      this.resolve(() => this.host.lose());
    }
  }

  // -- Typed-unmaking capture ------------------------------------------------

  private addKeyListener(): void {
    if (this.keyListenerAttached) return;
    window.addEventListener('keydown', this.onKeyDown);
    this.keyListenerAttached = true;
  }

  private removeKeyListener(): void {
    if (!this.keyListenerAttached) return;
    window.removeEventListener('keydown', this.onKeyDown);
    this.keyListenerAttached = false;
  }

  /**
   * Capture the typed unmaking. Bound arrow so add/removeEventListener match. The
   * buffer must stay a prefix of `waise neiat` (ignoring spaces); a wrong key
   * resets it; a full match (ignoring spaces) fires the unmaking.
   */
  private readonly onKeyDown = (e: KeyboardEvent): void => {
    if (this.finaleState !== 'EXPOSED') return;

    if (e.key === 'Backspace') {
      e.preventDefault(); // avoid browser back-navigation on Backspace
      this.typedBuffer = this.typedBuffer.slice(0, -1);
      return;
    }
    if (e.key.length !== 1) return; // ignore modifiers/arrows/Enter/etc.

    const next = this.typedBuffer + e.key.toLowerCase();
    // Accept only while it remains a prefix of the target (spaces ignored on both
    // sides, so the space is optional); otherwise reset the buffer.
    this.typedBuffer = despace(UNMAKE_TARGET).startsWith(despace(next)) ? next : '';

    if (despace(this.typedBuffer) === despace(UNMAKE_TARGET)) this.unmake();
  };

  // -- Helpers ---------------------------------------------------------------

  /** Remove dead members of a tracked enemy list (they don't self-detach). */
  private reap(list: Enemy[]): void {
    for (let i = list.length - 1; i >= 0; i--) {
      const e = list[i];
      if (!e.alive || e.health <= 0) {
        this.entities?.remove(e);
        list.splice(i, 1);
      }
    }
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
        return 'Phase 1 — Defeat Shruikan, the black dragon (juke his fire and dive)';
      case 'DESCENDING':
        return 'Saphira descends into the citadel…';
      case 'THRONE':
        return this.throneObjective();
      case 'DONE':
        return '';
    }
  }

  private throneObjective(): string {
    switch (this.finaleState) {
      case 'ANCHORS': {
        const left = this.galbatorix?.wardTier ?? 0;
        return `Galbatorix is shielded by the Eldunarí — destroy them (${left} left) · F to swap`;
      }
      case 'EXPOSED':
        if (this.exposedTimer < MURTAGH_LINE_TIME) {
          return "Murtagh strips the last ward — 'I know your true name!'";
        }
        return `Speak the unmaking — type WAISE NEIAT:  ${this.typedBuffer.toUpperCase()}`;
      case 'UNMADE':
        return 'The unmaking is spoken…';
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
