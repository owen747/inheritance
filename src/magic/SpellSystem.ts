// magic/SpellSystem.ts
// Cast resolution shared by players AND enemies. Enforces per-caster cooldowns,
// spends energy=life-force (bleeding only the remainder from HP), fires the
// caster's shout, then runs the spell's world effect. Holds cooldown state in a
// WeakMap so casters carry no engine bookkeeping and are GC'd cleanly.
import type { Combatant } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import { payLifeForce, canAfford } from '../combat/Health';
import type { Spell } from './spells';

export type CastResult = 'cast' | 'cooldown' | 'insufficient';

/**
 * Stateless-per-cast spell resolver with cooldown tracking. One instance is
 * shared by every caster in a level; `update(dt)` ticks all cooldowns.
 */
export class SpellSystem {
  private readonly cooldowns = new WeakMap<Combatant, Map<string, number>>();

  /** True if `caster` could cast `spell` right now (off cooldown + can afford). */
  canCast(caster: Combatant, spell: Spell): boolean {
    return this.remainingCooldown(caster, spell.id) <= 0 && canAfford(caster, spell.cost);
  }

  /** Seconds left before `caster` may recast `spellId` (0 = ready). */
  remainingCooldown(caster: Combatant, spellId: string): number {
    return this.cooldowns.get(caster)?.get(spellId) ?? 0;
  }

  /**
   * Attempt a cast. On success: spends life-force, shouts the word, runs the
   * effect, and starts the cooldown. On failure: spends nothing.
   */
  cast(caster: Combatant, spell: Spell, ctx: EngineContext): CastResult {
    if (this.remainingCooldown(caster, spell.id) > 0) return 'cooldown';
    if (!payLifeForce(caster, spell.cost)) return 'insufficient';

    caster.shout(spell.word);
    spell.effect(caster, ctx);
    // The shout is the voice; this adds the spell's magical layer (heal chimes).
    ctx.audio.play(spell.kind === 'heal' ? 'heal' : 'cast');

    let map = this.cooldowns.get(caster);
    if (!map) {
      map = new Map<string, number>();
      this.cooldowns.set(caster, map);
    }
    map.set(spell.id, spell.cooldown);
    return 'cast';
  }

  /** Advance cooldowns for a single caster (called from its update). */
  tick(caster: Combatant, dt: number): void {
    const map = this.cooldowns.get(caster);
    if (!map) return;
    for (const [id, t] of map) {
      const next = t - dt;
      if (next <= 0) map.delete(id);
      else map.set(id, next);
    }
  }
}
