/** Hooks the overlay's controls fire back into the game. */
export interface DebugHooks {
  setGodmode(on: boolean): void;
  forceWin(): void;
  forceLose(): void;
}

/** Per-frame readout values. */
export interface DebugStats {
  fps: number;
  health: number | null;
  energy: number | null;
}

/**
 * DOM debug overlay: an FPS / health / energy readout plus godmode, force-win,
 * and force-lose controls. The primary tuning + seam-proving tool for a game
 * validated by playing. Toggle with the backquote key (driven by the game loop).
 */
export class DebugOverlay {
  private readonly root: HTMLDivElement;
  private readonly readout: HTMLPreElement;
  private readonly godmodeButton: HTMLButtonElement;
  private visible = false;
  private godmode = false;

  constructor(parent: HTMLElement, private readonly hooks: DebugHooks) {
    this.root = document.createElement('div');
    Object.assign(this.root.style, {
      position: 'fixed',
      top: '12px',
      left: '12px',
      padding: '10px 12px',
      background: 'rgba(8, 12, 20, 0.82)',
      border: '1px solid #2a3a55',
      borderRadius: '6px',
      font: '12px/1.5 ui-monospace, monospace',
      color: '#cfe3ff',
      display: 'none',
      zIndex: '50',
      minWidth: '180px',
    } satisfies Partial<CSSStyleDeclaration>);

    const title = document.createElement('div');
    title.textContent = 'DEBUG';
    title.style.fontWeight = '700';
    title.style.letterSpacing = '0.12em';
    title.style.marginBottom = '6px';
    this.root.appendChild(title);

    this.readout = document.createElement('pre');
    this.readout.style.margin = '0 0 8px';
    this.readout.textContent = '';
    this.root.appendChild(this.readout);

    this.godmodeButton = this.makeButton('Godmode: OFF', () => {
      this.godmode = !this.godmode;
      this.godmodeButton.textContent = `Godmode: ${this.godmode ? 'ON' : 'OFF'}`;
      this.hooks.setGodmode(this.godmode);
    });
    this.root.appendChild(this.makeButton('Force WIN', () => this.hooks.forceWin()));
    this.root.appendChild(this.makeButton('Force LOSE', () => this.hooks.forceLose()));

    parent.appendChild(this.root);
  }

  toggle(): void {
    this.setVisible(!this.visible);
  }

  setVisible(visible: boolean): void {
    this.visible = visible;
    this.root.style.display = visible ? 'block' : 'none';
  }

  get isVisible(): boolean {
    return this.visible;
  }

  sync(stats: DebugStats): void {
    if (!this.visible) return;
    const health = stats.health === null ? 'n/a' : stats.health.toFixed(0);
    const energy = stats.energy === null ? 'n/a' : stats.energy.toFixed(0);
    this.readout.textContent =
      `fps    ${stats.fps.toFixed(0)}\n` + `health ${health}\n` + `energy ${energy}`;
  }

  private makeButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = label;
    Object.assign(button.style, {
      display: 'block',
      width: '100%',
      marginTop: '4px',
      padding: '4px 6px',
      background: '#1b2740',
      color: '#cfe3ff',
      border: '1px solid #34507e',
      borderRadius: '4px',
      cursor: 'pointer',
      font: 'inherit',
    } satisfies Partial<CSSStyleDeclaration>);
    button.addEventListener('click', onClick);
    return button;
  }
}
