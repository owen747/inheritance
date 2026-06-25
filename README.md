# Inheritance — Aerial Duel

A stylized low-poly browser 3D action game built in **raw Three.js + TypeScript + Vite**,
recreating the climax of Christopher Paolini's *Inheritance*. All art is procedural (zero external
3D / texture / audio assets); audio is Web Audio synth SFX.

**Level 1 — The Aerial Duel — is fully playable end-to-end.** Fly Saphira in a dogfight against
Thorn, then descend and free-swap to Eragon for a sword-and-magic duel against Murtagh, collect an
Eldunarí to grow your energy pool, and reach a win or lose screen. Levels 2 and 3 ship as registered
roadmap stubs (see below).

## Run

```bash
npm install      # install three + vite + typescript
npm run dev      # start the Vite dev server (open the printed URL)
```

In the browser you land on the **title screen**. Click **Start** — this requests pointer-lock and
resumes the AudioContext on the same user gesture (both are required, or mouse-look and SFX stay
dead). Pressing **Esc** releases pointer-lock, which pauses the game via the `pointerlockchange`
event (Esc is intentionally not a key binding); click **Resume** (or the canvas) to re-lock and
continue.

## Validate

```bash
npm run typecheck   # tsc --noEmit — expect zero errors
npm run build       # tsc && vite build — clean static bundle in dist/
npm run preview     # serve the built bundle
```

## Controls

| Action                         | Binding              |
| ------------------------------ | -------------------- |
| Move / strafe (ground)         | W / A / S / D        |
| Look / aim (ground)            | Mouse                |
| Pitch (flight)                 | Mouse                |
| Yaw (flight)                   | A / D                |
| Roll (flight)                  | Q / E                |
| Throttle up / down (flight)    | Shift / Ctrl         |
| Attack (sword / claw / hammer) | Mouse 0 (left click) |
| Dodge-roll (ground)            | Space                |
| Fire breath (Saphira)          | 1 (hold)             |
| Spells (Eragon, Digit1–4)      | 1 / 2 / 3 / 4        |
| Swap character (Phase 2)       | F                    |
| Mute                           | M                    |
| Debug overlay                  | ` (backquote)        |
| Pause                          | Esc (releases lock)  |

**Eragon's four spells** (Digit1–4): `Brisingr` (fireball), `Thrysta vindr` (shockwave), `Skölir`
(ward), `Waíse heill` (heal). Casting spends energy = life-force; if energy runs out it bleeds the
remainder from health, and blocks entirely when neither suffices.

## Level 1 — the two-phase flow

1. **Phase 1 — Sky.** You pilot **Saphira** (FLIGHT) over a burning-city skyline. **Thorn** (the
   crimson enemy dragon) dogfights you while ground **Dauthdaert ballistae** fire lethal green lances
   you must juke. Defeat Thorn to advance. **Saphira's death is an unrecoverable loss** — only she
   can fight Thorn.
2. **Descent.** Thorn falls, the siege breaks, and Saphira descends to the battlefield (a brief
   transition beat).
3. **Phase 2 — Ground.** You pilot **Eragon** (sword combo + the four spells) against **Murtagh**.
   Press **F** to free-swap among Eragon, **Saphira** (now landed / auto-hovering), and **Roran**
   (war-hammer, no magic). The character you are *not* piloting is passive and invulnerable, so no
   ally can be killed out from under you. A single **Eldunarí** sits on the field: walk over it to
   permanently grow your energy pool. Defeat Murtagh to **win**. You **lose** only if every
   swappable character has fallen.

**Progression persists** to `localStorage` (key `inheritance.save.v1`). Once collected, the Eldunarí
does not respawn on reload and the larger energy bar is reproduced (the bonus is derived from the
collected set, so it never double-counts). If storage is unavailable (private mode / quota), the
game degrades to in-memory state instead of crashing.

**Debug overlay** (` backquote): godmode toggle, force-win, force-lose, and an FPS / health / energy
readout — the fastest way to reach either end screen without a full fight.

## Roadmap — Levels 2 & 3

Both are **registered `Level` stubs** (they prove the level-registry seam and load an empty lit
arena with a "Coming soon" banner — they are not built out):

- **Level 2 — Siege of Dras-Leona** (`siege`): urban traversal + pain-immune elites. New engine work.
- **Level 3 — Assault on Urûʼbaen** (`urubaen`): the Galbatorix finale is mechanic-gated (not a DPS
  race) and will not reuse the L1 combo/hit-sphere system as-is.

A `DevSandboxLevel` (`dev-sandbox`) also stays registered as a tuning harness (roster + free-swap,
no enemies). The shipped game boots straight into `aerial-duel`.
