# Brief: Eragon "Inheritance" — Browser-based 3D Action Game

## Why
The user wants an "awesome" 3D game based on *Inheritance*, the fourth and final book of
Christopher Paolini's Inheritance Cycle. The game should model the book — recreating its most
iconic events, characters, powers, and atmosphere — and let the player control multiple
characters. This brief captures the scoping discussion and a book-accurate fact sheet so a
`/plan` pass can turn it into a concrete implementation plan.

## Context
- **Project location:** `C:\Users\User\Desktop\Coding-Projects\Inheritance` — currently an
  **empty, non-git directory**. Greenfield. Will need `git init` + project scaffolding.
- **Platform:** Windows 11, browser-based delivery.
- **No existing code or constraints** — full freedom of stack choice within the browser.
- A `researcher` agent compiled a book fact sheet (events, characters, Ancient Language spell
  vocabulary, enemies, locations) — embedded below under "Book Reference".

## Decisions
- **Tech stack: Three.js (browser 3D).** Chosen over Godot/Unity because the agent can write
  AND test it end-to-end, the user runs it instantly by opening a page, and it ships anywhere.
  Accepted tradeoff: lower fidelity ceiling than a native engine. Recommend
  **React-Three-Fiber + Vite + TypeScript** with `@react-three/drei` and a physics lib
  (`@react-three/rapier`) — but plain Three.js is acceptable if simpler. (Confirm in /plan.)
- **Art direction: stylized low-poly.** Art assets are the hard constraint for an AI-built game.
  A deliberate low-poly / flat-shaded look (think *Hyper Light Drifter* meets *Zelda*) reads as
  intentional and cool rather than cheap, and is generatable procedurally / from primitives.
  Color-coded dragon silhouettes: Saphira sapphire-blue, Thorn crimson, Fírnen green,
  Shruikan black.
- **Scope: three set-piece levels sharing ONE engine.** The user wants all three iconic battles
  (originally "one vertical slice", expanded to "do all 3"). This is feasible because the three
  levels reuse the same flight system, ground-combat system, magic system, and swap system —
  we build the systems once, then dress three maps with different layouts, enemies, objectives.
  - **L1 — Aerial Duel:** Saphira vs Thorn dogfight in open sky; drop down for the
    Eragon-vs-Murtagh sword+magic ground duel. Hazard layer: ground-fired **Dauthdaert**
    ("Death Spear") anti-dragon lances that can pierce Saphira's wards.
  - **L2 — Siege of Dras-Leona:** strafe defenders from the air as Saphira, then push through
    breached streets on foot as Eragon + Roran. Helgrind (jagged black four-spire mountain)
    looms. Enemy variety incl. pain-immune "laughing soldiers" (horror-elite).
  - **L3 — Assault on Urû'baen:** grand climactic battle approaching Galbatorix's black citadel;
    finale vs Galbatorix.
- **Character swap: free swap anytime.** Hotkey-switch between **Eragon** (ground: sword Brisingr
  + Ancient Language magic + wards), **Saphira** (air: flight, fire-breath cone, claw/tail/wing
  melee), and a **second hero** (Roran — no magic, warhammer bruiser/tactician). Each level
  may gate which characters are available based on context, but swapping is player-driven.
- **Magic system = Ancient Language spellcasting** governed by an **energy meter that equals
  life-force** (overcasting drains HP — canon and self-balancing), with **Eldunarí** soul-gems
  as collectible "overdrive batteries" that expand the energy pool. Spells map to real
  Ancient-Language words (list below).
- **Final boss is a MECHANIC-GATED fight, not a DPS race.** Per the book, Galbatorix is
  near-omnipotent. The finale should be phased: ward-strip (Name of Names) + an "empathy
  overload" climax, rather than grinding a health bar. Keeps it lore-true and more memorable.

### Gameplay / UX decisions (second discussion pass)
- **Spellcasting: hotkey spell slots.** Bind spells to keys (e.g. 1-4 / Q-E); on cast the
  character shouts the Ancient-Language word and the effect plays. Chosen for fast, reliable
  action combat over typing-the-word (too slow mid-fight). NOTE: keep the door open for a
  *single* dramatic typed cast at the Galbatorix finale ("Waíse néiat") as a special-case
  flourish — not a core mechanic, optional polish.
- **Combat feel: character-action combos.** Fast sword combos + spell-cancels, dodge-roll,
  aerial juggles (Devil May Cry / Zelda energy). Fits the Rider power-fantasy. Implies an
  input-buffer + combo-state-machine in the engine.
- **Progression: collect Eldunarí to upgrade.** Eldunarí soul-gems found across levels expand
  the energy pool and unlock new spells. Lore-accurate, rewards exploration. **Requires a
  save/persistence layer** (localStorage is fine for browser) carrying unlocks between levels.
- **Controls: keyboard + mouse** (desktop browser). WASD + mouse-look + hotkeys for spells &
  character swap. No gamepad in scope for v1.

