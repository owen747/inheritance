// Small math helpers used across the engine. Pure, allocation-free.

export function clamp(value: number, min: number, max: number): number {
  return value < min ? min : value > max ? max : value;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Frame-rate-independent exponential damping toward a target. `lambda` is the
 * convergence rate; the result moves a fraction `1 - exp(-lambda * dt)` of the
 * remaining distance each call, so behaviour is identical at any frame rate.
 */
export function damp(current: number, target: number, lambda: number, dt: number): number {
  return lerp(current, target, 1 - Math.exp(-lambda * dt));
}

/** Exponential decay of a value toward zero, frame-rate independent. */
export function expDecay(value: number, lambda: number, dt: number): number {
  return value * Math.exp(-lambda * dt);
}

/**
 * Deterministic seeded PRNG (mulberry32). Returns a function producing floats in
 * [0, 1). Deterministic with the fixed timestep, so procedural placement is
 * reproducible.
 */
export function rngFromSeed(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
