"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { navagrahas } from "@/lib/content";
import { Star, Gem, Calendar } from "lucide-react";

export function NavagrahaSection() {
  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full mb-4">
          <Star className="h-4 w-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-300">Hindu Astrology</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          Navagrahas - Nine Celestial Bodies
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Discover the nine celestial bodies in Hindu astrology and their influence on human life and spiritual growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {navagrahas.map((graha) => (
          <Card key={graha.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-700/30 hover:border-amber-500/50 hover:scale-[1.02] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs bg-amber-900/50 text-amber-200 border border-amber-700/30">
                  Celestial Body
                </Badge>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-400" />
                  <Calendar className="h-4 w-4 text-slate-400" />
                </div>
              </div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-amber-400 transition-colors">
                {graha.name}
              </CardTitle>
              <p className="text-sm text-slate-400 font-medium">
                Ruling Day: {graha.ruling_day}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-slate-300 text-sm">{graha.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 text-sm text-slate-200">Sacred Mantras</h4>
                  <div className="space-y-1">
                    {graha.mantras.map((mantra, index) => (
                      <div key={index} className="text-xs bg-amber-900/30 border border-amber-700/30 p-2 rounded font-mono text-amber-200">
                        {mantra}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
                    <h4 className="font-medium mb-1 text-sm flex items-center gap-2 text-slate-200">
                      <Star className="h-3 w-3 text-blue-400" />
                      Spiritual Significance
                    </h4>
                    <p className="text-xs text-slate-300">{graha.significance}</p>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg">
                    <h4 className="font-medium mb-1 text-sm flex items-center gap-2 text-slate-200">
                      <Gem className="h-3 w-3 text-amber-400" />
                      Sacred Gemstone
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">{graha.gemstone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-700/30 p-6 rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-semibold mb-2 text-amber-200">
          Understanding Cosmic Influence
        </h3>
        <p className="text-sm text-slate-400 max-w-3xl mx-auto">
          The Navagrahas represent the cosmic forces that influence human life according to Hindu astrology. 
          Each celestial body governs specific aspects of life and spiritual development, guiding us toward 
          greater self-awareness and harmony with the universe.
        </p>
      </div>
    </div>
  );
}