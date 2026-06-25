# Plan: Inheritance — Shared 3D Engine + Level 1 (Aerial Duel)

## Goal

Build a stylized low-poly, browser-based 3D action game in **raw Three.js + TypeScript + Vite**
that recreates the climax of Christopher Paolini's *Inheritance*. This plan delivers **(1) the
shared game engine** (game loop, input, camera, characters, combat, magic, enemies, VFX, HUD,
progression/save) and **(2) Level 1 — the Aerial Duel — fully playable end-to-end**: fly Saphira
in a dogfight against Thorn, free-swap to Eragon on the ground for a sword+magic duel against
Murtagh, dodge ground-fired Dauthdaert lances, collect an Eldunarí, and win/lose with a results
screen. Levels 2 (Siege of Dras-Leona) and 3 (Assault on Urû'baen) are **scaffolded as
data-driven `Level` definitions but NOT built** — they are the roadmap after L1 proves fun.

## Summary

- New Vite + vanilla-TypeScript project, raw Three.js (no React), no physics engine — custom
  arcade kinematics + primitive collision (spheres/AABB/ground-plane).
- A fixed-timestep game loop drives an entity-manager; the active **Character controller**
  (Saphira / Eragon / Roran) receives input each frame; a hotkey swaps which controller is active
  and the camera mode follows (flight chase-cam vs. ground over-shoulder).
- **Magic** is a data table of Ancient-Language spells with energy costs; an **energy = life-force**
  meter; **wards** as auto-shields; **Eldunarí** pickups expand the pool and unlock spells, saved
  to `localStorage`.
- **Combat** is character-action: an input-buffered combo state machine, dodge-roll, hit spheres,
  hitstop, and a small VFX/particle layer. All art is **procedural low-poly** built from Three.js
  primitives — zero external 3D model assets for v1.
- A DOM overlay renders the HUD (health/energy bars, spell slots, objective, character switcher)
  and the menus (start / pause / win / lose).

## Intent / Why

- Deliver a genuinely fun, runnable artifact the user can open in a browser and play immediately.
- Prove the three core pillars (dragon flight, ground sword+magic, free character-swap) in ONE
  shared engine so Levels 2–3 are content work, not new engineering.
- Stay lore-true to *Inheritance* (characters, Ancient-Language spells, Dauthdaert hazard,
  Eldunarí progression) without over-scoping into AAA territory.
- What must remain true even if details change: it runs in a modern browser at a stable frame
  rate, the swap-between-three-characters loop works, and Level 1 has a clear win and lose state.

## Source Artifacts

- Brief / intent artifact: `./tmp/briefs/2026-06-25-eragon-inheritance-3d-game.md`
- Research dossier: none separate — the book fact sheet is embedded in the brief above.

## What

A single-page web game. On load: a title screen ("Inheritance — Aerial Duel", Start button).
On Start: Level 1 begins, structured as **two sequential phases** (resolves the dual-front
coexistence problem and removes the soft-lock class of bugs):

- **Phase 1 — Sky:** the player controls **Saphira** in third-person flight over a plains/lake
  map with a burning city silhouette and smoke columns; **Thorn** (crimson enemy dragon AI)
  dogfights them; ground **Dauthdaert ballistae** periodically fire green anti-dragon lances the
  player must juke. Defeating Thorn (or driving him off at low HP) ends Phase 1 with a short
  "Saphira descends" transition.
- **Phase 2 — Ground:** the player controls **Eragon** to duel **Murtagh** with sword combos +
  hotkey Ancient-Language spells, and may swap (hotkey) to **Saphira** (now landed/auto-hovering,
  usable for strafing runs) or **Roran** (minimal swap-body — Eragon's ground kit with a hammer
  mesh, magic disabled; full hammer combos deferred to L2). The character you are NOT piloting is
  **passive and invulnerable** (no ally-AI needed). Defeating Murtagh wins the level.

The **four** L1 starting spells bound to Digit1-4 are `brisingr` (fireball), `thrysta vindr`
(shockwave), `skölir` (ward), `waíse heill` (heal); other spells (`jierda`, `garjzla`) are
unlock-gated and not wired in L1. Win = both phases cleared; lose = the active character's HP
reaches zero with no living swappable character able to continue the current phase (Phase 1:
Saphira's death = loss, since only she can fight Thorn). An Eldunarí pickup in Phase 2 expands the
energy pool and persists via `localStorage` (idempotent on reload — already-collected gems do not
respawn).

### Success Criteria

- [ ] `npm install && npm run dev` serves a playable build with no console errors; `npm run build`
      and `npm run typecheck` (`tsc --noEmit`) pass clean and produce a static bundle.
- [ ] Title → Phase 1 (Sky) → Phase 2 (Ground) → win screen AND → lose screen all reachable.
- [ ] Saphira flight feels controllable (pitch/yaw/roll/throttle), with a smooth chase camera.
- [ ] In Phase 2, free character-swap (hotkey) switches the controlled character and camera mode
      live; the non-piloted character is passive + invulnerable.
- [ ] Eragon ground combat: a 3-hit sword combo + dodge-roll + exactly 4 working hotkey spells
      (Digit1-4), each consuming energy and showing the spoken Ancient-Language word.
- [ ] A debug overlay (toggle key) offers godmode, force-win, force-lose, and an FPS/energy readout.
- [ ] Energy meter drains on cast and regens; dropping to 0 blocks casting; wards absorb hits.
- [ ] Thorn (air AI) and Murtagh (ground AI) pursue/attack and can be defeated; Dauthdaert
      ballistae fire lances that damage Saphira on hit.
- [ ] One Eldunarí pickup increases max energy and is remembered across reloads (`localStorage`).
- [ ] A stable fixed-timestep loop (no physics explosions, frame-rate-independent movement).
- [ ] L2/L3 exist as registered `Level` stubs that load an empty arena with a "Coming soon" banner
      (not built out) — proving the level-registry seam without faking completeness.

## Verified Repo Truths

### Data / State

- Fact: The project directory is empty except for a `tmp/` working folder created by /discussion
  and /plan; there is no `package.json`, no `src/`, no git repo.
  Evidence: `C:\Users\User\Desktop\Coding-Projects\Inheritance` listing shows only `tmp/`.
  Implication: This is a pure greenfield scaffold — no existing patterns to match, no backwards
  compatibility, no `MODIFY` of source files (only new files).
  Search Evidence: `ls -la` of the project root returned only `.`, `..`, and `tmp`.

### Execution / Async Flow

- Fact: Node v24.16.0 and npm v11.13.0 are installed and on PATH.
  Evidence: `node -v` → `v24.16.0`; `npm -v` → `11.13.0`.
  Implication: Vite 5/6 + TypeScript 5 toolchain is fully supported; no version workarounds needed.

## Locked Decisions

From the brief (settled — do not re-litigate):

- **Browser 3D via Three.js**; stylized **low-poly / flat-shaded** art, procedurally generated.
- **Scope = 3 levels on one shared engine; ship L1 first.** L2/L3 are roadmap, stubbed here.
- **Free character-swap** between Eragon (sword+magic), Saphira (flight), Roran (hammer).
- **Spellcasting = hotkey spell slots**; character shouts the Ancient-Language word on cast.
- **Combat feel = character-action combos** (combos + dodge + spell-cancel).
- **Progression = collect Eldunarí** to expand energy / unlock spells, persisted to `localStorage`.
- **Controls = keyboard + mouse**; no gamepad in v1.
- **Magic governed by energy = life-force**; Eldunarí = overdrive batteries; wards = auto-shields.
- **Galbatorix finale (L3) is mechanic-gated, not a DPS race** — relevant only when L3 is built.

Decisions made in THIS plan (the brief explicitly deferred these to /plan):

- **Raw Three.js, NOT React-Three-Fiber.** Rationale: this is an imperative, per-frame game
  (combat state machines, hundreds of transient entities, custom fixed-timestep). R3F's React
  reconciliation adds overhead and an awkward bridge for per-frame mutation, and a fresh AI
  implementation is more reliable against the smaller, well-documented raw Three.js surface. The
  brief said "plain Three.js is acceptable if simpler" — confirmed.
- **No physics engine (no Rapier/cannon).** Rationale: arcade flight and action combat want
  *authored* game-feel, not rigid-body simulation. Custom kinematic movement + primitive collision
  (sphere-sphere for hits, AABB for props, y-plane for ground) is simpler, deterministic with the
  fixed timestep, and avoids a WASM async-init dependency. Revisit only if a later level needs it.
- **Audio = Web Audio API synth SFX** (oscillator/noise bursts for casts, hits, fire) — zero audio
  asset files. Optional and low-priority; gated behind a mute toggle.
- **HUD/menus = DOM overlay** (HTML/CSS above the canvas), not in-canvas geometry — far simpler to
  build and style than sprite/text meshes.

Decisions made in THIS plan to resolve review findings:

- **Level 1 is two sequential phases** (Sky vs Thorn → Ground vs Murtagh), NOT a simultaneous
  dual-front battle. Eliminates the death×swap×win soft-lock (a dead air unit can't strand the
  win) and removes the need for ally-AI. Free-swap remains within Phase 2; the non-piloted
  character is passive + invulnerable.
- **Roran in L1 = minimal swap-body:** reuses Eragon's ground locomotion + `ComboStateMachine`
  with a hammer mesh and magic disabled. Proves the 3-way swap seam (locked decision) without
  building a bespoke kit; full Roran kit deferred to L2.
- **One `EngineContext` interface** is the single world/spawn seam shared by Spell.effect,
  CombatSystem, Enemy AI, and Level.load/update (collapses the `World`/`LevelContext` ambiguity).
- **Casters are typed as `Combatant`, not `Character`** — `Combatant` carries `energy`, `wardHp`,
  and `shout()` so enemies (Murtagh) cast through the same magic pipeline.
- **A debug overlay ships early** (Task 2): godmode, force-win, force-lose, FPS/energy readout —
  the primary tuning + seam-proving tool for a game validated by playing.
- **The `Level` seam + a `DevSandboxLevel`** are introduced in Task 2 (not Task 9), so every
  later task mounts its entities through the real registry and is independently runnable.

Guardrails (must not silently weaken):

- No external 3D-model/texture/audio asset downloads in v1 — everything procedural.
- Frame-rate-independent updates only (multiply by `dt`); never assume 60 fps.
- Keep the `Level` interface data-driven so L2/L3 are content, not engine rewrites.

## Known Mismatches / Assumptions

- Mismatch: Brief leans toward React-Three-Fiber + `@react-three/rapier`; this plan chooses raw
  Three.js + no physics engine.
  Repo Evidence: empty repo — nothing committed either way.
  Requirement Evidence: brief lines 21-23 ("Recommend R3F … but plain Three.js is acceptable if
  simpler. (Confirm in /plan.)").
  Planning Decision: confirm raw Three.js + custom kinematics; surfaced for explicit user sign-off
  in the review step.

## All Needed Context

### Documentation & References

- External doc: Three.js manual — https://threejs.org/manual/#en/creating-a-scene
  Section: Fundamentals, Responsive Design, Primitives.
  Why: renderer/scene/camera setup, resize handling, primitive geometries for procedural art.
  Critical insight: call `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))` to avoid 4K perf
  cliffs; handle canvas resize on `window.resize`.
- External doc: Three.js examples — https://threejs.org/examples/
  Section: `webgl_geometry_*`, `misc_controls_pointerlock`, particle examples.
  Why: reference for pointer-lock mouse-look and instanced/points particle VFX.
  Critical insight: use `THREE.InstancedMesh` or `THREE.Points` for many particles — never one
  `Mesh` per particle.
- External doc: Fixed-timestep game loop — https://gafferongames.com/post/fix_your_timestep/
  Why: the accumulator pattern this plan's loop uses.
  Critical insight: accumulate real time, step the simulation in fixed `dt` chunks, render with
  interpolation/leftover alpha; clamp accumulated time to avoid the "spiral of death".
- External doc: Vite — https://vitejs.dev/guide/ (vanilla-ts template).
  Why: zero-config dev server + build; `npm create vite@latest . -- --template vanilla-ts`.
- Repo reference: `./tmp/briefs/2026-06-25-eragon-inheritance-3d-game.md`
  Why: full book fact sheet — spell vocabulary, character kits, enemy roster, level atmosphere,
  exact Ancient-Language words and meanings to use as game data.

### Files Being Changed

```
Inheritance/
├── .gitignore                          ← NEW (node_modules, dist)
├── index.html                          ← NEW (canvas + HUD root)
├── package.json                        ← NEW
├── tsconfig.json                       ← NEW
├── vite.config.ts                      ← NEW
├── README.md                           ← NEW (how to run)
├── public/
│   └── (favicon optional)              ← NEW
└── src/
    ├── main.ts                         ← NEW  entry: bootstrap + start loop
    ├── core/
    │   ├── Game.ts                     ← NEW  orchestrator: loop+interp, phase state machine
    │   ├── EngineContext.ts            ← NEW  the single world/spawn seam (interface + impl)
    │   ├── Input.ts                    ← NEW  keyboard+mouse, pointer-lock, axis resolution
    │   ├── Renderer.ts                 ← NEW  THREE renderer/scene/lights/sky/fog/resize/interp
    │   ├── CameraRig.ts                ← NEW  third-person follow; flight vs ground modes
    │   ├── AudioManager.ts             ← NEW  WebAudio synth SFX + mute
    │   ├── SaveManager.ts              ← NEW  localStorage progression (Eldunarí, unlocks)
    │   ├── EntityManager.ts            ← NEW  add/remove/update/spatial queries
    │   ├── Entity.ts                   ← NEW  base updatable + transform + collider
    │   └── mathx.ts                    ← NEW  clamp, lerp, damp, expDecay, rngFromSeed
    ├── characters/
    │   ├── Character.ts                ← NEW  base playable controller (health, energy, wards)
    │   ├── Saphira.ts                  ← NEW  flight controller (pitch/yaw/roll/throttle, fire)
    │   ├── Eragon.ts                   ← NEW  ground caster + sword combo
    │   ├── Roran.ts                    ← NEW  ground bruiser (hammer, no magic)
    │   └── PlayerController.ts         ← NEW  owns active character + swap logic
    ├── combat/
    │   ├── CombatSystem.ts             ← NEW  hit resolution, damage, hitstop, knockback
    │   ├── ComboStateMachine.ts        ← NEW  input-buffered melee combo
    │   ├── Health.ts                   ← NEW  health/energy/ward component + helpers
    │   └── Projectile.ts               ← NEW  fireball / lance / breath cone
    ├── magic/
    │   ├── spells.ts                   ← NEW  Ancient-Language spell data table
    │   └── SpellSystem.ts              ← NEW  cast resolution, energy spend, ward apply
    ├── enemies/
    │   ├── Enemy.ts                    ← NEW  base AI (steering, aggro, attack windups)
    │   ├── Thorn.ts                    ← NEW  enemy dragon AI (air)
    │   ├── Murtagh.ts                  ← NEW  enemy rider AI (ground)
    │   └── Ballista.ts                 ← NEW  Dauthdaert lance launcher (ground hazard)
    ├── world/
    │   ├── Level.ts                    ← NEW  Level interface + registry + base
    │   ├── Terrain.ts                  ← NEW  procedural ground, water, sky, smoke columns
    │   ├── props.ts                    ← NEW  rocks, city silhouette, Eldunarí pickup
    │   └── levels/
    │       ├── DevSandboxLevel.ts      ← NEW  Task-2 host: flat arena + training dummy
    │       ├── AerialDuelLevel.ts      ← NEW  L1 (BUILT, two phases)
    │       ├── SiegeLevel.ts           ← NEW  L2 STUB (empty arena + banner)
    │       └── UrubaenLevel.ts         ← NEW  L3 STUB (empty arena + banner)
    ├── art/
    │   ├── palette.ts                  ← NEW  color constants (sapphire, crimson, etc.)
    │   ├── materials.ts                ← NEW  flat-shaded material factory + cache
    │   ├── meshes.ts                   ← NEW  procedural dragon/rider/sword/hammer builders
    │   └── vfx.ts                      ← NEW  particle bursts (fire, hit sparks, smoke)
    ├── ui/
    │   ├── HUD.ts                      ← NEW  DOM health/energy/spell-slots/objective/switcher
    │   ├── Menus.ts                    ← NEW  title / pause / win / lose overlays
    │   ├── DebugOverlay.ts             ← NEW  godmode / force-win / force-lose / FPS / energy
    │   └── ui.css                      ← NEW  HUD + menu styling
    └── config/
        └── gameConfig.ts              ← NEW  tunables (speeds, damages, energy, key bindings)
```

### Known Gotchas & Library Quirks

- Three.js `Clock.getDelta()` returns wall-clock delta; for a fixed-timestep loop use
  `performance.now()` + an accumulator, not `getDelta()` directly, or movement will jitter.
- Pointer-lock requires a user gesture — request it on the Start-button click / canvas click. While
  locked, the browser consumes `Esc` to exit the lock and generally does NOT dispatch a
  `keydown('Escape')`, so binding "Esc → pause" silently fails. **Drive pause off the
  `pointerlockchange` event** (lock lost while PLAYING → enter PAUSED), and re-request lock on resume.
- `AudioContext` starts **suspended** until a user gesture — call `audioContext.resume()` inside the
  same Start-button click handler that requests pointer-lock, or all synth SFX is silent.
- Flat shading: set `material.flatShading = true` for the faceted low-poly look — Three.js then
  derives face normals in-shader and **ignores** vertex normals. Do NOT pair it with
  `computeVertexNormals()` (that produces *smoothed* normals and is overridden anyway); only call
  `computeVertexNormals()` for smooth-shaded materials after editing vertex positions.
- Reuse geometries/materials via a cache — creating a new `MeshStandardMaterial` per entity tanks
  performance and leaks GPU memory. Dispose geometry/material on entity removal.
- Quaternion flight: accumulate orientation as a `THREE.Quaternion` and apply local-axis rotations
  (`quaternion.multiply(deltaQ)`) to avoid gimbal lock; never drive a dragon's pitch with Euler `.x`.
- `InstancedMesh`/`Points` for particles; call `instanceMatrix.needsUpdate = true` after writes.
- `localStorage` can throw in private mode / when full — wrap `SaveManager` reads/writes in
  try/catch and fall back to in-memory state (typed `SaveError`, not a bare `catch {}`).
- Vite serves ES modules; import Three.js as `import * as THREE from 'three'` and add `"three"` +
  `"@types/three"` to deps. Pin Three to a current major (e.g. `^0.169`).
- **Do NOT run `npm create vite` into this directory** — it already contains `tmp/`, so the
  scaffolder prompts interactively ("directory not empty…") and hangs a non-interactive agent, and
  the `vanilla-ts` template drops demo files (`counter.ts`, `style.css`, its own `main.ts`) that
  collide with the planned `src/` tree. Author `package.json`/`tsconfig.json`/`vite.config.ts`/
  `index.html`/`src/main.ts` directly instead.
- The `vanilla-ts` template defines only `dev`/`build`/`preview` scripts — **add
  `"typecheck": "tsc --noEmit"`** to `package.json` or every `npm run typecheck` gate fails.
- Quaternion flight: `quaternion.multiply()` does NOT auto-normalize — float drift over a long
  flight shears the model. Call `this.quat.normalize()` each step (cheap) and reuse module-scope
  scratch `Quaternion`/`Euler`/`Vector3` (no per-frame allocation, per the anti-patterns).
- The fixed-timestep loop must keep the leftover accumulator as an **interpolation alpha**
  (`alpha = acc / STEP`) and render visual transforms interpolated between previous and current
  sim state — otherwise motion judders on non-60Hz monitors despite the stable simulation.

## Reconciliation Notes

None — no separate research dossier; the brief's fact sheet is the single source.

## Delta Design

### Data / State Changes

Existing:
- None (empty repo).

Change:
- Introduce a typed `SaveData` persisted to `localStorage` under key `inheritance.save.v1`:
  `{ eldunariCollected: string[], maxEnergyBonus: number, unlockedSpells: string[], levelsCleared: string[] }`.
- In-memory runtime state lives in `Game` (current level, paused, game phase) and per-`Character`
  (`health`, `energy`, `wards`).

Why:
- Single versioned save key keeps progression simple and lets us bump `v1`→`v2` later without
  migration shims (no backwards-compat required per brief).

Risks:
- `localStorage` unavailable/full → must degrade to in-memory (see gotcha).

### Execution / Control Flow

Existing:
- None.

Change:
- A single `requestAnimationFrame` loop in `Game` accumulates real time and steps fixed `dt`
  (e.g. 1/60 s) updates across the `EntityManager`, then renders once per frame. A top-level
  finite state machine gates updates by phase: `TITLE | PLAYING | PAUSED | WON | LOST`.

Why:
- Fixed timestep gives deterministic, frame-rate-independent movement and stable combat.

Risks:
- Spiral of death if a frame stalls — clamp accumulated time to e.g. 0.25 s/frame max.

### User-Facing / Operator-Facing Surface

Existing:
- None.

Change:
- DOM overlay HUD + menus layered over the WebGL canvas; keyboard+mouse controls with pointer-lock
  for mouse-look. Key bindings centralized in `config/gameConfig.ts`.

Why:
- DOM UI is the fastest path to a clean, readable HUD; centralized bindings ease retuning.

Risks:
- Pointer-lock UX (Esc handling) — covered in gotchas.

## Implementation Blueprint

### Architecture Overview

```
main.ts
  └─ new Game(canvas)
       ├─ Renderer (THREE.WebGLRenderer, Scene, lights, sky, fog; renders with interp alpha)
       ├─ Input (keyboard/mouse → InputState, pointer-lock, axis() resolution)
       ├─ CameraRig (follows active character; FLIGHT or GROUND mode, set on swap)
       ├─ EntityManager (all updatable Entities; Combatants are a filtered subset)
       ├─ EngineContext (the one seam: entities+scene+audio+save+spawnProjectile+query)
       ├─ SpellSystem / CombatSystem (shared; operate over Combatants via EngineContext)
       ├─ PlayerController (owns the active Combatant; handles swap; non-piloted = passive+invuln)
       ├─ SaveManager (localStorage progression; try/catch → in-memory)
       ├─ AudioManager (synth SFX; resume() on Start gesture)
       ├─ HUD + Menus + DebugOverlay (DOM)
       └─ current Level (from LevelRegistry) — owns phase state; spawns terrain/enemies/pickups

Per fixed step (dt):
  Input.sample()
  PlayerController.update(dt, input)      // drive active character; handle swap key
  EntityManager.update(dt)                // characters, enemies, projectiles, vfx
  CombatSystem.resolve(dt, ctx)           // hit spheres over Combatants → damage/hitstop/knockback
  SpellSystem.update(dt)                  // energy regen, ward timers
  Level.update(dt, ctx)                   // phase transition + objective/win-lose checks
  CameraRig.update(dt)                    // damped follow of active character
Per frame:
  HUD.sync(activeCharacter, objective); DebugOverlay.sync()
  Renderer.render(alpha)                  // interpolate meshes prev→current by alpha
```

Data flow contract: systems never hold hard refs to entities across frames beyond the
`EntityManager`'s list; entities expose a small interface (`position`, `collider`, `team`,
`takeDamage()`), so Combat/Spell systems operate generically over characters AND enemies.

### Key Pseudocode

```typescript
// core/Game.ts — fixed-timestep loop WITH render interpolation (hot spot)
const STEP = 1 / 60;
let acc = 0, last = performance.now();
const frame = (now: number) => {
  acc += Math.min((now - last) / 1000, 0.25); // clamp → no spiral of death
  last = now;
  while (acc >= STEP) { this.savePrevTransforms(); this.step(STEP); acc -= STEP; }
  const alpha = acc / STEP;                    // leftover → interpolation factor
  this.renderer.render(alpha);                 // lerp visual mesh between prev↔current sim state
  requestAnimationFrame(frame);
};
// step() switches on this.phase; only PLAYING advances the simulation.
// Renderer interpolates each entity's mesh.position/quaternion prev→current by alpha so motion
// stays smooth on non-60Hz displays.

// characters/Saphira.ts — quaternion flight (scratch reuse + renormalize; no gimbal lock)
const _dq = new THREE.Quaternion(), _e = new THREE.Euler(), _fwd = new THREE.Vector3(); // module scope
update(dt, input) {
  _e.set(input.axis('pitch')*PITCH_RATE*dt, input.axis('yaw')*YAW_RATE*dt, input.axis('roll')*ROLL_RATE*dt, 'XYZ');
  _dq.setFromEuler(_e);
  this.quat.multiply(_dq).normalize();                   // LOCAL-axis rotate + de-drift
  this.throttle = clamp(this.throttle + input.axis('throttle')*dt, MIN_SPD, MAX_SPD);
  _fwd.set(0,0,-1).applyQuaternion(this.quat);
  this.position.addScaledVector(_fwd, this.throttle * dt);
  if (input.pressed('fire')) this.breatheFire();         // cone projectile, energy cost
}
// (single-Euler-per-step is gimbal-safe ONLY because deltas are tiny under fixed STEP.)

// combat/ComboStateMachine.ts — input-buffered melee (hot spot)
// states: IDLE → SWING1 → (buffered?) SWING2 → SWING3 → recovery → IDLE
// each swing opens an active-frames window where a hit sphere is enabled;
// a dodge input cancels current recovery into a roll (i-frames for ROLL_IFRAMES).

// magic/SpellSystem.ts — cast (hot spot: energy = life-force). caster: Combatant (chars AND enemies)
cast(caster, spell, ctx /* EngineContext */) {
  if (caster.energy >= spell.cost) {
    caster.energy -= spell.cost;
  } else {
    const deficit = spell.cost - caster.energy;          // spend energy first…
    if (caster.health > deficit) { caster.energy = 0; caster.health -= deficit; } // …bleed only remainder
    else return fizzle();                                // not enough life-force → no cast
  }
  caster.energy = Math.max(0, caster.energy);
  caster.health = Math.max(0, caster.health);            // never NaN/negative bars
  caster.shout(spell.word);                              // floating Ancient-Language text + synth SFX
  spell.effect(caster, ctx);                             // spawn projectile / ward / heal / shockwave
}
```

### Data Models and Structure

```typescript
// config/gameConfig.ts
export const KEYS = {
  forward:'KeyW', back:'KeyS', left:'KeyA', right:'KeyD',
  rollL:'KeyQ', rollR:'KeyE',
  throttleUp:'ShiftLeft', throttleDown:'ControlLeft',  // flight throttle
  dodge:'Space', attack:'Mouse0',
  spell1:'Digit1', spell2:'Digit2', spell3:'Digit3', spell4:'Digit4',
  swap:'KeyF', mute:'KeyM', debug:'Backquote',         // pause is driven by pointerlockchange, not a key
} as const;
// Flight axes (Saphira): pitch = mouse Y (locked), yaw = A/D, roll = Q/E, throttle = Shift/Ctrl.
// Ground axes (Eragon/Roran): move = WASD, look/aim = mouse. WASD is mode-overloaded; Input exposes
// axis('pitch'|'yaw'|'roll'|'throttle') resolved from the active character's mode.

// core/EngineContext.ts — the ONE world/spawn seam (shared by spells, combat, enemies, levels)
export interface EngineContext {
  entities: EntityManager; scene: THREE.Scene; audio: AudioManager; save: SaveManager;
  spawnProjectile(p: ProjectileSpec): void;
  query(team: 'player'|'enemy'): Combatant[];   // living combatants of a team
}

// magic/spells.ts
export interface Spell {
  id: string; word: string; gloss: string;   // 'brisingr', 'fire'
  cost: number; cooldown: number; unlockedByDefault: boolean;
  kind: 'projectile'|'aoe'|'ward'|'heal'|'utility';
  effect(caster: Combatant, ctx: EngineContext): void;   // caster is Combatant so ENEMIES can cast
}
// L1 default-unlocked (bound Digit1-4): brisingr (fireball), thrysta-vindr (shockwave),
// skölir (ward), waíse-heill (heal). Unlock-gated (NOT wired in L1): jierda, garjzla.

// combat/Health.ts — Combatant EXTENDS Entity; carries energy + shout so magic is truly shared
export interface Combatant extends Entity {
  team: 'player'|'enemy';
  health: number; maxHealth: number;
  energy: number; maxEnergy: number; wardHp: number;
  shout(word: string): void;                              // floating text + synth SFX
  takeDamage(amount: number, src?: Combatant): void;
}
// CombatSystem filters EntityManager to combatants (e.g. an `isCombatant` flag) so it never tries
// to damage projectiles/VFX (which are Entities but not Combatants).

// world/Level.ts
export interface Level {
  id: string; title: string;
  load(ctx: EngineContext): void;                 // spawn terrain/enemies/pickups
  update(dt: number, ctx: EngineContext): void;   // phase + objective + win/lose
  unload(): void;
}
export const LevelRegistry: Record<string, () => Level>;  // 'dev-sandbox','aerial-duel','siege','urubaen'

// core/SaveManager.ts — wrap localStorage in try/catch (typed SaveError) → fall back to in-memory.
export interface SaveData {
  eldunariCollected: string[];          // gem IDs; max-energy bonus is DERIVED from .length (idempotent)
  unlockedSpells: string[]; levelsCleared: string[];
}
// maxEnergyBonus = eldunariCollected.length * ELDUNARI_BONUS (never an imperative ++, so reload
// can't double-count). Level.load() skips spawning any pickup whose ID is already in the set.
```

### Tasks (in implementation order)

Task 1 — Project scaffold
Goal: a running Vite + TS + Three.js app rendering an empty lit scene at a stable frame rate.
Files: CREATE `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `.gitignore`,
`README.md`, `src/main.ts`, `src/core/Renderer.ts`, `src/core/mathx.ts`. Run `git init`.
Gotchas: **author the config files BY HAND — do NOT run `npm create vite` into this dir** (it has
`tmp/`, so the scaffolder prompts interactively and drops boilerplate). `package.json` scripts MUST
include `"dev":"vite"`, `"build":"tsc && vite build"`, `"typecheck":"tsc --noEmit"`, `"preview"`.
Pin `three` + `@types/three`; `setPixelRatio(min(dpr,2))`; resize handler.
Definition of done: `npm install` then `npm run dev` shows a colored sky + ground plane +
ambient/directional light; `npm run build` and `npm run typecheck` pass clean.

Task 2 — Core loop, entities, input, camera, Level seam, dev harness
Goal: fixed-timestep loop (with render interpolation) driving an `EntityManager`; input with axis
resolution; a damped follow camera; the real `Level`/`EngineContext` seam + a `DevSandboxLevel`
host + a training-dummy combatant + the debug overlay — so EVERY later task is runnable.
Files: CREATE `src/core/Game.ts`, `Entity.ts`, `EntityManager.ts`, `Input.ts`, `CameraRig.ts`,
`EngineContext.ts`; `src/world/Level.ts`; `src/world/levels/DevSandboxLevel.ts`;
`src/ui/DebugOverlay.ts`; `src/core/AudioManager.ts` (minimal: guarded `play()` no-op + `resume()`).
Gotchas: accumulator + clamp + interpolation `alpha` (render lerps prev→current); frame-rate-
independent (`*dt`); **pause is driven by `pointerlockchange`, NOT an Esc keydown**; `Input` exposes
`axis('pitch'|'yaw'|'roll'|'throttle')` resolved from the active mode; the training dummy is a
static `Combatant` that takes damage (and can fire a test projectile), removed at L1 assembly.
Definition of done: a debug cube spawns via `DevSandboxLevel`, moves via WASD, camera follows
smoothly; losing pointer-lock opens the pause overlay; the debug overlay toggles (godmode /
force-win / force-lose / FPS / energy readout); motion is judder-free on a non-60Hz monitor.

Task 3 — Art layer (procedural low-poly)
Goal: faceted dragon, rider, sword/hammer, rocks, Eldunarí gem, city silhouette + materials/palette.
Files: CREATE `src/art/palette.ts`, `materials.ts`, `meshes.ts`, `src/world/Terrain.ts`, `props.ts`.
Pattern: build from `BoxGeometry`/`ConeGeometry`/`IcosahedronGeometry`; `flatShading:true`; cache
materials by color key; merge static geo where cheap.
Definition of done: a blue low-poly Saphira mesh and a humanoid Eragon mesh render; terrain has
ground, water plane, distant burning-city silhouette, and animated smoke columns (Points).

Task 4 — Characters + free swap
Goal: Saphira flight, Eragon ground locomotion, Roran as a minimal swap-body, and hotkey swap with
camera-mode switch. Energy/health live here (in `Health.ts`/`Character`) so casters exist before magic.
Files: CREATE `src/characters/Character.ts`, `Saphira.ts`, `Eragon.ts`, `Roran.ts`,
`PlayerController.ts`; `src/combat/Health.ts` (full `Combatant`: health+energy+wardHp+shout);
`src/config/gameConfig.ts`.
Gotchas: quaternion flight with scratch-vector reuse + per-step `.normalize()` (no gimbal lock, no
per-frame alloc); `CameraRig.setMode()` is called FROM the swap handler so mouse-delta semantics
(pitch in flight vs aim on ground) switch atomically with the character; ground characters stick to
terrain height; **`Roran` reuses Eragon's ground locomotion + `ComboStateMachine` with a hammer mesh
and magic disabled — no bespoke kit**; the non-piloted character is passive + invulnerable; swap only
between characters the current level/phase makes available.
Definition of done: fly Saphira (pitch/yaw/roll/throttle) with chase-cam; press F to swap to Eragon
on the ground with over-shoulder cam; Roran swappable (shares Eragon's ground kit, hammer mesh).

Task 5 — Combat system
Goal: character-action melee (combo + dodge), hit spheres, damage, hitstop, knockback.
Files: CREATE `src/combat/CombatSystem.ts`, `ComboStateMachine.ts`, `Projectile.ts`; `src/art/vfx.ts`.
Gotchas: enable hit sphere only during active frames; i-frames on dodge; hitstop freezes both
combatants briefly; sphere-sphere broadphase via EntityManager query.
Definition of done: Eragon performs a 3-hit combo and a dodge-roll; hits spawn spark VFX, apply
damage, and produce hitstop; Saphira's claw/tail melee and fire-breath cone deal damage.

Task 6 — Magic system
Goal: Ancient-Language hotkey spells with energy=life-force, wards, cooldowns, shout text.
Files: CREATE `src/magic/spells.ts`, `SpellSystem.ts`.
Gotchas: `cast()` takes a `Combatant` caster + `EngineContext` (so enemies cast too); **overcast =
spend energy first, bleed only the remainder from HP, clamp both ≥0** (no NaN/negative bars); ward
absorbs before health; `caster.shout(word)` plays floating text + (guarded) synth SFX — works against
the Task-2 training dummy before real audio lands in Task 8; exactly the 4 default-unlocked spells
are bound to Digit1-4 (`jierda`/`garjzla` exist in data but are unlock-gated, not bound in L1).
Definition of done: spells `brisingr` (fireball), `thrysta vindr` (shockwave), `skölir` (ward),
`waíse heill` (heal) work against the training dummy, drain energy, regen over time, bleed HP when
overcast, and block when neither energy nor HP suffices.

Task 7 — Enemies + AI
Goal: Thorn (air), Murtagh (ground), Dauthdaert ballistae.
Files: CREATE `src/enemies/Enemy.ts`, `Thorn.ts`, `Murtagh.ts`, `Ballista.ts`.
Gotchas: simple steering (seek/strafe/retreat) + telegraphed windups; ballista leads the dragon's
position and fires green lance projectiles; all share the `Combatant` interface.
Definition of done: Thorn dogfights Saphira and can be defeated; Murtagh duels Eragon with
sword+occasional spell; ballistae fire lances that damage Saphira on hit.

Task 8 — HUD, menus, audio
Goal: DOM HUD (health/energy bars, spell slots, objective text, character switcher) + title/pause/
win/lose menus; flesh out the synth SFX in the `AudioManager` stubbed in Task 2.
Files: CREATE `src/ui/HUD.ts`, `Menus.ts`, `ui.css`; flesh out `src/core/AudioManager.ts`.
Gotchas: HUD reads the active character each frame; menus pause the loop; the **Start button handler
both requests pointer-lock AND calls `audioContext.resume()`** (same user gesture — else SFX is
silent); mute toggle. SFX is the brief's lowest priority — if cut under pressure, the playable
artifact must still stand.
Definition of done: bars and spell cooldowns update live; title→Phase1→Phase2→win and →lose all
reachable; SFX play for cast/hit/fire and can be muted.

Task 9 — Level 1 assembly (two phases) + progression/save
Goal: wire `AerialDuelLevel` as two sequential phases with win/lose, the Phase-2 Eldunarí pickup,
and localStorage persistence. (`Level.ts` already exists from Task 2; remove the training dummy.)
Files: CREATE `src/world/levels/AerialDuelLevel.ts`, `src/core/SaveManager.ts`; register in
`LevelRegistry`.
Gotchas: **Phase 1 (Sky)** = Saphira vs Thorn + ballistae; Saphira's death = loss (only she can
fight Thorn); Thorn defeated → "descends" transition → **Phase 2 (Ground)** = Eragon vs Murtagh,
swap to Saphira/Roran allowed (non-piloted = passive+invulnerable); Murtagh defeated = win; lose =
active character HP 0 with no living swappable character able to continue the phase. `load()` skips
the Eldunarí gem if its ID is already in `save.eldunariCollected`; max-energy bonus is DERIVED from
the collected set (no imperative ++). Wrap localStorage in try/catch (typed `SaveError`) → in-memory.
Definition of done: full L1 is playable title→Phase1→Phase2→win AND →lose; collecting the Phase-2
Eldunarí raises max energy and persists across reload without re-spawning or double-counting.

Task 10 — L2/L3 stubs + final validation
Goal: register `SiegeLevel` and `UrubaenLevel` stubs (empty arena + "Coming soon" banner) to prove
the level seam; final lint/typecheck/build pass; README run instructions.
Files: CREATE `src/world/levels/SiegeLevel.ts`, `UrubaenLevel.ts`; finalize `README.md`.
Gotchas: stubs must clearly read as stubs (banner), not look broken.
Definition of done: a debug level-select can load each stub without errors; `npm run build` +
`npm run typecheck` clean.

### Integration Points

- Entry point: `index.html` → `src/main.ts` → `new Game()`.
- Level seam: `world/Level.ts` `LevelRegistry` — the single extension point for L2/L3.
- World/spawn seam: `core/EngineContext.ts` — the one context passed to spells, combat, enemies,
  and `Level.load/update`.
- Tunables: `config/gameConfig.ts` (key bindings, axis mapping, speeds, costs, damages).
- Persistence: `core/SaveManager.ts` (`localStorage` key `inheritance.save.v1`).
- Shared combat contract: `combat/Health.ts` `Combatant extends Entity` (characters AND enemies cast).

## Validation

```bash
npm install
npm run typecheck      # tsc --noEmit — expect zero errors
npm run build          # vite build — expect a clean static bundle in dist/
npm run dev            # manual play-test in browser; check console for zero errors
```

### Factuality Checks

- `Verified Repo Truths` lists only the empty-repo facts actually observed.
- Every file in the tree is `← NEW` (greenfield) — no `MODIFY` paths to verify.
- No template placeholders remain.

### Manual Checks

- Scenario: Start → Phase 1: fly Saphira, juke a Dauthdaert lance, defeat Thorn → descend
  transition → Phase 2: defeat Murtagh as Eragon, collecting the Eldunarí. Expected: win screen;
  reload preserves the collected Eldunarí (bigger energy bar), gem does not respawn.
- Scenario: Let Saphira's HP hit 0 in Phase 1. Expected: lose screen (Thorn is unbeatable without
  her); retry restarts L1 at Phase 1.
- Scenario: Spam spells past energy 0. Expected: casting spends energy then bleeds only the
  remainder from HP; blocks entirely when neither suffices; bars never NaN/negative.
- Scenario: Toggle the debug overlay, press force-win and force-lose. Expected: each jumps directly
  to the corresponding end screen (proves both seams without a full fight).

## Open Questions

None — the brief settled design; the raw-Three.js / no-physics calls are surfaced under Known
Mismatches for explicit sign-off in review.

## Final Validation Checklist

- [ ] `npm run typecheck` and `npm run build` pass (typecheck script exists in package.json)
- [ ] No console errors during a full L1 play-through (title→Phase1→Phase2→win, and →lose)
- [ ] Win and lose states both reachable by play AND via the debug overlay
- [ ] Eldunarí persists across reload without respawning or double-counting (bonus derived from set)
- [ ] Fixed-timestep loop stable; movement frame-rate-independent; render-interpolated (no judder)
- [ ] Pause is driven by `pointerlockchange`, not an Esc keydown; AudioContext resumes on Start
- [ ] Spells take a `Combatant` caster; overcast bleeds only the remainder; bars never NaN/negative
- [ ] One `EngineContext` used by spells/combat/enemies/levels (no `World`/`LevelContext` split)
- [ ] L2/L3 stubs load without error
- [ ] No external 3D/audio asset files added (all procedural)
- [ ] localStorage failure degrades to in-memory (typed `SaveError`, no bare catch)

## Deprecated / Removed Code

None — greenfield project; nothing to remove.

## Anti-Patterns to Avoid

- Don't reach for React-Three-Fiber or a physics engine "just in case" — the loop is imperative
  and the collisions are primitive by design.
- Don't allocate per-frame (`new THREE.Vector3()` in hot loops) — reuse scratch vectors.
- Don't create a Mesh/Material per particle or per projectile spam — pool and reuse; dispose on
  removal.
- Don't drive flight orientation with Euler angles — use quaternions.
- Don't assume 60 fps — always multiply by `dt`.
- Don't swallow `localStorage` errors silently — type them and fall back to in-memory.
- Don't build out L2/L3 content in this pass — they are stubs; L1 must be the proof first.
```

## Criticer Notes

1. **[honest assessment — idle characters are a dead leg]** Free-swap requires all three characters present in L1 and the lose condition assumes each is alive/damageable, yet nothing defines what a non-piloted character does (auto-fly? hover? fall? freeze? still shot by ballistae/Thorn?). The swap mechanic lives at exactly this seam and it is mechanism-less.
2. **[biggest gap — the two pillars don't share a space]** L1 is an air dogfight AND a ground duel "at once", but the plan never specifies how ground (Eragon/Murtagh) and sky (Saphira/Thorn) coexist spatially, nor the air→ground handoff (where is Eragon while you fly? how does "fly down" become "control Eragon next to Murtagh"?). The level's whole identity is this dual battle and its integration is hand-waved.
3. **[over-built — Roran has no job in the Aerial Duel]** A full Roran ground-bruiser controller is built and "swappable" in L1, but his archetype (warhammer, siege) belongs to L2's streets. Building/wiring a third character for the level he doesn't belong in is gold-plating the proof — defer to L2.
4. **[premise check — "L2/L3 are content, not engineering" is optimistic]** L3 is an explicitly mechanic-gated, non-DPS finale that won't reuse the combo/hit-sphere system; L2 adds urban traversal + pain-immune elites. Both are new engine work. Generalizing L1's engine now for battles whose mechanics aren't built risks premature abstraction.
5. **[cheap win — no dev harness for a game validated by playing]** Validation depends on full manual playthroughs, yet game-feel needs dozens of tuning passes. A tiny debug overlay (godmode, instant-kill/force-win/force-lose keys, FPS/energy readout) is near-zero effort and the highest-leverage tuning + seam-proving tool.
