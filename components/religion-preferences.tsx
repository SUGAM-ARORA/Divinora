"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from '@/lib/supabase';
import { useToast } from "@/hooks/use-toast";
import { religions, type Religion } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

interface ReligionPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export function ReligionPreferences({ isOpen, onClose, userId }: ReligionPreferencesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [primaryReligion, setPrimaryReligion] = useState<Religion>();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryReligion) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('user_preferences')
        .upsert({
          user_id: userId,
          primary_religion: primaryReligion,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: "Preferences saved",
        description: "Your religious preferences have been updated.",
      });
      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Select Your Religious Interests</DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primary-religion">Primary Religion</Label>
            <Select
              value={primaryReligion}
              onValueChange={(value) => setPrimaryReligion(value as Religion)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a religion" />
              </SelectTrigger>
              <SelectContent>
                {religions.map((religion) => (
                  <SelectItem key={religion} value={religion}>
                    {religion}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading || !primaryReligion}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Save Preferences"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}