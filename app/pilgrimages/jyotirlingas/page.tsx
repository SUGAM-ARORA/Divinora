"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { jyotirlingaCircuit, jyotirlingaPlaces } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, MapPin, Mountain, Calendar, Clock, IndianRupee, Star, ChevronDown, ChevronUp, Plane, Train, Bus, Footprints, PersonStanding } from 'lucide-react';

const stateColorMap: Record<string, string> = {
  'Gujarat': 'from-amber-500 to-orange-500', 'Andhra Pradesh': 'from-purple-500 to-violet-500',
  'Madhya Pradesh': 'from-emerald-500 to-green-500', 'Uttarakhand': 'from-sky-500 to-blue-500',
  'Maharashtra': 'from-orange-500 to-red-500', 'Uttar Pradesh': 'from-pink-500 to-rose-500',
  'Jharkhand': 'from-teal-500 to-cyan-500', 'Tamil Nadu': 'from-indigo-500 to-blue-600',
};
const transportIcons: Record<string, any> = {
  flight: Plane, train: Train, bus: Bus, car: Bus, trek: Footprints, helicopter: Plane, pony: PersonStanding, palki: PersonStanding,
};

export default function JyotirlingasPage() {
  const [user, setUser] = useState<any>(null);
  const [expandedPlace, setExpandedPlace] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<string>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const uniqueStates = Array.from(new Set(jyotirlingaPlaces.map(p => p.state)));
  const filtered = filterState === 'all' ? jyotirlingaPlaces : jyotirlingaPlaces.filter(p => p.state === filterState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
                {jyotirlingaCircuit.icon}
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {jyotirlingaCircuit.name}
                </h1>
                <p className="text-muted-foreground mt-1">Self-manifested Shiva Lingams across India</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-8">{jyotirlingaCircuit.longDescription}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: 'Best Season', value: jyotirlingaCircuit.bestSeason },
                { icon: Clock, label: 'Duration', value: jyotirlingaCircuit.estimatedDays },
                { icon: IndianRupee, label: 'Budget', value: jyotirlingaCircuit.estimatedBudget },
                { icon: Mountain, label: 'Temples', value: `${jyotirlingaCircuit.totalPlaces} Jyotirlingas` }
              ].map((info, i) => (
                <Card key={i} className="border-0 shadow-md bg-white/80 dark:bg-slate-900/80">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="text-sm font-semibold">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filter by State */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium mr-2">Filter by state:</span>
              <Button variant={filterState === 'all' ? 'default' : 'outline'} size="sm" className="text-xs rounded-full"
                onClick={() => setFilterState('all')}>All ({jyotirlingaPlaces.length})</Button>
              {uniqueStates.map((state) => (
                <Button key={state} variant={filterState === state ? 'default' : 'outline'} size="sm" className="text-xs rounded-full"
                  onClick={() => setFilterState(state)}>
                  {state} ({jyotirlingaPlaces.filter(p => p.state === state).length})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Jyotirlingas */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto space-y-6">
            {filtered.map((place, idx) => {
              const isExpanded = expandedPlace === place.id;
              const gradient = stateColorMap[place.state] || 'from-blue-500 to-indigo-500';
              return (
                <Card key={place.id} className="overflow-hidden border-0 shadow-lg bg-white dark:bg-slate-900">
                  <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0`}>
                          {jyotirlingaPlaces.indexOf(place) + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{place.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                            <MapPin className="h-3.5 w-3.5" />{place.location}
                          </div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-0.5">{place.deity}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {place.tags.slice(0, 3).map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{place.significance}</p>

                    <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-950/20"
                      onClick={() => setExpandedPlace(isExpanded ? null : place.id)}>
                      {isExpanded ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                      {isExpanded ? 'Less' : 'Full Details'}
                    </Button>

                    {isExpanded && (
                      <div className="space-y-5 pt-4 border-t mt-3 animate-in slide-in-from-top-2 duration-300">
                        <div>
                          <h4 className="font-semibold mb-1">📜 History</h4>
                          <p className="text-sm text-muted-foreground">{place.history}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">🚗 How to Reach</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {place.howToReach.map((t, i) => {
                              const Icon = transportIcons[t.mode] || Bus;
                              return (
                                <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs">
                                  <Icon className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                                  <div>
                                    <span className="font-medium capitalize">{t.mode}: </span>
                                    <span className="text-muted-foreground">{t.description}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                            <p className="text-xs font-medium">⏰ Timings</p>
                            <p className="text-xs text-muted-foreground">{place.timings}</p>
                          </div>
                          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                            <p className="text-xs font-medium">📅 Best Time</p>
                            <p className="text-xs text-muted-foreground">{place.bestTimeToVisit}</p>
                          </div>
                        </div>
                        {place.nearbyPlaces && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">📍 Nearby</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {place.nearbyPlaces.map((np, i) => <Badge key={i} variant="outline" className="text-[10px]">{np}</Badge>)}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
