"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { shaktiPeethaCircuit, shaktiPeethaPlaces } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, MapPin, Calendar, Clock, IndianRupee, Star, ChevronDown, ChevronUp, Flame, Plane, Train, Bus, Footprints } from 'lucide-react';

const transportIcons: Record<string, any> = { flight: Plane, train: Train, bus: Bus, car: Bus, trek: Footprints, helicopter: Plane };

export default function ShaktiPeethasPage() {
  const [user, setUser] = useState<any>(null);
  const [expandedPlace, setExpandedPlace] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<string>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const uniqueStates = Array.from(new Set(shaktiPeethaPlaces.map(p => p.state)));
  const filtered = filterState === 'all' ? shaktiPeethaPlaces : shaktiPeethaPlaces.filter(p => p.state === filterState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/50 via-pink-50/30 to-rose-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-rose-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-red-600 mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">{shaktiPeethaCircuit.icon}</div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">{shaktiPeethaCircuit.name}</h1>
                <p className="text-muted-foreground mt-1">Where Goddess Sati's body parts fell — the seats of Shakti</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-8">{shaktiPeethaCircuit.longDescription}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ icon: Flame, label: 'Total Peethas', value: '52 across South Asia' }, { icon: Calendar, label: 'Best Time', value: shaktiPeethaCircuit.bestSeason.split('(')[0] }, { icon: Clock, label: 'Duration', value: shaktiPeethaCircuit.estimatedDays }, { icon: IndianRupee, label: 'Budget', value: shaktiPeethaCircuit.estimatedBudget.split('(')[0] }].map((info, i) => (
                <Card key={i} className="border-0 shadow-md bg-white/80 dark:bg-slate-900/80">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center shrink-0"><info.icon className="h-5 w-5 text-red-600" /></div>
                    <div><p className="text-xs text-muted-foreground">{info.label}</p><p className="text-sm font-semibold">{info.value}</p></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mythology Story */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-3xl">📜</span> The Legend of Sati & Shakti Peethas</h2>
                <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p>Goddess Sati, incarnation of Adi Shakti, married Lord Shiva against her father Daksha's wishes. Daksha organized a grand yagna but deliberately didn't invite Shiva.</p>
                  <p>Sati went to the yagna uninvited, where Daksha publicly insulted Shiva. Unable to bear the humiliation, Sati self-immolated in the yagna fire.</p>
                  <p>Mad with grief, Shiva picked up Sati's body and began the <strong className="text-red-600">Tandava</strong> — the cosmic dance of destruction that threatened to destroy all creation.</p>
                  <p>To stop the destruction, Lord Vishnu used his <strong className="text-red-600">Sudarshana Chakra</strong> to dismember Sati's body. The 52 pieces fell across the Indian subcontinent, and each spot where a body part landed became a <strong className="text-red-600">Shakti Peetha</strong> — a sacred seat of the Goddess.</p>
                  <p>At each Peetha, the form of Shakti (Goddess) and the form of Bhairava (Shiva as guardian) are unique, making each one spiritually distinct.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Significance */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why Shakti Peethas are Sacred</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shaktiPeethaCircuit.significance.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                  <Star className="h-5 w-5 text-red-500 shrink-0 mt-0.5" /><p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium mr-2">Filter:</span>
            <Button variant={filterState === 'all' ? 'default' : 'outline'} size="sm" className="text-xs rounded-full" onClick={() => setFilterState('all')}>All ({shaktiPeethaPlaces.length})</Button>
            {uniqueStates.map((state) => (
              <Button key={state} variant={filterState === state ? 'default' : 'outline'} size="sm" className="text-xs rounded-full" onClick={() => setFilterState(state)}>
                {state} ({shaktiPeethaPlaces.filter(p => p.state === state).length})
              </Button>
            ))}
          </div>
        </section>

        {/* All Peethas */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto space-y-5">
            {filtered.map((place, idx) => {
              const isExpanded = expandedPlace === place.id;
              return (
                <Card key={place.id} className="overflow-hidden border-0 shadow-lg bg-white dark:bg-slate-900">
                  <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500" />
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0">{shaktiPeethaPlaces.indexOf(place) + 1}</div>
                        <div>
                          <h3 className="text-xl font-bold">{place.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5"><MapPin className="h-3.5 w-3.5" />{place.location}</div>
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-0.5">{place.deity}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {place.tags.slice(0, 3).map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{place.significance}</p>

                    <Button variant="ghost" size="sm" className="hover:bg-red-50 dark:hover:bg-red-950/20" onClick={() => setExpandedPlace(isExpanded ? null : place.id)}>
                      {isExpanded ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                      {isExpanded ? 'Less' : 'Full Details'}
                    </Button>

                    {isExpanded && (
                      <div className="space-y-5 pt-4 border-t mt-3 animate-in slide-in-from-top-2 duration-300">
                        <div><h4 className="font-semibold mb-1">📜 History & Legend</h4><p className="text-sm text-muted-foreground">{place.history}</p></div>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">🚗 How to Reach</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {place.howToReach.map((t, i) => {
                              const Icon = transportIcons[t.mode] || Bus;
                              return (
                                <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs">
                                  <Icon className="h-3.5 w-3.5 text-red-600 mt-0.5 shrink-0" />
                                  <div><span className="font-medium capitalize">{t.mode}: </span><span className="text-muted-foreground">{t.description}</span>{t.cost && <span className="text-red-600 ml-1">({t.cost})</span>}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg"><p className="text-xs font-medium">⏰ Timings</p><p className="text-xs text-muted-foreground">{place.timings}</p></div>
                          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg"><p className="text-xs font-medium">📅 Best Time</p><p className="text-xs text-muted-foreground">{place.bestTimeToVisit}</p></div>
                        </div>
                        {place.nearbyPlaces && (
                          <div><h4 className="font-semibold text-sm mb-2">📍 Nearby</h4><div className="flex flex-wrap gap-1.5">{place.nearbyPlaces.map((np, i) => <Badge key={i} variant="outline" className="text-[10px]">{np}</Badge>)}</div></div>
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
