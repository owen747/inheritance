// combat/Health.ts
// Helper functions over the SHARED `Combatant` contract. The `Combatant` type
// itself lives in core/Entity.ts (the engine foundation) so EngineContext /
// EntityManager can reference it; we import + RE-EXPORT it here for convenience
// and add the vitals math (ward-absorbed damage, energy=life-force spend, regen,
// clamps). There is exactly ONE `Combatant` type in the codebase.
import type { Combatant } from '../core/Entity';

export type { Combatant } from '../core/Entity';

/**
 * Apply `amount` damage to a combatant, absorbed by its ward first and only then
 * bleeding into health. Both bars are clamped at >= 0 (never NaN/negative).
 * Does NOT decide death — callers (Character / enemy / level) interpret `health`.
 */
export function damageThroughWard(target: Combatant, amount: number): void {
  let remaining = Math.max(0, amount);
  if (target.wardHp > 0) {
    const absorbed = Math.min(target.wardHp, remaining);
    target.wardHp = Math.max(0, target.wardHp - absorbed);
    remaining -= absorbed;
  }
  target.health = Math.max(0, target.health - remaining);
}

/**
 * Pay `cost` using **energy = life-force**: spend energy first, and only bleed the
 * REMAINDER from health. Refuses (returns false, spends nothing) if the caster
 * cannot cover the deficit with health to spare — you can never cast yourself to
 * death. Both bars are clamped >= 0.
 *
 * @returns true if the cost was paid (caster may proceed), false if it fizzles.
 */
export function payLifeForce(caster: Combatant, cost: number): boolean {
  if (cost <= 0) return true;
  if (caster.energy >= cost) {
    caster.energy -= cost;
  } else {
    const deficit = cost - caster.energy;
    // Strict `>`: must have life-force left over; can't suicide-cast to exactly 0.
    if (caster.health > deficit) {
      caster.energy = 0;
      caster.health -= deficit;
    } else {
      return false;
    }
  }
  caster.energy = Math.max(0, caster.energy);
  caster.health = Math.max(0, caster.health);
  return true;
}

/** True if the caster can afford `cost` from energy + spare health (no mutation). */
export function canAfford(caster: Combatant, cost: number): boolean {
  if (cost <= 0) return true;
  if (caster.energy >= cost) return true;
  return caster.health > cost - caster.energy;
}

/** Regenerate energy toward `maxEnergy`, frame-rate independent. */
export function regenEnergy(caster: Combatant, dt: number, ratePerSec: number): void {
  if (caster.energy >= caster.maxEnergy) return;
  caster.energy = Math.min(caster.maxEnergy, caster.energy + ratePerSec * dt);
}

/** Heal toward `maxHealth`, clamped. */
export function healHealth(target: Combatant, amount: number): void {
  target.health = Math.min(target.maxHealth, Math.max(0, target.health + Math.max(0, amount)));
}

/** Clamp every vital bar into its valid range (defensive; never NaN/negative). */
export function clampVitals(c: Combatant): void {
  c.health = clampToMax(c.health, c.maxHealth);
  c.energy = clampToMax(c.energy, c.maxEnergy);
  c.wardHp = Math.max(0, Number.isFinite(c.wardHp) ? c.wardHp : 0);
}

function clampToMax(value: number, max: number): number {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  return value > max ? max : value;
}
