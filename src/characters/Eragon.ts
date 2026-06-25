// characters/Eragon.ts
// Ground caster: GroundCharacter locomotion + a 3-hit sword combo + four hotkey
// Ancient-Language spells (Digit1-4) cast through the shared SpellSystem.
import type { EngineContext } from '../core/EngineContext';
import type { Input, InputAction } from '../core/Input';
import type { AudioManager } from '../core/AudioManager';
import { GroundCharacter } from './Character';
import type { ComboConfig } from '../combat/ComboStateMachine';
import type { SpellSystem } from '../magic/SpellSystem';
import { DEFAULT_SPELL_LOADOUT, type Spell } from '../magic/spells';
import { buildRider, buildSword } from '../art/meshes';
import { COMBAT } from '../config/gameConfig';

const SWORD_COMBO: ComboConfig = {
  steps: [
    { windup: 0.1, active: 0.12, recovery: 0.25, damage: 14, knockback: 0.8, range: 1.8, radius: 1.0 },
    { windup: 0.09, active: 0.12, recovery: 0.24, damage: 16, knockback: 0.9, range: 1.9, radius: 1.0 },
    { windup: 0.12, active: 0.16, recovery: 0.38, damage: 24, knockback: 2.2, range: 2.1, radius: 1.15 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

const SPELL_SLOTS: InputAction[] = ['spell1', 'spell2', 'spell3', 'spell4'];

/** Eragon — sword combo + brisingr / thrysta vindr / skölir / waíse heill. */
export class Eragon extends GroundCharacter {
  readonly magicEnabled = true;

  private readonly spells: SpellSystem;
  private readonly loadout: (Spell | undefined)[];

  constructor(input: Input, spells: SpellSystem, audio: AudioManager | null = null) {
    super(input, { team: 'player', maxHealth: 100, maxEnergy: 60 }, SWORD_COMBO, audio);
    this.spells = spells;
    this.loadout = DEFAULT_SPELL_LOADOUT.slice(0, 4);

    const rider = buildRider({ skin: 'eragonSkin', garb: 'eragonGarb', hair: 'eragonHair' });
    rider.userData.weaponMount.add(buildSword());
    this.mesh = rider;
    this.collider = { radius: 0.9 };
  }

  protected override handleAbilities(dt: number, ctx: EngineContext): void {
    this.spells.tick(this, dt);
    for (let i = 0; i < SPELL_SLOTS.length; i++) {
      if (!this.justPressedStep(SPELL_SLOTS[i])) continue;
      const spell = this.loadout[i];
      if (spell) this.spells.cast(this, spell, ctx);
    }
  }
}
