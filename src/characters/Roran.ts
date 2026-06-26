// characters/Roran.ts
// Roran Stronghammer — the TANK of the swap roster. Reuses GroundCharacter
// locomotion + the ComboStateMachine with a war-hammer (magic disabled), but adds
// his full L2 kit on top:
//  - Toughness: a lowered `damageTakenScale` so he soaks the punishment Eragon/
//    Saphira can't (he is the answer to the Armored Brute hard counter).
//  - A heavy hammer FINISHER step (bigger/slower than Eragon's) that executes a
//    staggered Laughing Soldier.
//  - Rally (Digit1): a hand-rolled cooldown (no energy) that wards the active
//    Roran AND heals the benched, non-regenerating roster — the rotation payoff.
import type { Input } from '../core/Input';
import type { AudioManager } from '../core/AudioManager';
import type { EngineContext } from '../core/EngineContext';
import { GroundCharacter } from './Character';
import type { ComboConfig } from '../combat/ComboStateMachine';
import { healHealth } from '../combat/Health';
import { buildRider, buildHammer } from '../art/meshes';
import { getVfx } from '../art/vfx';
import { colorOf } from '../art/palette';
import { COMBAT, RORAN, RALLY } from '../config/gameConfig';

// Heavier, slower than the sword: fewer hits, more damage + knockback. The heavy
// step is a big, committed hammer finisher — bigger reach/damage than Eragon's.
const HAMMER_COMBO: ComboConfig = {
  steps: [
    { windup: 0.16, active: 0.14, recovery: 0.4, damage: 24, knockback: 2.4, range: 1.9, radius: 1.1 },
    { windup: 0.22, active: 0.18, recovery: 0.55, damage: 40, knockback: 4.0, range: 2.1, radius: 1.3 },
  ],
  bufferTime: COMBAT.comboBuffer,
  heavyStep: {
    windup: 0.45,
    active: 0.14,
    recovery: 0.5,
    damage: 44,
    knockback: 6.0,
    range: 2.7,
    radius: 1.5,
    finisher: true,
  },
};

/** Roran — war-hammer tank: toughness + a heavy finisher + Rally; magic disabled. */
export class Roran extends GroundCharacter {
  readonly magicEnabled = false;

  /** Rally cooldown remaining (seconds). Hand-rolled — Rally costs no energy. */
  rallyCd = 0;

  constructor(input: Input, audio: AudioManager | null = null) {
    super(input, { team: 'player', maxHealth: 130, maxEnergy: 0 }, HAMMER_COMBO, audio);
    // Toughness: take reduced damage so he can stand in where the others can't.
    this.damageTakenScale = RORAN.damageTakenScale;

    const rider = buildRider({ skin: 'eragonSkin', garb: 'roranGarb', hair: 'eragonHair' });
    rider.userData.weaponMount.add(buildHammer());
    this.mesh = rider;
    this.collider = { radius: 0.95 };
  }

  /**
   * Rally on spell1 (Digit1). Magic is disabled so the spell keys are otherwise
   * unused; we repurpose Digit1 for a hand-rolled, energy-free Rally.
   */
  protected override handleAbilities(dt: number, ctx: EngineContext): void {
    if (this.rallyCd > 0) this.rallyCd = Math.max(0, this.rallyCd - dt);
    if (this.justPressedStep('spell1') && this.rallyCd <= 0) this.castRally(ctx);
  }

  /** Ward the active Roran + heal every benched ally; start the cooldown. */
  private castRally(ctx: EngineContext): void {
    this.wardHp += RALLY.selfWard;
    for (const ally of ctx.query('player')) {
      if (ally !== this) healHealth(ally, RALLY.heal);
    }
    this.rallyCd = RALLY.cooldown;
    ctx.audio.play('shout');
    getVfx()?.burst(this.position, { count: 30, color: colorOf('wardCyan'), speed: 7, life: 0.6, gravity: -3 });
  }
}
