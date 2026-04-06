"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from '@/components/navbar';
import { hinduDeities } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, PlayCircle, Sparkles, BookOpen } from 'lucide-react';

export default function DeitiesPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user || null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <Navbar user={user} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10" />
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-amber-600 mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Link>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Supreme Deities</h1>
              <p className="text-lg text-muted-foreground">Explore the divine forms, their significance, associated temples, and sacred mantras. Discover the spiritual essence of the Hindu pantheon.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {hinduDeities.map((deity, idx) => (
                <Card key={deity.id} className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-slate-900 group">
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                    {/* Using aspect-square and object-cover makes the 1:1 image perfectly visible without cropping */}
                    <img
                      src={deity.avatarUrl}
                      alt={deity.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-md">{deity.name}</h2>
                      <p className="text-amber-300 font-medium tracking-wide text-sm">{deity.domain}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30 relative overflow-hidden">
                      <div className="absolute right-0 top-0 opacity-10">
                        <Sparkles className="h-20 w-20 text-amber-500" />
                      </div>
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">Sacred Mantra</p>
                      <p className="text-lg font-serif italic text-foreground">&quot;{deity.mantra}&quot;</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {deity.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-orange-500"/> Known Forms</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {deity.forms.map(f => <Badge variant="secondary" key={f} className="text-[10px]">{f}</Badge>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">🐾 Divine Vehicle</h4>
                        <p className="text-sm text-muted-foreground">{deity.vehicle}</p>
                      </div>
                      <div className="col-span-2">
                        <h4 className="font-semibold text-sm mb-2">🛕 Key Pilgrimages & Temples</h4>
                        <div className="flex flex-wrap gap-2">
                          {deity.associatedTemples.map(t => (
                            <Badge variant="outline" key={t} className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-850">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
