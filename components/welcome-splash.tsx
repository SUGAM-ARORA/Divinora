"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

// Generate a spiritual bell + Om sound using Web Audio API
function createSpiritualAudio(audioContext: AudioContext) {
  const now = audioContext.currentTime;

  // === TEMPLE BELL (multiple harmonics for realistic metallic bell) ===
  const bellFrequencies = [523.25, 1046.5, 1318.5, 1568, 2093];
  bellFrequencies.forEach((freq, i) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.15 / (i + 1), now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 3);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(now);
    osc.stop(now + 3);
  });

  // Second bell strike
  setTimeout(() => {
    const now2 = audioContext.currentTime;
    bellFrequencies.forEach((freq, i) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now2);
      gain.gain.setValueAtTime(0.12 / (i + 1), now2);
      gain.gain.exponentialRampToValueAtTime(0.001, now2 + 2.5);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(now2);
      osc.stop(now2 + 2.5);
    });
  }, 800);

  // === OM DRONE (deep resonant hum) ===
  const omOsc = audioContext.createOscillator();
  const omGain = audioContext.createGain();
  omOsc.type = 'sine';
  omOsc.frequency.setValueAtTime(136.1, now + 0.5); // Om frequency (136.1 Hz - Cosmic pitch)
  omGain.gain.setValueAtTime(0, now);
  omGain.gain.linearRampToValueAtTime(0.08, now + 1.5);
  omGain.gain.setValueAtTime(0.08, now + 4);
  omGain.gain.linearRampToValueAtTime(0, now + 7);
  omOsc.connect(omGain);
  omGain.connect(audioContext.destination);
  omOsc.start(now + 0.5);
  omOsc.stop(now + 7);

  // === TANPURA DRONE (Sa note) ===
  const tanpura = audioContext.createOscillator();
  const tanpuraGain = audioContext.createGain();
  tanpura.type = 'sawtooth';
  tanpura.frequency.setValueAtTime(261.63, now + 1); // Middle C (Sa)
  tanpuraGain.gain.setValueAtTime(0, now + 1);
  tanpuraGain.gain.linearRampToValueAtTime(0.02, now + 2);
  tanpuraGain.gain.setValueAtTime(0.02, now + 5);
  tanpuraGain.gain.linearRampToValueAtTime(0, now + 7);
  tanpura.connect(tanpuraGain);
  tanpuraGain.connect(audioContext.destination);
  tanpura.start(now + 1);
  tanpura.stop(now + 7);

  // === SECOND OM WAVE ===
  const om2Osc = audioContext.createOscillator();
  const om2Gain = audioContext.createGain();
  om2Osc.type = 'sine';
  om2Osc.frequency.setValueAtTime(272.2, now + 2); // Octave of Om
  om2Gain.gain.setValueAtTime(0, now + 2);
  om2Gain.gain.linearRampToValueAtTime(0.04, now + 3);
  om2Gain.gain.setValueAtTime(0.04, now + 5.5);
  om2Gain.gain.linearRampToValueAtTime(0, now + 7);
  om2Osc.connect(om2Gain);
  om2Gain.connect(audioContext.destination);
  om2Osc.start(now + 2);
  om2Osc.stop(now + 7);
}

export function WelcomeSplash({ onEnter }: { onEnter: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const p = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(p);
  }, []);

  const handleEnter = useCallback(() => {
    // Play spiritual audio
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      createSpiritualAudio(ctx);
    } catch (e) {
      console.log('Audio not supported');
    }

    // Fade out splash
    setIsExiting(true);
    setTimeout(() => onEnter(), 1200);
  }, [onEnter]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-amber-800 to-orange-950" />

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,165,0,0.08) 10deg, transparent 20deg, transparent 30deg, rgba(255,165,0,0.05) 40deg, transparent 50deg)',
            animation: 'spin 30s linear infinite',
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-orange-300/40"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 text-center px-8 max-w-lg">
        {/* Om Symbol */}
        <div className="mx-auto mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-2xl shadow-orange-500/50"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}>
            <span className="text-6xl text-white" style={{ fontFamily: 'serif' }}>ॐ</span>
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-orange-400/30 animate-ping" style={{ animationDuration: '3s' }} />
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 40px rgba(255,165,0,0.5)' }}>
          Divinora
        </h1>
        <p className="text-orange-200 text-lg mb-2 tracking-widest uppercase" style={{ letterSpacing: '0.25em' }}>
          Your Spiritual Journey Companion
        </p>

        {/* Sanskrit shloka */}
        <p className="text-orange-300/80 text-sm italic my-6" style={{ fontFamily: 'serif' }}>
          "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्"
        </p>
        <p className="text-orange-400/60 text-xs mb-4">— Gayatri Mantra</p>

        {/* Indian Flag subtle element */}
        <div className="flex flex-col items-center mb-8 opacity-80">
          <div className="flex justify-center gap-0 mb-1">
            <div className="h-1 w-16 bg-[#FF9933] rounded-l-full shadow-[0_0_10px_#FF9933]" />
            <div className="h-1 w-16 bg-white shadow-[0_0_10px_#FFFFFF] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 rounded-full bg-[#000080]" />
            </div>
            <div className="h-1 w-16 bg-[#138808] rounded-r-full shadow-[0_0_10px_#138808]" />
          </div>
          <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Sacred India</span>
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            🙏 भारत माता की जय — Enter
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <p className="text-orange-400/50 text-xs mt-4">Click to begin with sacred sounds</p>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(-10px); opacity: 0.4; }
          75% { transform: translateY(-20px) translateX(15px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
