// ui/Menus.ts
// Title / pause / win / lose DOM overlays (mounted into `#ui-root`). Game owns the
// phase state machine; Menus is a pure renderer of it — `render(phase)` shows the
// matching overlay and hides the rest. The Title's Start button fires `onStart`,
// which the Game wires to the SAME user gesture that requests pointer-lock AND
// resumes the AudioContext (both are required: pointer-lock needs a gesture, and a
// suspended context stays silent otherwise). This replaces the inline minimal
// overlays Game shipped earlier.
import type { Phase } from '../core/Game';

/** Button actions the Game wires into its phase machine + gesture path. */
export interface MenuActions {
  /** Title Start: request pointer-lock + resume audio (one user gesture). */
  onStart(): void;
  /** Pause resume: re-request pointer-lock. */
  onResume(): void;
  /** Lose screen: restart the level. */
  onRetry(): void;
  /** Win screen: advance / return to title. */
  onContinue(): void;
}

interface Overlay {
  root: HTMLDivElement;
  title: HTMLDivElement;
  subtitle: HTMLDivElement;
}

export class Menus {
  private readonly title: Overlay;
  private readonly pause: Overlay;
  private readonly win: Overlay;
  private readonly lose: Overlay;
  private readonly all: Overlay[];

  constructor(parent: HTMLElement, private readonly actions: MenuActions) {
    this.title = this.makeOverlay(parent, 'menu--title', {
      title: 'INHERITANCE',
      subtitle: 'The Aerial Duel',
      button: { label: 'Start', onClick: () => this.actions.onStart() },
    });
    this.pause = this.makeOverlay(parent, 'menu--pause', {
      title: 'Paused',
      subtitle: 'Pointer-lock released',
      button: { label: 'Resume', onClick: () => this.actions.onResume() },
    });
    this.win = this.makeOverlay(parent, 'menu--win', {
      title: 'Victory',
      subtitle: 'The duel is won.',
      button: { label: 'Continue', onClick: () => this.actions.onContinue() },
    });
    this.lose = this.makeOverlay(parent, 'menu--lose', {
      title: 'Defeated',
      subtitle: 'You have fallen.',
      button: { label: 'Retry', onClick: () => this.actions.onRetry() },
    });
    this.all = [this.title, this.pause, this.win, this.lose];
  }

  /** Render the overlay matching the current phase (or hide all during play). */
  render(phase: Phase): void {
    const target = this.overlayFor(phase);
    for (const overlay of this.all) {
      overlay.root.style.display = overlay === target ? 'flex' : 'none';
    }
  }

  /** Override the title/subtitle of the win or lose screen (objective-aware text). */
  setEndText(phase: 'WON' | 'LOST', title: string, subtitle: string): void {
    const overlay = phase === 'WON' ? this.win : this.lose;
    overlay.title.textContent = title;
    overlay.subtitle.textContent = subtitle;
  }

  dispose(): void {
    for (const overlay of this.all) overlay.root.remove();
  }

  // -- internals ------------------------------------------------------------

  private overlayFor(phase: Phase): Overlay | null {
    switch (phase) {
      case 'TITLE':
        return this.title;
      case 'PAUSED':
        return this.pause;
      case 'WON':
        return this.win;
      case 'LOST':
        return this.lose;
      default:
        return null; // PLAYING -> no overlay
    }
  }

  private makeOverlay(
    parent: HTMLElement,
    modifier: string,
    content: {
      title: string;
      subtitle: string;
      button: { label: string; onClick: () => void };
    },
  ): Overlay {
    const root = document.createElement('div');
    root.className = `menu ${modifier}`;

    const panel = document.createElement('div');
    panel.className = 'menu__panel';

    const title = document.createElement('div');
    title.className = 'menu__title';
    title.textContent = content.title;

    const subtitle = document.createElement('div');
    subtitle.className = 'menu__sub';
    subtitle.textContent = content.subtitle;

    const button = document.createElement('button');
    button.className = 'menu__btn';
    button.type = 'button';
    button.textContent = content.button.label;
    button.addEventListener('click', content.button.onClick);

    panel.appendChild(title);
    panel.appendChild(subtitle);
    panel.appendChild(button);
    root.appendChild(panel);
    parent.appendChild(root);

    return { root, title, subtitle };
  }
}
