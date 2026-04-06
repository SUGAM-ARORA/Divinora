"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { IndiaMap } from '@/components/india-map';
import { indianStates } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Globe, ChevronDown, ChevronUp, MapPin, Waves } from 'lucide-react';

const regionColors: Record<string, string> = {
  north: 'from-blue-500 to-sky-500', south: 'from-orange-500 to-red-500',
  east: 'from-emerald-500 to-green-500', west: 'from-amber-500 to-yellow-500',
  central: 'from-purple-500 to-violet-500', northeast: 'from-teal-500 to-cyan-500',
};

export default function ExplorePage() {
  const [user, setUser] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [expandedState, setExpandedState] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const regions = ['all', 'north', 'south', 'east', 'west', 'central', 'northeast'];
  const filtered = selectedRegion === 'all' ? indianStates : indianStates.filter(s => s.region === selectedRegion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Explore Sacred India
                </h1>
                <p className="text-muted-foreground text-sm mt-1">Click any state to discover its temples, rivers & treks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <IndiaMap />
          </div>
        </section>

        {/* State Cards Grid */}
        <section className="py-12 px-4 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">All States & Territories</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {regions.map((r) => (
                <Button key={r} variant={selectedRegion === r ? 'default' : 'outline'} size="sm" className="rounded-full text-xs capitalize"
                  onClick={() => setSelectedRegion(r)}>
                  {r === 'all' ? `All (${indianStates.length})` : `${r} (${indianStates.filter(s => s.region === r).length})`}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filtered.map((state) => {
                const isExpanded = expandedState === state.id;
                const gradient = regionColors[state.region] || 'from-blue-500 to-indigo-500';
                return (
                  <Card key={state.id} className="overflow-hidden border-0 shadow-md bg-white dark:bg-slate-900">
                    <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">{state.name}</h3>
                          <p className="text-xs text-muted-foreground capitalize">{state.region} India • {state.capital}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">{state.famousTemples.length} temples</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{state.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {state.highlights.slice(0, 3).map((h, i) => <Badge key={i} variant="outline" className="text-[10px]">{h}</Badge>)}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full hover:bg-blue-50 dark:hover:bg-blue-950/20"
                        onClick={() => setExpandedState(isExpanded ? null : state.id)}>
                        {isExpanded ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                        {isExpanded ? 'Less' : `View ${state.famousTemples.length} Temples`}
                      </Button>
                      {isExpanded && (
                        <div className="space-y-3 pt-3 border-t mt-2 animate-in slide-in-from-top-2 duration-300">
                          {state.famousTemples.map((t, i) => (
                            <div key={i} className="flex items-start gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{i + 1}</div>
                              <div>
                                <p className="text-sm font-medium">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.deity} • {t.type} • <MapPin className="h-2.5 w-2.5 inline" /> {t.location}</p>
                              </div>
                            </div>
                          ))}
                          {state.sacredRivers && state.sacredRivers.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              <Waves className="h-3.5 w-3.5 text-blue-500" />
                              {state.sacredRivers.map((r, i) => <Badge key={i} className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">{r}</Badge>)}
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
