# Plan: Level 2 — Siege of Dras-Leona

## Goal
Replace the L2 stub with a full two-phase siege on the existing engine: **Phase 1 (Sky)** Saphira
strafes wall-mounted anti-dragon ballistae + tower defenders over Dras-Leona with **Helgrind** (a
black four-spire mountain) looming; clearing the ballistae opens the breach → **Phase 2 (Ground)**
a street push through the breach as a free-swap roster of **Eragon + Roran + Saphira** against waves
of Empire soldiers, archers, and pain-immune **"laughing soldier"** elites, reaching the cathedral
to win. Deliver Roran's **full kit** (toughness + rally), a **finisher** mechanic, urban art, and —
the headline goal — **encounters where swapping characters genuinely matters**.

## Why / intent
- Second of three levels; proves the engine generalizes to urban ground combat + crowds.
- Fixes the L1 review's sharpest note: the swap pillar was inert. L2 is designed so each hero is the
  right tool for a different threat, so swapping is rewarded, not cosmetic.
- Stays lore-true (Dras-Leona, Helgrind, the laughing pain-immune soldiers, Roran Stronghammer).

### Success criteria
- [ ] `npm run typecheck` + `npm run build` green.
- [ ] `siege` boots as a real two-phase level (registered with `(game.input, game)`), reachable and
      winnable/losable by play; Title→Sky→breach→Ground→Win and →Lose all reachable.
- [ ] Phase 1: strafe/destroy the wall ballistae as Saphira (dodging their lances); clearing them
      triggers the breach transition.
- [ ] Phase 2: free-swap Eragon/Roran/Saphira vs waves; reaching the final objective wins; all
      characters downed loses.
- [ ] **Finisher mechanic**: a heavy attack (right-mouse) flagged as a finisher; pain-immune laughing
      soldiers ignore normal damage, build a stagger meter under hits, and only die to a finisher
      while staggered (clearly telegraphed).
- [ ] **Roran full kit**: higher toughness (takes reduced damage) + a Rally cooldown that gives the
      ACTIVE Roran a self-ward and HEALS the (non-regenerating) benched roster; hammer combo + finisher.
- [ ] **Swap is REQUIRED, not merely rewarded** (hard counters — each forces a specific hero):
      (a) an **Armored Brute** only Roran's hammer can break (Eragon's sword/magic barely dents armor);
      (b) **Rooftop Archers** on perches only a ranged/air hero can hit (Saphira fire-breath or Eragon
      brisingr — Roran melee literally cannot reach them); (c) the **laughing-soldier elite** is immune
      to Saphira & ranged, killable only by a ground melee FINISHER. No single hero clears all three →
      the player MUST swap. Plus a **health-rotation economy**: benched heroes don't regen, so damage
      is rationed across three health pools.
- [ ] Urban art: walls + a breached gate + street/building blocks + banners + the Helgrind four-spire
      mountain (procedural low-poly, palette-consistent).
- [ ] Eldunarí pickup persists; on win `save.markLevelCleared('siege')`.

## Locked decisions (autonomous — mission away-mode; logged as assumptions; REVISED per review)
- **Two phases like AerialDuel** (Sky→BREACH→Ground→Done), same `resolve()` latch + host hooks.
- **Phase-1 objective = destroy the wall ballistae** (4), set on the wall (`position.set(x, wallY, z)`
  AFTER `new Ballista()` since the ctor pins y=groundY). Tower archers help; give ballistae/archers a
  large `aggroRange` so they reach airborne Saphira (y≈30). Clearing all 4 ballistae → breach cutscene
  → Phase 2. Saphira death in Phase 1 = lose. At `beginBreach`, REMOVE all Phase-1 threats (ballistae
  + tower archers) so the cutscene can't snipe (mirror AerialDuel `beginDescent`).
