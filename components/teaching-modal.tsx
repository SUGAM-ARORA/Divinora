"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react";

interface TeachingModalProps {
  teaching: any;
  isOpen: boolean;
  onClose: () => void;
}

export function TeachingModal({ teaching, isOpen, onClose }: TeachingModalProps) {
  if (!teaching) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogTitle className="text-2xl font-bold">{teaching.title}</DialogTitle>
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
                src={`https://source.unsplash.com/800x400/?hinduism,teaching,${teaching.title.toLowerCase()}`}
                alt={teaching.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">{teaching.description}</p>
            </div>

            {/* Key Points */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Points</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {teaching.keyPoints?.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Scriptural References */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Scriptural References</h3>
              <div className="space-y-4">
                {teaching.references?.map((ref: any, index: number) => (
                  <div key={index} className="sacred-quote">
                    <p className="font-medium">{ref.text}</p>
                    <p className="text-sm text-muted-foreground mt-1">— {ref.source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Applications */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Practical Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teaching.applications?.map((app: string, index: number) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <p className="text-secondary-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}