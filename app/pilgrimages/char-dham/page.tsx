"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { PilgrimageCard } from '@/components/pilgrimage-card';
import { charDhamCircuit, charDhamPlaces } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import {
  Mountain, MapPin, Clock, ArrowLeft, Bus, Train, Plane,
  PersonStanding, ChevronDown, ChevronUp, Footprints, IndianRupee, Calendar, Star
} from 'lucide-react';

const transportIcons: Record<string, any> = {
  flight: Plane, train: Train, bus: Bus, car: Bus,
  trek: Footprints, helicopter: Plane, pony: PersonStanding, palki: PersonStanding, 'cable-car': Train, boat: Bus
};

export default function CharDhamPage() {
  const [user, setUser] = useState<any>(null);
  const [expandedPlace, setExpandedPlace] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-rose-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-amber-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-orange-600 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">
                {charDhamCircuit.icon}
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                  {charDhamCircuit.name}
                </h1>
                <p className="text-muted-foreground mt-1">{charDhamCircuit.totalPlaces} Sacred Himalayan Shrines</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-8">
              {charDhamCircuit.longDescription}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: 'Best Season', value: charDhamCircuit.bestSeason },
                { icon: Clock, label: 'Duration', value: charDhamCircuit.estimatedDays },
                { icon: IndianRupee, label: 'Budget', value: charDhamCircuit.estimatedBudget },
                { icon: Mountain, label: 'Places', value: `${charDhamCircuit.totalPlaces} Dhams` }
              ].map((info, i) => (
                <Card key={i} className="border-0 shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-orange-600" />
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

        {/* Significance */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why Char Dham is Sacred</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {charDhamCircuit.significance.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                  <Star className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Each Dham */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">The Four Sacred Dhams</h2>
            <div className="space-y-8">
              {charDhamPlaces.map((place, idx) => {
                const isExpanded = expandedPlace === place.id;
                return (
                  <Card key={place.id} className="overflow-hidden border-0 shadow-lg bg-white dark:bg-slate-900">
                    {/* Header */}
                    <div className={`h-3 bg-gradient-to-r ${
                      idx === 0 ? 'from-orange-500 to-amber-500' :
                      idx === 1 ? 'from-blue-500 to-indigo-500' :
                      idx === 2 ? 'from-emerald-500 to-teal-500' :
                      'from-pink-500 to-rose-500'
                    }`} />
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                            idx === 0 ? 'from-orange-500 to-amber-500' :
                            idx === 1 ? 'from-blue-500 to-indigo-500' :
                            idx === 2 ? 'from-emerald-500 to-teal-500' :
                            'from-pink-500 to-rose-500'
                          } flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{place.name}</h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5" />{place.location}
                            </div>
                            <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-1">{place.deity}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {place.tags.slice(0, 3).map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                          {place.elevation && (
                            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 text-xs">
                              <Mountain className="h-3 w-3 mr-1" />{place.elevation}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{place.description}</p>

                      <Button variant="ghost" className="mb-4 hover:bg-orange-50 dark:hover:bg-orange-950/20"
                        onClick={() => setExpandedPlace(isExpanded ? null : place.id)}>
                        {isExpanded ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                        {isExpanded ? 'Show Less' : 'View Full Details'}
                      </Button>

                      {isExpanded && (
                        <div className="space-y-6 pt-4 border-t animate-in slide-in-from-top-2 duration-300">
                          {/* History */}
                          <div>
                            <h4 className="font-semibold text-lg mb-2">📜 History & Legend</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{place.history}</p>
                          </div>

                          {/* How to Reach */}
                          <div>
                            <h4 className="font-semibold text-lg mb-3">🚗 How to Reach</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {place.howToReach.map((transport, i) => {
                                const Icon = transportIcons[transport.mode] || Bus;
                                return (
                                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center shrink-0">
                                      <Icon className="h-4 w-4 text-orange-600" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium capitalize">{transport.mode}</p>
                                      <p className="text-xs text-muted-foreground">{transport.description}</p>
                                      {transport.cost && <p className="text-xs text-orange-600 mt-1">Cost: {transport.cost}</p>}
                                      {transport.duration && <p className="text-xs text-muted-foreground">Duration: {transport.duration}</p>}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Timings & Best Time */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl">
                              <h4 className="font-semibold text-sm mb-1">⏰ Darshan Timings</h4>
                              <p className="text-sm text-muted-foreground">{place.timings || 'Check locally'}</p>
                            </div>
                            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl">
                              <h4 className="font-semibold text-sm mb-1">📅 Best Time to Visit</h4>
                              <p className="text-sm text-muted-foreground">{place.bestTimeToVisit}</p>
                            </div>
                          </div>

                          {/* Nearby Places */}
                          {place.nearbyPlaces && (
                            <div>
                              <h4 className="font-semibold text-lg mb-3">📍 Nearby Attractions</h4>
                              <div className="flex flex-wrap gap-2">
                                {place.nearbyPlaces.map((np, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{np}</Badge>
                                ))}
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
          </div>
        </section>
      </main>
    </div>
  );
}
