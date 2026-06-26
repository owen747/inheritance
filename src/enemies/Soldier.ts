// enemies/Soldier.ts
// Basic Empire melee soldier — the general-purpose body of the siege waves. Like
// Murtagh minus the spell branch: he closes to sword range on the ACTIVE hero
// (base active-only `acquireTarget`) and runs a short telegraphed combo. Red-tunic
// look. Any hero can cut him down; he exists to pressure your single active hero.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import { Enemy } from './Enemy';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { buildRider, buildSword } from '../art/meshes';
import { COMBAT, GROUND } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const SOLDIER = {
  maxHealth: 60,
  aggroRange: 60,
  colliderRadius: 0.9,
  moveSpeed: 6.0,
  /** Orientation slerp rate (lambda). */
  turnRate: 11,
  /** Start swinging within this range. */
  meleeRange: 2.4,
  /** Stop closing once this near. */
  approachRange: 1.9,
} as const;

const SOLDIER_COMBO: ComboConfig = {
  steps: [
    { windup: 0.18, active: 0.12, recovery: 0.34, damage: 12, knockback: 0.9, range: 1.9, radius: 1.0 },
    { windup: 0.2, active: 0.14, recovery: 0.42, damage: 16, knockback: 1.6, range: 2.0, radius: 1.1 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _flat = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _move = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/** Soldier — red-tunic Empire footman. Closes and swings a short sword combo. */
export class Soldier extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: SOLDIER.maxHealth,
        colliderRadius: SOLDIER.colliderRadius,
        aggroRange: SOLDIER.aggroRange,
      },
      audio,
    );
    this.combo = new ComboStateMachine(SOLDIER_COMBO);

    const rider = buildRider({ garb: 'bannerRed' });
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

  protected think(dt: number, _ctx: EngineContext): void {
    this.combo.update(dt);
    this.position.y = GROUND.groundY;

    const target = this.target;
    if (!target) return;

    // Face the target on the horizontal plane.
    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    const dist = _flat.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _targetQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-SOLDIER.turnRate * dt)).normalize();
    }

    if (dist > SOLDIER.approachRange) {
      this.steer(_move, 'seek', target.position);
      _move.y = 0;
      const speed = this.combo.isAttacking ? SOLDIER.moveSpeed * GROUND.attackMoveScale : SOLDIER.moveSpeed;
      this.position.addScaledVector(_move, speed * dt);
      this.position.y = GROUND.groundY;
    }
    if (dist <= SOLDIER.meleeRange && this.combo.state === 'IDLE') this.combo.pressAttack();
  }
}
