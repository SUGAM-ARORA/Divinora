"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ReligionPreferences } from "@/components/religion-preferences";
import { supabase } from "@/lib/supabase";
import { LogOut, Settings, User, Heart, BookOpen, Star, Sparkles } from "lucide-react";

interface UserNavProps {
  user: any;
}

export function UserNav({ user }: UserNavProps) {
  const [showPreferences, setShowPreferences] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/40 dark:hover:to-pink-800/40 transition-all duration-300">
            <Avatar className="h-10 w-10 border-2 border-purple-200 dark:border-purple-700">
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                {getInitials(user.email)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2" align="end" forceMount>
          <DropdownMenuLabel className="font-normal p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <p className="text-sm font-medium leading-none text-purple-700 dark:text-purple-300">
                  Sacred Account
                </p>
              </div>
              <p className="text-xs leading-none text-muted-foreground truncate">
                {user.email}
              </p>
              <div className="flex items-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  Spiritually Connected
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 h-px" />
          
          <DropdownMenuItem 
            onClick={() => setShowPreferences(true)}
            className="rounded-xl m-1 p-3 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg">
                <Settings className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">Religious Preferences</p>
                <p className="text-xs text-muted-foreground">Customize your spiritual journey</p>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-xl m-1 p-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-lg">
                <BookOpen className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">My Sacred Library</p>
                <p className="text-xs text-muted-foreground">Saved texts and teachings</p>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-xl m-1 p-3 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 rounded-lg">
                <Star className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="font-medium">Spiritual Progress</p>
                <p className="text-xs text-muted-foreground">Track your growth journey</p>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-xl m-1 p-3 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 rounded-lg">
                <Heart className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">Meditation History</p>
                <p className="text-xs text-muted-foreground">Your healing sessions</p>
              </div>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 h-px" />
          
          <DropdownMenuItem 
            onClick={handleSignOut}
            className="rounded-xl m-1 p-3 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300 cursor-pointer text-red-600 dark:text-red-400"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 rounded-lg">
                <LogOut className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Sign Out</p>
                <p className="text-xs text-muted-foreground">Until we meet again</p>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ReligionPreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        userId={user.id}
      />
    </>
  );
}