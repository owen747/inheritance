// characters/Roran.ts
// MINIMAL swap-body (per plan): reuses Eragon's GroundCharacter locomotion +
// ComboStateMachine with a HAMMER mesh and magic DISABLED. No bespoke kit — he
// only proves the 3-way swap seam; the full Roran kit is deferred to L2.
import type { Input } from '../core/Input';
import type { AudioManager } from '../core/AudioManager';
import { GroundCharacter } from './Character';
import type { ComboConfig } from '../combat/ComboStateMachine';
import { buildRider, buildHammer } from '../art/meshes';
import { COMBAT } from '../config/gameConfig';

// Heavier, slower than the sword: fewer hits, more damage + knockback.
const HAMMER_COMBO: ComboConfig = {
  steps: [
    { windup: 0.16, active: 0.14, recovery: 0.4, damage: 24, knockback: 2.4, range: 1.9, radius: 1.1 },
    { windup: 0.22, active: 0.18, recovery: 0.55, damage: 40, knockback: 4.0, range: 2.1, radius: 1.3 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

/** Roran — Eragon's ground kit reskinned with a war-hammer; magic disabled. */
export class Roran extends GroundCharacter {
  readonly magicEnabled = false;

  constructor(input: Input, audio: AudioManager | null = null) {
    super(input, { team: 'player', maxHealth: 130, maxEnergy: 0 }, HAMMER_COMBO, audio);

    const rider = buildRider({ skin: 'eragonSkin', garb: 'roranGarb', hair: 'eragonHair' });
    rider.userData.weaponMount.add(buildHammer());
    this.mesh = rider;
    this.collider = { radius: 0.95 };
  }

  // No handleAbilities override: magic is disabled, so spell keys do nothing.
}
