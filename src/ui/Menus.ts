// ui/Menus.ts
// Title / pause / win / lose DOM overlays (mounted into `#ui-root`). Game owns the
// phase state machine; Menus is a pure renderer of it — `render(phase)` shows the
// matching overlay and hides the rest. The Title is a real main menu: a level-select
// list (rebuilt every render, since cleared/unlocked state changes between levels)
// plus a New Game button. Level / New Game / Resume / Retry / Continue clicks all
// fire actions the Game wires to the SAME user gesture that requests pointer-lock AND
// resumes the AudioContext (both are required: pointer-lock needs a gesture, and a
// suspended context stays silent otherwise).
import type { Phase, LevelMenuItem } from '../core/Game';

/** Button actions the Game wires into its phase machine + gesture path. */
export interface MenuActions {
  /** Title fallback: start the currently-booted level (one user gesture). */
  onStart(): void;
  /** Pause resume: re-request pointer-lock. */
  onResume(): void;
  /** Lose screen: restart the same level. */
  onRetry(): void;
  /** Win screen: advance to the next campaign level / return to title. */
  onContinue(): void;
  /** Level-select: boot + play the chosen level (the click is the gesture). */
  onSelectLevel(id: string): void;
  /** New Game: wipe progress and return to a fresh main menu. */
  onNewGame(): void;
  /** Current campaign progression for the level-select list. */
  getLevelCatalog(): LevelMenuItem[];
}

interface Overlay {
  root: HTMLDivElement;
  title: HTMLDivElement;
  subtitle: HTMLDivElement;
}

const CONTROLS: ReadonlyArray<[string, string]> = [
  ['WASD', 'move'],
  ['Mouse', 'aim'],
  ['Q / E', 'roll'],
  ['Shift / Ctrl', 'throttle'],
  ['LMB', 'attack'],
  ['RMB', 'heavy / finisher'],
  ['Space', 'dodge'],
  ['1-4', 'spells'],
  ['F', 'swap'],
];

export class Menus {
  private readonly title: Overlay;
  private readonly pause: Overlay;
  private readonly win: Overlay;
  private readonly lose: Overlay;
  private readonly all: Overlay[];
  /** Container the level-select rows are (re)built into on every TITLE render. */
  private readonly levelList: HTMLDivElement;

  constructor(parent: HTMLElement, private readonly actions: MenuActions) {
    this.title = this.makeTitleOverlay(parent);
    this.levelList = this.title.root.querySelector('.menu__levels') as HTMLDivElement;
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
    if (phase === 'TITLE') this.rebuildLevelList();
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

  /** Rebuild the level-select rows from the current catalog (cleared/unlocked state). */
  private rebuildLevelList(): void {
    this.levelList.replaceChildren();
    for (const level of this.actions.getLevelCatalog()) {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'menu__level';
      if (level.cleared) row.classList.add('is-cleared');
      if (!level.unlocked) {
        row.classList.add('is-locked');
        row.disabled = true;
      }

      const label = document.createElement('span');
      label.className = 'menu__level-name';
      label.textContent = `Level ${level.index + 1}: ${level.title}`;

      const tag = document.createElement('span');
      tag.className = 'menu__level-tag';
      tag.textContent = level.cleared ? '✓' : level.unlocked ? '' : 'Locked';

      row.appendChild(label);
      row.appendChild(tag);
      if (level.unlocked) {
        row.addEventListener('click', () => this.actions.onSelectLevel(level.id));
      }
      this.levelList.appendChild(row);
    }
  }

  /** The main-menu TITLE overlay: title, subtitle, level-select, New Game, controls. */
  private makeTitleOverlay(parent: HTMLElement): Overlay {
    const root = document.createElement('div');
    root.className = 'menu menu--title';

    const panel = document.createElement('div');
    panel.className = 'menu__panel menu__panel--title';

    const title = document.createElement('div');
    title.className = 'menu__title';
    title.textContent = 'INHERITANCE';

    const subtitle = document.createElement('div');
    subtitle.className = 'menu__sub';
    subtitle.textContent = 'Eragon — The Inheritance Cycle, Book IV';

    const levels = document.createElement('div');
    levels.className = 'menu__levels';

    const newGame = document.createElement('button');
    newGame.className = 'menu__btn menu__btn--small';
    newGame.type = 'button';
    newGame.textContent = 'New Game';
    newGame.addEventListener('click', () => this.actions.onNewGame());

    const controls = document.createElement('div');
    controls.className = 'menu__controls';
    for (const [keys, action] of CONTROLS) {
      const item = document.createElement('span');
      item.className = 'menu__control';
      const key = document.createElement('b');
      key.textContent = keys;
      item.appendChild(key);
      item.appendChild(document.createTextNode(` ${action}`));
      controls.appendChild(item);
    }

    panel.appendChild(title);
    panel.appendChild(subtitle);
    panel.appendChild(levels);
    panel.appendChild(newGame);
    panel.appendChild(controls);
    root.appendChild(panel);
    parent.appendChild(root);

    return { root, title, subtitle };
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
