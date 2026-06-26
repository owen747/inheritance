// combat/CombatSystem.ts
// Resolves melee hit spheres against opposing combatants once per fixed step.
// Broadphase is the EntityManager's team query (no per-frame allocation); damage
// flows through wards (via each target's takeDamage), with knockback, mutual
// hitstop, and spark VFX on a clean hit.
import * as THREE from 'three';
import { Entity, Team, isCombatant } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import { getVfx } from '../art/vfx';
import { addCameraShake } from '../core/CameraRig';
import { COMBAT } from '../config/gameConfig';

/** A live melee strike, in WORLD space, exposed by an attacker during ACTIVE frames. */
export interface MeleeStrike {
  team: Team;
  /** World-space centre of the hit sphere. */
  center: THREE.Vector3;
  radius: number;
  damage: number;
  knockback: number;
  hitstop: number;
  /** True when this swing is a finisher (heavy attack) — executes staggered elites. */
  finisher?: boolean;
  /** Entity ids already struck this active window (owned by the attacker's combo). */
  hitSet: Set<number>;
}

/** An entity that can land melee hits. `currentStrike` is null when not swinging. */
export interface MeleeAttacker {
  team: Team;
  currentStrike(): MeleeStrike | null;
}

/** An entity that can be frozen briefly on hit. */
export interface Hitstoppable {
  hitstop: number;
}

/**
 * An entity that takes knockback as a DECAYING IMPULSE (a shove that slides to a
 * stop) rather than an instant teleport. `dirX/dirZ` is a unit XZ direction away
 * from the strike; `strength` is the strike's knockback value.
 */
export interface Knockbackable {
  applyKnockback(dirX: number, dirZ: number, strength: number): void;
}

export function isMeleeAttacker(e: Entity): e is Entity & MeleeAttacker {
  return typeof (e as Partial<MeleeAttacker>).currentStrike === 'function';
}

export function isHitstoppable(e: object): e is Hitstoppable {
  return typeof (e as Partial<Hitstoppable>).hitstop === 'number';
}

export function isKnockbackable(e: object): e is Knockbackable {
  return typeof (e as Partial<Knockbackable>).applyKnockback === 'function';
}

/**
 * Hitstop scaled by hit weight: a base floor + a per-damage term + a finisher
 * bonus, capped. Big hits FREEZE longer (more impact); a jab barely hitches.
 */
export function hitstopFor(damage: number, finisher: boolean): number {
  const hs =
    COMBAT.hitstop +
    damage * COMBAT.hitstopPerDamage +
    (finisher ? COMBAT.hitstopFinisher : 0);
  return Math.min(COMBAT.hitstopMax, hs);
}

const _knock = new THREE.Vector3();

/**
 * Resolve all active melee strikes this step. Pure integration over the
 * EntityManager — holds no entity refs across calls.
 */
export class CombatSystem {
  resolve(_dt: number, ctx: EngineContext): void {
    const attackers: (Entity & MeleeAttacker)[] = [];
    ctx.entities.forEach((e) => {
      if (e.alive && isMeleeAttacker(e)) attackers.push(e);
    });

    for (const attacker of attackers) {
      const strike = attacker.currentStrike();
      if (!strike) continue;

      const targetTeam: Team = strike.team === 'player' ? 'enemy' : 'player';
      const targets = ctx.query(targetTeam);

      for (const target of targets) {
        if (!target.alive) continue;
        if (strike.hitSet.has(target.id)) continue;

        const reach = strike.radius + target.collider.radius;
        if (strike.center.distanceToSquared(target.position) > reach * reach) continue;

        const finisher = strike.finisher === true;
        strike.hitSet.add(target.id);
        target.takeDamage(strike.damage, isCombatant(attacker) ? attacker : undefined, {
          finisher,
        });

        // Knockback: shove the target away from the strike centre (XZ-biased) as a
        // DECAYING IMPULSE — it slides to a stop instead of teleporting (a glitch).
        // Finishers/heavy hits shove further. Fallback teleport only if the target
        // isn't Knockbackable (e.g. a static turret).
        _knock.copy(target.position).sub(strike.center);
        _knock.y = 0;
        if (_knock.lengthSq() < 1e-6) _knock.set(0, 0, 1);
        _knock.normalize();
        const kb = strike.knockback * (finisher ? COMBAT.knockFinisherMul : 1);
        if (isKnockbackable(target)) target.applyKnockback(_knock.x, _knock.z, kb);
        else target.position.addScaledVector(_knock, kb);

        // Mutual hitstop, scaled by hit weight (big hits freeze longer).
        const hs = hitstopFor(strike.damage, finisher);
        applyHitstop(attacker, hs);
        applyHitstop(target, hs);

        getVfx()?.sparkBurst(strike.center);
        ctx.audio.play('melee-hit');

        // Screen shake on a landed hit — bigger hits (and finishers) shake more.
        // Trauma is clamped inside the rig, so it can never accumulate unbounded.
        addCameraShake(
          COMBAT.shakeHit +
            strike.damage * COMBAT.shakePerDamage +
            (strike.finisher === true ? COMBAT.shakeFinisher : 0),
        );
      }
    }
  }
}

function applyHitstop(e: object, amount: number): void {
  if (amount > 0 && isHitstoppable(e)) {
    e.hitstop = Math.max(e.hitstop, amount);
  }
}
