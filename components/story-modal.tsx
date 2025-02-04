"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react";

interface StoryModalProps {
  story: any;
  isOpen: boolean;
  onClose: () => void;
}

export function StoryModal({ story, isOpen, onClose }: StoryModalProps) {
  if (!story) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogTitle className="text-2xl font-bold">{story.title}</DialogTitle>
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
                src={`https://source.unsplash.com/800x400/?hinduism,story,${story.title.toLowerCase()}`}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Context */}
            <div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <span>{story.tradition}</span>
                <span>•</span>
                <span>{story.era}</span>
                <span>•</span>
                <span>{story.category}</span>
              </div>
              <p className="text-muted-foreground">{story.description}</p>
            </div>

            {/* Story Content */}
            <div>
              <h3 className="text-xl font-semibold mb-2">The Story</h3>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {story.content?.map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Moral & Significance */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Moral & Significance</h3>
              <div className="space-y-4">
                {story.morals?.map((moral: string, index: number) => (
                  <div key={index} className="sacred-quote">
                    {moral}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Stories */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Related Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {story.relatedStories?.map((related: any, index: number) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium mb-2">{related.title}</h4>
                    <p className="text-sm text-secondary-foreground">{related.description}</p>
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