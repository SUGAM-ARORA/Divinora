"use client";

import { Card } from "@/components/ui/card";
import { navagrahas } from "@/lib/content";
import { Star } from "lucide-react";

export function NavagrahaSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Navagrahas (Nine Celestial Bodies)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navagrahas.map((graha) => (
          <Card key={graha.id} className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">{graha.name}</h3>
                <p className="text-sm text-muted-foreground">{graha.ruling_day}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{graha.description}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Mantras</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {graha.mantras.map((mantra, index) => (
                    <li key={index}>{mantra}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-1">Significance</h4>
                  <p className="text-sm text-muted-foreground">{graha.significance}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Gemstone</h4>
                  <p className="text-sm text-muted-foreground">{graha.gemstone}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}