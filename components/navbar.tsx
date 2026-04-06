"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Mountain, Map, BookOpen, Compass, Menu, X, Sparkles, LogIn, ChevronDown
} from 'lucide-react';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { UserNav } from '@/components/user-nav';

interface NavbarProps {
  user?: any;
}

const navLinks = [
  {
    label: 'Pilgrimages', icon: Mountain, href: '/pilgrimages',
    subLinks: [
      { label: 'Char Dham Yatra', href: '/pilgrimages/char-dham' },
      { label: '12 Jyotirlingas', href: '/pilgrimages/jyotirlingas' },
      { label: '52 Shakti Peethas', href: '/pilgrimages/shakti-peethas' },
      { label: 'Sapta Puri', href: '/pilgrimages/sapta-puri' },
    ]
  },
  { label: 'Explore Map', icon: Map, href: '/explore' },
  {
    label: 'Sacred Treks', icon: Compass, href: '/treks',
    subLinks: [
      { label: 'Vaishno Devi', href: '/treks/vaishno-devi' },
      { label: 'Amarnath Yatra', href: '/treks/amarnath' },
      { label: 'Kedarnath Trek', href: '/treks/kedarnath-trek' },
      { label: 'Kailash Mansarovar', href: '/treks/kailash-mansarovar' },
    ]
  },
  { label: 'Deities', icon: BookOpen, href: '/deities' },
];

export function Navbar({ user }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-amber-200/30 dark:border-amber-800/20 shadow-lg shadow-amber-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow">
                  <span className="text-white font-bold text-lg">ॐ</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                  Divinora
                </h1>
                <p className="text-[10px] text-muted-foreground -mt-0.5 tracking-wider uppercase">Sacred Journey</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.subLinks && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={link.href} onClick={(e) => {
                    if (link.subLinks) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === link.label ? null : link.label);
                    }
                  }}>
                    <Button variant="ghost" className="text-sm font-medium hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors">
                      <link.icon className="h-4 w-4 mr-1.5" />
                      {link.label}
                      {link.subLinks && <ChevronDown className="h-3 w-3 ml-1 opacity-50" />}
                    </Button>
                  </Link>

                  {link.subLinks && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-orange-100 dark:border-slate-800 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.subLinks.map((sub) => (
                        <Link key={sub.href} href={sub.href}
                          className="block px-4 py-2.5 text-sm hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-orange-600 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center space-x-3">
              {user ? (
                <UserNav user={user} />
              ) : (
                <Button onClick={() => setShowAuthDialog(true)}
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Join Journey
                </Button>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-orange-100 dark:border-slate-800">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-base">
                      <link.icon className="h-5 w-5 mr-3" />
                      {link.label}
                    </Button>
                  </Link>
                  {link.subLinks && (
                    <div className="ml-10 space-y-1">
                      {link.subLinks.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-orange-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {!user && (
                <Button onClick={() => { setShowAuthDialog(true); setIsMobileMenuOpen(false); }}
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-600"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Join Journey
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthDialog isOpen={showAuthDialog} onClose={() => setShowAuthDialog(false)} onSuccess={() => setShowAuthDialog(false)} />
    </>
  );
}
