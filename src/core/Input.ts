import { KEYS, INPUT } from '../config/gameConfig';

export type ControlMode = 'FLIGHT' | 'GROUND';
export type InputAction = keyof typeof KEYS;
export type Axis = 'pitch' | 'yaw' | 'roll' | 'throttle';

/**
 * Keyboard + mouse input. Tracks key/button state by `KeyboardEvent.code` (mouse
 * buttons map to synthetic `Mouse0/1/2` codes) and accumulates pointer-lock mouse
 * deltas. Exposes edge detection (`justPressed`) and `axis()` resolution whose
 * meaning depends on the active control mode (set via `setMode`).
 */
export class Input {
  private readonly down = new Set<string>();
  private readonly prevDown = new Set<string>();

  // Raw pointer-lock accumulator, filled by `mousemove` and drained EXACTLY ONCE
  // per rendered frame (by the first fixed substep, via `beginStep`). It is NOT
  // cleared in `lateUpdate`, so a frame that runs zero substeps retains its delta
  // for the next frame's first substep — no mouse motion is ever dropped.
  private mouseDX = 0;
  private mouseDY = 0;

  // The delta exposed to `axis()` for the CURRENT fixed substep. Armed from the
  // accumulator on the first substep of a frame and zeroed on every later substep,
  // so a mouse-look impulse is applied once per frame regardless of substep count.
  private stepMouseDX = 0;
  private stepMouseDY = 0;

  private mode: ControlMode = 'GROUND';

  constructor() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('blur', this.onBlur);
    // Right-click (Mouse2 = heavy/finisher) must never pop the browser menu in play.
    window.addEventListener('contextmenu', this.onContextMenu);
  }

  setMode(mode: ControlMode): void {
    this.mode = mode;
  }

  getMode(): ControlMode {
    return this.mode;
  }

  /** Held this step. */
  pressed(action: InputAction): boolean {
    return this.down.has(KEYS[action]);
  }

  /** True only on the frame the action went from up -> down. */
  justPressed(action: InputAction): boolean {
    const code = KEYS[action];
    return this.down.has(code) && !this.prevDown.has(code);
  }

  /**
   * Resolve a control axis from the active mode.
   *
   * FLIGHT: pitch = mouse Y, yaw = A/D, roll = Q/E, throttle = Shift/Ctrl.
   * GROUND: pitch/yaw = mouse aim, roll/throttle = 0 (move is read via `pressed`).
   *
   * Keyboard axes return a normalized ±1 (intended to be scaled by a rate * dt).
   * Mouse axes return the pointer-lock delta armed for THIS substep (the impulse
   * is non-zero only on the first substep of each frame; see {@link beginStep}).
   */
  axis(axis: Axis): number {
    const sens = INPUT.mouseSensitivity;
    const pitchSign = INPUT.invertPitch ? -1 : 1;
    if (this.mode === 'FLIGHT') {
      if (axis === 'pitch') return pitchSign * this.stepMouseDY * sens;
      if (axis === 'yaw') return this.digital('right', 'left');
      if (axis === 'roll') return this.digital('rollR', 'rollL');
      return this.digital('throttleUp', 'throttleDown'); // throttle
    }
    // GROUND: mouse drives aim; roll/throttle unused.
    if (axis === 'pitch') return pitchSign * this.stepMouseDY * sens;
    if (axis === 'yaw') return this.stepMouseDX * sens;
    return 0;
  }

  /**
   * Arm the mouse-look delta for a single fixed substep. A mouse delta is an
   * IMPULSE applied exactly once per rendered frame: the FIRST substep of a frame
   * drains the accumulated pointer delta into the per-substep value; every later
   * substep that same frame sees zero (no double-apply on <60Hz). A frame that
   * runs zero substeps never calls this, so the accumulator survives untouched
   * for the next frame's first substep (no drop on >60Hz). Call once per fixed
   * substep, BEFORE the substep reads `axis('pitch'|'yaw')`.
   */
  beginStep(isFirstSubstep: boolean): void {
    if (isFirstSubstep) {
      this.stepMouseDX = this.mouseDX;
      this.stepMouseDY = this.mouseDY;
      this.mouseDX = 0;
      this.mouseDY = 0;
    } else {
      this.stepMouseDX = 0;
      this.stepMouseDY = 0;
    }
  }

  /**
   * Advance edge-detection state. Call ONCE per rendered frame, after all
   * `justPressed` reads. Mouse deltas are intentionally NOT cleared here — they
   * are owned by {@link beginStep} so a zero-substep frame retains its delta.
   */
  lateUpdate(): void {
    this.prevDown.clear();
    for (const code of this.down) this.prevDown.add(code);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('blur', this.onBlur);
    window.removeEventListener('contextmenu', this.onContextMenu);
  }

  private digital(positive: InputAction, negative: InputAction): number {
    return (this.pressed(positive) ? 1 : 0) - (this.pressed(negative) ? 1 : 0);
  }

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    // Prevent the page from scrolling on Space / arrow-like game keys.
    if (event.code === 'Space') event.preventDefault();
    this.down.add(event.code);
  };

  private readonly onKeyUp = (event: KeyboardEvent): void => {
    this.down.delete(event.code);
  };

  private readonly onMouseDown = (event: MouseEvent): void => {
    this.down.add(`Mouse${event.button}`);
  };

  private readonly onMouseUp = (event: MouseEvent): void => {
    this.down.delete(`Mouse${event.button}`);
  };

  private readonly onMouseMove = (event: MouseEvent): void => {
    // Only accumulate while pointer-locked, else cursor motion would steer.
    if (document.pointerLockElement) {
      this.mouseDX += event.movementX;
      this.mouseDY += event.movementY;
    }
  };

  private readonly onContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
  };

  private readonly onBlur = (): void => {
    // Losing focus drops all held keys so nothing sticks.
    this.down.clear();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.stepMouseDX = 0;
    this.stepMouseDY = 0;
  };
}
