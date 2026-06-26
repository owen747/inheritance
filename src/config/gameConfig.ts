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
  /** Auto-bank: max visual lean (radians) at full yaw input — a lean, not a barrel-roll. */
  bankAngle: 0.55,
  /** Rate (lambda) the bank leans INTO a yaw turn. */
  bankRate: 6,
  /** Rate (lambda) the bank auto-levels back to 0 when not yawing. */
  bankLevelRate: 3,
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
  /** Acceleration responsiveness (lambda) ramping toward the desired input velocity. */
  accel: 11,
  /** Deceleration/friction responsiveness (lambda) when input releases (gives stops weight). */
  friction: 9,
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
  /** Base hitstop freeze (seconds) — the floor every clean hit gets. */
  hitstop: 0.05,
  /** Extra hitstop seconds per point of strike damage (bigger hits FREEZE longer). */
  hitstopPerDamage: 0.0018,
  /** Hitstop bonus (seconds) when the landed hit is a finisher (heavy execute). */
  hitstopFinisher: 0.08,
  /** Hard cap on computed hitstop (seconds) so a huge hit can't lock the game. */
  hitstopMax: 0.18,
  /**
   * Knockback impulse model (replaces the old instant teleport). A landed hit adds
   * `strike.knockback * knockImpulse` to the target's knock-velocity (units/sec),
   * which then decays exponentially so the target SLIDES to a stop.
   */
  knockImpulse: 11,
  /** Decay rate (lambda) of the knock-velocity per second (slide-to-stop). */
  knockDecay: 9,
  /** Hard cap on knock-velocity magnitude (units/sec) — keeps shoves bounded. */
  knockMax: 26,
  /** Extra knock multiplier on a finisher hit (heavy hits knock further). */
  knockFinisherMul: 1.5,
  /** Base camera-shake trauma added on ANY landed melee hit (0..1). */
  shakeHit: 0.16,
  /** Extra trauma added per point of strike damage (bigger hits shake more). */
  shakePerDamage: 0.006,
  /** Trauma bonus when the landed hit is a finisher (heavy execute). */
  shakeFinisher: 0.22,
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
 * Galbatorix finale boss (Level 3, Phase 2). He is MECHANIC-GATED, never a DPS
 * race: `Galbatorix.takeDamage` is a pure no-op (he NEVER loses health). While
 * his ward tiers stand he attacks the active hero with telegraphed magic shots
 * plus an occasional radial AoE; the level ends him only via the typed unmaking.
 */
export const GALBATORIX = {
  /** Cosmetic only — he is never killed by HP, so this is just the (full) bar. */
  maxHealth: 1000,
  /** Wide reach so he keeps pressure on whichever hero is active near the throne. */
  aggroRange: 120,
  /** Large-ish boss collider. */
  colliderRadius: 1.6,
  /** Orientation slerp rate (lambda) as he tracks the active hero. */
  turnRate: 4.0,
  /** Seconds between magic casts (cadence). */
  attackCadence: 2.2,
  /** Telegraph wind-up before a cast resolves (gives the player a tell). */
  telegraph: 0.5,
  /** Single magic-bolt projectile. */
  projDamage: 16,
  projSpeed: 34,
  projRadius: 0.7,
  projTtl: 3.5,
  /** Every Nth cast is a radial AoE burst instead of a single bolt. */
  aoeEvery: 4,
  /** Bolts in the radial ring. */
  aoeCount: 12,
  aoeSpeed: 22,
  aoeDamage: 12,
  /** Minimum seconds between deflect VFX/SFX bursts (throttle for spammy hits). */
  deflectThrottle: 0.18,
} as const;

/**
 * Eldunarí ward-anchors (Level 3, Phase 2). Destructible Combatants (team
 * 'enemy') that float around the throne; destroying one fires `onDestroyed`
 * (decrements Galbatorix's `wardTier`). NO hero-gating — a generous collider so
 * Saphira fire / Eragon spells reliably connect, even at altitude.
 */
export const ANCHOR = {
  /** Modest HP — meant to be torn down, not grinded. */
  hp: 60,
  /** Generous so projectiles/fire connect reliably, esp. on raised anchors. */
  colliderRadius: 1.6,
  /** Bob (float) angular speed (radians/sec). */
  bobSpeed: 1.6,
  /** Bob vertical amplitude (world units). */
  bobAmplitude: 0.6,
  /** Slow gem spin (radians/sec). */
  spinSpeed: 0.8,
} as const;

/**
 * Max-energy granted per collected Eldunarí. The total bonus is DERIVED from the
 * collected set (`collected.length * ELDUNARI_BONUS`) — never an imperative ++ —
 * so a reload can't double-count and the bigger energy bar is reproducible.
 */
export const ELDUNARI_BONUS = 30;

/**
 * Camera follow tuning (third-person damped follow). The rig follows the active
 * entity's INTERPOLATED transform per render frame (same `alpha` the renderer uses),
 * so it stays judder-free with the world at any refresh rate.
 */
export const CAMERA = {
  /** Damping rate (higher = snappier). Used as `1 - exp(-lambda * frameDt)`. */
  followLambda: 7,
  lookLambda: 9,
  /** Local-space offset from the target in GROUND (over-shoulder) mode. */
  groundOffset: [0.6, 2.4, 6.5] as const,
  /** Local-space offset from the target in FLIGHT (chase) mode. */
  flightOffset: [0, 4, 14] as const,
  /** Where the camera aims, relative to the target position. */
  lookOffset: [0, 1.2, 0] as const,
  /** Look-ahead: lead distance (world units) the aim point leans toward the target's facing. */
  lookAhead: 2.5,
  /** Easing rate (lambda) for the look-ahead lead (kept gentle). */
  lookAheadLambda: 3,
  /** Screen-shake: trauma decay rate per second (short + subtle). */
  shakeDecay: 1.7,
  /** Max positional shake offset (world units) at full trauma; offset scales by trauma^2. */
  shakeScale: 0.45,
} as const;
