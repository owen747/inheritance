// enemies/ArmoredBrute.ts
// Armored Empire brute — the hard counter that FORCES a swap to Roran. A heavy,
// slow melee bruiser whose plate shrugs off everything EXCEPT Roran's hammer:
// `takeDamage` lets Roran-sourced damage through at full, and scales every other
// source (Eragon's sword/magic, Saphira's fire, projectiles) down hard. High HP +
// a ponderous heavy swing. Eragon barely dents it; only Roran breaks it.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import type { Combatant } from '../core/Entity';
import { Enemy } from './Enemy';
import { Roran } from '../characters/Roran';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { damageThroughWard } from '../combat/Health';
import { buildRider, buildHammer, riderPartsOf } from '../art/meshes';
import { RiderAnimator } from '../art/anim';
import { COMBAT, GROUND, ARMOR } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const BRUTE = {
  maxHealth: 220,
  aggroRange: 55,
  colliderRadius: 1.1,
  moveSpeed: 3.8,
  /** Orientation slerp rate (lambda). */
  turnRate: 7,
  /** Start swinging within this range. */
  meleeRange: 2.8,
  /** Stop closing once this near. */
  approachRange: 2.2,
} as const;

// One big, slow, committed swing — readable so the player can react.
const BRUTE_COMBO: ComboConfig = {
  steps: [
    { windup: 0.55, active: 0.18, recovery: 0.7, damage: 30, knockback: 5.0, range: 2.6, radius: 1.4 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _flat = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _move = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/** ArmoredBrute — only Roran's hammer deals full damage; all else barely scratches. */
export class ArmoredBrute extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;
  private readonly riderAnim = new RiderAnimator();

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: BRUTE.maxHealth,
        colliderRadius: BRUTE.colliderRadius,
        aggroRange: BRUTE.aggroRange,
      },
      audio,
    );
    this.combo = new ComboStateMachine(BRUTE_COMBO);

    // Iron-clad look: dark armored garb wielding a hammer.
    const rider = buildRider({ garb: 'ironDark', skin: 'eragonSkin' });
    rider.userData.weaponMount.add(buildHammer());
    rider.scale.setScalar(1.2);
    this.baseScale = 1.2; // compose spawn-in / death-fade with his bulk
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

  /**
   * Armor: only Roran's hammer deals full damage. Every other source is scaled to
   * a fraction, so the brute is a wall to Eragon/Saphira and only really falls to
   * Roran. Death is decided here (mirrors the base contract).
   */
  override takeDamage(amount: number, src?: Combatant, _opts?: { finisher?: boolean }): void {
    if (!this.alive) return;
    this.triggerHitFlash();
    const scaled = src instanceof Roran ? amount : amount * ARMOR.nonRoranScale;
    damageThroughWard(this, scaled);
    if (this.health <= 0) this.die();
  }

  /** MeleeAttacker: live hammer hit sphere during ACTIVE frames, else null. */
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

  /** Per-frame walk bob + a big, slow combo-driven hammer swing. */
  protected override animateBody(dt: number): void {
    if (!this.mesh) return;
    this.riderAnim.update(
      dt,
      riderPartsOf(this.mesh),
      this.position,
      this.combo.state,
      this.combo.progress,
      BRUTE.moveSpeed,
      false,
    );
  }

  protected think(dt: number, _ctx: EngineContext): void {
    this.combo.update(dt);
    this.position.y = GROUND.groundY;

    const target = this.target;
    if (!target) return;

    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    const dist = _flat.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _targetQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-BRUTE.turnRate * dt)).normalize();
    }

    if (dist > BRUTE.approachRange) {
      this.steer(_move, 'seek', target.position);
      _move.y = 0;
      const speed = this.combo.isAttacking ? BRUTE.moveSpeed * GROUND.attackMoveScale : BRUTE.moveSpeed;
      this.position.addScaledVector(_move, speed * dt);
      this.position.y = GROUND.groundY;
    }
    if (dist <= BRUTE.meleeRange && this.combo.state === 'IDLE') this.combo.pressAttack();
  }
}
