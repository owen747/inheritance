// ui/Transition.ts
// A full-screen black veil mounted in #ui-root, sitting ABOVE the menus, used to
// hide the brief main-menu flash during the campaign boot->play hand-off. The
// hand-off must stay inside one user gesture (pointer-lock + audio resume), so we
// CANNOT defer it behind an async fade-out; instead we snap to black instantly
// (`cover`) right at the click, swap the level + grab the lock under cover, then
// smoothly fade back in (`reveal`) once PLAYING begins. Pointer-events:none so it
// never eats canvas clicks.

/** Black cover veil for seamless level transitions. */
export class Transition {
  private readonly el: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'transition-veil';
    // #ui-root > * forces pointer-events:auto; override inline so the veil never
    // eats canvas clicks (pointer-lock must pass through).
    this.el.style.pointerEvents = 'none';
    parent.appendChild(this.el);
  }

  /** Snap to fully-opaque black at once (covers the menu flash immediately). */
  cover(): void {
    // Disable the transition so the cover is instant (no flash leaks through).
    this.el.style.transition = 'none';
    this.el.style.opacity = '1';
    // Force a reflow so the next opacity change (reveal) animates from opaque.
    void this.el.offsetWidth;
  }

  /** Fade the veil out (back to transparent) over the CSS transition duration. */
  reveal(): void {
    this.el.style.transition = '';
    this.el.style.opacity = '0';
  }

  dispose(): void {
    this.el.remove();
  }
}
