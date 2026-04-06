"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { sacredTreks } from '@/lib/data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { supabase } from '@/lib/supabase';
import {
  ArrowLeft, Mountain, Clock, MapPin, Plane, Train, Bus, Footprints,
  AlertTriangle, CheckCircle, Star, IndianRupee, Calendar, ThermometerSun, PersonStanding
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Trek Not Found</h1>
          <Link href="/treks"><Button>← Back to Treks</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-green-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-green-500/15" />
          <Mountain className="absolute right-10 bottom-5 h-40 w-40 text-emerald-500/10" />
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <Link href="/treks" className="inline-flex items-center text-sm text-muted-foreground hover:text-emerald-600 mb-8"><ArrowLeft className="h-4 w-4 mr-2" />All Treks</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{trek.name}</h1>
                <p className="text-muted-foreground mt-1 flex items-center gap-2"><MapPin className="h-4 w-4" />{trek.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className={`${diffColors[trek.difficulty]} text-white border-0 text-sm px-3 py-1 capitalize`}>{trek.difficulty}</Badge>
              <Badge variant="secondary" className="text-sm">{trek.deity}</Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">{trek.description}</p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Mountain, label: 'Elevation', value: trek.elevation },
              { icon: Footprints, label: 'Distance', value: trek.distance },
              { icon: Clock, label: 'Duration', value: trek.duration },
              { icon: Calendar, label: 'Best Months', value: trek.bestMonths.slice(0, 3).join(', ') }
            ].map((s, i) => (
              <Card key={i} className="border-0 shadow-md bg-white dark:bg-slate-900">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center shrink-0"><s.icon className="h-5 w-5 text-emerald-600" /></div>
                  <div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-sm font-semibold">{s.value}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Route Options — THE KEY FEATURE */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🛤️ Journey Mode Options</h2>
            <p className="text-muted-foreground mb-6">Choose your preferred way to reach {trek.name} — from walking to helicopter, here are all options:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {trek.routes.map((route, i) => {
                const mode = modeIcons[route.mode] || modeIcons.trek;
                const Icon = mode.icon;
                return (
                  <Card key={i} className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`h-2 bg-gradient-to-r ${mode.color}`} />
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center shadow-lg shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{route.name}</h3>
                          <Badge className={`${diffColors[route.difficulty]} text-white border-0 text-[10px] capitalize mt-1`}>{route.difficulty}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{route.description}</p>
                      <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <p className="text-[10px] text-muted-foreground">Distance</p>
                          <p className="text-xs font-semibold">{route.distance}</p>
                        </div>
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <p className="text-[10px] text-muted-foreground">Duration</p>
                          <p className="text-xs font-semibold">{route.duration}</p>
                        </div>
                        <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <p className="text-[10px] text-muted-foreground">Cost</p>
                          <p className="text-xs font-semibold">{route.cost || 'Varies'}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">✨ Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {trek.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                  <Star className="h-4 w-4 text-amber-500 shrink-0" />
                  <span className="text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essentials & Warnings */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-500" /> What to Carry</h3>
                <ul className="space-y-2">
                  {trek.essentials.map((e, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />{e}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-red-500" /> Important Warnings</h3>
                <ul className="space-y-2">
                  {trek.warnings.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" />{w}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Transport to Base */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">✈️ Getting to the Base</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/50 flex items-center justify-center shrink-0"><Plane className="h-5 w-5 text-sky-600" /></div>
                  <div><h4 className="font-semibold">Nearest Airport</h4><p className="text-sm text-muted-foreground">{trek.nearestAirport}</p></div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center shrink-0"><Train className="h-5 w-5 text-amber-600" /></div>
                  <div><h4 className="font-semibold">Nearest Railway</h4><p className="text-sm text-muted-foreground">{trek.nearestRailway}</p></div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl">
              <h4 className="font-semibold mb-2">📍 Route: {trek.startPoint} → {trek.endPoint}</h4>
              <p className="text-sm text-muted-foreground">Total distance: {trek.distance} | Elevation gain: up to {trek.elevation} | Best months: {trek.bestMonths.join(', ')}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
