"use client";

import React, { createContext, useContext, useCallback, useRef, useEffect, useState } from 'react';

type AudioContextType = {
  playBell: () => void;
  playSoftBell: () => void;
  toggleOmChant: () => void;
  isOmPlaying: boolean;
};

const AudioContext = createContext<AudioContextType>({
  playBell: () => {},
  playSoftBell: () => {},
  toggleOmChant: () => {},
  isOmPlaying: false,
});

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const omOscillatorsRef = useRef<OscillatorNode[]>([]);
  const omGainRef = useRef<GainNode | null>(null);
  const [isOmPlaying, setIsOmPlaying] = useState(false);

  // Initialize audio context only on user interaction to abide by browser autoplay policies
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  const createBellSound = useCallback((frequencies: number[], duration: number, volume: number) => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const now = ctx.currentTime;
    
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      
      // Attack
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(volume / (i + 1), now + 0.05);
      
      // Decay
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + duration);
    });
  }, [initAudio]);

  const playBell = useCallback(() => {
    // Large Temple Bell frequencies
    createBellSound([523.25, 1046.5, 1318.5, 1568, 2093], 4, 0.15);
  }, [createBellSound]);

  const playSoftBell = useCallback(() => {
    // Small soft interaction bell (like a ghanti)
    createBellSound([1568, 2093, 2637], 1.5, 0.05);
  }, [createBellSound]);

  const toggleOmChant = useCallback(() => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (isOmPlaying) {
      // Fade out and stop
      if (omGainRef.current) {
        const now = ctx.currentTime;
        omGainRef.current.gain.linearRampToValueAtTime(0.001, now + 2);
        setTimeout(() => {
          omOscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch (e) {}
          });
          omOscillatorsRef.current = [];
        }, 2000);
      }
      setIsOmPlaying(false);
    } else {
      // Start Om Chant
      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(0.1, now + 3); // Fade in
      masterGain.connect(ctx.destination);
      omGainRef.current = masterGain;

      // Om frequency (136.1 Hz) + Harmonics
      const freqs = [136.1, 272.2, 408.3];
      freqs.forEach(freq => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        
        // Add subtle vibrato (LFO)
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(4, now); // 4Hz vibrato
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(2, now); // +/- 2Hz fluctuation
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(now);

        osc.connect(masterGain);
        osc.start(now);
        omOscillatorsRef.current.push(osc);
        omOscillatorsRef.current.push(lfo);
      });

      setIsOmPlaying(true);
    }
  }, [initAudio, isOmPlaying]);

  useEffect(() => {
    return () => {
      // Cleanup audio on unmount
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ playBell, playSoftBell, toggleOmChant, isOmPlaying }}>
      {/* Invisible global interaction listener to allow audio context init */}
      <div className="contents" onClickCapture={initAudio} onKeyDownCapture={initAudio}>
        {children}
      </div>
    </AudioContext.Provider>
  );
}
