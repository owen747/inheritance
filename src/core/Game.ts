import { Renderer } from './Renderer';
import { Input } from './Input';
import { CameraRig, setCameraShakeSink } from './CameraRig';
import { EntityManager } from './EntityManager';
import { AudioManager } from './AudioManager';
import { Entity, isCombatant } from './Entity';
import { GameEngineContext, type EngineContext } from './EngineContext';
import { SaveManager } from './SaveManager';
import { DebugOverlay } from '../ui/DebugOverlay';
import { HUD, EMPTY_HUD_INFO, type HudInfoProvider } from '../ui/HUD';
import { Menus } from '../ui/Menus';
import { Transition } from '../ui/Transition';
import { CombatSystem } from '../combat/CombatSystem';
import { createLevel, type Level } from '../world/Level';
import type { ControlMode } from './Input';

export type Phase = 'TITLE' | 'PLAYING' | 'PAUSED' | 'WON' | 'LOST';

/** A single campaign level as surfaced to the main-menu level-select. */
export interface LevelMenuItem {
  id: string;
  title: string;
  /** 0-based position in the campaign order (display as `Level {index + 1}`). */
  index: number;
  /** True once this level has been beaten (shows a ✓). */
  cleared: boolean;
  /** True if the level may be selected (Level 1, cleared, next-after-cleared, or booted). */
  unlocked: boolean;
}

/** Canonical campaign order + display titles. The dev sandbox is NOT a campaign level. */
const CAMPAIGN: ReadonlyArray<{ id: string; title: string }> = [
  { id: 'aerial-duel', title: 'The Aerial Duel' },
  { id: 'siege', title: 'Siege of Dras-Leona' },
  { id: 'urubaen', title: 'Assault on Urûʼbaen' },
];

const STEP = 1 / 60;
const MAX_FRAME = 0.25; // clamp accumulated time -> no spiral of death

/**
 * Top-level orchestrator. Owns the fixed-timestep loop (with render
 * interpolation), the phase state machine, the pointer-lock-driven pause, and
 * the system wiring. Only the PLAYING phase advances the simulation.
 */
export class Game {
  readonly input: Input;

  private readonly renderer: Renderer;
  private readonly entities: EntityManager;
  private readonly audio: AudioManager;
  private readonly cameraRig: CameraRig;
  private readonly ctx: EngineContext;
  private readonly overlay: DebugOverlay;
  private readonly hud: HUD;
  private readonly menus: Menus;
  private readonly transition: Transition;
  private readonly combat = new CombatSystem();

  private phase: Phase = 'TITLE';
  /** Read by later combat/magic systems; toggled from the debug overlay. */
  godmode = false;

  private activeEntity: Entity | null = null;
  private currentLevel: Level | null = null;
  private currentLevelId: string | null = null;
  /** Level-supplied per-frame HUD data (objective/spells/roster). */
  private hudProvider: HudInfoProvider | null = null;

