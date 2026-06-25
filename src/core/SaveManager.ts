// core/SaveManager.ts
// localStorage-backed progression. Implements the `SaveLike` surface levels read
// through `ctx.save`. Persistence is wrapped in try/catch with a typed `SaveError`
// and degrades to IN-MEMORY state (private mode / quota / disabled storage) — never
// a bare `catch {}`. The max-energy bonus is DERIVED from the collected set
// (`length * ELDUNARI_BONUS`), so a reload can neither double-count nor drift.
import type { SaveLike } from './EngineContext';
import { ELDUNARI_BONUS } from '../config/gameConfig';

/** Single versioned key — bump v1 -> v2 to invalidate old saves (no migration shims). */
const SAVE_KEY = 'inheritance.save.v1';

/** Typed error for storage failures (never swallowed silently). */
export class SaveError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = 'SaveError';
  }
}

/** The exact shape persisted to localStorage (the bonus is recomputed, not stored). */
interface PersistedSave {
  eldunariCollected: string[];
  unlockedSpells: string[];
  levelsCleared: string[];
}

function emptyPersisted(): PersistedSave {
  return { eldunariCollected: [], unlockedSpells: [], levelsCleared: [] };
}

/** Narrow unknown parsed JSON to a `PersistedSave` (defensive against corrupt/old data). */
function coerce(raw: unknown): PersistedSave {
  const data = emptyPersisted();
  if (raw && typeof raw === 'object') {
    const o = raw as Record<string, unknown>;
    if (Array.isArray(o.eldunariCollected)) {
      data.eldunariCollected = o.eldunariCollected.filter((x): x is string => typeof x === 'string');
    }
    if (Array.isArray(o.unlockedSpells)) {
      data.unlockedSpells = o.unlockedSpells.filter((x): x is string => typeof x === 'string');
    }
    if (Array.isArray(o.levelsCleared)) {
      data.levelsCleared = o.levelsCleared.filter((x): x is string => typeof x === 'string');
    }
  }
  return data;
}

/**
 * Persisted progression. Construct once and pass as `EngineContext.save`. If
 * storage is unavailable the instance still works fully — it just keeps state in
 * memory for the session (collected Eldunarí won't survive that reload, but the
 * game never crashes and the bigger energy bar still applies in-session).
 */
export class SaveManager implements SaveLike {
  eldunariCollected: string[];
  unlockedSpells: string[];
  levelsCleared: string[];

  /** False once a read/write throws — we stop hitting storage and stay in-memory. */
  private storageOk = true;

  constructor() {
    const loaded = this.read();
    this.eldunariCollected = loaded.eldunariCollected;
    this.unlockedSpells = loaded.unlockedSpells;
    this.levelsCleared = loaded.levelsCleared;
  }

  /** Derived from the collected set — never an imperative ++ (reload-safe). */
  get maxEnergyBonus(): number {
    return this.eldunariCollected.length * ELDUNARI_BONUS;
  }

  isCollected(id: string): boolean {
    return this.eldunariCollected.includes(id);
  }

  /** Idempotently record a collected Eldunarí and persist. */
  collect(id: string): void {
    if (this.eldunariCollected.includes(id)) return;
    this.eldunariCollected.push(id);
    this.persist();
  }

  /** Idempotently unlock a spell and persist. */
  unlockSpell(id: string): void {
    if (this.unlockedSpells.includes(id)) return;
    this.unlockedSpells.push(id);
    this.persist();
  }

  /** Idempotently record a cleared level and persist. */
  markLevelCleared(id: string): void {
    if (this.levelsCleared.includes(id)) return;
    this.levelsCleared.push(id);
    this.persist();
  }

  /** Wipe all progression (debug / new game). */
  reset(): void {
    this.eldunariCollected = [];
    this.unlockedSpells = [];
    this.levelsCleared = [];
    this.persist();
  }

  // -- storage (try/catch -> typed SaveError -> in-memory fallback) ----------

  private read(): PersistedSave {
    if (!this.storageOk) return emptyPersisted();
    try {
      const json = localStorage.getItem(SAVE_KEY);
      if (json === null) return emptyPersisted();
      return coerce(JSON.parse(json));
    } catch (cause) {
      this.storageOk = false;
      this.reportError(new SaveError(`Failed to read save "${SAVE_KEY}"`, { cause }));
      return emptyPersisted();
    }
  }

  private persist(): void {
    if (!this.storageOk) return;
    const data: PersistedSave = {
      eldunariCollected: [...this.eldunariCollected],
      unlockedSpells: [...this.unlockedSpells],
      levelsCleared: [...this.levelsCleared],
    };
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (cause) {
      this.storageOk = false;
      this.reportError(new SaveError(`Failed to write save "${SAVE_KEY}"`, { cause }));
    }
  }

  /** Surface the typed error without crashing the game (degraded, not silent). */
  private reportError(error: SaveError): void {
    console.warn(`[SaveManager] ${error.message} — falling back to in-memory save.`, error.cause);
  }
}
