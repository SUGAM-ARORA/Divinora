"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mountain, Map, Compass, ArrowRight, Sparkles, Star, ChevronRight,
  MapPin, Clock, Users, BookOpen, Heart, Globe, Flame, Play, ArrowDown
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/navbar';
import { WelcomeSplash } from '@/components/welcome-splash';
const DivineAura = dynamic(() => import('@/components/divine-aura').then(m => m.DivineAura), { ssr: false });
import { useAudio } from '@/components/audio-provider';
import { SeasonalCalendar } from '@/components/seasonal-calendar';
import { charDhamCircuit, jyotirlingaCircuit, shaktiPeethaCircuit, sacredTreks, indianStates } from '@/lib/data';
import { supabase } from '@/lib/supabase';

// High-end component for Pilgrimage Circuit
const PremiumCircuitCard = ({ title, description, stats, color, href, imageGradient, index }: any) => {
  const { playSoftBell } = useAudio();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={playSoftBell}
      className="group relative"
    >
      <Link href={href}>
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-500 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        <div className="relative h-[450px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-end">
          {/* Conceptual Image Background */}
          <div className={`absolute inset-0 bg-gradient-to-b ${imageGradient} opacity-60 group-hover:scale-110 transition-transform duration-1000`} />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          
          <div className="relative p-8 z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-bold text-white mb-2 font-serif">{title}</h3>
            <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6 line-clamp-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {stats.map((stat: any, i: number) => (
                <div key={i} className="flex items-center text-xs text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <stat.icon className="w-3 h-3 mr-1.5 text-amber-400" />
                  {stat.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showSplash, setShowSplash] = useState(false);
  const { playBell, playSoftBell } = useAudio();
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('divinora_entered')) {
      setShowSplash(true);
    }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-orange-500/30 overflow-x-hidden">
      {showSplash && (
        <WelcomeSplash onEnter={() => {
          setShowSplash(false);
          if (typeof window !== 'undefined') sessionStorage.setItem('divinora_entered', 'true');
        }} />
      )}

      <Navbar user={user} />

      <main className="relative">
        {/* ========== CINEMATIC HERO SECTION ========== */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Majestic Video/Image Background conceptually simulated */}
          <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
            
            {/* Sacred Geometry Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('/mandala.svg')] bg-contain bg-no-repeat opacity-5 animate-[spin_120s_linear_infinite]" />
          </motion.div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8 font-serif"
            >
              <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                <span className="text-sm font-medium tracking-widest text-slate-300 uppercase">Auspicious Journeys Await</span>
              </div>
              
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 pb-2">
                  Divine
                </span>
                <span className="block text-white" style={{ textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  India
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-12"
            >
              Experience the pinnacle of spiritual travel. Immersive guides, breathtaking 3D treks, and deep mythological lore for the earnest seeker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="lg"
                onMouseEnter={playSoftBell}
                onClick={playBell}
                className="group relative h-16 px-10 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] border border-orange-500/50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center font-semibold">
                  <Play className="w-5 h-5 mr-3 fill-current" />
                  Begin Pilgrimage
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onMouseEnter={playSoftBell}
                className="group h-16 px-10 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 text-white text-lg backdrop-blur-md transition-all duration-300"
              >
                <Map className="w-5 h-5 mr-3 text-orange-400 group-hover:rotate-12 transition-transform" />
                Interactive Map
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-xs tracking-[0.3em] text-slate-500 uppercase mb-4">Descend</span>
            <ArrowDown className="w-5 h-5 text-slate-600 animate-bounce" />
          </motion.div>
        </section>

        {/* ========== DIVINE AURA 3D EXPERIENCE ========== */}
        <section className="py-24 px-4 relative z-10 bg-[#020617] mt-8 max-w-[1400px] mx-auto">
          <DivineAura />
        </section>

        {/* ========== SACRED CIRCUITS (TOP 0.0001% UI) ========== */}
        <section className="py-24 px-4 relative z-10 bg-[#020617]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Revered <span className="text-orange-500 inline-block italic">Circuits</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Walk the ancient paths traced by sages. Experience India's most powerful energetic centers through our hyper-detailed immersive guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <PremiumCircuitCard 
                title="Char Dham"
                description="The ultimate Himalayan pilgrimage securing moksha. Journey to Yamunotri, Gangotri, Kedarnath, and Badrinath."
                stats={[{ icon: Mountain, value: "10,000+ ft" }, { icon: MapPin, value: "Uttarakhand" }]}
                href="/pilgrimages/char-dham"
                imageGradient="from-transparent via-cyan-900/80 to-blue-950"
                index={0}
              />
              <PremiumCircuitCard 
                title="12 Jyotirlingas"
                description="The radiant manifestations of Lord Shiva scattered across the Indian subcontinent."
                stats={[{ icon: Flame, value: "12 Shrines" }, { icon: MapPin, value: "Pan-India" }]}
                href="/pilgrimages/jyotirlingas"
                imageGradient="from-transparent via-orange-900/80 to-red-950"
                index={1}
              />
              <PremiumCircuitCard 
                title="52 Shakti Peethas"
                description="Cosmic power centers where the segments of Goddess Sati's form fell to Earth, pulsating with divine feminine energy."
                stats={[{ icon: Star, value: "52 Seats" }, { icon: MapPin, value: "South Asia" }]}
                href="/pilgrimages/shakti-peethas"
                imageGradient="from-transparent via-rose-900/80 to-purple-950"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* ========== IMMERSIVE TREKS SHOWCASE ========== */}
        <section className="py-32 px-4 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#020617] to-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-xl"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Ascend the <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">Sacred Peaks</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Before you lace your boots, experience our stunning 3D trail map previews, Mata's temple galleries, and real-time high-altitude weather data.
                </p>
              </motion.div>
              <Link href="/treks">
                <Button variant="link" className="text-emerald-500 hover:text-emerald-400 group text-lg" onMouseEnter={playSoftBell}>
                  View All Yatras <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured Large Trek Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2 lg:col-span-1"
                onMouseEnter={playSoftBell}
              >
                <Link href="/treks/vaishno-devi" className="block relative group h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626014903706-e7811985c782?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <Badge className="w-fit bg-red-600 hover:bg-red-700 text-white mb-4 border-none px-4 py-1 text-xs tracking-widest uppercase">Mata Darshan</Badge>
                    <h3 className="text-4xl font-serif font-bold text-white mb-3">Mata Vaishno Devi</h3>
                    <p className="text-slate-300 font-light max-w-md line-clamp-2">The holy cave shrine nestled intricately in the Trikuta Mountains of Jammu and Kashmir.</p>
                  </div>
                </Link>
              </motion.div>

              {/* Stacked smaller cards */}
              <div className="flex flex-col gap-8 lg:col-span-1">
                {[
                  { name: 'Amarnath Yatra', desc: 'The mystical ice lingam formations in the Himalayas.', img: 'https://images.unsplash.com/photo-1542318025-a45e45a278d6?q=80&w=2070&auto=format&fit=crop', color: 'cyan' },
                  { name: 'Kailash Mansarovar', desc: 'The ultimate circumambulation of Lord Shiva’s earthly abode.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', color: 'purple' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    onMouseEnter={playSoftBell}
                  >
                    <Link href={`/treks`} className="block group relative h-[234px] rounded-3xl overflow-hidden cursor-pointer">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                        style={{ backgroundImage: `url('${item.img}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-[70%]">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-slate-400 font-light text-sm line-clamp-2">{item.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== NEW FEATURE HIGHLIGHT: REELS & COMMUNITY ========== */}
        <section className="py-32 px-4 relative overflow-hidden bg-slate-950">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-orange-500 border-orange-500/30 bg-orange-500/10 mb-6">Community Connect</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Live Devotional <span className="italic font-light">Experiences</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Watch real-time Reels, live darshans, and visual trek updates integrated directly from the community.</p>
            </div>

            {/* Mockup of a stunning Instagram Reel grid */}
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4 px-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="shrink-0 snap-center w-[280px] h-[500px] bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden relative group shadow-2xl shadow-black"
                  onMouseEnter={playSoftBell}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/50 group-hover:text-white group-hover:scale-110 transition-all z-20 drop-shadow-lg" />
                  </div>
                  <img src={`https://images.unsplash.com/photo-${i === 1 ? '1544253372-747125e1a12a' : i===2 ? '1518002171953-a080ee817e1f' : i===3 ? '1582508688439-b9d9df3c0e35' : '1604505293673-aee3c10d32c5'}?w=400&h=800&fit=crop`} alt="Reel" className="object-cover w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="text-white text-sm font-medium mb-1">@divinora_pilgrim</p>
                    <p className="text-white/70 text-xs">Aarti view from the sacred Ghats... 🙏✨ #DivineIndia</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== YATRA CALENDAR ========== */}
        <section className="py-20 px-4 bg-[#020617] relative z-10 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Sacred Time</h2>
              <p className="text-slate-400">Align your journeys with the auspicious cosmic calendar.</p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800">
               <SeasonalCalendar />
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="bg-[#020617] border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <span className="text-white font-bold text-2xl">ॐ</span>
                  </div>
                  <span className="text-2xl font-bold text-white tracking-widest uppercase font-serif">Divinora</span>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  The ultimate spiritual super app connecting global seekers to the sacred heart of India. Revere, Explore, Ascend.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Sacred Circuits</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-light">
                  <li><Link href="/pilgrimages/char-dham" className="hover:text-orange-400 transition-colors">Char Dham Yatra</Link></li>
                  <li><Link href="/pilgrimages/jyotirlingas" className="hover:text-orange-400 transition-colors">12 Jyotirlingas</Link></li>
                  <li><Link href="/pilgrimages/shakti-peethas" className="hover:text-orange-400 transition-colors">52 Shakti Peethas</Link></li>
                  <li><Link href="/pilgrimages/sapta-puri" className="hover:text-orange-400 transition-colors">Sapta Puri</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Features</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-light">
                  <li><Link href="/explore" className="hover:text-orange-400 transition-colors">Interactive 3D Map</Link></li>
                  <li><Link href="/calendar" className="hover:text-orange-400 transition-colors">Yatra Calendar</Link></li>
                  <li><Link href="/deities" className="hover:text-orange-400 transition-colors">Deity Legends & Lore</Link></li>
                  <li><Link href="/foreign-guide" className="hover:text-orange-400 transition-colors">Foreigner Guide</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
                <p className="text-sm text-slate-400 font-light mb-4">Join 100,000+ earnest seekers tracking their sacred journeys.</p>
                <div className="flex gap-4">
                  {/* Social icons placeholders */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500/20 cursor-pointer transition-colors border border-white/10"><Globe className="w-4 h-4 text-slate-300" /></div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
              <p>© 2026 Divinora. Built for the earnest seeker.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}