// enemies/Murtagh.ts
// Enemy RIDER AI (ground). Murtagh duels Eragon: he closes to sword range and runs
// a telegraphed 3-hit combo, and OCCASIONALLY casts an Ancient-Language spell
// through the SHARED SpellSystem (he is a `Combatant`, so the exact same magic
// pipeline players use). Locomotion is yaw-faced ground movement on the XZ plane;
// the sword hit sphere mirrors GroundCharacter's `currentStrike`.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy } from './Enemy';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import type { SpellSystem } from '../magic/SpellSystem';
import { SPELL_BY_ID, type Spell } from '../magic/spells';
import { buildRider, buildSword, riderPartsOf } from '../art/meshes';
import { RiderAnimator } from '../art/anim';
import { getVfx } from '../art/vfx';
import { COMBAT, GROUND } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const MURTAGH = {
  maxHealth: 150,
  maxEnergy: 80,
  aggroRange: 70,
  colliderRadius: 0.9,
  moveSpeed: 6.2,
  /** Orientation slerp rate (lambda). */
  turnRate: 11,
  /** Start swinging within this range. */
  meleeRange: 2.6,
  /** Stop closing once this near (so he doesn't shove into the player). */
  approachRange: 2.0,
  /** Cast only when the target sits in this band. */
  spellRangeMin: 7,
  spellRangeMax: 32,
  /** Seconds between spell attempts (randomised in this band). */
  spellEveryMin: 4.5,
  spellEveryMax: 8.0,
  /** Readable charge before the spell fires. */
  spellWindup: 0.5,
} as const;

const SWORD_COMBO: ComboConfig = {
  steps: [
    { windup: 0.16, active: 0.12, recovery: 0.3, damage: 13, knockback: 0.9, range: 1.9, radius: 1.05 },
    { windup: 0.14, active: 0.12, recovery: 0.3, damage: 15, knockback: 1.0, range: 2.0, radius: 1.05 },
    { windup: 0.18, active: 0.16, recovery: 0.46, damage: 22, knockback: 2.4, range: 2.2, radius: 1.2 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _dir = new THREE.Vector3();
const _flat = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _move = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/** Murtagh — crimson rider. Sword combos + occasional spell; can be defeated. */
export class Murtagh extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;
  private readonly spells: SpellSystem;

  private spellTimer: number;
  private casting = false;
  private castWindup = 0;
  private pendingSpell: Spell | null = null;
  private readonly riderAnim = new RiderAnimator();

  constructor(spells: SpellSystem, audio: AudioManager | null = null) {
    super(
      {
        maxHealth: MURTAGH.maxHealth,
        maxEnergy: MURTAGH.maxEnergy,
        colliderRadius: MURTAGH.colliderRadius,
        aggroRange: MURTAGH.aggroRange,
      },
      audio,
    );
    this.spells = spells;
    this.combo = new ComboStateMachine(SWORD_COMBO);
    this.spellTimer = MURTAGH.spellEveryMin;

    const rider = buildRider({ garb: 'murtaghGarb' });
    rider.userData.weaponMount.add(buildSword());
    this.mesh = rider;
    this.position.y = GROUND.groundY;

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

  /** MeleeAttacker: live sword hit sphere during ACTIVE frames, else null. */
  currentStrike(): MeleeStrike | null {
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

  /** Per-frame walk bob + combo-driven sword swing. */
  protected override animateBody(dt: number): void {
    if (!this.mesh) return;
    this.riderAnim.update(
      dt,
      riderPartsOf(this.mesh),
      this.position,
      this.combo.state,
      this.combo.progress,
      MURTAGH.moveSpeed,
      false,
    );
  }

  protected think(dt: number, ctx: EngineContext): void {
    this.spells.tick(this, dt);
    this.combo.update(dt);
    this.position.y = GROUND.groundY;

    const target = this.target;
    if (!target) {
      this.casting = false;
      this.pendingSpell = null;
      return;
    }

    // Face the target on the horizontal plane.
    _dir.copy(target.position).sub(this.position);
    _flat.set(_dir.x, 0, _dir.z);
    const dist = _dir.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _targetQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-MURTAGH.turnRate * dt)).normalize();
    }

    // A spell in progress locks him in place for the telegraph, then fires.
    if (this.casting) {
      this.updateCast(dt, ctx);
      return;
    }

    // Decide to begin a cast (mid-range, off cooldown, can afford).
    this.spellTimer -= dt;
    if (
      this.spellTimer <= 0 &&
      dist >= MURTAGH.spellRangeMin &&
      dist <= MURTAGH.spellRangeMax &&
      !this.combo.isAttacking
    ) {
      const spell = this.pickSpell(dist);
      if (spell && this.spells.canCast(this, spell)) {
        this.casting = true;
        this.castWindup = MURTAGH.spellWindup;
        this.pendingSpell = spell;
        return;
      }
      // Could not cast (cooldown / energy) — retry shortly.
      this.spellTimer = 1.0;
    }

    // Close on the target; swing when in melee range.
    if (dist > MURTAGH.approachRange) {
      this.steer(_move, 'seek', target.position);
      _move.y = 0;
      const speed = this.combo.isAttacking ? MURTAGH.moveSpeed * GROUND.attackMoveScale : MURTAGH.moveSpeed;
      this.position.addScaledVector(_move, speed * dt);
      this.position.y = GROUND.groundY;
    }
    if (dist <= MURTAGH.meleeRange && this.combo.state === 'IDLE') this.combo.pressAttack();
  }

  /** Hold the telegraph, then release the spell through the shared SpellSystem. */
  private updateCast(dt: number, ctx: EngineContext): void {
    // Telegraph: a charge glow at the chest while winding up.
    getVfx()?.burst(this.position, { count: 3, color: 0xff7a1a, speed: 2, life: 0.3, gravity: -3 });
    this.castWindup -= dt;
    if (this.castWindup > 0) return;

    const spell = this.pendingSpell;
    this.casting = false;
    this.pendingSpell = null;
    this.spellTimer = MURTAGH.spellEveryMin + Math.random() * (MURTAGH.spellEveryMax - MURTAGH.spellEveryMin);
    if (spell) this.spells.cast(this, spell, ctx);
  }

  /** Brisingr at range; thrysta vindr to shove the player off when close. */
  private pickSpell(dist: number): Spell | undefined {
    return dist <= MURTAGH.spellRangeMin + 3 ? SPELL_BY_ID['thrysta-vindr'] : SPELL_BY_ID['brisingr'];
  }
}
