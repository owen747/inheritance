// magic/spells.ts
// The Ancient-Language spell table. Each spell is data + a pure `effect(caster,
// ctx)` that spawns its world consequence through the shared EngineContext, so
// ANY Combatant (players AND enemies) casts through the same pipeline. Energy /
// ward / shout bookkeeping is handled by SpellSystem.cast BEFORE effect runs.
import * as THREE from 'three';
import type { Combatant } from '../core/Entity';
import type { EngineContext } from '../core/EngineContext';
import { healHealth } from '../combat/Health';
import { ENERGY } from '../config/gameConfig';
import { getVfx } from '../art/vfx';

export type SpellKind = 'projectile' | 'aoe' | 'ward' | 'heal' | 'utility';

export interface Spell {
  id: string;
  /** Ancient-Language word shouted on cast. */
  word: string;
  /** Plain-language gloss (HUD tooltip / lore). */
  gloss: string;
  cost: number;
  /** Seconds before the caster may recast this spell. */
  cooldown: number;
  /** L1 binds only default-unlocked spells to Digit1-4. */
  unlockedByDefault: boolean;
  kind: SpellKind;
  effect(caster: Combatant, ctx: EngineContext): void;
}

const _fwd = new THREE.Vector3();
const _spawn = new THREE.Vector3();
const _knock = new THREE.Vector3();

/** World-space forward (-Z) of a combatant. */
function forwardOf(caster: Combatant, out: THREE.Vector3): THREE.Vector3 {
  return out.set(0, 0, -1).applyQuaternion(caster.quaternion);
}

/** Launch a forward projectile from chest height. */
function launchProjectile(
  caster: Combatant,
  ctx: EngineContext,
  opts: { speed: number; damage: number; radius: number; ttl: number; color: number },
): void {
  forwardOf(caster, _fwd);
  _spawn
    .copy(caster.position)
    .addScaledVector(_fwd, caster.collider.radius + 0.6);
  _spawn.y += 1.0;
  ctx.spawnProjectile({
    position: _spawn,
    velocity: _fwd.clone().multiplyScalar(opts.speed),
    team: caster.team,
    damage: opts.damage,
    radius: opts.radius,
    ttl: opts.ttl,
    color: opts.color,
  });
  getVfx()?.fireBurst(_spawn, 8);
}

/** Damage every opposing combatant inside `radius` of the caster + knock them back. */
function shockwave(
  caster: Combatant,
  ctx: EngineContext,
  opts: { radius: number; damage: number; knockback: number },
): void {
  const targetTeam = caster.team === 'player' ? 'enemy' : 'player';
  const r2 = opts.radius * opts.radius;
  for (const target of ctx.query(targetTeam)) {
    if (!target.alive) continue;
    if (caster.position.distanceToSquared(target.position) > r2) continue;
    target.takeDamage(opts.damage, caster);
    _knock.copy(target.position).sub(caster.position);
    _knock.y = 0;
    if (_knock.lengthSq() < 1e-6) _knock.set(0, 0, 1);
    _knock.normalize();
    target.position.addScaledVector(_knock, opts.knockback);
    getVfx()?.sparkBurst(target.position);
  }
  getVfx()?.burst(caster.position, { count: 24, color: 0xbfe6ff, speed: 10, life: 0.4, gravity: 2 });
}

/**
 * Every spell in the game. The first four are `unlockedByDefault` and bound to
 * Digit1-4 in L1; `jierda` and `garjzla` exist here but are unlock-gated and are
 * NOT bound in Level 1 (they ship behind progression).
 */
export const ALL_SPELLS: Spell[] = [
  {
    id: 'brisingr',
    word: 'Brisingr',
    gloss: 'fire',
    cost: 12,
    cooldown: 0.45,
    unlockedByDefault: true,
    kind: 'projectile',
    effect: (caster, ctx) =>
      launchProjectile(caster, ctx, { speed: 34, damage: 22, radius: 0.55, ttl: 2.2, color: 0xff7a1a }),
  },
  {
    id: 'thrysta-vindr',
    word: 'Thrysta vindr',
    gloss: 'compress the air (shockwave)',
    cost: 18,
    cooldown: 1.1,
    unlockedByDefault: true,
    kind: 'aoe',
    effect: (caster, ctx) => shockwave(caster, ctx, { radius: 7, damage: 16, knockback: 3.5 }),
  },
  {
    id: 'skolir',
    word: 'Skölir',
    gloss: 'shield (ward)',
    cost: 16,
    cooldown: 3.5,
    unlockedByDefault: true,
    kind: 'ward',
    effect: (caster) => {
      caster.wardHp = Math.max(caster.wardHp, ENERGY.wardHp);
      getVfx()?.burst(caster.position, { count: 20, color: 0x4fe2ff, speed: 4, life: 0.6, gravity: -1 });
    },
  },
  {
    id: 'waise-heill',
    word: 'Waíse heill',
    gloss: 'be healed',
    cost: 20,
    cooldown: 2.5,
    unlockedByDefault: true,
    kind: 'heal',
    effect: (caster) => {
      healHealth(caster, 30);
      getVfx()?.burst(caster.position, { count: 18, color: 0x8affc0, speed: 3, life: 0.7, gravity: -2 });
    },
  },
  // --- Unlock-gated (NOT bound in L1) -------------------------------------
  {
    id: 'jierda',
    word: 'Jierda',
    gloss: 'break / shatter',
    cost: 24,
    cooldown: 0.8,
    unlockedByDefault: false,
    kind: 'projectile',
    effect: (caster, ctx) =>
      launchProjectile(caster, ctx, { speed: 30, damage: 34, radius: 0.5, ttl: 1.8, color: 0xd0d6e0 }),
  },
  {
    id: 'garjzla',
    word: 'Garjzla',
    gloss: 'light (blinding blast)',
    cost: 20,
    cooldown: 0.7,
    unlockedByDefault: false,
    kind: 'projectile',
    effect: (caster, ctx) =>
      launchProjectile(caster, ctx, { speed: 40, damage: 18, radius: 0.45, ttl: 1.6, color: 0xfff2a0 }),
  },
];

/** Lookup by id. */
export const SPELL_BY_ID: Record<string, Spell> = Object.fromEntries(
  ALL_SPELLS.map((s) => [s.id, s]),
);

/** The four spells bound to Digit1-4 in Level 1 (in slot order). */
export const DEFAULT_SPELL_LOADOUT: Spell[] = [
  SPELL_BY_ID['brisingr'],
  SPELL_BY_ID['thrysta-vindr'],
  SPELL_BY_ID['skolir'],
  SPELL_BY_ID['waise-heill'],
];
