"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { sacredTreks } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Mountain, Clock, MapPin, ArrowRight, Footprints, AlertTriangle } from 'lucide-react';

const diffColors: Record<string, { bg: string; text: string }> = {
  easy: { bg: 'bg-green-500', text: 'text-green-500' },
  moderate: { bg: 'bg-yellow-500', text: 'text-yellow-600' },
  hard: { bg: 'bg-orange-500', text: 'text-orange-500' },
  extreme: { bg: 'bg-red-500', text: 'text-red-500' },
};

export default function TreksPage() {
  const [user, setUser] = useState<any>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  const filtered = filter === 'all' ? sacredTreks : sacredTreks.filter(t => t.difficulty === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-green-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-green-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-emerald-600 mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Sacred Treks & Yatras</h1>
                <p className="text-muted-foreground mt-1">Complete route guides with difficulty ratings and transport options</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['all', 'easy', 'moderate', 'hard', 'extreme'].map((d) => (
                <Button key={d} variant={filter === d ? 'default' : 'outline'} size="sm" className="rounded-full text-xs capitalize"
                  onClick={() => setFilter(d)}>
                  {d === 'all' ? `All (${sacredTreks.length})` : `${d} (${sacredTreks.filter(t => t.difficulty === d).length})`}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((trek) => {
              const dc = diffColors[trek.difficulty];
              return (
                <Card key={trek.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 bg-white dark:bg-slate-900">
                  <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                    <Mountain className="h-20 w-20 text-white/15 absolute right-4 bottom-0" />
                    <div className="relative text-center z-10 px-4">
                      <h3 className="text-white text-2xl font-bold">{trek.name}</h3>
                      <p className="text-white/70 text-sm mt-1">{trek.location}</p>
                    </div>
                    <Badge className={`absolute top-3 right-3 ${dc.bg} text-white border-0 text-xs capitalize`}>{trek.difficulty}</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-xs text-muted-foreground">Distance</p>
                        <p className="text-sm font-semibold">{trek.distance}</p>
                      </div>
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-xs text-muted-foreground">Elevation</p>
                        <p className="text-sm font-semibold">{trek.elevation}</p>
                      </div>
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-semibold">{trek.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{trek.description}</p>
                    <div>
                      <p className="text-xs font-medium mb-2">Route Options:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {trek.routes.map((r, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px]">{r.name.split('(')[0].trim()}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Best months: {trek.bestMonths.slice(0, 4).join(', ')}
                    </div>
                    <Link href={`/treks/${trek.id}`}>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                        View Complete Guide <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
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
