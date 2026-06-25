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
import { VfxSystem, setVfx } from '../../art/vfx';
import { ProjectilePool, setProjectilePool } from '../../combat/Projectile';
import type { HudInfo, HudInfoProvider, HudSpellSlot, HudRosterEntry } from '../../ui/HUD';

/** Host hooks the dev sandbox needs (PlayerController surface + optional HUD feed). */
export type SandboxHost = PlayerHost & {
  setHudInfoProvider?(provider: HudInfoProvider | null): void;
};

const SLOT_KEYS = ['1', '2', '3', '4'] as const;

/**
 * Dev harness level (kept registered for tuning, NOT the boot level): the base
 * scaffold scene (ground + lights + sky) comes from the Renderer; this spawns the
 * real character roster (Eragon / Saphira / Roran), the PlayerController (F to
 * swap), the VFX system, and the projectile pool — so combat, magic, flight, and
 * free-swap are all runnable. No enemies: the shipped fight lives in AerialDuelLevel.
 */
export class DevSandboxLevel implements Level {
  readonly id = 'dev-sandbox';
  readonly title = 'Dev Sandbox';

  private entities: EntityManager | null = null;
  private readonly spawned: Entity[] = [];
  private controller: PlayerController | null = null;

  // Refs held so the HUD provider can read live spell cooldowns + roster state.
  private spells: SpellSystem | null = null;
  private eragon: Eragon | null = null;
  private saphira: Saphira | null = null;
  private roran: Roran | null = null;

  constructor(
    private readonly input: Input,
    private readonly host: SandboxHost,
  ) {}

  load(ctx: EngineContext): void {
    this.entities = ctx.entities;

    // Transient systems (VFX + projectile pool) — registered for this level.
    const vfx = new VfxSystem();
    ctx.entities.add(vfx);
    setVfx(vfx);
    this.spawned.push(vfx);

    const pool = new ProjectilePool();
    ctx.entities.add(pool);
    setProjectilePool(pool);
    this.spawned.push(pool);

    const spells = new SpellSystem();
    this.spells = spells;

    const eragon = new Eragon(this.input, spells, ctx.audio);
    eragon.position.set(0, 0, 0);
    this.eragon = eragon;
    this.spawn(eragon);

    const roran = new Roran(this.input, ctx.audio);
    roran.position.set(4, 0, 1);
    this.roran = roran;
    this.spawn(roran);

    const saphira = new Saphira(this.input, ctx.audio);
    saphira.position.set(0, 28, 12);
    this.saphira = saphira;
    this.spawn(saphira);

    const roster: Character[] = [eragon, saphira, roran];
    this.controller = new PlayerController(this.input, this.host);
    this.controller.setRoster(roster, 0); // start as Eragon on the ground

    // Feed the HUD live objective / spell-slot / roster data each frame.
    this.host.setHudInfoProvider?.(() => this.buildHudInfo());
  }

  update(dt: number, _ctx: EngineContext): void {
    this.controller?.update(dt);
  }

  unload(): void {
    if (this.entities) {
      for (const e of this.spawned) this.entities.remove(e);
    }
    setVfx(null);
    setProjectilePool(null);
    this.host.setHudInfoProvider?.(null);
    this.host.setActiveEntity(null);
    this.spawned.length = 0;
    this.controller = null;
    this.entities = null;
    this.spells = null;
    this.eragon = null;
    this.saphira = null;
    this.roran = null;
  }

  /** Build the per-frame HUD payload for whichever character is piloted. */
  private buildHudInfo(): HudInfo {
    const active = this.controller?.active ?? null;
    return {
      objective: 'Dev Sandbox — F to swap · 1-4 cast · LMB melee',
      spells: this.slotsFor(active),
      roster: this.rosterInfo(active),
    };
  }

  /** Spell slots for Eragon; ability chips for the non-casters. */
  private slotsFor(active: Character | null): HudSpellSlot[] {
    if (active === this.eragon && this.eragon && this.spells) {
      const sys = this.spells;
      const caster = this.eragon;
      return DEFAULT_SPELL_LOADOUT.map((spell, i) => {
        const remaining = sys.remainingCooldown(caster, spell.id);
        return {
          key: SLOT_KEYS[i] ?? '',
          name: spell.word,
          cooldownFrac: spell.cooldown > 0 ? remaining / spell.cooldown : 0,
          ready: sys.canCast(caster, spell),
        };
      });
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
    return entries.map(({ char, name }) => ({
      name,
      active: char !== null && char === active,
      available: char !== null,
    }));
  }

  private spawn(entity: Entity): void {
    this.entities?.add(entity);
    this.spawned.push(entity);
  }
}
