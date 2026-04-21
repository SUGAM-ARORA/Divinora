"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { IndiaMap } from '@/components/india-map';
import { indianStates } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { useAudio } from '@/components/audio-provider';
import { SacredRivers } from '@/components/sacred-rivers';
import { ArrowLeft, Globe, Landmark } from 'lucide-react';

export default function ExplorePage() {
  const [user, setUser] = useState<any>(null);
  const { playSoftBell } = useAudio();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar user={user} />
      
      <main className="relative pt-16">
        {/* PARALLAX HERO SECTION */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/mandala.svg')] bg-cover opacity-[0.02] mix-blend-screen animate-[spin_240s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#020617] to-[#020617]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors mb-6" onMouseEnter={playSoftBell}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 opacity-80 hover:opacity-100 transition-opacity">
                <Globe className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="text-sm tracking-widest text-blue-300 font-medium uppercase font-serif">Auspicious Coordinates</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 font-serif">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-slate-400">Sacred Topography</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/60 font-light max-w-2xl mx-auto leading-relaxed">
                India is a living, breathing spiritual entity. Interact with the 3D dimensional map below to deeply explore regions, uncover ancient temples, high-altitude treks, and divine rivers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3D MAP SECTION (FULL WIDTH GRANDEUR) */}
        <section className="relative w-full pb-32">
          <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-6">
            <IndiaMap />
          </div>
        </section>

        {/* Sacred Database (Lower Section) */}
        <section className="py-24 px-4 bg-slate-950/50 border-t border-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
              <SacredRivers />
          </div>
        </section>

      </main>
    </div>
  );
}
