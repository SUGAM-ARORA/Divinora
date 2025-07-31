"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { festivals } from "@/lib/content";
import { Calendar, Heart, Globe } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Universal Celebrations</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Sacred Festivals & Celebrations
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover the beautiful festivals and celebrations from different religious traditions around the world
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <Card key={festival.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {festival.religion}
                </Badge>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer" />
                </div>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                {festival.name}
                <span className="text-sm font-normal text-muted-foreground">
                  {festival.date}
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{festival.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Universal Message
                  </h4>
                  <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg italic">
                    "{festival.universalMessage}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Spiritual Significance</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {festival.significance.slice(0, 2).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Sacred Practices</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
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
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          These festivals remind us that despite our different traditions, we all celebrate the same universal values of love, light, and spiritual growth.
        </p>
      </div>
    </div>
  );
}