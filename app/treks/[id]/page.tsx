"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sacredTreks } from '@/lib/data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { supabase } from '@/lib/supabase';
import { WeatherWidget } from '@/components/weather-widget';
import { useAudio } from '@/components/audio-provider';
import {
  ArrowLeft, Mountain, Clock, MapPin, Plane, Train, Bus, Footprints,
  AlertTriangle, CheckCircle, Star, IndianRupee, Calendar, ThermometerSun, PersonStanding, Play
} from 'lucide-react';

const modeIcons: Record<string, { icon: any; color: string }> = {
  trek: { icon: Footprints, color: 'from-emerald-500 to-green-600' },
  pony: { icon: PersonStanding, color: 'from-amber-500 to-orange-500' },
  palki: { icon: PersonStanding, color: 'from-purple-500 to-violet-600' },
  helicopter: { icon: Plane, color: 'from-sky-500 to-blue-600' },
  'cable-car': { icon: Train, color: 'from-cyan-500 to-teal-600' },
  car: { icon: Bus, color: 'from-slate-500 to-gray-600' },
};
const diffColors: Record<string, string> = { easy: 'bg-green-500', moderate: 'bg-yellow-500', hard: 'bg-orange-500', extreme: 'bg-red-500' };

export default function TrekDetailPage() {
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const trek = sacredTreks.find(t => t.id === params.id);
  const { playSoftBell, isOmPlaying, toggleOmChant } = useAudio();
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  if (!trek) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Trek Not Found</h1>
          <Link href="/treks"><Button variant="outline">← Back to Treks</Button></Link>
        </div>
      </div>
    );
  }

  // Choose a majestic background based on the trek
  const bgImage = trek.id === 'vaishno-devi' 
    ? 'https://images.unsplash.com/photo-1626014903706-e7811985c782?q=80&w=2070&auto=format&fit=crop' 
    : 'https://images.unsplash.com/photo-1542318025-a45e45a278d6?q=80&w=2070&auto=format&fit=crop';

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden selection:bg-orange-500/30">
      <Navbar user={user} />
      
      <main className="relative">
        {/* PARALLAX HERO SECTION */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: yBg, opacity: opacityHero }} className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-[0.4] scale-105" 
              style={{ backgroundImage: `url('${bgImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-20">
            <Link href="/treks" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-8 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10" onMouseEnter={playSoftBell}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Return to Treks
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className={`${diffColors[trek.difficulty]} text-white border-0 text-xs px-4 py-1.5 capitalize tracking-wider`}>{trek.difficulty} Trek</Badge>
                <Badge variant="outline" className="text-xs px-4 py-1.5 text-amber-400 border-amber-400/30 bg-amber-400/10 tracking-widest uppercase">{trek.deity}</Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-serif" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                {trek.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light flex items-center gap-2 max-w-2xl text-shadow-md">
                <MapPin className="h-6 w-6 text-orange-500" /> {trek.location}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT & WEATHER */}
        <section className="py-20 px-4 relative z-10 -mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Description & Media */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <p className="text-xl text-slate-300 leading-relaxed font-light">{trek.description}</p>
              </motion.div>

              {/* MEDIA GALLERY: Mata's Photos / Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif text-white flex items-center"><Sparkles className="w-6 h-6 mr-3 text-orange-500"/> Divine Glimpses</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-80 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10" onMouseEnter={playSoftBell}>
                    <img src="https://images.unsplash.com/photo-1544253372-747125e1a12a?q=80&w=2070&auto=format&fit=crop" alt="Darshan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500/80 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform"><Play className="w-6 h-6 fill-current"/></div>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden border border-white/10 group"><img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
                  <div className="h-48 rounded-xl overflow-hidden border border-white/10 group"><img src="https://images.unsplash.com/photo-1604505293673-aee3c10d32c5?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
                </div>
              </motion.div>

              {/* 3D TRACK DEMO PLACEHOLDER */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-6 pt-8"
              >
                <h2 className="text-3xl font-serif text-white flex items-center"><Mountain className="w-6 h-6 mr-3 text-emerald-500"/> 3D Track Preview</h2>
                <div className="w-full h-[400px] bg-slate-900 rounded-[2rem] border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('/map-grid.svg')] opacity-20 group-hover:opacity-40 transition-opacity" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
                   <Compass className="w-16 h-16 text-slate-700 mb-4 animate-pulse" />
                   <h3 className="text-xl text-slate-300 font-serif z-10">Interactive 3D Terrain Mode</h3>
                   <p className="text-sm text-slate-500 mt-2 z-10 max-w-md text-center">Drag to rotate the mountain. Mapbox GL or Sketchfab embed loads here to give pilgrims a pre-journey view of the altitude and path.</p>
                   <Button variant="outline" className="mt-6 z-10 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">Initialize High-Res Topology</Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Stats, Weather, Routes */}
            <div className="space-y-8">
              <WeatherWidget location={trek.name} altitude={trek.elevation} />

              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-white mb-6">Sacred Geometry</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mountain, label: 'Highest Elevation', value: trek.elevation, color: 'text-indigo-400' },
                      { icon: Footprints, label: 'Total Distance', value: trek.distance, color: 'text-emerald-400' },
                      { icon: Clock, label: 'Estimated Duration', value: trek.duration, color: 'text-amber-400' },
                      { icon: Calendar, label: 'Auspicious Months', value: trek.bestMonths.join(', '), color: 'text-rose-400' }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-white/5`}><s.icon className={`h-5 w-5 ${s.color}`} /></div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</p>
                          <p className="text-sm font-medium text-slate-200">{s.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-white mb-6">Available Paths</h3>
                  <div className="space-y-4">
                    {trek.routes.map((route, i) => {
                      const mode = modeIcons[route.mode] || modeIcons.trek;
                      const Icon = mode.icon;
                      return (
                        <div key={i} className="group p-4 rounded-xl border border-white/5 bg-[#020617] hover:border-orange-500/50 transition-colors" onMouseEnter={playSoftBell}>
                          <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mode.color} flex items-center justify-center shrink-0`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-200">{route.name}</h4>
                              <p className="text-xs text-slate-400 mt-1">{route.duration} • {route.distance}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </section>
        
        {/* WARNINGS & PREP SECTION */}
        <section className="py-20 border-t border-white/5 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-950/40 to-[#020617] border border-emerald-900/30 h-full">
                <h3 className="text-2xl font-serif text-white mb-6 flex items-center"><CheckCircle className="w-8 h-8 text-emerald-500 mr-3"/> Seeker's Pack</h3>
                <ul className="space-y-4">
                  {trek.essentials.map((e, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-3 h-3 text-emerald-400" /></div>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-red-950/40 to-[#020617] border border-red-900/30 h-full">
                <h3 className="text-2xl font-serif text-white mb-6 flex items-center"><AlertTriangle className="w-8 h-8 text-red-500 mr-3"/> Sacred Discipline</h3>
                <ul className="space-y-4">
                  {trek.warnings.map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5"><AlertTriangle className="w-3 h-3 text-red-400" /></div>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
