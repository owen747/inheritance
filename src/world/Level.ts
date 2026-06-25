import type { EngineContext } from '../core/EngineContext';

/**
 * A data-driven level. The single extension point for new content (L1/L2/L3):
 * `load` spawns terrain/enemies/pickups through the `EngineContext`, `update`
 * drives phase transitions + win/lose checks, `unload` tears everything down.
 */
export interface Level {
  id: string;
  title: string;
  load(ctx: EngineContext): void;
  update(dt: number, ctx: EngineContext): void;
  unload(): void;
}

export type LevelFactory = () => Level;

/** Registry of level factories keyed by id. Levels register themselves here. */
export const LevelRegistry: Record<string, LevelFactory> = {};

export function registerLevel(id: string, factory: LevelFactory): void {
  LevelRegistry[id] = factory;
}

export function createLevel(id: string): Level {
  const factory = LevelRegistry[id];
  if (!factory) {
    throw new Error(`Unknown level id: "${id}". Registered: ${Object.keys(LevelRegistry).join(', ')}`);
  }
  return factory();
}
