// combat/CombatSystem.ts
// Resolves melee hit spheres against opposing combatants once per fixed step.
// Broadphase is the EntityManager's team query (no per-frame allocation); damage
// flows through wards (via each target's takeDamage), with knockback, mutual
// hitstop, and spark VFX on a clean hit.
import * as THREE from 'three';
import { Entity, Team, isCombatant } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import { getVfx } from '../art/vfx';

/** A live melee strike, in WORLD space, exposed by an attacker during ACTIVE frames. */
export interface MeleeStrike {
  team: Team;
  /** World-space centre of the hit sphere. */
  center: THREE.Vector3;
  radius: number;
  damage: number;
  knockback: number;
  hitstop: number;
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

export function isMeleeAttacker(e: Entity): e is Entity & MeleeAttacker {
  return typeof (e as Partial<MeleeAttacker>).currentStrike === 'function';
}

export function isHitstoppable(e: object): e is Hitstoppable {
  return typeof (e as Partial<Hitstoppable>).hitstop === 'number';
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

        strike.hitSet.add(target.id);
        target.takeDamage(strike.damage, isCombatant(attacker) ? attacker : undefined);

        // Knockback: shove the target away from the strike centre (XZ-biased).
        _knock.copy(target.position).sub(strike.center);
        _knock.y = 0;
        if (_knock.lengthSq() < 1e-6) _knock.set(0, 0, 1);
        _knock.normalize();
        target.position.addScaledVector(_knock, strike.knockback);

        // Mutual hitstop (brief freeze of both combatants).
        applyHitstop(attacker, strike.hitstop);
        applyHitstop(target, strike.hitstop);

        getVfx()?.sparkBurst(strike.center);
        ctx.audio.play('melee-hit');
      }
    }
  }
}

function applyHitstop(e: object, amount: number): void {
  if (amount > 0 && isHitstoppable(e)) {
    e.hitstop = Math.max(e.hitstop, amount);
  }
}