- **Phase-2 = 3 escalating waves** at the cathedral approach. **WaveDirector** spawns the next wave
  only when the current is cleared, and `entities.remove()`s dead enemies (they don't self-remove).
  Win when the final wave is cleared (`markLevelCleared('siege')`). **Lose = both ground heroes
  (Eragon AND Roran) downed** — Saphira alone cannot take the city (avoids the finisher-gated soft-lock
  where only Saphira survives in front of an elite she can't kill). Mirrors L1's "ground hero required".
- **SWAP MODEL (engine reality):** only the piloted hero fights; benched heroes are passive +
  invulnerable and DON'T regen. So co-op is impossible — design is single-tool-switching under HARD
  COUNTERS + a health-rotation economy. The three hard counters (Armored Brute → Roran only; Rooftop
  Archers → ranged/air only; Laughing-soldier → ground finisher only) are distributed so no one hero
  clears everything. Enemies target the ACTIVE (vulnerable) hero — override `acquireTarget` to filter
  out `invulnerable` players so crowds don't beat on benched mannequins.
- **Finisher input = right mouse (`Mouse2` → new `heavy` action).** Add `'heavy'` to `EDGE_ACTIONS`
  in Character.ts (else `justPressedStep` fires every step). Heavy = a STANDALONE step on
  `ComboConfig.heavyStep` (NOT appended to `steps[]`, so normal combos can't buffer into it);
  `pressHeavy()` enters it directly (ignored during ROLL); `activeStep` returns it while live. Heavy
  carries `finisher:true`. Add `contextmenu` preventDefault in `Input` so Mouse2 is safe unlocked.
- **`finisher` on `MeleeStrike`** (add `finisher?: boolean`). The strike object is REUSED, so
  `currentStrike()` in BOTH `GroundCharacter` AND `Saphira` must set `strike.finisher =
  activeStep?.finisher === true` UNCONDITIONALLY each call (default false) — never latch stale true.
  `CombatSystem.resolve` passes `{ finisher: strike.finisher === true }` to `takeDamage`.
- **Saphira gets NO finisher** (her attacks can't execute the elite — that's the hard counter forcing a
  ground swap). The soft-lock is closed by the lose rule above (both ground heroes down = lose), not by
  giving her a finisher.
- **Pain-immune laughing soldier**: normal hits deal ~0 health damage but build a **stagger** meter;
  at full stagger → STAGGERED (loud telegraph: emissive flash + hunch + objective hint) for
  `STAGGER_WINDOW` (sized COMFORTABLY > heavy windup+active). A finisher landed while staggered kills
  it. On window expiry, stagger DECAYS partially (not full reset) so progress isn't erased. A finisher
  landed un-staggered adds bonus stagger.
- **Roran full kit:** `damageTakenScale=0.55` (applied in `Character.takeDamage`, multiply `amount`
  before ward — NOT in Health.ts); **Rally** on `Digit1` (hand-rolled cooldown, no energy): grants the
  ACTIVE Roran a self-`wardHp` (immediate combat value) AND `healHealth()` to the benched roster (the
  real rotation value — benched heroes are damageable-frozen but CAN be healed). Drop the "shield
  allies in fight" framing (mechanically inert). Hammer combo + a heavy finisher step.
- **Armored Brute** = a tanky melee enemy with an `armor` value; only Roran's hammer (high-knockback/
  heavy or a flagged `armorPiercing` strike) removes armor/deals real damage; Eragon's sword & spells
  are heavily reduced vs armor. **Rooftop Archer** = an `Archer` placed on an elevated perch with a
  collider/position only reachable by projectiles (Saphira fire-breath / Eragon brisingr); melee
  `currentStrike` spheres can't reach its y — so Roran cannot kill it.
- **Helgrind** = procedural black four-spire mountain backdrop (palette `shruikan`/`stoneDark`).
- **Host type:** reuse/export `AerialDuelHost` as the shared level-host type (or alias `SiegeHost`);
  `Game` already satisfies it. Register `() => new SiegeLevel(game.input, game)` in `main.ts`.
- Keep all existing public signatures stable except the small, additive engine extensions (the
  optional 3rd `opts` arg on `takeDamage` is backward-compatible with existing 2-arg callers).

## Verified engine seams (from research — file:line)
- `Level` interface + `LevelRegistry`/`registerLevel`/`createLevel` — `src/world/Level.ts`.
- Reference two-phase level (clone its load/update/unload/phase/win-lose/HUD/Eldunarí patterns) —
  `src/world/levels/AerialDuelLevel.ts` (load L104-165, beginGround L260-299, updateGround L303-339,
  unload L189-215, buildHudInfo L351-410). Host type `AerialDuelHost = PlayerHost & {setHudInfoProvider,
  win, lose, setEndText}`; `Game` satisfies it. Register as `() => new SiegeLevel(game.input, game)`
  in `src/main.ts` L25.
- `EngineContext`/`ProjectileSpec`/`SaveLike` — `src/core/EngineContext.ts` (spawnProjectile, query,
  collect/isCollected/markLevelCleared/maxEnergyBonus).
- Characters: `Character`/`GroundCharacter` (combo/dodge/`downed`/`handleAbilities` hook/`takeDamage`)
  — `src/characters/Character.ts`; `Eragon.ts`, `Roran.ts` (minimal swap-body today), `Saphira.ts`,
  `PlayerController.ts` (setRoster/auto-swap-on-downed).
- Enemy AI template — `src/enemies/Enemy.ts` (base, `takeDamage` decides death at L89-93, `steer`,
  `acquireTarget`, abstract `think`), `Murtagh.ts` (ground melee+cast template), `Ballista.ts`
  (ranged `ctx.spawnProjectile` template, `acquireTarget` override for highest flyer).
- Combat — `src/combat/CombatSystem.ts` (`resolve` calls `target.takeDamage(strike.damage, attacker)`
  at L49-89; holds the full `strike`), `ComboStateMachine.ts` (`ComboConfig`/`ComboStep`),
  `Health.ts` (`damageThroughWard`, `healHealth`, `clampVitals`).
- Art — `src/art/meshes.ts` (buildRider/buildHammer/buildSword/buildBallista/buildRock/
  buildCitySilhouette), `materials.ts` (`flatMaterial`/`materialFor`/`glowMaterial`, cached — never
  mutate returned mats; faceted, no `computeVertexNormals`), `palette.ts` (ColorKey set incl.
  `shruikan`,`stoneDark`,`cityStone`,`stone`,`skyDusk`), `Terrain.ts` (flat `groundHeightAt`),
  `props.ts` (`scatterRocks`/`placeCitySilhouette`/`createEldunari`).
- `GROUND.groundY` is the single constant every ground entity pins to — keep Phase-2 combat on the
  flat plane (no multi-elevation) to avoid conflicts.
- HUD — `src/ui/HUD.ts` (`HudInfo`/`HudSpellSlot`/`HudRosterEntry`; damage-flash is automatic).

## Files Being Changed
```
src/
├── combat/
│   ├── CombatSystem.ts            ← MODIFIED  pass {finisher: strike.finisher===true} into takeDamage
│   └── ComboStateMachine.ts       ← MODIFIED  ComboStep.finisher?; ComboConfig.heavyStep?; pressHeavy()
│      (Health.ts UNCHANGED — toughness is applied in Character.takeDamage, not here)
├── core/
│   ├── Entity.ts                  ← MODIFIED  Combatant.takeDamage gains optional opts {finisher}
│   └── Input.ts                   ← MODIFIED  contextmenu preventDefault (Mouse2 safe unlocked)
├── characters/
│   ├── Character.ts               ← MODIFIED  damageTakenScale; 'heavy' in EDGE_ACTIONS; heavy edge
│   ├── Eragon.ts                  ← MODIFIED  add heavy/finisher step (heavyStep)
│   ├── Saphira.ts                 ← MODIFIED  currentStrike() sets strike.finisher=false (no execute)
│   └── Roran.ts                   ← MODIFIED  FULL kit: toughness + Rally + hammer heavy finisher
├── config/
│   └── gameConfig.ts              ← MODIFIED  KEYS.heavy='Mouse2'; RORAN/STAGGER/RALLY/ARMOR tunables
├── enemies/
│   ├── Enemy.ts                   ← MODIFIED  acquireTarget skips invulnerable players (active-only)
│   ├── Soldier.ts                 ← NEW  Empire melee soldier AI
│   ├── Archer.ts                  ← NEW  ranged soldier (spawnProjectile); rooftop variant = elevated
│   ├── ArmoredBrute.ts            ← NEW  armored — only Roran's hammer/armor-pierce damages it
│   └── LaughingSoldier.ts         ← NEW  pain-immune elite (stagger + finisher-to-kill; immune to Saphira)
├── art/
│   ├── meshes.ts                  ← MODIFIED  buildWall, buildGate(breached), buildBuilding,
│   │                                          buildBanner, buildHelgrind, buildPerch (rooftop)
│   └── palette.ts                 ← MODIFIED  add wall/cobble/breach/banner color keys
├── world/
│   ├── Siege.ts                   ← NEW  urban layout helper (walls/streets/breach/Helgrind/perches)
│   └── levels/
│       └── SiegeLevel.ts          ← REWRITTEN  real two-phase siege (was a StubLevel)
└── main.ts                        ← MODIFIED  register siege with (game.input, game)
   (HUD.ts UNCHANGED — stagger telegraph via mesh emissive + objective text, not a HudInfo change)
```

## Architecture overview
`SiegeLevel implements Level`, constructed `(input, host=game)`, mirrors `AerialDuelLevel`:
- `load`: VfxSystem + ProjectilePool + SpellSystem (as in AerialDuel), build the **urban set**
  (`Siege.ts` places walls, breached gate, street buildings, banners, Helgrind backdrop, Terrain),
  spawn Saphira + PlayerController(roster=[saphira]), spawn the **wall ballistae** (reuse `Ballista`)
  + a few tower archers, set HUD provider.
- `update` dispatches by phase `SKY | BREACH | GROUND | DONE`:
  - `updateSky`: lose if Saphira down; when all wall ballistae dead → `beginBreach()`.
  - `beginBreach`: short cutscene (dust/`disposeGroup` the gate doors → breach opens), damp Saphira
    down, then `beginGround()`.
  - `beginGround`: spawn Eragon (apply `+ctx.save.maxEnergyBonus` to maxEnergy up front) + Roran (full
    kit) + Saphira landed; roster=[eragon,saphira,roran]; start wave 1; place Eldunarí (skip if
    `ctx.save.isCollected(id)`).
  - `updateGround`: run the **WaveDirector**; win when final wave cleared (`markLevelCleared`); **lose
    when BOTH Eragon AND Roran are downed** (Saphira can't take the city alone — closes the
    finisher-gated soft-lock).
- A tiny **WaveDirector** (inside SiegeLevel) holds wave defs, spawns the next wave only when the
  current is cleared, and `entities.remove()`s dead enemies (they don't self-remove; prevents corpse
  pile-up and keeps clear-detection simple).

**Swap-meaningful design — HARD COUNTERS (each wave contains a threat the current hero can't answer,
so the player MUST swap; reinforced by the rotation economy since benched heroes don't regen):**
- Wave 1 — **Armored Brutes** + soldier escorts: brutes shrug off Eragon's sword & spells (armor);
  only **Roran's hammer** (heavy/armor-pierce) breaks them → swap to Roran. Soldiers are general.
- Wave 2 — **Rooftop Archers** on perches + ground soldiers: the archers are elevated beyond melee
  reach and rain arrows; only **Saphira (fire-breath)** or **Eragon (brisingr ranged)** can kill them
  → Roran-mains must swap out. Staying airborne too long as Saphira draws massed arrows (rotate).
- Wave 3 (cathedral) — the **laughing-soldier ELITE** (pain-immune; immune to Saphira & ranged) +
  escorts: only a **ground melee FINISHER** (Eragon or Roran, heavy attack while it's staggered) kills
  it → if you're flying Saphira you MUST swap down. Escorts pressure your single active hero, and the
  no-regen rotation means you spread the incoming damage across heroes to survive the elite.

## Key pseudocode (hot spots / net-new only)
```typescript
// Entity.ts: interface Combatant { takeDamage(amount: number, src?: Combatant, opts?: { finisher?: boolean }): void }
//   (optional 3rd arg = backward-compatible with all existing 2-arg callers)
// CombatSystem.resolve: target.takeDamage(strike.damage, attacker, { finisher: strike.finisher === true })

// MeleeStrike gains: finisher?: boolean.  ComboStep gains: finisher?: boolean.
// The strike object is REUSED — set the flag UNCONDITIONALLY each call (never latch stale true):
// GroundCharacter.currentStrike() AND Saphira.currentStrike():
//   strike.finisher = this.combo.activeStep?.finisher === true;   // false for normal/claw swings

// EDGE_ACTIONS must include 'heavy' (else justPressedStep('heavy') fires every held step).
// Character.controlActive: if (justPressedStep('heavy')) this.combo.pressHeavy();
// ComboStateMachine: ComboConfig gains `heavyStep?: ComboStep`. pressHeavy() — ignored during ROLL —
//   enters a STANDALONE heavy state (slower windup, bigger range, finisher:true) that does NOT chain
//   from steps[] and cannot be buffered into. `activeStep` returns the heavy step while it is live.

// Character toughness (in Character.takeDamage, NOT Health.ts):
//   takeDamage(amount, src, opts) { if (this.invulnerable) return;
//     amount *= this.damageTakenScale; ... existing ward/health flow ... }
//   damageTakenScale = 1 default; Roran sets 0.55.

// LaughingSoldier.takeDamage(amount, src, opts):  // pain-immune unless staggered + finisher
//   if (!alive) return;
//   if (this.staggered) {
//     if (opts?.finisher) { this.health = 0; this.die(); }                 // execution
//   } else {
//     this.stagger = min(MAX, this.stagger + amount + (opts?.finisher ? FINISHER_BONUS : 0)); // no HP loss
//     if (this.stagger >= MAX) { this.staggered = true; this.staggerTimer = STAGGER_WINDOW; }  // loud telegraph
//   }
// think(): when staggered, stand still + emissive flash for staggerTimer; on expiry DECAY stagger
//   partially (not to 0) so progress isn't erased, clear staggered. STAGGER_WINDOW sized > heavy
//   windup+active. Objective text hints "Finish the laughing soldier!" while staggered.

// ArmoredBrute.takeDamage(amount, src, opts):  // armor only Roran breaks
//   if (!alive) return;
//   const fromRoran = src instanceof Roran;  // or a src.armorPierce flag set by Roran's strikes
//   const scaled = fromRoran ? amount : amount * ARMOR.nonRoranScale;  // ~0.15 for others
//   damageThroughWard(this, scaled); if (this.health <= 0) this.die();

// Roran Rally (handleAbilities, no energy): if (justPressedStep('spell1') && this.rallyCd<=0) {
//   this.wardHp += RALLY.selfWard;                                  // immediate value for active Roran
//   for (ally of ctx.query('player')) if (ally !== this) healHealth(ally, RALLY.heal); // heal the bench
//   this.rallyCd = RALLY.cooldown; ctx.audio.play('shout'); vfx burst; }
//   // tick: this.rallyCd = Math.max(0, this.rallyCd - dt) each handleAbilities call.

// Archer.think(): face target; on reload+telegraph timer fire (use REAL ProjectileSpec — no 'arrow'/
//   'lead' fields; compute lead like Ballista.fire):
//   ctx.spawnProjectile({ position: muzzle, velocity: leadDir.multiplyScalar(ARCHER.arrowSpeed),
//     team: 'enemy', damage: ARCHER.arrowDamage, radius: 0.4, ttl: 3, color: 0xddddcc });
//   keep distance: steer 'retreat' if target within minRange, else 'seek' to band. Rooftop variant
//   sits at an elevated y and SKIPS the retreat (it's a fixed perch); melee can't reach its y.

// Enemy.acquireTarget OVERRIDE (base): pick nearest player with !player.invulnerable (i.e. the ACTIVE
//   hero) so crowds attack you, not the benched invulnerable mannequins. Fall back to nearest if none.
```

## Tasks (in order)
1. **[x] DONE — Engine extensions (finisher + toughness + targeting).** `Entity.ts`: widen `Combatant.takeDamage`
   with optional `opts {finisher?}` (backward-compat). `combat/CombatSystem.ts`: `MeleeStrike.finisher?`;
   `resolve` passes `{finisher: strike.finisher===true}`. `combat/ComboStateMachine.ts`:
   `ComboStep.finisher?`, `ComboConfig.heavyStep?`, `pressHeavy()` standalone non-chaining state,
   `activeStep` returns heavy while live. `characters/Character.ts`: `damageTakenScale` field used in
   `takeDamage`; add `'heavy'` to `EDGE_ACTIONS`; `controlActive` maps `justPressedStep('heavy')` →
   `combo.pressHeavy()`; `GroundCharacter.currentStrike` sets `strike.finisher` unconditionally.
   `characters/Saphira.ts`: `currentStrike` sets `strike.finisher=false`. `characters/Eragon.ts`: add a
   `heavyStep` (finisher). `config/gameConfig.ts`: `KEYS.heavy='Mouse2'`. `core/Input.ts`: register
   Mouse2 + `contextmenu` preventDefault. `enemies/Enemy.ts`: `acquireTarget` prefers `!invulnerable`
   players (active-only), fallback nearest. **DoD:** typecheck+build green; heavy/finisher works in
   DevSandbox vs the dummy; existing 2-arg `takeDamage` callers still compile; L1 still plays.
2. **[x] DONE — Roran full kit.** `damageTakenScale=0.55`; Rally on Digit1 (hand-rolled cooldown, no energy):
   self-`wardHp` for active Roran + `healHealth` to benched roster via `ctx.query('player')`; hammer
   combo + a heavy `heavyStep` finisher. **DoD:** Roran visibly tankier; Rally shields self + heals the
   bench; hammer heavy is a finisher.
3. **[x] DONE — New enemies.** `Soldier.ts` (melee, Murtagh-minus-spells), `Archer.ts` (ranged via real
   `ProjectileSpec` — compute lead like `Ballista.fire`; a `rooftop` flag → fixed elevated y, no
   retreat, unreachable by melee), `ArmoredBrute.ts` (armor: non-Roran damage scaled ~0.15; Roran's
   strikes full), `LaughingSoldier.ts` (pain-immune stagger + finisher-to-kill while staggered; immune
   to Saphira/ranged; loud emissive telegraph; stagger partial-decays on window expiry). All use the
   active-only targeting from Task 1. **DoD:** each spawns/fights/dies correctly — brute only falls to
   Roran, rooftop archer only to ranged/air, laughing soldier only to a ground finisher while staggered;
   none soft-locks (stagger recovers, lose rule covers Saphira-only).
4. **Urban art.** `palette.ts` add keys (e.g. wallStone, cobble, breachRubble, bannerRed). `meshes.ts`:
   `buildWall`, `buildGate(breached?)`, `buildBuilding`, `buildBanner`, `buildHelgrind` (4 black
   spires), `buildPerch` (rooftop platform). `world/Siege.ts`: layout helper assembling walls + breached
   gate + street buildings + banners + rooftop perches + Helgrind backdrop + Terrain, with `dispose()`.
   Faceted, cached materials, no `computeVertexNormals`. **DoD:** reads as a besieged Dras-Leona with
   Helgrind looming; disposes cleanly.
5. **SiegeLevel (two phases + waves).** Rewrite `SiegeLevel.ts` (drop StubLevel; ctor `(input, host)`,
   reuse `AerialDuelHost` type) cloning AerialDuel structure. Phase 1: 4 wall ballistae (y set after
   ctor) + tower archers (large aggroRange to reach Saphira); clear all 4 → `beginBreach` (remove all
   Phase-1 threats, gate cutscene) → `beginGround`. Phase 2: WaveDirector (W1 brutes+soldiers, W2
   rooftop-archers+soldiers, W3 laughing-elite+escorts), remove dead enemies, Eldunarí (bonus applied
   up front + isCollected skip), win on final clear (`markLevelCleared`), **lose when Eragon AND Roran
   both downed**, per-phase/wave HUD objective text (incl. the "Finish the laughing soldier!" hint).
   Register `(game.input, game)` in `main.ts`. **DoD:** full level playable to Win and to Lose; each
   hard counter forces the intended hero.
6. **Polish + validate.** Balance tunables (STAGGER/RALLY/ARMOR/ARCHER/wave sizes); confirm no
   soft-lock; `npm run typecheck`+`build` green; document the manual playtest path.

## Validation
- `npm run typecheck` && `npm run build` (both exit 0; 500kB Three.js warning is fine).
- Manual: boot siege (temporarily `game.bootInto('siege')` or via debug) → Phase 1 destroy ballistae →
  breach → Phase 2 clear 3 waves (try each hero; confirm laughing soldier needs a finisher) → Win;
  separately let all heroes fall → Lose; collect Eldunarí, reload, confirm persistence.

## Deprecated / removed
- `SiegeLevel extends StubLevel` is replaced by the real level (StubLevel stays for `urubaen` until L3).

## Anti-patterns to avoid
- Don't add a general buff/aura framework — Rally reuses `wardHp`+`healHealth`.
- Don't break flat-ground assumption (`GROUND.groundY`); keep combat on the plane.
- Don't mutate cached materials; faceted meshes, no `computeVertexNormals`.
- Don't widen `takeDamage` in a way that breaks existing 2-arg callers — make `opts` optional.
- Don't let the laughing-soldier be unkillable if the player lacks a finisher — heavy attack is always
  available (Mouse2), and stagger recovers so it's never a soft-lock.

## Criticer Notes
1. **[biggest gap — wave design assumes a party the engine can't field]** "Swap-meaningful" waves were justified by simultaneous co-op (Roran tanks while Eragon picks archers), but `PlayerController.setRoster` makes every non-active hero passive AND invulnerable — idle allies neither fight nor take damage. There is no second-character agency; you are always one character with two invulnerable mannequins. Half the swap rationale is physically unbuildable. → REDESIGN to hard-counters + rotation economy (done below).
2. **[honest — Eragon solos, L1 inertness reships]** Swap is single-tool, so only a threat the current hero genuinely can't handle forces a swap. The one hard gate (finisher) is satisfiable by Eragon himself. An Eragon-main clears everything → headline pillar stays cosmetic. → Add hard counters only specific heroes can answer.
3. **[cheap win — convert one "punishes" into a hard wall]** Make the elite immune to Saphira (only ground finisher kills it) and add an armored foe only Roran breaks + elevated archers only ranged/air hits → swap flips from rewarded to REQUIRED. Reuses the immunity/stagger logic already specced.
4. **[over-built / fun-vs-fiddly]** The finisher threads a flag through takeDamage/CombatSystem/ComboStep/ComboStateMachine + stagger meter/window — a lot of permanent plumbing for one elite. Justified only if reused in L3 (it will be) AND the stagger window is generous + telegraph loud, else the elite is a chore.
