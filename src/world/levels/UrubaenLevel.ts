// world/levels/UrubaenLevel.ts
// Level 3 ROADMAP STUB — "Assault on Urûʼbaen". Registered + loadable (proves the
// level-registry seam) but not built: an empty lit arena with a "Coming soon"
// banner. The Galbatorix finale is mechanic-gated (not a DPS race) and will not
// reuse the L1 combo/hit-sphere system as-is — deferred to its own pass.
import { StubLevel } from './StubLevel';

export class UrubaenLevel extends StubLevel {
  readonly id = 'urubaen';
  readonly title = 'Assault on Urûʼbaen';
  protected readonly bannerTitle = 'Assault on Urûʼbaen';
}
