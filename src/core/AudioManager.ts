// core/AudioManager.ts
// Web Audio synth SFX — zero asset files. Distinct oscillator/noise bursts for
// casts, melee hits, fire-breath, dragon roar, ward-break, heal, win, lose, and
// UI clicks. The `AudioContext` starts suspended; it is created/resumed ONLY on
// the Start user gesture (`resume()`), or browsers keep it muted. SFX is the
// lowest-priority feature per the plan — every path is guarded and degrades to
// silence rather than throwing.

/**
 * Every SFX id `play(id)` understands. Other chunks call `audio.play(<id>)`;
 * this union is the catalogue of every id actually emitted across the codebase
 * (characters / combat / magic / enemies / UI). An unknown id stays silent.
 */
export type SfxId =
  | 'ui-click'
  | 'shout'
  | 'cast'
  | 'melee-hit'
  | 'fire'
  | 'fire-breath'
  | 'dragon-roar'
  | 'ward-break'
  | 'heal'
  | 'death'
  | 'ballista-charge'
  | 'ballista-fire'
  | 'win'
  | 'lose';

interface ToneSpec {
  type: OscillatorType;
  /** Start frequency (Hz). */
  freq: number;
  /** Optional glide target frequency (Hz). */
  freqEnd?: number;
  /** Duration in seconds. */
  dur: number;
  /** Peak gain (0..1). */
  gain?: number;
  /** Start delay relative to "now" (seconds). */
  delay?: number;
}

interface NoiseSpec {
  dur: number;
  gain?: number;
  /** Lowpass cutoff (Hz). */
  cutoff?: number;
  /** Optional glide target cutoff (Hz). */
  cutoffEnd?: number;
  delay?: number;
}

export class AudioManager {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  muted = false;

