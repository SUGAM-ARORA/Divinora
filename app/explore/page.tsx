"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { IndiaMap } from '@/components/india-map';
import { indianStates } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { useAudio } from '@/components/audio-provider';
import { SacredRivers } from '@/components/sacred-rivers';
import { ArrowLeft, Globe, MapPin, Mountain, Compass, Map, Landmark } from 'lucide-react';

const regionColors: Record<string, string> = {
  north: 'from-blue-500 to-sky-500', south: 'from-orange-500 to-red-500',
  east: 'from-emerald-500 to-green-500', west: 'from-amber-500 to-yellow-500',
  central: 'from-purple-500 to-violet-500', northeast: 'from-teal-500 to-cyan-500',
};

export default function ExplorePage() {
  const [user, setUser] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [expandedState, setExpandedState] = useState<string | null>(null);
  const { playSoftBell, playBell } = useAudio();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const regions = ['all', 'north', 'south', 'east', 'west', 'central', 'northeast'];
  const filtered = selectedRegion === 'all' ? indianStates : indianStates.filter(s => s.region === selectedRegion);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar user={user} />
      
      <main className="relative pt-16">
        {/* PARALLAX HERO SECTION */}
        <section className="relative py-24 overflow-hidden border-b border-blue-900/20">
          <div className="absolute inset-0 bg-[url('/mandala.svg')] bg-cover opacity-[0.02] mix-blend-screen animate-[spin_240s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#020617] to-purple-900/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors mb-8" onMouseEnter={playSoftBell}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6">
                <Globe className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="text-sm tracking-widest text-blue-300 font-medium uppercase font-serif">Auspicious Coordinates</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-serif">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Sacred Topography</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/70 font-light max-w-2xl mx-auto leading-relaxed">
                India is not merely land. It is a living, breathing spiritual entity. Select regions or interact with the map to uncover ancient temples, high-altitude treks, and divine rivers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAP & REGION EXPLORATION */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Interactive Flowing Map (Left) */}
            <div className="lg:col-span-5 flex flex-col items-center">
             <div className="sticky top-24 w-full">
               <div className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 shadow-[0_0_40px_rgba(59,130,246,0.1)] backdrop-blur-xl">
                 <h2 className="text-2xl font-serif text-white mb-6 text-center flex items-center justify-center">
                   <Map className="w-6 h-6 mr-3 text-blue-500" /> Interactive Canvas
                 </h2>
                 <p className="text-center text-slate-400 text-sm mb-8 font-light italic">
                   Hover over states to see their spiritual density.
                 </p>
                 <div className="relative w-full max-w-[400px] mx-auto aspect-[4/5] bg-slate-950 rounded-2xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:scale-105 transition-transform duration-1000" />
                    <IndiaMap className="w-full h-full text-slate-700/50 p-4" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-20 pointer-events-none" />
                 </div>
                 
                 <div className="mt-8 flex flex-wrap justify-center gap-2">
                   {regions.map((region) => (
                     <Button 
                       key={region} 
                       variant={selectedRegion === region ? 'default' : 'outline'}
                       size="sm"
                       onClick={() => { setSelectedRegion(region); playSoftBell(); }}
                       className={`capitalize rounded-full border-slate-800 ${selectedRegion === region ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-none' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                     >
                       {region}
                     </Button>
                   ))}
                 </div>
               </div>
             </div>
            </div>

            {/* Sacred Database (Right) */}
            <div className="lg:col-span-7">
              <SacredRivers />

              <div className="mt-16 mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
                <Landmark className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-serif text-white">Regional Sanctuaries</h2>
              </div>

              <div className="space-y-6">
                <AnimatePresence>
                  {filtered.map((state, idx) => {
                    const isExpanded = expandedState === state.id;
                    const color = regionColors[state.region] || 'from-slate-500 to-slate-400';
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        key={state.id}
                      >
                        <Card className="bg-slate-900 border-slate-800 overflow-hidden group hover:border-slate-700 transition-colors">
                          <div 
                            className="p-6 cursor-pointer relative"
                            onClick={() => { setExpandedState(isExpanded ? null : state.id); playSoftBell(); }}
                          >
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${color}`} />
                            <div className="flex justify-between items-center ml-2">
                              <div>
                                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{state.name}</h3>
                                <p className="text-sm text-slate-400 mt-1 capitalize flex items-center gap-2">
                                  <MapPin className="w-3.5 h-3.5" /> {state.region} Region
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Badge className="bg-[#020617] border border-slate-800 text-slate-300 font-normal">
                                  <Landmark className="w-3 h-3 mr-1.5 text-amber-500" /> {state.temples} Temples
                                </Badge>
                                <Badge className="bg-[#020617] border border-slate-800 text-slate-300 font-normal">
                                  <Mountain className="w-3 h-3 mr-1.5 text-emerald-500" /> {state.treks} Treks
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          {isExpanded && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-[#020617]/50 border-t border-slate-800 p-6 ml-1.5"
                            >
                              <p className="text-slate-300 font-light leading-relaxed mb-6">{state.description}</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center"><Landmark className="w-4 h-4 mr-2 text-amber-500"/> Key Shrines</h4>
                                  <ul className="space-y-2">
                                    {state.highlights.slice(0, 3).map((h, i) => (
                                      <li key={i} className="text-sm text-slate-400 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg">{h}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center"><Compass className="w-4 h-4 mr-2 text-blue-500"/> Major Cities</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {state.cities.map((c, i) => (
                                      <Badge key={i} variant="outline" className="border-slate-800 text-slate-400 bg-transparent">{c}</Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-8 flex justify-end">
                                <Button className={`bg-gradient-to-r ${color} text-white shadow-lg`} onClick={(e) => { e.stopPropagation(); playBell(); }}>
                                  Plan Yatra to {state.name}
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </Card>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
