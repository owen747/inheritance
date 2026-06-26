# MISSION 1e17ec47-64e8-4f5f-bf01-88639f7e13ac

<!-- MZONE:PLAN n=de31abe1 -->
MISSION MODE: build
Finish the Inheritance browser game (raw Three.js + TS + Vite, Level 1 already shipped) and deploy it LIVE on the web.
Roadmap:
  Part 1 — Level 2: Siege of Dras-Leona (aerial strafing -> ground street push; Roran full kit; Empire soldiers + pain-immune laughing-soldier elites; swap-meaningful encounter design; Helgrind/urban procedural art). Replaces the L2 stub.
  Part 2 — Level 3: Assault on Uru baen + mechanic-gated Galbatorix finale (ward-strip + empathy-overload, not a DPS race); Shruikan. Replaces the L3 stub.
  Part 3 — Cohesion & polish: level-select/progression flow across L1-L3, main menu, balance, audio/feedback polish, fix outstanding L1 review notes.
  Part 4 — Ship: production build + deploy live (GitHub Pages via gh, or a static host), return the live URL.
Standing directive: route each part through research -> /plan(+reviewers) -> /implement -> review barrier, looping to convergence. Codex is UNAVAILABLE on this machine, so the review barrier is Claude-only (implementation-reviewer + an adversarial reviewer + criticer) rather than the cross-model panel; do not deadlock on the Codex 4/4 gate. /pre-compact freely. Active until a [mission] MISSION-CLEARED line appears.
<!-- /MZONE:PLAN n=de31abe1 -->
<!-- MZONE:DURABLE NOTES n=de31abe1 -->
part=1 review r1 findings: (1) Saphira can die during BREACH cutscene w/ no loss (in-flight lances not flushed); (2) rooftop archer only killable by Saphira not Eragon — docs/wire mismatch; (3) no per-wave counter hint (only W3); (4) EntityManager.disposeEntity disposes SHARED cached geo/materials on every enemy death — GPU churn; (5) Eldunari live bonus wasted if picked as Roran. impl-reviewer: Ready 0-blocking. criticer: rotation economy decorative, counters per-wave not live.
<!-- mid:m1-review-r1-note -->
<!-- /MZONE:DURABLE NOTES n=de31abe1 -->
<!-- MZONE:PLAN CHALLENGES n=de31abe1 -->
<!-- /MZONE:PLAN CHALLENGES n=de31abe1 -->
<!-- MZONE:PENDING DECISIONS n=de31abe1 -->
<!-- /MZONE:PENDING DECISIONS n=de31abe1 -->
<!-- MISSION schema=v1 sid=1e17ec47-64e8-4f5f-bf01-88639f7e13ac nonce=de31abe1516affbec7fd456f8eefc51b plan_hash=1eb5b3b56746e030 -->
