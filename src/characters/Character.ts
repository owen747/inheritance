// characters/Character.ts
// Base playable controller (implements the shared `Combatant` contract) plus the
// `GroundCharacter` locomotion+melee base reused by BOTH Eragon and Roran. Energy
// and health live here so casters exist before the magic system touches them.
//
// Lifecycle: characters are Entities driven by the EntityManager each fixed step.
// `active` (set by the PlayerController) decides whether this step reads input
// (piloted) or runs passive/idle behaviour. A non-piloted character is passive AND
// invulnerable — `takeDamage` is a no-op while inactive.
import * as THREE from 'three';
import { Entity, Team } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import type { Input, ControlMode, InputAction } from '../core/Input';
import type { AudioManager } from '../core/AudioManager';
import { damageThroughWard, regenEnergy } from '../combat/Health';
import {
  ComboStateMachine,
  type ComboConfig,
} from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { ENERGY, GROUND, COMBAT } from '../config/gameConfig';

export type { ControlMode } from '../core/Input';

/** Input actions whose per-step rising edge characters consume. */
const EDGE_ACTIONS: InputAction[] = ['attack', 'dodge', 'spell1', 'spell2', 'spell3', 'spell4'];

const UP = new THREE.Vector3(0, 1, 0);

export interface CharacterOptions {
  team?: Team;
  maxHealth: number;
  maxEnergy: number;
}

/**
 * Base for every player-pilotable character. Owns vitals, the active/passive
 * gate, hitstop, shout bookkeeping, and per-step input edge detection (so it is
 * correct even when several fixed steps run inside one rendered frame — unlike the
 * frame-scoped `Input.justPressed`).
 */
export abstract class Character extends Entity {
  team: Team;
  maxHealth: number;
  health: number;
  maxEnergy: number;
  energy: number;
  wardHp = 0;

  /** Brief freeze applied by the CombatSystem on a clean hit. */
  hitstop = 0;
  godmode = false;
  /** True only while piloted by the player. */
  active = false;
  /**
   * Set once the ACTIVE character's health reaches 0. A downed character is a
   * frozen corpse: it takes no input, runs no behaviour, deals no damage, and is
   * no longer a valid swap target (the PlayerController auto-swaps off it). Only
   * the piloted character can be brought down — passive allies are invulnerable.
   */
  downed = false;

  /** Last shouted Ancient-Language word + how long ago (for HUD floating text). */
  lastShoutWord: string | null = null;
  lastShoutAge = Infinity;
  /** Optional sink the HUD/level can hook to surface floating text. */
  onShout: ((word: string) => void) | null = null;

  protected readonly input: Input;
  protected readonly audio: AudioManager | null;

  private readonly prevHeld = new Map<InputAction, boolean>();

  abstract readonly controlMode: ControlMode;
  abstract readonly magicEnabled: boolean;

  constructor(input: Input, options: CharacterOptions, audio: AudioManager | null = null) {
    super();
    this.isCombatant = true;
    this.input = input;
    this.audio = audio;
    this.team = options.team ?? 'player';
    this.maxHealth = options.maxHealth;
    this.health = options.maxHealth;
    this.maxEnergy = options.maxEnergy;
    this.energy = options.maxEnergy;
  }

  setActive(on: boolean): void {
    if (this.active === on) return;
    this.active = on;
    this.onActiveChanged(on);
  }

  /** Increase the energy pool (Eldunarí pickups); fills the new headroom. */
  setMaxEnergy(max: number): void {
    const headroom = max - this.maxEnergy;
    this.maxEnergy = max;
    if (headroom > 0) this.energy = Math.min(max, this.energy + headroom);
  }

  /** Invulnerable while not piloted (passive ally), downed, godmode, or in i-frames. */
  get invulnerable(): boolean {
    return !this.active || this.downed || this.godmode || this.inIFrames;
  }

  protected get inIFrames(): boolean {
    return false;
  }

  shout(word: string): void {
    this.lastShoutWord = word;
    this.lastShoutAge = 0;
    this.audio?.play('shout');
    this.onShout?.(word);
  }

  takeDamage(amount: number, _src?: Entity): void {
    if (this.invulnerable) return;
    const wardBefore = this.wardHp;
    damageThroughWard(this, amount);
    if (wardBefore > 0 && this.wardHp === 0) this.audio?.play('ward-break');
    // Only the active character reaches here (passive allies are invulnerable);
    // hitting 0 takes it out of the fight as a frozen corpse.
    if (this.health <= 0 && !this.downed) this.downed = true;
  }

  override update(dt: number, ctx: EngineContext): void {
    this.lastShoutAge += dt;

    // Downed: a frozen corpse. No control, no combo, no regen — just stays put.
    if (this.downed) return;

    if (this.hitstop > 0) {
      // Frozen: bleed the hitstop timer but take no action this step.
      this.hitstop = Math.max(0, this.hitstop - dt);
      this.refreshEdges();
      return;
    }

    if (this.active) this.controlActive(dt, ctx);
    else this.controlPassive(dt, ctx);

    regenEnergy(this, dt, ENERGY.regenPerSec);
    this.refreshEdges();
  }

