"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { X } from "lucide-react";

interface DeityModalProps {
  deity: any;
  isOpen: boolean;
  onClose: () => void;
}

export function DeityModal({ deity, isOpen, onClose }: DeityModalProps) {
  if (!deity) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogTitle className="text-2xl font-bold">{deity.name}</DialogTitle>
       
        
        
        <ScrollArea className="h-[calc(90vh-100px)]">
          <div className="space-y-6 p-4">
            {/* Main 3D Model Viewer */}
            {deity.modelEmbedCode && (
              <div>
                <h3 className="text-xl font-semibold mb-2">3D Model</h3>
                <div
                  className="rounded-lg overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: deity.modelEmbedCode }}
                  style={{ width: "600px", height: "200px" }} 
                />
              </div>
            )}


            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">About {deity.name}</h3>
              <p className="text-muted-foreground">{deity.description}</p>
            </div>

            {/* Attributes */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Divine Attributes</h3>
              <div className="flex flex-wrap gap-2">
                {deity.attributes.map((attr: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Iconography */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Sacred Symbols</h3>
              <p className="text-muted-foreground">{deity.iconography}</p>
            </div>

            {/* Stories */}
            {deity.stories && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Sacred Stories</h3>
                <div className="space-y-4">
                  {deity.stories.map((story: string, index: number) => (
                    <div key={index} className="sacred-quote">
                      {story}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Images */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Sacred Imagery</h3>
              <div className="image-gallery">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`https://source.unsplash.com/400x300/?${deity.name.toLowerCase()},temple,${i}`}
                    alt={`${deity.name} - Image ${i}`}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Temples */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Sacred Temples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deity.temples?.map((temple: any, index: number) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold">{temple.name}</h4>
                    <p className="text-sm text-muted-foreground">{temple.location}</p>
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