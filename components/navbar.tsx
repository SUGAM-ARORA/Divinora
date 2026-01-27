"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { UserNav } from '@/components/user-nav';
import { supabase } from '@/lib/supabase';
import { 
  Menu, 
  Sun, 
  Moon, 
  Globe, 
  Heart,
  BookOpen,
  Sparkles,
  Star,
  Calendar,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const religions = [
  { name: 'Hinduism', href: '/religions/hinduism', icon: '🕉️' },
  { name: 'Christianity', href: '/religions/christianity', icon: '✝️' },
  { name: 'Islam', href: '/religions/islam', icon: '☪️' },
  { name: 'Buddhism', href: '/religions/buddhism', icon: '☸️' },
  { name: 'Sikhism', href: '/religions/sikhism', icon: '☬' },
  { name: 'Judaism', href: '/religions/judaism', icon: '✡️' },
  { name: 'Others', href: '/religions/others', icon: '🌟' },
];

const features = [
  { name: 'Sacred Texts', href: '/texts', icon: BookOpen },
  { name: 'Festivals', href: '/festivals', icon: Calendar },
  { name: 'Meditation', href: '/meditation', icon: Heart },
  { name: 'Community', href: '/community', icon: Users },
];

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (event === 'SIGNED_IN') {
          setShowAuthDialog(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    setShowAuthDialog(false);
  };

  if (!mounted) return null;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="nav-container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Divinora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Religions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                    <Globe className="h-4 w-4 mr-2" />
                    Religions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {religions.map((religion) => (
                        <NavigationMenuLink key={religion.name} asChild>
                          <Link
                            href={religion.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{religion.icon}</span>
                              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                {religion.name}
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Features */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                    <Star className="h-4 w-4 mr-2" />
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {features.map((feature) => (
                        <NavigationMenuLink key={feature.name} asChild>
                          <Link
                            href={feature.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-2">
                              <feature.icon className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                {feature.name}
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Navratri Special */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/navratri-2025"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:from-orange-600 hover:to-pink-600 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Navratri 2025
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className={cn("mr-2", language === 'en' && "font-bold")}>🇺🇸</span>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hi')}>
                  <span className={cn("mr-2", language === 'hi' && "font-bold")}>🇮🇳</span>
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-9 w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth */}
            {user ? (
              <UserNav user={user} />
            ) : (
              <Button
                onClick={() => setShowAuthDialog(true)}
                className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Join Sacred Journey
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden h-9 w-9 px-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Divinora</span>
                  </div>

                  {/* Mobile Religions */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Religions
                    </h3>
                    {religions.map((religion) => (
                      <Link
                        key={religion.name}
                        href={religion.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="text-lg">{religion.icon}</span>
                        <span>{religion.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Features */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Explore
                    </h3>
                    {features.map((feature) => (
                      <Link
                        key={feature.name}
                        href={feature.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <feature.icon className="h-4 w-4 text-primary" />
                        <span>{feature.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Navratri */}
                  <Link
                    href="/navratri-2025"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Navratri 2025</span>
                  </Link>

                  {/* Mobile Auth */}
                  {!user && (
                    <Button
                      onClick={() => {
                        setShowAuthDialog(true);
                        setIsOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-primary to-secondary"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Join Sacred Journey
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}