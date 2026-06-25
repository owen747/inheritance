// ui/HUD.ts
// DOM overlay HUD (mounted into `#ui-root`), synced once per frame. Renders the
// ACTIVE character's vitals — a health bar, an energy bar with a DISTINCT ward
// overlay — plus four ability/spell slots with a cooldown sweep, an objective/
// phase line, and a character-switcher indicator. The HUD reads vitals straight
// off the active character each frame; everything level-specific (objective,
// spell cooldowns, roster) arrives via the per-frame `HudInfo` the Game pulls
// from a level-supplied provider. It owns no game state and never mutates it.
//
// Characters with `magicEnabled === false` (Saphira / Roran) simply receive
// non-spell ability chips from the level instead of Eragon's spell loadout — the
// HUD renders whatever slots it is handed and hides the row when there are none.
import type { Entity } from '../core/Entity';
import { ENERGY } from '../config/gameConfig';

/** A spell or ability chip in the slot row. */
export interface HudSpellSlot {
  /** Hotkey label drawn in the corner (e.g. '1', 'LMB'). */
  key: string;
  /** Display name (e.g. 'Brisingr', 'Fire Breath'). */
  name: string;
  /** Remaining cooldown as a 0..1 fraction of the spell's full cooldown (1 = just cast). */
  cooldownFrac: number;
  /** Off cooldown AND affordable right now. */
  ready: boolean;
}

/** One entry in the character switcher. */
export interface HudRosterEntry {
  name: string;
  active: boolean;
  available: boolean;
}

/** Per-frame, level-supplied HUD data (vitals are read off the active char directly). */
export interface HudInfo {
  /** Objective / phase text line. */
  objective: string;
  /** Up to four ability/spell slots; empty hides the slot row. */
  spells: HudSpellSlot[];
  /** Character switcher entries; empty hides the switcher. */
  roster: HudRosterEntry[];
}

export type HudInfoProvider = () => HudInfo;

/** Empty info used when no level provider is registered (HUD still shows vitals). */
export const EMPTY_HUD_INFO: HudInfo = { objective: '', spells: [], roster: [] };

/** Structural vitals view the HUD reads from the active character. */
interface HudVitals {
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  wardHp: number;
  magicEnabled: boolean;
}

/** Narrow an arbitrary entity to the vitals the HUD needs (no `any`). */
function asHudVitals(entity: Entity | null): HudVitals | null {
  if (!entity) return null;
  const c = entity as Partial<HudVitals>;
  if (
    typeof c.health === 'number' &&
    typeof c.maxHealth === 'number' &&
    typeof c.energy === 'number' &&
    typeof c.maxEnergy === 'number' &&
    typeof c.wardHp === 'number' &&
    typeof c.magicEnabled === 'boolean'
  ) {
    return c as HudVitals;
  }
  return null;
}

const MAX_SLOTS = 4;

export class HUD {
  private readonly root: HTMLDivElement;
  private readonly objectiveEl: HTMLDivElement;

  private readonly healthFill: HTMLDivElement;
  private readonly energyFill: HTMLDivElement;
  private readonly wardFill: HTMLDivElement;
  private readonly vitalsEl: HTMLDivElement;

  private readonly slotsEl: HTMLDivElement;
  private readonly slots: {
    root: HTMLDivElement;
    key: HTMLSpanElement;
    name: HTMLSpanElement;
    cd: HTMLDivElement;
  }[] = [];

  private readonly rosterEl: HTMLDivElement;
  private readonly rosterChips: HTMLDivElement[] = [];

  /** Red screen-edge vignette flashed when the active character takes damage. */
  private readonly damageEl: HTMLDivElement;
  /** Identity + last-seen health of the tracked active char (for damage detection). */
  private lastActive: Entity | null = null;
  private lastHealth: number | null = null;

  private visible = false;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'hud';
    // Direct children of #ui-root get pointer-events:auto from index.html; the HUD
    // is read-only and must let canvas clicks (pointer-lock) pass through.
    this.root.style.pointerEvents = 'none';
    this.root.style.display = 'none';

    // Objective / phase line (top-center).
    this.objectiveEl = document.createElement('div');
    this.objectiveEl.className = 'hud__objective';
    this.root.appendChild(this.objectiveEl);

    // Vitals (bottom-left): health bar + energy bar with ward overlay.
    this.vitalsEl = document.createElement('div');
    this.vitalsEl.className = 'hud__vitals';

    const healthBar = this.makeBar('hud__bar--health');
    this.healthFill = healthBar.fill;
    this.vitalsEl.appendChild(healthBar.root);

    const energyBar = this.makeBar('hud__bar--energy');
    this.energyFill = energyBar.fill;
    // Ward overlay sits on top of the energy track as a distinct cyan segment.
    this.wardFill = document.createElement('div');
    this.wardFill.className = 'hud__bar-ward';
    energyBar.root.appendChild(this.wardFill);
    this.vitalsEl.appendChild(energyBar.root);

    this.root.appendChild(this.vitalsEl);

    // Ability / spell slots (bottom-center).
    this.slotsEl = document.createElement('div');
    this.slotsEl.className = 'hud__slots';
    for (let i = 0; i < MAX_SLOTS; i++) {
      const slot = document.createElement('div');
      slot.className = 'hud__slot';

      const key = document.createElement('span');
      key.className = 'hud__slot-key';
      const name = document.createElement('span');
      name.className = 'hud__slot-name';
      const cd = document.createElement('div');
      cd.className = 'hud__slot-cd';

      slot.appendChild(cd);
      slot.appendChild(key);
      slot.appendChild(name);
      this.slotsEl.appendChild(slot);
      this.slots.push({ root: slot, key, name, cd });
    }
    this.root.appendChild(this.slotsEl);

