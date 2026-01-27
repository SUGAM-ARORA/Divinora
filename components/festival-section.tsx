"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { festivals } from "@/lib/content";
import { Calendar, Heart, Globe } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-20">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full mb-4">
          <Calendar className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Universal Celebrations</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Sacred Festivals & Celebrations
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Discover the beautiful festivals and celebrations from different religious traditions around the world
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {festivals.map((festival) => (
          <Card key={festival.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-700/30 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-200">
                  {festival.religion}
                </Badge>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <Heart className="h-4 w-4 text-slate-400 hover:text-red-400 transition-colors cursor-pointer" />
                </div>
              </div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-primary transition-colors flex items-center gap-2">
                {festival.name}
                <span className="text-sm font-normal text-slate-400">
                  {festival.date}
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-slate-300">{festival.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-slate-200">
                    <Globe className="h-4 w-4 text-purple-400" />
                    Universal Message
                  </h4>
                  <p className="text-sm text-slate-300 bg-purple-500/10 p-3 rounded-lg italic border border-purple-500/20">
                    "{festival.universalMessage}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-slate-200">Spiritual Significance</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    {festival.significance.slice(0, 2).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-slate-200">Sacred Practices</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    {festival.rituals.slice(0, 2).map((ritual, index) => (
                      <li key={index}>{ritual}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          These festivals remind us that despite our different traditions, we all celebrate the same universal values of love, light, and spiritual growth.
        </p>
      </div>
    </div>
  );
}