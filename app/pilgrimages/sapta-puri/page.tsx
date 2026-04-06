"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { saptaPuriCircuit, saptaPuriPlaces } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, MapPin, Calendar, Clock, IndianRupee, Star, ChevronDown, ChevronUp, Plane, Train, Bus } from 'lucide-react';

const transportIcons: Record<string, any> = { flight: Plane, train: Train, bus: Bus, car: Bus };

export default function SaptaPuriPage() {
  const [user, setUser] = useState<any>(null);
  const [expandedPlace, setExpandedPlace] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-fuchsia-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-fuchsia-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-600 mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/30">{saptaPuriCircuit.icon}</div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">{saptaPuriCircuit.name}</h1>
                <p className="text-muted-foreground mt-1">{saptaPuriCircuit.description}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-8">{saptaPuriCircuit.longDescription}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Star, label: 'Sacred Cities', value: '7 Holy Cities' },
                { icon: Calendar, label: 'Best Time', value: saptaPuriCircuit.bestSeason },
                { icon: Clock, label: 'Duration', value: saptaPuriCircuit.estimatedDays },
                { icon: IndianRupee, label: 'Budget', value: saptaPuriCircuit.estimatedBudget }
              ].map((info, i) => (
                <Card key={i} className="border-0 shadow-md bg-white/80 dark:bg-slate-900/80">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center shrink-0"><info.icon className="h-5 w-5 text-indigo-600" /></div>
                    <div><p className="text-xs text-muted-foreground">{info.label}</p><p className="text-sm font-semibold">{info.value}</p></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Significance */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Path to Moksha (Liberation)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {saptaPuriCircuit.significance.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-indigo-50 dark:border-indigo-900/20">
                  <Star className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" /><p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 Holy Cities */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto space-y-5">
            {saptaPuriPlaces.map((place, idx) => {
              const isExpanded = expandedPlace === place.id;
              return (
                <Card key={place.id} className="overflow-hidden border-0 shadow-lg bg-white dark:bg-slate-900 transition-all hover:shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">{idx + 1}</div>
                        <div>
                          <h3 className="text-xl font-bold">{place.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5"><MapPin className="h-3.5 w-3.5 text-indigo-500" />{place.state}</div>
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">Focus: {place.deity}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {place.tags.map((tag, i) => <Badge key={i} variant="secondary" className="text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 pointer-events-none">{tag}</Badge>)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Significance: {place.significance}</p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{place.description}</p>

                    <Button variant="ghost" size="sm" className="hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-indigo-600" onClick={() => setExpandedPlace(isExpanded ? null : place.id)}>
                      {isExpanded ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
                      {isExpanded ? 'Show Less' : 'Explore City'}
                    </Button>

                    {isExpanded && (
                      <div className="space-y-5 pt-4 border-t border-indigo-100 dark:border-slate-800 mt-3 animate-in slide-in-from-top-2 duration-300">
                        <div>
                          <h4 className="font-semibold mb-1 flex items-center gap-2"><BookOpenIcon className="w-4 h-4 text-purple-500"/> History & Lore</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{place.history}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{place.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">🚗 How to Reach</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {place.howToReach.map((t, i) => {
                              const Icon = transportIcons[t.mode] || Bus;
                              return (
                                <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                                  <Icon className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                                  <div><span className="font-medium capitalize">{t.mode}: </span><span className="text-muted-foreground">{t.description}</span></div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                            <p className="text-xs font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> Timings</p>
                            <p className="text-xs text-muted-foreground mt-1">{place.timings}</p>
                          </div>
                          <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-100 dark:border-purple-900/50">
                            <p className="text-xs font-medium text-purple-700 dark:text-purple-300 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/> Best Time</p>
                            <p className="text-xs text-muted-foreground mt-1">{place.bestTimeToVisit}</p>
                          </div>
                        </div>
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

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
