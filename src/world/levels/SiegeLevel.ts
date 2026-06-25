// world/levels/SiegeLevel.ts
// Level 2 ROADMAP STUB — "Siege of Dras-Leona". Registered + loadable (proves the
// level-registry seam) but not built: an empty lit arena with a "Coming soon"
// banner. Urban traversal + pain-immune elites are new engine work, deferred.
import { StubLevel } from './StubLevel';

export class SiegeLevel extends StubLevel {
  readonly id = 'siege';
  readonly title = 'Siege of Dras-Leona';
  protected readonly bannerTitle = 'Siege of Dras-Leona';
}