  private acc = 0;
  private last = performance.now();
  private running = false;
  private fps = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    uiRoot: HTMLElement,
  ) {
    this.renderer = new Renderer(canvas);
    this.entities = new EntityManager(this.renderer.scene);
    this.audio = new AudioManager();
    this.cameraRig = new CameraRig(this.renderer.camera);
    // Register the rig as the global screen-shake sink (combat triggers shake here).
    setCameraShakeSink(this.cameraRig);
    this.ctx = new GameEngineContext(
      this.entities,
      this.renderer.scene,
      this.audio,
      new SaveManager(),
    );

    this.input = new Input();

    this.overlay = new DebugOverlay(uiRoot, {
      setGodmode: (on) => {
        this.godmode = on;
      },
      forceWin: () => this.setPhase('WON'),
      forceLose: () => this.setPhase('LOST'),
    });

    this.hud = new HUD(uiRoot);
    this.transition = new Transition(uiRoot);
    this.menus = new Menus(uiRoot, {
      onStart: () => {
        // Fallback: start whichever level is currently booted (e.g. via #hash).
        this.audio.play('ui-click');
        this.requestPlay();
      },
      onResume: () => {
        this.audio.play('ui-click');
        this.requestPlay();
      },
      onRetry: () => {
        // Retry on lose: re-boot the SAME level and jump straight back into play
        // (the Retry click is a live user gesture, so requestPlay grabs pointer-lock).
        this.audio.play('ui-click');
        if (this.currentLevelId) this.startLevel(this.currentLevelId);
      },
      onContinue: () => {
        this.audio.play('ui-click');
        this.advanceOrFinish();
      },
      onSelectLevel: (id) => {
        this.audio.play('ui-click');
        this.startLevel(id);
      },
      onNewGame: () => {
        this.audio.play('ui-click');
        this.newGame();
      },
      getLevelCatalog: () => this.getLevelCatalog(),
    });

    document.addEventListener('pointerlockchange', this.onPointerLockChange);

    this.setPhase('TITLE');
  }

  /** Instantiate + load a registered level. */
  bootInto(levelId: string): void {
    if (this.currentLevel) {
      this.currentLevel.unload();
      this.currentLevel = null;
    }
    this.hudProvider = null;
    const level = createLevel(levelId);
    level.load(this.ctx);
    this.currentLevel = level;
    this.currentLevelId = levelId;
  }

  /**
   * Register the per-frame HUD data source (objective / spell slots / roster).
   * Levels call this from `load()`; passing `null` clears it (HUD then shows only
   * the active character's vitals). The small Game hook the HUD/menus chunk added.
   */
  setHudInfoProvider(provider: HudInfoProvider | null): void {
    this.hudProvider = provider;
  }

  /**
   * Win-screen Continue: boot the next campaign level and play it seamlessly, or
   * return to the menu after the finale. The Continue click is the user gesture, so
   * `requestPlay()` here grabs pointer-lock; `bootInto` leaves the phase untouched,
   * so we force TITLE first and let `onPointerLockChange` drive TITLE -> PLAYING.
   */
  private advanceOrFinish(): void {
    const order = CAMPAIGN.findIndex((l) => l.id === this.currentLevelId);
    const next = order >= 0 ? CAMPAIGN[order + 1] : undefined;
    if (next) {
      // Cover the boot->play hand-off with black so the main menu never flashes
      // between levels; the reveal fires once PLAYING begins (in setPhase).
      this.beginCoveredTransition();
      this.bootInto(next.id);
      this.setPhase('TITLE');
      this.requestPlay();
    } else {
      // Finished the campaign (urubaen): the win overlay already showed the
      // Fírnen epilogue — return to the main menu.
      this.setPhase('TITLE');
    }
  }

  /**
   * Start a campaign level straight from a user-gesture handler (main-menu
   * level-select OR Retry on lose). We force TITLE before `requestPlay()` so the
   * lock-acquire reliably transitions -> PLAYING via `onPointerLockChange`
   * regardless of the phase we came from (TITLE menu, or LOST on Retry).
   */
  startLevel(id: string): void {
    // Cover the menu->play hand-off so the title/lose screen doesn't flash.
    this.beginCoveredTransition();
    this.bootInto(id);
    this.setPhase('TITLE');
    this.requestPlay();
  }

  /**
   * Snap a black veil over the screen and schedule a safety reveal: the seamless
   * boot->play hand-off must stay in this user gesture, so we cover instantly and
   * let PLAYING (via setPhase) reveal. If pointer-lock never engages, the fallback
   * un-covers so the player isn't stranded behind black.
   */
  private beginCoveredTransition(): void {
    this.transition.cover();
    window.setTimeout(() => {
      if (this.phase !== 'PLAYING') this.transition.reveal();
    }, 1200);
  }

  /** Main-menu New Game: wipe all progression and return to a fresh Level 1 menu. */
  newGame(): void {
    this.ctx.save.reset();
    this.bootInto('aerial-duel');
    this.setPhase('TITLE');
  }

  /**
   * Build the level-select catalog. A level is unlocked if it is the first level,
   * has been cleared, follows a cleared level, or is the currently-booted level
   * (so a `#hash`-booted level is playable from the menu).
   */
  getLevelCatalog(): LevelMenuItem[] {
    const cleared = this.ctx.save.levelsCleared;
    return CAMPAIGN.map((level, index) => {
      const prevCleared = index > 0 && cleared.includes(CAMPAIGN[index - 1].id);
      return {
        id: level.id,
        title: level.title,
        index,
        cleared: cleared.includes(level.id),
        unlocked: index === 0 || prevCleared || level.id === this.currentLevelId,
      };
    });
  }

  setActiveEntity(entity: Entity | null): void {
    this.activeEntity = entity;
    this.cameraRig.resnap();
  }

  /**
   * Switch camera framing + mouse/input semantics together (FLIGHT vs GROUND).
   * Called from the PlayerController swap handler so the controlled character and
   * its control scheme change atomically.
   */
  setControlMode(mode: ControlMode): void {
    this.cameraRig.setMode(mode);
    this.input.setMode(mode);
    this.cameraRig.resnap();
  }

  /** PlayerHost: lets the active character honour the debug godmode toggle. */
  isGodmode(): boolean {
    return this.godmode;
  }

  /** Level hook: jump to the win screen (objective met). Idempotent. */
  win(): void {
    if (this.phase !== 'WON') this.setPhase('WON');
  }

  /** Level hook: jump to the lose screen. Idempotent. */
  lose(): void {
    if (this.phase !== 'LOST') this.setPhase('LOST');
  }

  /** Level hook: phase-aware end-screen title/subtitle (set before win()/lose()). */
  setEndText(phase: 'WON' | 'LOST', title: string, subtitle: string): void {
    this.menus.setEndText(phase, title, subtitle);
  }

  /** Begin the requestAnimationFrame loop. */
  start(): void {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this.frame);
  }

  private requestPlay(): void {
    // Pointer-lock + audio resume MUST share this one user gesture.
    this.audio.resume();
    void this.canvas.requestPointerLock();
  }

  private setPhase(phase: Phase): void {
    const prev = this.phase;
    this.phase = phase;
    this.hud.setVisible(phase === 'PLAYING');
    switch (phase) {
      case 'PLAYING':
        this.acc = 0;
        this.last = performance.now();
        // Reveal from any level-transition cover now that play has begun.
        this.transition.reveal();
        break;
      case 'PAUSED':
        this.exitLock();
        break;
      case 'WON':
        this.exitLock();
        if (prev !== 'WON') this.audio.play('win');
        break;
      case 'LOST':
        this.exitLock();
        if (prev !== 'LOST') this.audio.play('lose');
        break;
      case 'TITLE':
        break;
    }
    this.menus.render(phase);
  }

  private frame = (now: number): void => {
    const frameDt = (now - this.last) / 1000;
    this.last = now;

    if (frameDt > 0) {
      this.fps = this.fps === 0 ? 1 / frameDt : this.fps + (1 / frameDt - this.fps) * 0.1;
    }

    if (this.phase === 'PLAYING') {
      this.acc += Math.min(frameDt, MAX_FRAME);
      // A level may resolve to WON/LOST mid-step; stop advancing the sim at once.
      // The mouse-look delta is an impulse consumed by the FIRST substep only
      // (Input.beginStep), so it is applied exactly once per rendered frame.
      let firstStep = true;
      while (this.acc >= STEP && this.phase === 'PLAYING') {
        this.entities.capturePrevTransforms();
        this.input.beginStep(firstStep);
        firstStep = false;
        this.step(STEP);
        this.acc -= STEP;
      }
    } else {
      this.acc = 0;
    }

    // Cosmetic mesh animation (wings/weapons/bob) on the REAL frame delta, AFTER
    // the fixed-step sim and BEFORE the renderer interpolates root transforms. Runs
    // every frame regardless of phase (so dragons keep flapping while paused), and
    // only mutates child sub-parts — never the interpolated root. Clamp the dt so a
    // long stall (tab refocus) can't produce a giant animation jump.
    if (frameDt > 0) this.entities.animateAll(Math.min(frameDt, MAX_FRAME));

    // Per-frame INTERPOLATED camera follow (decoupled from the fixed sim step, so it
    // never micro-judders against the smoothly interpolated world at >60Hz). It reads
    // the SAME `alpha` the renderer uses to lerp the meshes, so camera + world stay
    // locked. Runs after animateAll (cosmetic sub-parts) and before the draw.
    const alpha = this.phase === 'PLAYING' ? this.acc / STEP : 1;
    if (this.activeEntity) {
      this.cameraRig.update(Math.min(frameDt, MAX_FRAME), alpha, this.activeEntity);
    }
    this.renderer.render(alpha, this.entities);
    this.syncDebug();
    this.hud.sync(this.activeEntity, this.hudProvider?.() ?? EMPTY_HUD_INFO);

    // Per-frame edge-triggered toggles (checked once per frame, not per step).
    if (this.input.justPressed('debug')) this.overlay.toggle();
    if (this.input.justPressed('mute')) this.audio.toggleMute();

    this.input.lateUpdate();
    requestAnimationFrame(this.frame);
  };

  private step(dt: number): void {
    this.entities.update(dt, this.ctx);
    this.combat.resolve(dt, this.ctx);
    this.currentLevel?.update(dt, this.ctx);
    // NOTE: the camera follow is NOT updated here — it runs per render frame in
    // `frame()` against the interpolated transform to stay judder-free.
  }

  private syncDebug(): void {
    let health: number | null = null;
    let energy: number | null = null;
    const active = this.activeEntity;
    if (active && isCombatant(active)) {
      health = active.health;
      energy = active.energy;
    }
    this.overlay.sync({ fps: this.fps, health, energy });
  }

  private onPointerLockChange = (): void => {
    const locked = document.pointerLockElement === this.canvas;
    if (locked) {
      this.audio.resume();
      if (this.phase === 'TITLE' || this.phase === 'PAUSED') this.setPhase('PLAYING');
    } else if (this.phase === 'PLAYING') {
      // Lock lost mid-play (e.g. Esc) -> pause. Esc is NOT bound as a key.
      this.setPhase('PAUSED');
    }
  };

  private exitLock(): void {
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
  }
}
