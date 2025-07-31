"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { navagrahas } from "@/lib/content";
import { Star, Gem, Calendar } from "lucide-react";

export function NavagrahaSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-4 py-2 rounded-full mb-4">
          <Star className="h-4 w-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-700 dark:text-amber-400">Hindu Astrology</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Navagrahas - Nine Celestial Bodies
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover the nine celestial bodies in Hindu astrology and their influence on human life and spiritual growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navagrahas.map((graha) => (
          <Card key={graha.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500/50 hover:scale-[1.02] bg-gradient-to-br from-card to-amber-50/20 dark:to-amber-950/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  Celestial Body
                </Badge>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-600" />
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                {graha.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                Ruling Day: {graha.ruling_day}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">{graha.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 text-sm">Sacred Mantras</h4>
                  <div className="space-y-1">
                    {graha.mantras.map((mantra, index) => (
                      <div key={index} className="text-xs bg-amber-50 dark:bg-amber-950/30 p-2 rounded font-mono text-amber-800 dark:text-amber-200">
                        {mantra}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1 text-sm flex items-center gap-2">
                      <Star className="h-3 w-3" />
                      Spiritual Significance
                    </h4>
                    <p className="text-xs text-muted-foreground">{graha.significance}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1 text-sm flex items-center gap-2">
                      <Gem className="h-3 w-3 text-amber-600" />
                      Sacred Gemstone
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">{graha.gemstone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-xl">
        <h3 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">
          Understanding Cosmic Influence
        </h3>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          The Navagrahas represent the cosmic forces that influence human life according to Hindu astrology. 
          Each celestial body governs specific aspects of life and spiritual development, guiding us toward 
          greater self-awareness and harmony with the universe.
        </p>
      </div>
    </div>
  );
}