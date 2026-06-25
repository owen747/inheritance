// characters/PlayerController.ts
// Owns which character is currently PILOTED. Handles the swap hotkey (F) cycling
// among the characters the level marks available, sets every non-piloted character
// passive + invulnerable, and switches the camera + input mode atomically with the
// active character (FLIGHT for Saphira, GROUND for Eragon/Roran).
//
// It is NOT an Entity: the level ticks `update(dt)` from its own `Level.update`
// (one fixed step). Swap edge detection is tracked internally so it fires once even
// when several steps run inside one rendered frame.
import type { Entity } from '../core/Entity';
import type { Input, ControlMode } from '../core/Input';
import type { Character } from './Character';

/** What the controller needs from the Game to swap atomically. */
export interface PlayerHost {
  setActiveEntity(entity: Entity | null): void;
  setControlMode(mode: ControlMode): void;
  isGodmode(): boolean;
}

export class PlayerController {
  private roster: Character[] = [];
  private activeIndex = 0;
  private prevSwapHeld = false;

  constructor(
    private readonly input: Input,
    private readonly host: PlayerHost,
  ) {}

  /**
   * Set the swappable characters for the current level/phase. Activates
   * `startIndex`, makes the rest passive + invulnerable, and syncs camera/input.
   */
  setRoster(characters: Character[], startIndex = 0): void {
    this.roster = characters;
    this.activeIndex = Math.min(startIndex, Math.max(0, characters.length - 1));
    for (let i = 0; i < characters.length; i++) {
      characters[i].setActive(i === this.activeIndex);
    }
    this.syncToActive();
  }

  get active(): Character | null {
    return this.roster[this.activeIndex] ?? null;
  }

  update(_dt: number): void {
    // Auto-swap off a freshly-downed pilot to the next living member BEFORE the
    // manual swap edge, so the player is never stuck controlling a corpse. If no
    // living member remains, the active stays put (frozen) and the level resolves
    // the phase as LOST.
    const active = this.active;
    if (active && active.downed) this.swapToNextLiving();

    const swapHeld = this.input.pressed('swap');
    if (swapHeld && !this.prevSwapHeld && this.roster.length > 1) this.cycle();
    this.prevSwapHeld = swapHeld;

    const current = this.active;
    if (current) current.godmode = this.host.isGodmode();
  }

  /** Manual (F) cycle to the next LIVING swappable character; skips downed/dead. */
  private cycle(): void {
    const next = this.nextLivingIndex(this.activeIndex);
    if (next < 0 || next === this.activeIndex) return;
    this.switchTo(next);
  }

  /** Forced swap when the active pilot is downed; no-op if no one is left alive. */
  private swapToNextLiving(): void {
    const next = this.nextLivingIndex(this.activeIndex);
    if (next < 0) return;
    this.switchTo(next);
  }

  /**
   * Index of the next swappable character after `from` that can still fight
   * (alive and not downed), searched cyclically. Returns -1 when none remain.
   */
  private nextLivingIndex(from: number): number {
    const n = this.roster.length;
    for (let step = 1; step <= n; step++) {
      const idx = (from + step) % n;
      const cand = this.roster[idx];
      if (cand && !cand.downed && cand.health > 0) return idx;
    }
    return -1;
  }

  private switchTo(index: number): void {
    const prev = this.active;
    this.activeIndex = index;
    const next = this.active;
    if (prev) prev.setActive(false);
    if (next) next.setActive(true);
    this.syncToActive();
  }

  private syncToActive(): void {
    const active = this.active;
    if (!active) {
      this.host.setActiveEntity(null);
      return;
    }
    this.host.setActiveEntity(active);
    this.host.setControlMode(active.controlMode);
  }
}