  /** True only on the fixed step the action transitions up -> down. */
  protected justPressedStep(action: InputAction): boolean {
    return this.input.pressed(action) && !(this.prevHeld.get(action) ?? false);
  }

  private refreshEdges(): void {
    for (const action of EDGE_ACTIONS) this.prevHeld.set(action, this.input.pressed(action));
  }

  protected abstract controlActive(dt: number, ctx: EngineContext): void;
  protected controlPassive(_dt: number, _ctx: EngineContext): void {}
  protected onActiveChanged(_on: boolean): void {}
}

// ---------------------------------------------------------------------------
// GroundCharacter — shared locomotion + sword/hammer combo (Eragon AND Roran).
// ---------------------------------------------------------------------------
const _fwd = new THREE.Vector3();
const _right = new THREE.Vector3();
const _move = new THREE.Vector3();

/**
 * Ground biped: WASD locomotion relative to a mouse-driven heading, a dodge-roll
 * with i-frames, and an input-buffered melee combo whose ACTIVE window exposes a
 * world-space hit sphere to the CombatSystem. Subclasses add abilities (Eragon =
 * spells; Roran = none) via {@link handleAbilities}.
 */
export abstract class GroundCharacter extends Character implements MeleeAttacker {
  readonly controlMode: ControlMode = 'GROUND';

  protected readonly combo: ComboStateMachine;
  private yaw = 0;
  private readonly strike: MeleeStrike;

  constructor(
    input: Input,
    options: CharacterOptions,
    comboConfig: ComboConfig,
    audio: AudioManager | null = null,
  ) {
    super(input, options, audio);
    this.combo = new ComboStateMachine(comboConfig);
    this.collider = { radius: 0.9 };
    this.position.y = GROUND.groundY;
    // Reusable strike; its hitSet is the combo's (one hit per target per swing).
    this.strike = {
      team: this.team,
      center: new THREE.Vector3(),
      radius: 0,
      damage: 0,
      knockback: 0,
      hitstop: COMBAT.hitstop,
      hitSet: this.combo.hitSet,
    };
  }

  protected override get inIFrames(): boolean {
    return this.combo.inIFrames;
  }

  /** MeleeAttacker: live hit sphere during ACTIVE frames, else null. */
  currentStrike(): MeleeStrike | null {
    if (this.downed) return null;
    const step = this.combo.activeStep;
    if (!step) return null;
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    this.strike.center.copy(this.position).addScaledVector(_fwd, step.range);
    this.strike.center.y += 1.0;
    this.strike.radius = step.radius;
    this.strike.damage = step.damage;
    this.strike.knockback = step.knockback;
    this.strike.team = this.team;
    return this.strike;
  }

  protected override controlActive(dt: number, ctx: EngineContext): void {
    // Heading from the mouse-X aim axis (allocation-free).
    this.yaw -= this.input.axis('yaw') * GROUND.turnRate;
    this.quaternion.setFromAxisAngle(UP, this.yaw);

    // Combo + dodge edges.
    if (this.justPressedStep('dodge')) this.combo.pressDodge();
    else if (this.justPressedStep('attack')) this.combo.pressAttack();
    this.combo.update(dt);

    // Locomotion.
    _fwd.set(0, 0, -1).applyQuaternion(this.quaternion);
    _right.set(1, 0, 0).applyQuaternion(this.quaternion);
    const fIn = (this.input.pressed('forward') ? 1 : 0) - (this.input.pressed('back') ? 1 : 0);
    const sIn = (this.input.pressed('right') ? 1 : 0) - (this.input.pressed('left') ? 1 : 0);
    _move.set(0, 0, 0).addScaledVector(_fwd, fIn).addScaledVector(_right, sIn);

    if (this.combo.isRolling) {
      // Commit a roll along input dir (or forward if neutral).
      if (_move.lengthSq() < 1e-6) _move.copy(_fwd);
      _move.normalize();
      this.position.addScaledVector(_move, this.combo.rollSpeed * dt);
    } else if (_move.lengthSq() > 1e-6) {
      _move.normalize();
      const speed = this.combo.isAttacking
        ? GROUND.moveSpeed * GROUND.attackMoveScale
        : GROUND.moveSpeed;
      this.position.addScaledVector(_move, speed * dt);
    }

    this.position.y = GROUND.groundY;
    this.handleAbilities(dt, ctx);
  }

  protected override controlPassive(dt: number, _ctx: EngineContext): void {
    // Passive ally: finish any in-flight swing/roll, otherwise idle on the ground.
    this.combo.update(dt);
    this.position.y = GROUND.groundY;
  }

  /** Subclass hook for spells / special moves. Roran (magic disabled) is a no-op. */
  protected handleAbilities(_dt: number, _ctx: EngineContext): void {}

  /** Expose current heading (radians about +Y) for subclasses. */
  protected get heading(): number {
    return this.yaw;
  }

  /** Initialise heading from a quaternion-free yaw (used at spawn). */
  protected setHeading(yaw: number): void {
    this.yaw = yaw;
    this.quaternion.setFromAxisAngle(UP, yaw);
  }
}
