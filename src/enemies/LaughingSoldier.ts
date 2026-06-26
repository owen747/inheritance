// enemies/LaughingSoldier.ts
// The pain-immune "laughing soldier" elite of Dras-Leona — the hard counter that
// forces a GROUND-MELEE swap. Normal hits deal NO health damage; they build a
// `stagger` meter instead. At full meter it becomes STAGGERED (a loud telegraph:
// flashing glow + a hunch) for a generous window, and ONLY a finisher landed
// during that window kills it. Saphira/projectiles can build stagger but never
// carry a finisher, so they can never execute it — only Eragon's or Roran's heavy
// attack while it's staggered does. On window expiry the meter PARTIALLY decays
// (progress isn't erased), so it can never soft-lock.
import * as THREE from 'three';
import type { EngineContext } from '../core/EngineContext';
import type { AudioManager } from '../core/AudioManager';
import type { Combatant } from '../core/Entity';
import { Enemy } from './Enemy';
import { ComboStateMachine, type ComboConfig } from '../combat/ComboStateMachine';
import type { MeleeAttacker, MeleeStrike } from '../combat/CombatSystem';
import { buildRider, buildSword } from '../art/meshes';
import { glowMaterial } from '../art/materials';
import { getVfx } from '../art/vfx';
import { COMBAT, GROUND, STAGGER } from '../config/gameConfig';

// ---- Tunables ---------------------------------------------------------------
const LAUGHER = {
  // High HP is mostly cosmetic — normal damage never bleeds it; a finisher zeroes
  // it. It still soaks if some future direct source bypasses the stagger gate.
  maxHealth: 200,
  aggroRange: 55,
  colliderRadius: 1.0,
  moveSpeed: 4.8,
  /** Orientation slerp rate (lambda). */
  turnRate: 9,
  /** Start swinging within this range. */
  meleeRange: 2.5,
  /** Stop closing once this near. */
  approachRange: 2.0,
} as const;

const LAUGHER_COMBO: ComboConfig = {
  steps: [
    { windup: 0.24, active: 0.14, recovery: 0.4, damage: 16, knockback: 1.4, range: 2.0, radius: 1.1 },
    { windup: 0.28, active: 0.16, recovery: 0.5, damage: 22, knockback: 2.6, range: 2.2, radius: 1.2 },
  ],
  bufferTime: COMBAT.comboBuffer,
};

/** Sickly green-yellow telegraph glow. */
const STAGGER_GLOW = 0xbfff4a;

// Module-scope scratch — reused every step, never reallocated.
const FORWARD = new THREE.Vector3(0, 0, -1);
const _flat = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _move = new THREE.Vector3();
const _targetQuat = new THREE.Quaternion();

/**
 * LaughingSoldier — pain-immune until staggered, then executable only by a
 * ground-melee finisher. Exposes {@link staggered} so the level can surface the
 * "Finish the laughing soldier!" objective hint.
 */
export class LaughingSoldier extends Enemy implements MeleeAttacker {
  private readonly combo: ComboStateMachine;
  private readonly strike: MeleeStrike;

  private stagger = 0;
  private _staggered = false;
  private staggerTimer = 0;
  private flashPhase = 0;

  /** Halo mesh shown only while staggered (the loud telegraph). */
  private readonly glow: THREE.Mesh;

  /** True while staggered + executable — drives the level's objective hint. */
  get staggered(): boolean {
    return this._staggered;
  }

  constructor(audio: AudioManager | null = null) {
    super(
      {
        maxHealth: LAUGHER.maxHealth,
        colliderRadius: LAUGHER.colliderRadius,
        aggroRange: LAUGHER.aggroRange,
      },
      audio,
    );
    this.combo = new ComboStateMachine(LAUGHER_COMBO);

    const rider = buildRider({ garb: 'bannerRed', skin: 'eragonSkin', hair: 'eragonHair' });
    rider.userData.weaponMount.add(buildSword());

    // Loud stagger telegraph: a glow halo, hidden until staggered.
    this.glow = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 0), glowMaterial(STAGGER_GLOW, 1.8));
    this.glow.position.set(0, 1.1, 0);
    this.glow.visible = false;
    rider.add(this.glow);

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
   * Pain-immune unless staggered. Normal hits build the stagger meter (no health
   * loss); a finisher landed while staggered EXECUTES it. Ranged/Saphira hits can
   * build the meter but never carry `finisher`, so they can never kill it.
   */
  override takeDamage(amount: number, _src?: Combatant, opts?: { finisher?: boolean }): void {
    if (!this.alive) return;
    if (this._staggered) {
      if (opts?.finisher) {
        this.health = 0;
        this.die();
      }
      return;
    }
    // Not staggered: absorb the hit into the meter; a finisher adds a bonus.
    this.stagger += amount + (opts?.finisher ? STAGGER.finisherBonus : 0);
    if (this.stagger >= STAGGER.max) {
      this.stagger = STAGGER.max;
      this._staggered = true;
      this.staggerTimer = STAGGER.window;
      this.flashPhase = 0;
      this.audio?.play('ward-break');
    }
  }

  /** MeleeAttacker: live sword hit sphere during ACTIVE frames, else null. */
  currentStrike(): MeleeStrike | null {
    // While staggered it is helpless — it stops attacking.
    if (this._staggered) return null;
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

    if (this._staggered) {
      // Frozen + LOUD telegraph: stand still, flash the halo, hunch (squash the
      // mesh — scale survives the renderer's transform sync, unlike rotation).
      this.staggerTimer -= dt;
      this.flashPhase += dt;
      this.glow.visible = Math.sin(this.flashPhase * 26) > 0;
      this.glow.scale.setScalar(1 + 0.2 * Math.sin(this.flashPhase * 16));
      if (this.mesh) this.mesh.scale.set(1.18, 0.82, 1.18); // hunched
      getVfx()?.burst(this.position, { count: 3, color: STAGGER_GLOW, speed: 2, life: 0.25, gravity: -2 });
      if (this.staggerTimer <= 0) {
        // Window expired: keep partial progress, recover, drop the telegraph.
        this.stagger *= STAGGER.decay;
        this._staggered = false;
        this.glow.visible = false;
        if (this.mesh) this.mesh.scale.setScalar(1);
      }
      return;
    }

    // Not staggered: tanky soldier behaviour.
    const target = this.target;
    if (!target) return;

    _flat.set(target.position.x - this.position.x, 0, target.position.z - this.position.z);
    const dist = _flat.length();
    if (_flat.lengthSq() > 1e-6) {
      _flat.normalize();
      _targetQuat.setFromUnitVectors(FORWARD, _flat);
      this.quaternion.slerp(_targetQuat, 1 - Math.exp(-LAUGHER.turnRate * dt)).normalize();
    }

    if (dist > LAUGHER.approachRange) {
      this.steer(_move, 'seek', target.position);
      _move.y = 0;
      const speed = this.combo.isAttacking ? LAUGHER.moveSpeed * GROUND.attackMoveScale : LAUGHER.moveSpeed;
      this.position.addScaledVector(_move, speed * dt);
      this.position.y = GROUND.groundY;
    }
    if (dist <= LAUGHER.meleeRange && this.combo.state === 'IDLE') this.combo.pressAttack();
  }
}
