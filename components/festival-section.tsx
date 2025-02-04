"use client";

import { Card } from "@/components/ui/card";
import { festivals } from "@/lib/content";
import { Calendar } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Upcoming Festivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <Card key={festival.id} className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">{festival.name}</h3>
                <p className="text-sm text-muted-foreground">{festival.date}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{festival.description}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Significance</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {festival.significance.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Key Rituals</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {festival.rituals.map((ritual, index) => (
                    <li key={index}>{ritual}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}