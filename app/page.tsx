"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mountain, Map, Compass, ArrowRight, Sparkles, Star, ChevronRight,
  MapPin, Clock, Users, BookOpen, Heart, Globe, Flame, TreePine
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { CircuitCard } from '@/components/pilgrimage-card';
import { WelcomeSplash } from '@/components/welcome-splash';
import { charDhamCircuit, jyotirlingaCircuit, shaktiPeethaCircuit, sacredTreks, indianStates } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Show splash only once per session
    if (typeof window !== 'undefined' && !sessionStorage.getItem('divinora_entered')) {
      setShowSplash(true);
    }
  }, []);
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (event === 'SIGNED_IN') {
        toast({ title: "Welcome to Divinora! 🙏", description: "Your sacred journey begins here." });
      }
    });
    return () => subscription.unsubscribe();
  }, [toast]);

  const featuredStates = indianStates.slice(0, 6);

  const quickLinks = [
    { name: 'Char Dham', icon: '🏔️', href: '/pilgrimages/char-dham', color: 'from-orange-500 to-amber-500', desc: '4 Sacred Himalayan Shrines' },
    { name: '12 Jyotirlingas', icon: '🔱', href: '/pilgrimages/jyotirlingas', color: 'from-blue-600 to-indigo-600', desc: 'Self-manifested Shiva Lingams' },
    { name: '52 Shakti Peethas', icon: '🔥', href: '/pilgrimages/shakti-peethas', color: 'from-red-500 to-pink-600', desc: 'Sacred Seats of Goddess' },
    { name: 'Vaishno Devi', icon: '⛰️', href: '/treks/vaishno-devi', color: 'from-pink-500 to-rose-600', desc: 'Sacred Cave Shrine Trek' },
    { name: 'Amarnath', icon: '🧊', href: '/treks/amarnath', color: 'from-cyan-500 to-blue-600', desc: 'Ice Shiva Lingam Yatra' },
    { name: 'Explore India Map', icon: '🗺️', href: '/explore', color: 'from-emerald-500 to-teal-600', desc: 'State-wise Sacred Places' },
  ];

  const stats = [
    { label: 'Sacred Temples', value: '500+', icon: Flame },
    { label: 'States Covered', value: '28+', icon: Map },
    { label: 'Trek Routes', value: '50+', icon: Mountain },
    { label: 'Pilgrimage Circuits', value: '10+', icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-rose-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* Welcome Splash with Bharat Mata Ki Jai audio */}
      {showSplash && (
        <WelcomeSplash onEnter={() => {
          setShowSplash(false);
          if (typeof window !== 'undefined') sessionStorage.setItem('divinora_entered', 'true');
        }} />
      )}

      <Navbar user={user} />

      <main className="pt-16">
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-red-500/5 to-amber-500/8" />
            <div className="absolute inset-0 sacred-geometry opacity-30" />
            {[...Array(30)].map((_, i) => {
              const left = ((i * 37 + 13) % 100);
              const top = ((i * 53 + 7) % 100);
              const delay = ((i * 17 + 3) % 50) / 10;
              const duration = 4 + ((i * 23 + 11) % 40) / 10;
              return (
                <div key={i} className="absolute animate-float opacity-20"
                  style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s`, animationDuration: `${duration}s` }}>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
                </div>
              );
            })}
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Badge */}
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Your Sacred Journey Starts Here
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                Divine India
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              One platform for all sacred pilgrimages, treks, and temple journeys across India.
              From <strong className="text-orange-600">Char Dham</strong> to <strong className="text-orange-600">Kailash Mansarovar</strong>,
              plan your spiritual journey with complete route guides, transport options, and local insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/pilgrimages/char-dham">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-105">
                  <Mountain className="h-5 w-5 mr-2" />
                  Explore Char Dham
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="border-2 border-orange-300 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950/30 px-8 py-6 text-lg rounded-2xl transition-all hover:scale-105">
                  <Map className="h-5 w-5 mr-2" />
                  Explore India Map
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== QUICK LINKS ========== */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Popular <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Sacred Journeys</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Explore the most revered pilgrimages and spiritual treks across India</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {quickLinks.map((link, i) => (
                <Link key={i} href={link.href} className="group">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-white dark:bg-slate-900 h-full">
                    <div className={`h-2 bg-gradient-to-r ${link.color}`} />
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-orange-600 transition-colors">{link.name}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{link.desc}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-orange-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PILGRIMAGE CIRCUITS ========== */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-orange-50/50 to-transparent dark:via-orange-950/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Sacred <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Pilgrimage Circuits</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Complete guides to India's most sacred pilgrimage routes with transport, timing, and budget details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CircuitCard {...charDhamCircuit} href="/pilgrimages/char-dham" />
              <CircuitCard {...jyotirlingaCircuit} href="/pilgrimages/jyotirlingas" />
              <CircuitCard {...shaktiPeethaCircuit} href="/pilgrimages/shakti-peethas" />
            </div>
          </div>
        </section>

        {/* ========== SACRED TREKS ========== */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  Sacred <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Treks & Yatras</span>
                </h2>
                <p className="text-muted-foreground">Trek routes, difficulty levels, and complete travel guides</p>
              </div>
              <Link href="/treks" className="hidden sm:block">
                <Button variant="outline" className="border-emerald-200">View All Treks <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sacredTreks.slice(0, 3).map((trek) => (
                <Link key={trek.id} href={`/treks/${trek.id}`} className="group">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-900 h-full">
                    <div className="h-36 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                      <Mountain className="h-16 w-16 text-white/30 absolute right-4 bottom-2" />
                      <div className="relative text-center z-10">
                        <h3 className="text-white text-xl font-bold">{trek.name}</h3>
                        <p className="text-white/70 text-sm mt-1">{trek.location}</p>
                      </div>
                      <Badge className={`absolute top-3 right-3 text-xs ${
                        trek.difficulty === 'easy' ? 'bg-green-500' : trek.difficulty === 'moderate' ? 'bg-yellow-500' : trek.difficulty === 'hard' ? 'bg-orange-500' : 'bg-red-500'
                      } text-white border-0`}>
                        {trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1)}
                      </Badge>
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center"><Mountain className="h-3 w-3 mr-1" /> {trek.elevation}</span>
                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {trek.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{trek.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {trek.routes.slice(0, 3).map((r, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400">
                            {r.name.split('(')[0].trim()}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== STATES EXPLORER PREVIEW ========== */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Explore by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">State</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Every Indian state has its own sacred heritage. Discover temples, rivers, and treks state by state.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredStates.map((state) => (
                <Link key={state.id} href={`/explore?state=${state.id}`} className="group">
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white dark:bg-slate-900">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{state.name}</h3>
                          <p className="text-xs text-muted-foreground capitalize">{state.region} India</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">{state.famousTemples.length} temples</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{state.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {state.highlights.slice(0, 3).map((h, i) => (
                          <Badge key={i} variant="outline" className="text-[10px]">{h}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/explore">
                <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-950/30">
                  <Globe className="h-5 w-5 mr-2" />
                  View All States & Interactive Map
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== WHY DIVINORA ========== */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              Why <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Divinora</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Deep Knowledge', desc: 'History, mythology & significance of every sacred place — not just booking info.' },
                { icon: Compass, title: 'Route Options', desc: 'Walk, pony, palki, helicopter — every route with cost, time & difficulty.' },
                { icon: Map, title: 'Interactive Map', desc: 'Explore sacred India state by state with an interactive map.' },
                { icon: Heart, title: 'For Everyone', desc: 'Written in English for Indians & international pilgrims alike.' },
              ].map((item, i) => (
                <Card key={i} className="border-0 shadow-md bg-white dark:bg-slate-900 p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-orange-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ॐ</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Divinora</span>
                </div>
                <p className="text-sm text-muted-foreground">Your complete guide to India's sacred pilgrimages, temples, and spiritual journeys.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Pilgrimages</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/pilgrimages/char-dham" className="hover:text-orange-600">Char Dham Yatra</Link></li>
                  <li><Link href="/pilgrimages/jyotirlingas" className="hover:text-orange-600">12 Jyotirlingas</Link></li>
                  <li><Link href="/pilgrimages/shakti-peethas" className="hover:text-orange-600">52 Shakti Peethas</Link></li>
                  <li><Link href="/pilgrimages/sapta-puri" className="hover:text-orange-600">Sapta Puri</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Sacred Treks</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/treks/vaishno-devi" className="hover:text-orange-600">Vaishno Devi</Link></li>
                  <li><Link href="/treks/amarnath" className="hover:text-orange-600">Amarnath Yatra</Link></li>
                  <li><Link href="/treks/kedarnath-trek" className="hover:text-orange-600">Kedarnath Trek</Link></li>
                  <li><Link href="/treks/kailash-mansarovar" className="hover:text-orange-600">Kailash Mansarovar</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/explore" className="hover:text-orange-600">Interactive India Map</Link></li>
                  <li><Link href="/deities" className="hover:text-orange-600">Deity Encyclopedia</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-orange-100 dark:border-slate-800 mt-12 pt-8 text-center">
              <p className="text-sm text-muted-foreground">© 2026 Divinora. Crafted with 🙏 for seekers of the Divine.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}