  /**
   * Create/resume the `AudioContext`. MUST be called from a user gesture (the
   * Start-button / canvas click) or browsers keep the context suspended.
   */
  resume(): void {
    try {
      if (!this.context) {
        const Ctor =
          window.AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctor) return;
        this.context = new Ctor();
        this.master = this.context.createGain();
        this.master.gain.value = this.muted ? 0 : 0.6;
        this.master.connect(this.context.destination);
        this.noiseBuffer = this.buildNoiseBuffer(this.context);
      }
      if (this.context.state === 'suspended') {
        void this.context.resume();
      }
    } catch (error) {
      // Audio is optional (lowest-priority per the plan); degrade to silence but
      // surface the cause rather than swallowing it.
      console.warn('AudioManager: audio unavailable, continuing muted.', error);
      this.context = null;
      this.master = null;
      this.noiseBuffer = null;
    }
  }

  /** Play a guarded synth SFX. No-op until the context is running (post-gesture). */
  play(id: string): void {
    const ctx = this.context;
    const master = this.master;
    if (this.muted || !ctx || !master || ctx.state !== 'running') return;
    try {
      this.synth(id as SfxId, ctx, master);
    } catch (error) {
      // Never let an SFX crash the game loop.
      console.warn(`AudioManager: failed to play "${id}".`, error);
    }
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.master && this.context) {
      this.master.gain.setValueAtTime(this.muted ? 0 : 0.6, this.context.currentTime);
    }
    return this.muted;
  }

  get isMuted(): boolean {
    return this.muted;
  }

  // -- synth registry -------------------------------------------------------

  private synth(id: SfxId, ctx: AudioContext, out: GainNode): void {
    switch (id) {
      case 'ui-click':
        // Soft muted tick (not a beep): a quick low sine blip + a faint noise edge.
        this.tone(ctx, out, { type: 'sine', freq: 430, freqEnd: 300, dur: 0.05, gain: 0.16 });
        this.noise(ctx, out, { dur: 0.025, gain: 0.07, cutoff: 2200 });
        break;
      case 'shout':
        // Terse vocal chirp — triangle (less harsh than a saw) + slight pitch variation.
        this.tone(ctx, out, { type: 'triangle', freq: this.vary(300, 0.1), freqEnd: 190, dur: 0.14, gain: 0.18 });
        break;
      case 'cast':
        // Rising magical whoosh.
        this.tone(ctx, out, { type: 'triangle', freq: 320, freqEnd: 880, dur: 0.28, gain: 0.3 });
        this.tone(ctx, out, { type: 'sine', freq: 640, freqEnd: 1320, dur: 0.22, gain: 0.18, delay: 0.02 });
        break;
      case 'melee-hit': {
        // Punchy thud: a soft low body (triangle, not square) with slight per-hit
        // pitch variation + a short filtered-noise transient, so a flurry of swings
        // doesn't sound identical and the hit reads weighty rather than harsh.
        const body = this.vary(135, 0.18);
        this.tone(ctx, out, { type: 'triangle', freq: body, freqEnd: body * 0.45, dur: 0.11, gain: 0.3 });
        this.noise(ctx, out, { dur: 0.07, gain: 0.34, cutoff: this.vary(1500, 0.25), cutoffEnd: 480 });
        break;
      }
      case 'fire':
      case 'fire-breath':
        this.noise(ctx, out, { dur: 0.34, gain: 0.28, cutoff: this.vary(1400, 0.18), cutoffEnd: 600 });
        this.tone(ctx, out, { type: 'sawtooth', freq: this.vary(120, 0.14), freqEnd: 70, dur: 0.3, gain: 0.12 });
        break;
      case 'death':
        // Heavy descending fall + impact noise.
        this.tone(ctx, out, { type: 'sawtooth', freq: 260, freqEnd: 50, dur: 0.55, gain: 0.3 });
        this.noise(ctx, out, { dur: 0.5, gain: 0.16, cutoff: 1200, cutoffEnd: 300 });
        break;
      case 'ballista-charge':
        // Rising mechanical tension (a winch creak).
        this.tone(ctx, out, { type: 'sawtooth', freq: 90, freqEnd: 260, dur: 0.55, gain: 0.16 });
        break;
      case 'ballista-fire':
        // Sharp release twang + thunk.
        this.tone(ctx, out, { type: 'square', freq: 520, freqEnd: 120, dur: 0.14, gain: 0.28 });
        this.noise(ctx, out, { dur: 0.12, gain: 0.26, cutoff: 3200 });
        break;
      case 'dragon-roar':
        this.tone(ctx, out, { type: 'sawtooth', freq: 180, freqEnd: 70, dur: 0.6, gain: 0.34 });
        this.tone(ctx, out, { type: 'square', freq: 90, freqEnd: 45, dur: 0.6, gain: 0.2 });
        this.noise(ctx, out, { dur: 0.55, gain: 0.18, cutoff: 900, cutoffEnd: 300 });
        break;
      case 'ward-break':
        // Metallic shatter: detuned squares + bright noise.
        this.tone(ctx, out, { type: 'square', freq: 880, freqEnd: 440, dur: 0.18, gain: 0.22 });
        this.tone(ctx, out, { type: 'square', freq: 1170, freqEnd: 520, dur: 0.16, gain: 0.18 });
        this.noise(ctx, out, { dur: 0.2, gain: 0.26, cutoff: 5000 });
        break;
      case 'heal':
        // Bright ascending arpeggio.
        this.tone(ctx, out, { type: 'sine', freq: 523, dur: 0.16, gain: 0.22 });
        this.tone(ctx, out, { type: 'sine', freq: 659, dur: 0.16, gain: 0.22, delay: 0.08 });
        this.tone(ctx, out, { type: 'sine', freq: 784, dur: 0.2, gain: 0.22, delay: 0.16 });
        break;
      case 'win':
        this.tone(ctx, out, { type: 'triangle', freq: 523, dur: 0.18, gain: 0.3 });
        this.tone(ctx, out, { type: 'triangle', freq: 659, dur: 0.18, gain: 0.3, delay: 0.14 });
        this.tone(ctx, out, { type: 'triangle', freq: 784, dur: 0.18, gain: 0.3, delay: 0.28 });
        this.tone(ctx, out, { type: 'triangle', freq: 1047, dur: 0.32, gain: 0.32, delay: 0.42 });
        break;
      case 'lose':
        this.tone(ctx, out, { type: 'sawtooth', freq: 392, dur: 0.22, gain: 0.28 });
        this.tone(ctx, out, { type: 'sawtooth', freq: 311, dur: 0.22, gain: 0.28, delay: 0.18 });
        this.tone(ctx, out, { type: 'sawtooth', freq: 196, dur: 0.5, gain: 0.3, delay: 0.36 });
        break;
      default:
        // Unknown id: stay silent rather than throw.
        break;
    }
  }

  /** Multiply a value by a small random factor (±amount/2) for per-hit variation. */
  private vary(value: number, amount: number): number {
    return value * (1 + (Math.random() - 0.5) * amount);
  }

  private tone(ctx: AudioContext, out: GainNode, spec: ToneSpec): void {
    const start = ctx.currentTime + (spec.delay ?? 0);
    const end = start + spec.dur;
    const peak = spec.gain ?? 0.25;

    const osc = ctx.createOscillator();
    osc.type = spec.type;
    osc.frequency.setValueAtTime(spec.freq, start);
    if (spec.freqEnd !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(1, spec.freqEnd), end);
    }

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(peak, start + Math.min(0.012, spec.dur * 0.3));
    env.gain.exponentialRampToValueAtTime(0.0001, end);

    osc.connect(env);
    env.connect(out);
    osc.start(start);
    osc.stop(end + 0.02);
  }

  private noise(ctx: AudioContext, out: GainNode, spec: NoiseSpec): void {
    if (!this.noiseBuffer) return;
    const start = ctx.currentTime + (spec.delay ?? 0);
    const end = start + spec.dur;
    const peak = spec.gain ?? 0.2;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(spec.cutoff ?? 2000, start);
    if (spec.cutoffEnd !== undefined) {
      filter.frequency.exponentialRampToValueAtTime(Math.max(1, spec.cutoffEnd), end);
    }

    const env = ctx.createGain();
    env.gain.setValueAtTime(peak, start);
    env.gain.exponentialRampToValueAtTime(0.0001, end);

    src.connect(filter);
    filter.connect(env);
    env.connect(out);
    src.start(start);
    src.stop(end + 0.02);
  }

  private buildNoiseBuffer(ctx: AudioContext): AudioBuffer {
    const len = Math.floor(ctx.sampleRate * 0.6);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }
}