## Rejected Alternatives
- **Godot / Unity / Unreal** — rejected: the agent can't reliably build/test these via code, and
  they're asset-dependent; high risk of a broken, un-runnable project.
- **"Model the whole book" / open-world hub** — rejected as first target: AAA-studio scope; would
  be shallow and janky everywhere. Three deep set-pieces beat fifty shallow ones. (An explorable
  hub remains a possible *future* expansion once the engine exists.)
- **Story/dialogue-heavy narrative mode** — deprioritized: user picked action pillars (flight,
  ground combat, multi-character) over "story & choices". Light cutscene framing only.

## Where Reasoning Clashed
- **"One vertical slice" vs "all three battles."** The user first chose a single polished slice,
  then asked for all three set-pieces. These pull in opposite directions (depth vs breadth). The
  resolution — *three levels on one shared engine* — honors both, BUT it front-loads engine work
  and risks each level being lighter than a single-slice focus would allow. A reasonable person
  could argue for shipping **L1 only** first (true vertical slice), proving the fun, THEN adding
  L2/L3. Recommendation for /plan: **build L1 end-to-end as the playable proof, then L2, then L3**
  — i.e. treat the three-level scope as a roadmap, not a simultaneous build.

## One Thing to Do First
Scaffold the project: `git init` + a Vite + TypeScript + Three.js (React-Three-Fiber) skeleton
that renders a controllable low-poly dragon flying over a ground plane with a third-person camera.
That single "fly Saphira around an empty world" milestone de-risks the whole engine.

## Direction
Build a stylized low-poly, browser-based 3D action game in Three.js that recreates the climax of
*Inheritance* across three set-piece levels (Aerial Duel → Siege of Dras-Leona → Assault on
Urû'baen) on one shared engine, with free swapping between Eragon (sword+magic), Saphira (dragon
flight), and Roran (hammer). Combat is fast character-action (combos + dodge + hotkey
Ancient-Language spells); progression comes from collecting Eldunarí to expand energy and unlock
spells (saved via localStorage); controls are keyboard+mouse; the Galbatorix finale is
mechanic-gated, not a DPS race. Ship Level 1 end-to-end first as the playable proof, then expand.

---

# Book Reference (fact sheet for /plan)

## Significant events (chronological)
1. **Siege of Belatona** — lakeside city assault; a **Dauthdaert** ("Niernen", green-glowing
   elf-forged dragon-killing lance) nearly kills Saphira → great boss-projectile mechanic.
2. **Roran's Siege of Aroughs** — Roran (no magic) takes a fortified city via engineering/waterworks
   tactics, not brute force → optional "tactician puzzle-siege" mission idea.
3. **Battle of Dras-Leona** — Murtagh & Thorn block the gates; strike team infiltrates the
   catacombs/sewers beneath the city (tied to **Helgrind** & its death-cult priesthood); the elf
   **Wyrden** dies in a trap; Eragon opens the gates from inside.
4. **Capture of Nasuada** — Murtagh & Thorn night-raid the camp, injure Arya, abduct Nasuada to
   Urû'baen; Eragon becomes interim Varden leader.
5. **Vroengard & the Vault of Souls** — Eragon & Saphira fly to ruined Vroengard Island; at the
   **Rock of Kuthian** they speak their **true names** to open the Vault, finding hidden
   **Eldunarí** + **dragon eggs** (led by white dragon **Umaroth**). Eragon learns the
   **Name of Names** (master word to unbind/alter any spell) — the key to beating Galbatorix.
6. **Assault on Urû'baen (Ilirea)** — armies assault the capital; strike team infiltrates the
   black citadel. Galbatorix (amplified by hundreds of enslaved Eldunarí) is beaten not by damage
   but by an **empathy/"understanding" spell** flooding him with all the pain he caused +
   **Murtagh** stripping his wards with the Name of Names → Galbatorix self-destructs
   ("**Waíse néiat!**" = "Be not!"). **Arya** kills the black dragon **Shruikan**.
7. **Aftermath** — a rescued egg hatches the **green dragon Fírnen** for **Arya** (now elf queen +
   Rider); Eragon sails east with the eggs/Eldunarí to train new Riders.

## Playable / boss characters
- **Eragon** — Rider hybrid: sword **Brisingr** (ignites on command), full magic spellbook,
  energy-pool casting, auto-triggering **wards**, elf-enhanced speed/strength. Most versatile kit.
- **Saphira** — dragon: **flight**, **fire-breath** (cone AoE), claw/bite/tail melee, wing-buffet
  knockback, dive attacks. Vulnerable to **Dauthdaert** anti-dragon lances. Sapphire-blue.
- **Roran "Stronghammer"** — **no magic**: warhammer bruiser, high toughness, rally/command buffs,
  siege-tactics archetype. "Tank/tactician".
- **Murtagh & Thorn** (rival/boss) — dark mirror of Eragon/Saphira; sword **Zar'roc** ("Misery"),
  crimson Thorn, boosted by Galbatorix's Eldunarí; knows the Name of Names late. Possible late ally.
