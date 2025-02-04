"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react";

interface HistoryModalProps {
  history: any;
  isOpen: boolean;
  onClose: () => void;
}

export function HistoryModal({ history, isOpen, onClose }: HistoryModalProps) {
  if (!history) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogTitle className="text-2xl font-bold">{history.title}</DialogTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <ScrollArea className="h-[calc(90vh-100px)]">
          <div className="space-y-6 p-4">
            {/* Main Image */}
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={`https://source.unsplash.com/800x400/?hinduism,history,${history.title.toLowerCase()}`}
                alt={history.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">{history.description}</p>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Events</h3>
              <div className="space-y-6">
                {history.events?.map((event: any, index: number) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="ml-6">
                      <h4 className="font-medium">{event.date}</h4>
                      <p className="text-muted-foreground mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Significance */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Historical Significance</h3>
              <div className="space-y-4">
                {history.significance?.map((point: string, index: number) => (
                  <div key={index} className="sacred-quote">
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Archaeological Evidence */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Archaeological Evidence</h3>
              <div className="image-gallery">
                {history.artifacts?.map((artifact: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <Image
                      src={`https://source.unsplash.com/400x300/?ancient,artifact,${index}`}
                      alt={artifact.name}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <p className="text-sm font-medium">{artifact.name}</p>
                    <p className="text-xs text-muted-foreground">{artifact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div>
              <h3 className="text-xl font-semibold mb-2">References</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {history.references?.map((ref: string, index: number) => (
                  <li key={index}>{ref}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}