# Inheritance — a browser 3D action game

**▶ Play it live: https://owen747.github.io/inheritance/**

A stylized low-poly browser 3D action game built in **raw Three.js + TypeScript + Vite**, recreating
the climax of Christopher Paolini's *Inheritance* (Book IV of the Inheritance Cycle). All art is
**procedural** — zero external 3D / texture / audio assets; audio is Web Audio synth SFX.

A full three-level campaign with free character-swapping (Saphira the dragon, Eragon the Rider, and
Roran), an Ancient-Language magic system, a finisher mechanic, and a mechanic-gated final boss.

## The campaign

From the main menu, levels unlock as you clear them. **Continue** advances to the next level; **Retry**
replays the current one; progression persists to `localStorage`.

- **Level 1 — The Aerial Duel.** Fly **Saphira** in a dogfight against **Thorn**, then descend and
  free-swap to **Eragon** for a sword-and-magic duel against **Murtagh**. Dodge ground-fired Dauthdaert
  lances; collect an Eldunarí to grow your energy pool.
- **Level 2 — Siege of Dras-Leona.** Strafe the wall ballistae as Saphira, breach the gate, then push
  three street waves to the cathedral. **Swapping is required, not optional** — hard counters force the
  right hero: **Armored Brutes** only Roran's hammer breaks; **rooftop Archers** only Saphira (flight)
  reaches; the pain-immune **Laughing Soldier** only dies to a ground **finisher** (heavy attack) while
  staggered. Helgrind's four black spires loom over the city.
- **Level 3 — Assault on Urûʼbaen.** An aerial boss duel against the black dragon **Shruikan**, then the
  **Galbatorix finale** — *not a damage race*. Galbatorix is unkillable by HP, shielded by enslaved
  Eldunarí. Destroy the floating Eldunarí anchors to strip his wards, then — as he reels, overwhelmed —
  **type the Ancient-Language unmaking word `WAISE NEIAT`** to end him. Victory: Arya and the green
  dragon Fírnen.

## Run locally

```bash
npm install
npm run dev       # open the printed localhost URL
```

Click a level on the title screen — this requests pointer-lock and resumes the AudioContext on the same
user gesture (both required, or mouse-look and SFX stay dead). **Esc** releases pointer-lock, which
pauses via the `pointerlockchange` event; click **Resume** to continue. Append `#siege` or `#urubaen` to
the URL to jump straight to a level for testing.

## Controls

| Action | Binding |
| --- | --- |
| Move / strafe (ground) | W / A / S / D |
| Look / aim (ground) · Pitch (flight) | Mouse |
| Yaw (flight) | A / D |
| Roll (flight) | Q / E |
| Throttle up / down (flight) | Shift / Ctrl |
| Attack (sword / claw / hammer) | Left click |
| **Heavy / finisher** | **Right click** |
| Dodge-roll (ground) | Space |
| Spells (Eragon) · Fire-breath (Saphira hold 1) · Rally (Roran 1) | 1 / 2 / 3 / 4 |
| Swap character | F |
| Mute · Debug overlay | M · ` (backquote) |

**Eragon's spells:** `Brisingr` (fireball), `Thrysta vindr` (shockwave), `Skölir` (ward), `Waíse heill`
(heal). Casting spends energy = life-force; overcasting bleeds the remainder from health.

## Validate

```bash
npm run typecheck   # tsc --noEmit
npm run build       # tsc && vite build -> dist/
npm run preview     # serve the built bundle
```

## Architecture (one-paragraph tour)

A fixed-timestep loop (`src/core/Game.ts`) with render interpolation drives an `EntityManager`; the
active `Character` controller receives input each frame and a hotkey swaps which one is active (camera
mode follows). One `EngineContext` is the single spawn/world seam shared by spells, combat, enemies, and
levels. Levels are data-driven (`src/world/Level.ts` registry); each of the three is a two-phase
`Level` that reuses the shared flight / combat / magic / save systems. Art is faceted low-poly built
from cached primitives (`src/art/`). See `tmp/done-plans/` for the per-level design plans.

## Deploying

The build is hosted on **GitHub Pages from the `gh-pages` branch** (Vite `base: './'` makes asset paths
relative so it works at the `/inheritance/` subpath). To redeploy after changes:

```bash
npm run build
cd dist && touch .nojekyll && git init -q && git checkout -b gh-pages \
  && git add -A && git commit -qm deploy \
  && git push -f https://github.com/owen747/inheritance.git gh-pages && rm -rf .git
```

> Note: a CI workflow (`.github/workflows/`) would be cleaner, but the deploying token lacks the
> `workflow` OAuth scope — hence the branch-deploy above. Grant `workflow` scope to switch to Actions.
