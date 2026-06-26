// Centralized tunables. Key bindings live here so retuning is one place.
// (Later chunks extend this with speeds, damages, energy costs, etc.)

/**
 * Key bindings keyed by `KeyboardEvent.code` (and synthetic `Mouse0/1/2` codes
 * for mouse buttons). Pause is intentionally NOT bound to a key: it is driven by
 * the `pointerlockchange` event, because the browser consumes `Esc` under
 * pointer-lock and will not dispatch a `keydown('Escape')`.
 */
export const KEYS = {
  forward: 'KeyW',
  back: 'KeyS',
  left: 'KeyA',
  right: 'KeyD',
  rollL: 'KeyQ',
  rollR: 'KeyE',
  throttleUp: 'ShiftLeft',
  throttleDown: 'ControlLeft',
  dodge: 'Space',
  attack: 'Mouse0',
  heavy: 'Mouse2',
  spell1: 'Digit1',
  spell2: 'Digit2',
  spell3: 'Digit3',
  spell4: 'Digit4',
  swap: 'KeyF',
  mute: 'KeyM',
  debug: 'Backquote',
} as const;

/** Pointer-lock mouse-look tuning. */
export const INPUT = {
  /** Radians of axis output per pixel of pointer-lock mouse movement. */
  mouseSensitivity: 0.0022,
  /** Invert vertical mouse-look (pitch). */
  invertPitch: false,
} as const;

/** Saphira flight kinematics (quaternion-driven; rates are per-second). */
export const FLIGHT = {
  /** Pitch rate multiplier applied to the mouse-Y axis (radians/sec scale). */
  pitchRate: 2.2,
  /** Yaw rate for A/D (radians/sec). */
  yawRate: 1.4,
  /** Roll rate for Q/E (radians/sec). */
  rollRate: 2.0,
  /** Forward speed bounds (world units/sec). */
  minSpeed: 8,
  maxSpeed: 42,
  /** Throttle change rate (units/sec^2 applied via Shift/Ctrl axis). */
  throttleAccel: 26,
  /** Starting cruise speed. */
  cruiseSpeed: 18,
  /** Soft auto-level toward horizon when not rolling (radians/sec). */
  passiveHoverBob: 0.6,
} as const;

/** Ground locomotion (Eragon / Roran). */
export const GROUND = {
  moveSpeed: 7.5,
  /** Movement multiplier while mid-swing. */
  attackMoveScale: 0.35,
  /** Yaw turn applied from the mouse-X aim axis (radians per axis unit). */
  turnRate: 1.0,
  /** Feet-on-ground reference height (flat arena). */
  groundY: 0,
} as const;

/** Combat tuning shared by the combo machine + CombatSystem. */
export const COMBAT = {
  /** Seconds an attack press stays buffered to chain the next swing. */
  comboBuffer: 0.35,
  /** Dodge-roll duration (seconds). */
  rollDuration: 0.45,
  /** Invulnerability window inside the roll (seconds). */
  rollIFrames: 0.32,
  /** Roll travel speed (units/sec). */
  rollSpeed: 12,
  /** Hitstop freeze applied to both combatants on a clean hit (seconds). */
  hitstop: 0.07,
} as const;

/** Energy / life-force economy. */
export const ENERGY = {
  /** Energy regenerated per second out of combat. */
  regenPerSec: 6,
  /** Default ward pool granted by skölir. */
  wardHp: 40,
  /** Fire-breath energy cost per second of sustained breathing. */
  breathCostPerSec: 14,
} as const;

/** Roran's full kit (toughness). */
export const RORAN = {
  /** Incoming-damage multiplier applied in Character.takeDamage. 1 = normal. */
  damageTakenScale: 0.55,
} as const;

/**
 * Roran's Rally ability — a hand-rolled cooldown (NO energy). Grants the ACTIVE
 * Roran a self-ward (immediate combat value) AND heals the benched, non-regening
 * roster (the real rotation payoff).
 */
export const RALLY = {
  /** Ward HP added to the active Roran on cast. */
  selfWard: 45,
  /** Health restored to each benched ally on cast. */
  heal: 35,
  /** Cooldown between casts (seconds). */
  cooldown: 12,
} as const;

/**
 * Laughing-soldier stagger economy (pain-immune elite). Normal hits build the
 * meter instead of dealing health damage; at `max` the elite is STAGGERED for
 * `window` seconds (sized comfortably > a heavy windup+active) and a finisher
 * landed during that window executes it. On expiry the meter PARTIALLY decays.
 */
export const STAGGER = {
  /** Meter needed to enter the staggered (executable) state. */
  max: 120,
  /** Bonus meter added when a finisher lands while NOT staggered. */
  finisherBonus: 40,
  /** Seconds the elite stays staggered/executable. */
  window: 3.0,
  /** Fraction of the meter retained when the window expires (partial decay). */
  decay: 0.5,
} as const;

/**
 * Armored-brute armor. Only Roran's hammer deals full damage; every other source
 * (Eragon's sword/magic, Saphira's fire, projectiles) is scaled down hard — the
 * hard counter that FORCES a swap to Roran.
 */
export const ARMOR = {
  /** Damage multiplier for non-Roran sources. */
  nonRoranScale: 0.15,
} as const;

/**
 * Max-energy granted per collected Eldunarí. The total bonus is DERIVED from the
 * collected set (`collected.length * ELDUNARI_BONUS`) — never an imperative ++ —
 * so a reload can't double-count and the bigger energy bar is reproducible.
 */
export const ELDUNARI_BONUS = 30;

/** Camera follow tuning (third-person damped follow). */
export const CAMERA = {
  /** Damping rate (higher = snappier). Used as `1 - exp(-lambda * dt)`. */
  followLambda: 7,
  lookLambda: 9,
  /** Local-space offset from the target in GROUND (over-shoulder) mode. */
  groundOffset: [0.6, 2.4, 6.5] as const,
  /** Local-space offset from the target in FLIGHT (chase) mode. */
  flightOffset: [0, 4, 14] as const,
  /** Where the camera aims, relative to the target position. */
  lookOffset: [0, 1.2, 0] as const,
} as const;