    // Character switcher (bottom-right).
    this.rosterEl = document.createElement('div');
    this.rosterEl.className = 'hud__roster';
    this.root.appendChild(this.rosterEl);

    // Incoming-damage vignette (full-screen, read-only, fades itself out).
    this.damageEl = document.createElement('div');
    this.damageEl.className = 'hud__damage';
    this.damageEl.style.pointerEvents = 'none';
    this.root.appendChild(this.damageEl);

    parent.appendChild(this.root);
  }

  setVisible(visible: boolean): void {
    if (this.visible === visible) return;
    this.visible = visible;
    this.root.style.display = visible ? 'block' : 'none';
  }

  /** Sync the HUD from the active character + per-frame level info. */
  sync(active: Entity | null, info: HudInfo): void {
    if (!this.visible) return;

    const vitals = asHudVitals(active);
    this.syncDamageFlash(active, vitals);
    if (vitals) {
      this.vitalsEl.style.visibility = 'visible';
      this.healthFill.style.width = `${pct(vitals.health, vitals.maxHealth)}%`;
      // Non-casters (Saphira's fire-breath aside) still have an energy pool unless
      // maxEnergy is 0 (Roran) — hide the energy track entirely in that case.
      const hasEnergy = vitals.maxEnergy > 0;
      this.energyFill.parentElement!.style.display = hasEnergy ? 'block' : 'none';
      if (hasEnergy) {
        this.energyFill.style.width = `${pct(vitals.energy, vitals.maxEnergy)}%`;
        const wardFrac = clamp01(vitals.wardHp / ENERGY.wardHp);
        this.wardFill.style.width = `${wardFrac * 100}%`;
        this.wardFill.style.opacity = wardFrac > 0 ? '1' : '0';
      }
    } else {
      this.vitalsEl.style.visibility = 'hidden';
    }

    this.objectiveEl.textContent = info.objective;
    this.objectiveEl.style.visibility = info.objective ? 'visible' : 'hidden';

    this.syncSlots(info.spells);
    this.syncRoster(info.roster);
  }

  dispose(): void {
    this.root.remove();
  }

  // -- internals ------------------------------------------------------------

  /**
   * Trigger the red edge-flash when the SAME active character loses health since
   * the last frame. Active-only by construction: the HUD only ever tracks the
   * piloted character's vitals, and passive/invulnerable no-op damage never moves
   * health — so it never flashes. Swapping characters (identity change) or healing
   * (health rise) only re-baselines; neither flashes.
   */
  private syncDamageFlash(active: Entity | null, vitals: HudVitals | null): void {
    const health = vitals ? vitals.health : null;
    if (active !== this.lastActive) {
      // New (or no) active character: re-baseline, do not flash.
      this.lastActive = active;
      this.lastHealth = health;
      return;
    }
    const prev = this.lastHealth;
    this.lastHealth = health;
    if (prev !== null && health !== null && health < prev) {
      this.flashDamage(prev - health);
    }
  }

  /** Fire the (guarded, allocation-light) damage vignette; intensity ~scales w/ hit. */
  private flashDamage(amount: number): void {
    try {
      const el = this.damageEl;
      const intensity = (0.32 + clamp01(amount / 60) * 0.38).toFixed(3); // ~0.32..0.70
      el.style.setProperty('--dmg-flash', intensity);
      // Restart the CSS fade: clear, force reflow, re-arm (only on a hit, not per-frame).
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'hud-damage-flash 0.32s ease-out';
    } catch {
      // Cosmetic only — never let a flash break the frame.
    }
  }

  private syncSlots(spells: HudSpellSlot[]): void {
    const count = Math.min(spells.length, MAX_SLOTS);
    this.slotsEl.style.display = count > 0 ? 'flex' : 'none';
    for (let i = 0; i < MAX_SLOTS; i++) {
      const slot = this.slots[i];
      if (i >= count) {
        slot.root.style.display = 'none';
        continue;
      }
      const data = spells[i];
      slot.root.style.display = 'flex';
      slot.key.textContent = data.key;
      slot.name.textContent = data.name;
      // Cooldown sweep: a dark overlay shrinking from full to empty as it cools.
      slot.cd.style.height = `${clamp01(data.cooldownFrac) * 100}%`;
      slot.root.classList.toggle('is-ready', data.ready);
      slot.root.classList.toggle('is-busy', !data.ready);
    }
  }

  private syncRoster(roster: HudRosterEntry[]): void {
    this.rosterEl.style.display = roster.length > 0 ? 'flex' : 'none';
    // Grow/shrink the chip pool to match.
    while (this.rosterChips.length < roster.length) {
      const chip = document.createElement('div');
      chip.className = 'hud__char';
      this.rosterEl.appendChild(chip);
      this.rosterChips.push(chip);
    }
    for (let i = 0; i < this.rosterChips.length; i++) {
      const chip = this.rosterChips[i];
      const entry = roster[i];
      if (!entry) {
        chip.style.display = 'none';
        continue;
      }
      chip.style.display = 'block';
      chip.textContent = entry.name;
      chip.classList.toggle('is-active', entry.active);
      chip.classList.toggle('is-unavailable', !entry.available);
    }
  }

  private makeBar(modifier: string): { root: HTMLDivElement; fill: HTMLDivElement } {
    const root = document.createElement('div');
    root.className = `hud__bar ${modifier}`;
    const fill = document.createElement('div');
    fill.className = 'hud__bar-fill';
    root.appendChild(fill);
    return { root, fill };
  }
}

function pct(value: number, max: number): number {
  if (max <= 0) return 0;
  return clamp01(value / max) * 100;
}

function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return value < 0 ? 0 : value > 1 ? 1 : value;
}
