// combat/ComboStateMachine.ts
// Input-buffered melee combo: IDLE -> WINDUP -> ACTIVE -> RECOVERY -> (chain|IDLE),
// with a dodge that cancels the current swing/recovery into a ROLL (i-frames).
// Pure timing/state logic — it owns NO transform and NO scene refs; the owning
// character converts the ACTIVE step into a world-space hit sphere.
import { COMBAT } from '../config/gameConfig';

export type ComboState = 'IDLE' | 'WINDUP' | 'ACTIVE' | 'RECOVERY' | 'ROLL';

/** One swing in a combo chain. Times are seconds; ranges are world units. */
export interface ComboStep {
  windup: number;
  active: number;
  recovery: number;
  damage: number;
  knockback: number;
  /** Forward reach of the hit sphere from the attacker's centre. */
  range: number;
  /** Hit sphere radius. */
  radius: number;
  /** True for a heavy/finisher swing (executes staggered elites). */
  finisher?: boolean;
}

export interface ComboConfig {
  steps: ComboStep[];
  bufferTime?: number;
  rollDuration?: number;
  rollIFrames?: number;
  rollSpeed?: number;
  /**
   * Optional STANDALONE heavy swing. Entered via {@link ComboStateMachine.pressHeavy};
   * it is NOT part of `steps[]`, cannot be chain-buffered from normal swings, and
   * normal combos cannot buffer into it. Typically `finisher: true`.
   */
  heavyStep?: ComboStep;
}

/**
 * Drives one attacker's melee timing. The owner calls `pressAttack` /
 * `pressDodge` on input edges and `update(dt)` each fixed step, then reads
 * `activeStep` (non-null only during ACTIVE frames) + `hitSet` to resolve hits.
 */
export class ComboStateMachine {
  state: ComboState = 'IDLE';

  private readonly steps: ComboStep[];
  private readonly heavyStep: ComboStep | null;
  private readonly bufferTime: number;
  readonly rollDuration: number;
  readonly rollIFrames: number;
  readonly rollSpeed: number;

  private stepIndex = -1;
  private timer = 0;
  /** Duration of the CURRENT timed phase (windup/active/recovery) — for `progress`. */
  private phaseLen = 0;
  private buffered = false;
  private bufferAge = 0;
  private rollTimer = 0;
  /** True while the standalone heavy swing owns WINDUP/ACTIVE/RECOVERY (not in steps[]). */
  private heavy = false;

  /** Entity ids already struck during the CURRENT active window (no double-hit). */
  readonly hitSet = new Set<number>();

  constructor(config: ComboConfig) {
    if (config.steps.length === 0) {
      throw new Error('ComboStateMachine requires at least one step.');
    }
    this.steps = config.steps;
    this.heavyStep = config.heavyStep ?? null;
    this.bufferTime = config.bufferTime ?? COMBAT.comboBuffer;
    this.rollDuration = config.rollDuration ?? COMBAT.rollDuration;
    this.rollIFrames = config.rollIFrames ?? COMBAT.rollIFrames;
    this.rollSpeed = config.rollSpeed ?? COMBAT.rollSpeed;
  }

  /** Buffer an attack press. Starts the first swing from IDLE immediately. */
  pressAttack(): void {
    if (this.state === 'ROLL') return; // roll has commitment; no attack-buffer
    if (this.state === 'IDLE') {
      this.enterStep(0);
    } else {
      this.buffered = true;
      this.bufferAge = 0;
    }
  }

  /**
   * Enter the STANDALONE heavy swing directly. Ignored during ROLL (roll has
   * commitment) and when no heavyStep is configured. It does NOT chain from
   * `steps[]` and cannot be buffered into; it interrupts the current normal swing.
   */
  pressHeavy(): void {
    if (this.state === 'ROLL') return;
    if (!this.heavyStep) return;
    this.heavy = true;
    this.stepIndex = -1;
    this.buffered = false;
    this.state = 'WINDUP';
    this.timer = this.heavyStep.windup;
    this.phaseLen = this.heavyStep.windup;
    this.hitSet.clear();
  }

  /**
   * Attempt to cancel the current action into a dodge-roll. Always allowed except
   * mid-roll. Returns true if a roll started.
   */
  pressDodge(): boolean {
    if (this.state === 'ROLL') return false;
    this.state = 'ROLL';
    this.rollTimer = this.rollDuration;
    this.stepIndex = -1;
    this.heavy = false;
    this.buffered = false;
    this.hitSet.clear();
    return true;
  }

  update(dt: number): void {
    if (this.buffered) {
      this.bufferAge += dt;
      if (this.bufferAge > this.bufferTime) this.buffered = false;
    }

    switch (this.state) {
      case 'IDLE':
        return;
      case 'ROLL':
        this.rollTimer -= dt;
        if (this.rollTimer <= 0) this.state = 'IDLE';
        return;
      default:
        break;
    }

    this.timer -= dt;
    if (this.timer > 0) return;

    const step = this.heavy ? this.heavyStep! : this.steps[this.stepIndex];
    if (this.state === 'WINDUP') {
      this.state = 'ACTIVE';
      this.timer = step.active;
      this.phaseLen = step.active;
      this.hitSet.clear(); // fresh window -> a target can be hit once per swing
    } else if (this.state === 'ACTIVE') {
      this.state = 'RECOVERY';
      this.timer = step.recovery;
      this.phaseLen = step.recovery;
    } else if (this.state === 'RECOVERY') {
      if (this.heavy) {
        // Heavy is standalone: never chains; back to IDLE after recovery.
        this.heavy = false;
        this.buffered = false;
        this.state = 'IDLE';
        this.stepIndex = -1;
        return;
      }
      const next = this.stepIndex + 1;
      if (this.buffered && next < this.steps.length) {
        this.buffered = false;
        this.enterStep(next);
      } else {
        this.state = 'IDLE';
        this.stepIndex = -1;
      }
    }
  }

  /** The step whose hit sphere is live RIGHT NOW, else null. */
  get activeStep(): ComboStep | null {
    if (this.state !== 'ACTIVE') return null;
    return this.heavy ? this.heavyStep : this.steps[this.stepIndex];
  }

  get isBusy(): boolean {
    return this.state !== 'IDLE';
  }

  get isAttacking(): boolean {
    return this.state === 'WINDUP' || this.state === 'ACTIVE' || this.state === 'RECOVERY';
  }

  get isRolling(): boolean {
    return this.state === 'ROLL';
  }

  /**
   * Normalized 0..1 progress through the CURRENT timed phase (WINDUP/ACTIVE/
   * RECOVERY): 0 at phase start, 1 at phase end. 0 outside a timed phase (IDLE/
   * ROLL). Drives the cosmetic weapon-swing pose so the arc matches the hit timing.
   */
  get progress(): number {
    if (this.phaseLen <= 0) return 0;
    const p = 1 - this.timer / this.phaseLen;
    return p < 0 ? 0 : p > 1 ? 1 : p;
  }

  /** Inside the i-frame window at the START of the roll. */
  get inIFrames(): boolean {
    return this.state === 'ROLL' && this.rollDuration - this.rollTimer < this.rollIFrames;
  }

  private enterStep(index: number): void {
    this.stepIndex = index;
    this.state = 'WINDUP';
    this.timer = this.steps[index].windup;
    this.phaseLen = this.steps[index].windup;
    this.hitSet.clear();
  }
}
