"use client";

import { Cloud, CloudRain, Sun, Wind, ThermometerSun } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface WeatherWidgetProps {
  location: string;
  altitude: string;
}

export function WeatherWidget({ location, altitude }: WeatherWidgetProps) {
  // Mock data for the demo based on altitude
  const isHighAltitude = parseInt(altitude.replace(/,/g, '')) > 8000;
  
  return (
    <Card className="bg-gradient-to-br from-slate-900 via-[#020617] to-slate-900 border-slate-800 relative overflow-hidden backdrop-blur-xl group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        {isHighAltitude ? <CloudRain className="w-32 h-32 text-blue-300" /> : <Sun className="w-32 h-32 text-yellow-500" />}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Badge variant="outline" className="text-orange-500 border-orange-500/30 bg-orange-500/10 mb-2">Live Weather</Badge>
            <h3 className="text-xl font-serif text-white">{location}</h3>
            <p className="text-xs text-slate-400">Altitude: {altitude}</p>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-bold tracking-tighter text-white flex items-center">
              {isHighAltitude ? '-2' : '15'}
              <span className="text-2xl text-slate-400 ml-1">°C</span>
            </h2>
            <p className="text-sm text-slate-400">{isHighAltitude ? 'Snow Showers' : 'Clear Skies'}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
            <Wind className="w-5 h-5 text-blue-400 mb-1" />
            <span className="text-xs text-slate-400">Wind</span>
            <span className="text-sm font-semibold text-white">{isHighAltitude ? '25' : '12'} km/h</span>
          </div>
          <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <Cloud className="w-5 h-5 text-cyan-400 mb-1" />
            <span className="text-xs text-slate-400">Visibility</span>
            <span className="text-sm font-semibold text-white">{isHighAltitude ? '2' : '10'} km</span>
          </div>
          <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-colors">
            <ThermometerSun className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="text-xs text-slate-400">Feels Like</span>
            <span className="text-sm font-semibold text-white">{isHighAltitude ? '-7' : '14'}°C</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
