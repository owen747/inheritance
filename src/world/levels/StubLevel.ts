// world/levels/StubLevel.ts
// Shared base for the L2/L3 ROADMAP stubs. Each loads the renderer's empty lit
// arena and shows a single "Coming soon" DOM banner so the level-registry seam is
// proven WITHOUT faking completeness — it reads clearly as a stub, not as broken.
// One way to build a stub: subclass this and supply id / title / banner copy.
import type { EngineContext } from '../../core/EngineContext';
import type { Level } from '../Level';

/** Mount a centered "coming soon" banner over the canvas. Returns it for teardown. */
function mountBanner(title: string, subtitle: string): HTMLElement {
  const host = document.getElementById('ui-root') ?? document.body;
  const banner = document.createElement('div');
  banner.className = 'stub-banner';
  banner.style.cssText = [
    'position:absolute',
    'top:14%',
    'left:50%',
    'transform:translateX(-50%)',
    'text-align:center',
    'pointer-events:none',
    'font-family:system-ui,sans-serif',
    'color:#e8eefc',
    'text-shadow:0 2px 10px rgba(0,0,0,0.6)',
    'z-index:20',
  ].join(';');

  const heading = document.createElement('div');
  heading.textContent = title;
  heading.style.cssText = 'font-size:34px;font-weight:700;letter-spacing:0.04em';

  const sub = document.createElement('div');
  sub.textContent = subtitle;
  sub.style.cssText = 'margin-top:8px;font-size:18px;opacity:0.85;letter-spacing:0.18em;text-transform:uppercase';

  banner.appendChild(heading);
  banner.appendChild(sub);
  host.appendChild(banner);
  return banner;
}

/** Base class for the roadmap stubs (empty arena + banner; no entities). */
export abstract class StubLevel implements Level {
  abstract readonly id: string;
  abstract readonly title: string;
  /** Headline shown on the banner (e.g. "Siege of Dras-Leona"). */
  protected abstract readonly bannerTitle: string;
  protected readonly bannerSubtitle: string = 'Coming soon';

  private banner: HTMLElement | null = null;

  load(_ctx: EngineContext): void {
    this.banner = mountBanner(this.bannerTitle, this.bannerSubtitle);
  }

  update(_dt: number, _ctx: EngineContext): void {
    // Stub: nothing to simulate.
  }

  unload(): void {
    this.banner?.remove();
    this.banner = null;
  }
}
