"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Mountain, Clock, IndianRupee } from 'lucide-react';

interface PilgrimageCardProps {
  id: string;
  name: string;
  location: string;
  deity: string;
  significance: string;
  category: string;
  difficulty?: string;
  elevation?: string;
  gradient?: string;
  href: string;
  icon?: string;
}

const difficultyColor: Record<string, string> = {
  easy: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  moderate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  hard: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  extreme: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

export function PilgrimageCard({
  id, name, location, deity, significance, category, difficulty, elevation, gradient, href, icon
}: PilgrimageCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-900">
        {/* Gradient Header */}
        <div className={`relative h-40 bg-gradient-to-br ${gradient || 'from-orange-400 to-amber-500'} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-float"
                style={{ left: `${(i * 23 + 10) % 100}%`, top: `${(i * 31 + 15) % 100}%`, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
          <div className="relative text-center z-10">
            <span className="text-4xl">{icon || '🕉️'}</span>
            <h3 className="text-white text-xl font-bold mt-2 drop-shadow-lg">{name}</h3>
          </div>
          {difficulty && (
            <Badge className={`absolute top-3 right-3 ${difficultyColor[difficulty] || ''} text-xs font-medium`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 mr-1.5 text-orange-500" />
            {location}
          </div>

          <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
            {deity}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {significance}
          </p>

          {elevation && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Mountain className="h-3 w-3 mr-1.5" />
              {elevation}
            </div>
          )}

          <Button variant="ghost" className="w-full mt-2 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/20 group-hover:text-orange-600 transition-colors">
            Explore Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}

interface CircuitCardProps {
  id: string;
  name: string;
  description: string;
  totalPlaces: number;
  icon: string;
  color: string;
  gradient: string;
  bestSeason: string;
  estimatedDays: string;
  estimatedBudget: string;
  href: string;
}

export function CircuitCard({
  id, name, description, totalPlaces, icon, color, gradient, bestSeason, estimatedDays, estimatedBudget, href
}: CircuitCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-900 h-full">
        <div className={`relative h-48 bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative text-center z-10">
            <span className="text-5xl mb-3 block">{icon}</span>
            <h3 className="text-white text-2xl font-bold drop-shadow-lg">{name}</h3>
            <p className="text-white/80 text-sm mt-1">{totalPlaces} Sacred Places</p>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-3 w-3 mr-1.5 text-orange-500" />
              {estimatedDays}
            </div>
            <div className="flex items-center text-muted-foreground">
              <IndianRupee className="h-3 w-3 mr-1.5 text-orange-500" />
              {estimatedBudget.replace('per person', '').trim()}
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-md">
            Start Planning
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
