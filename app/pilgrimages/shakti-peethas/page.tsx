"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { useAudio } from '@/components/audio-provider';
import { shaktiPeethaCircuit, shaktiPeethaPlaces } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, MapPin, Calendar, Clock, Star, Flame, Eye, X } from 'lucide-react';

// Reusable animated placeholder array for visual grandeur
const immersiveImages = [
  "https://images.unsplash.com/photo-1544253372-747125e1a12a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582508688439-b9d9df3c0e35?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604505293673-aee3c10d32c5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561081546-4cb46c5dfd6f?q=80&w=2070&auto=format&fit=crop"
];

export default function ShaktiPeethasPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const [filterState, setFilterState] = useState<string>('all');
  const { playSoftBell, isOmPlaying, toggleOmChant } = useAudio();
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const uniqueStates = Array.from(new Set(shaktiPeethaPlaces.map(p => p.state)));
  const filtered = filterState === 'all' ? shaktiPeethaPlaces : shaktiPeethaPlaces.filter(p => p.state === filterState);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-rose-500/30 overflow-x-hidden">
      <Navbar user={user} />
      
      <main className="relative">
        {/* PARALLAX HERO SECTION */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
            {/* Dark divine Goddess theme background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1d87b487bb2a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/30" />
            <div className="absolute inset-0 bg-rose-950/20 mix-blend-color" />
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-20 text-center">
            <Link href="/pilgrimages" className="inline-flex items-center text-sm text-slate-400 hover:text-rose-400 transition-colors mb-8" onMouseEnter={playSoftBell}>
              <ArrowLeft className="h-4 w-4 mr-2" /> All Sacred Circuits
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-6">
                <Flame className="w-8 h-8 text-rose-500 animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 font-serif">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-400 via-red-500 to-red-800">52 Shakti Peethas</span>
              </h1>
              <p className="text-xl md:text-2xl text-rose-100/70 font-light max-w-3xl mx-auto leading-relaxed">
                Where fragments of the Divine Feminine fell to Earth. Traverse the cosmic power centers of Goddess Sati.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LORE SECTION */}
        <section className="py-24 px-4 relative z-10 bg-[#020617] border-t border-rose-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">The Cosmic Sacrifice</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                Consumed by the fires of Daksha's yagna, the lifeless form of Sati was carried across dimensions by a grief-stricken Shiva. His destructive <em>Tandava</em> threatened the universe.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-12">
                To save creation, Vishnu severed Sati's body with his Sudarshana Chakra. The 52 fragments showered the earthly realm, embedding divine, vibrating energy wherever they landed. These became the <strong className="text-rose-400 font-semibold">Shakti Peethas</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-8 px-4 sticky top-16 z-40 bg-[#020617]/90 backdrop-blur-md border-y border-white/5">
          <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide items-center">
            <span className="text-sm font-medium mr-2 text-rose-400 shrink-0 font-serif">Soothe by Kingdom:</span>
            <Button variant={filterState === 'all' ? 'default' : 'outline'} size="sm" className={`rounded-full shrink-0 border-white/10 ${filterState === 'all' ? 'bg-rose-700 hover:bg-rose-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5 bg-transparent'}`} onClick={() => { setFilterState('all'); playSoftBell(); }}>All Realms ({shaktiPeethaPlaces.length})</Button>
            {uniqueStates.map((state) => (
              <Button key={state} variant={filterState === state ? 'default' : 'outline'} size="sm" className={`rounded-full shrink-0 border-white/10 ${filterState === state ? 'bg-rose-700 hover:bg-rose-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5 bg-transparent'}`} onClick={() => { setFilterState(state); playSoftBell(); }}>
                {state}
              </Button>
            ))}
          </div>
        </section>

        {/* IMMERSIVE GRID */}
        <section className="py-16 px-4 bg-[#020617]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((place, idx) => {
                const img = immersiveImages[idx % immersiveImages.length];
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.6, delay: (idx % 8) * 0.1 }}
                    key={place.id}
                  >
                    <div 
                      onClick={() => { setSelectedPlace({...place, img}); playSoftBell(); }}
                      className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-rose-900/30 hover:border-rose-500/50 transition-colors"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                      <div className="absolute inset-0 bg-rose-950/20 mix-blend-multiply group-hover:mix-blend-normal transition-all" />
                      
                      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                        <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold mb-3 shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                          {idx + 1}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-1 line-clamp-1 group-hover:text-rose-300 transition-colors">{place.name}</h3>
                        <p className="text-sm font-medium text-rose-400 mb-2">Deity: {place.deity}</p>
                        <p className="text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{place.significance}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DETAILS MODAL */}
        <AnimatePresence>
          {selectedPlace && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#020617] border border-rose-900/40 rounded-[2rem] shadow-[0_0_50px_rgba(225,29,72,0.15)] scrollbar-hide relative"
              >
                <div className="sticky top-0 right-0 z-10 flex justify-end p-4">
                  <Button variant="ghost" size="icon" onClick={() => setSelectedPlace(null)} className="rounded-full bg-black/50 text-white hover:bg-rose-600 backdrop-blur-md">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="relative h-[40vh] -mt-16">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${selectedPlace.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
                  <div className="absolute bottom-[-1px] left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
                </div>

                <div className="px-8 pb-12 -mt-10 relative z-10">
                  <Badge className="bg-rose-600 text-white border-0 px-4 py-1.5 uppercase tracking-widest text-xs mb-4">{selectedPlace.location}</Badge>
                  <h2 className="text-5xl font-serif text-white mb-2">{selectedPlace.name}</h2>
                  <p className="text-xl text-rose-300 font-light mb-8 flex items-center"><Flame className="w-5 h-5 mr-2" /> Manifestation: {selectedPlace.deity}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-4 border-b border-rose-900/30 pb-2">Divine Significance</h3>
                      <p className="text-lg text-slate-300 font-light italic mb-6">"{selectedPlace.significance}"</p>
                      
                      <h4 className="text-lg font-medium text-white mb-3">Tale of Epochs</h4>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">{selectedPlace.history}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{selectedPlace.description}</p>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-rose-950/10 border border-rose-900/20 rounded-2xl">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center"><Clock className="w-4 h-4 mr-2 text-rose-400"/> Temporal Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-sm text-slate-500">Auspicious Time</span>
                            <span className="text-sm text-slate-300">{selectedPlace.bestTimeToVisit}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500">Darshan Timings</span>
                            <span className="text-sm text-slate-300">{selectedPlace.timings}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-400"/> Pilgrimage Access</h4>
                        <div className="space-y-4">
                          {selectedPlace.howToReach.map((opt: any, i: number) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-sm font-medium text-white capitalize">{opt.mode}</span>
                              <span className="text-sm text-slate-400 mt-1">{opt.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
