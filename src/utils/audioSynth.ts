/**
 * Web Audio API synthesizer for traditional Malay Gambus/Oud acoustic melody
 */

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let currentTimer: any = null;

// Traditional Malay pentatonic / maqam rast inspired frequencies
const MELODY = [
  { note: 220.00, dur: 0.4 }, // A3
  { note: 246.94, dur: 0.3 }, // B3
  { note: 277.18, dur: 0.5 }, // C#4
  { note: 329.63, dur: 0.6 }, // E4
  { note: 277.18, dur: 0.4 }, // C#4
  { note: 246.94, dur: 0.4 }, // B3
  { note: 220.00, dur: 0.8 }, // A3
  { note: 164.81, dur: 0.4 }, // E3 (rendah)
  { note: 220.00, dur: 0.4 }, // A3
  { note: 246.94, dur: 0.4 }, // B3
  { note: 293.66, dur: 0.4 }, // D4
  { note: 277.18, dur: 0.4 }, // C#4
  { note: 246.94, dur: 0.6 }, // B3
  { note: 220.00, dur: 1.0 }, // A3
];

function playOudPluck(ctx: AudioContext, freq: number, duration: number, time: number) {
  // Main oscillator for string resonance
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, time);

  osc2.type = 'sawtooth';
  osc2.frequency.setValueAtTime(freq * 1.002, time); // Subtle chorusing like double string gambus

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 4, time);
  filter.frequency.exponentialRampToValueAtTime(freq * 1.2, time + duration);

  gain.gain.setValueAtTime(0.001, time);
  gain.gain.linearRampToValueAtTime(0.25, time + 0.02); // quick acoustic pluck attack
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(time);
  osc2.start(time);
  osc.stop(time + duration);
  osc2.stop(time + duration);
}

export function toggleGambusMusic(onStateChange?: (playing: boolean) => void): boolean {
  if (isPlaying) {
    stopGambusMusic();
    if (onStateChange) onStateChange(false);
    return false;
  }

  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    let noteIndex = 0;

    const playNext = () => {
      if (!isPlaying || !audioCtx) return;
      const { note, dur } = MELODY[noteIndex];
      const now = audioCtx.currentTime;
      playOudPluck(audioCtx, note, dur, now);

      noteIndex = (noteIndex + 1) % MELODY.length;
      currentTimer = setTimeout(playNext, (dur + 0.08) * 1000);
    };

    playNext();
    if (onStateChange) onStateChange(true);
    return true;
  } catch {
    isPlaying = false;
    if (onStateChange) onStateChange(false);
    return false;
  }
}

export function stopGambusMusic() {
  isPlaying = false;
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }
}