- **Arya** — elf duelist (swift swordplay, magic, agility); post-climax becomes Rider of **Fírnen**
  (green dragon) → unlocks a dragon kit. Dual-phase character.
- **Galbatorix** (final boss) — vast magic via enslaved Eldunarí, near-immune wards, the Name of
  Names, black dragon **Shruikan**. Two-phase: Shruikan + king. **Mechanic-gated**, not DPS.

## Magic system rules
- **Energy cost = real physical effort**; overcasting spends life-force and can kill the caster →
  energy meter that drains HP at the extreme. Self-balancing.
- **Eldunarí** soul-gems = extra energy battery / overdrive; Galbatorix's huge stockpile = his
  power gap. Good collectible/upgrade system.
- **Ancient Language cannot lie**; misspoken spells backfire → optional precision/risk mechanic.
- **Wards** = pre-cast standing auto-shields drawing from energy; can be overwhelmed or bypassed
  via the Name of Names.
- **True names** = dominate/"hack" a being. **Name of Names** = unbind/alter/negate any spell
  (late-game ultimate).

## Ancient Language spell vocabulary (word → meaning) — map to abilities
Offense/elemental: **brisingr** (fire), **istalrí** (fire/blast — "Istalrí boetk!"), **garjzla**
(light → beam), **naina** (illuminate), **vindr** (wind), **thrysta** (thrust/compress —
"Thrysta vindr" = air shockwave), **adurna** (water — "Reisa du adurna"), **deloi/stenr** (earth/
stone — "Stenr reisa!" stone rise), **jierda** (break/snap), **kverst** (cut — "Kverst malmr"),
**thverr** (scatter), **vaetna** (dispel).
Control/utility: **letta** (stop/hold), **slytha** (sleep), **malthinae** (bind/confine),
**gánga** (go), **flauga** (fly), **theyna** (be silent), **du grind huildr** (hold the gate).
Defense/heal: **skölir** (shield — "Skölir nosu fra brisingr!"), **waíse heill** (be healed),
**waíse néiat** (be not / unmake — Galbatorix's self-destruct).
Flavor terms: **Shur'tugal** (Rider), **Skulblaka** (dragon), **Eldunarí** (heart of hearts),
**Argetlam** (Silverhand), **gedwëy ignasia** (shining palm/Rider's mark), **Dauthdaert**
(Death Spear), **Helgrind** (Gates of Death).
> Note: fan-source spellings vary (skölir/skolir, waíse/waise) — verify against the printed
> book glossary if exact UI text matters.

## Enemies / creatures
- **Empire soldiers** (red tunics) — standard human melee/archers.
- **"Laughing" / pain-immune soldiers** — spell-altered men who feel no pain; only stopped by
  dismemberment/decapitation → horror-elite; telegraph that damage alone won't stop them.
- **Ra'zac** — insectoid humanoid predators; hunt by smell, paralyzing breath, hate sunlight →
  weak to light.
- **Lethrblaka** — adult flying Ra'zac mounts; gray leathery; aerial mini-bosses near Helgrind.
- **Urgals** (gray horned brutes; Book-4 allies but usable as enemies) & **Kull** (8ft+ elite
  Urgals).
- **Shades** — spirit-possessed sorcerers; red hair, fast/strong, only killed by a stab through
  the heart → top-tier boss.
- **Constructs / ward-walls / priest-traps** (killed Wyrden) — citadel & catacomb hazards.
- **Shruikan** — Galbatorix's enormous enslaved black dragon → final aerial boss-beast.

## Locations / atmosphere (the three levels)
- **(a) Open-sky aerial duel** — open air over plains/lake/burning city; smoke columns; blue sky
  vs color-coded dragons; sunset/night variants; Dauthdaert ground-fire hazard. Fast, vertiginous.
- **(b) Dras-Leona (siege)** — grimy walled trade city; **Helgrind** (colossal jagged black
  four-spire mountain) looming; cathedral, slums, catacomb/sewer labyrinth with deadly traps.
  Palette: gray stone, soot, torch-orange, blood. Grim siege above + dungeon-horror below.
- **(c) Urû'baen / Ilirea + black citadel** — ancient elf-built capital under a vast overhanging
  rock shelf; dark fortress-palace, cavernous throne hall, oppressive scale. Palette: black stone,
  deep shadow, cold torch / green-magic glow, gold throne accents; Shruikan's bulk in darkness.

## Risks / mitigations
- Final boss can't be a health-bar grind (lore) → build a phased mechanic-gate finale.
- Art assets are the constraint → commit to procedural/low-poly so the look stays coherent.
- Three levels is a lot → ship **L1 first** end-to-end as the playable proof, then expand.
- Ancient Language spellings vary across sources → verify against the book glossary for final UI.

## Sources
Wikipedia (Inheritance novel), Inheriwiki (Inheritance / Name of Names / True Name / Ancient
Language), Du Islingr & Eragonbycp glossaries, SuperSummary, Goodreads. Confidence: high on
events/characters/atmosphere; medium on exact Ancient-Language spellings.
