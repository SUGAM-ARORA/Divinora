"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Flame, Star, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAudio } from '@/components/audio-provider';

interface JourneyOnboardingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JourneyOnboarding({ open, onOpenChange }: JourneyOnboardingProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState('');
  const [deity, setDeity] = useState('');
  const { playBell, playSoftBell } = useAudio();

  const handleNext = () => {
    playSoftBell();
    setStep(s => s + 1);
  };

  const handleBack = () => {
    playSoftBell();
    setStep(s => s - 1);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) throw error;
      playBell();
      setStep(4); // Success Step
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const GoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-[#020617] border-slate-800 rounded-[2rem]">
        <DialogTitle className="sr-only">Join the Sacred Journey</DialogTitle>
        <div className="relative min-h-[500px] flex flex-col">
          {/* Progress Indicator */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-50">
            <motion.div 
              className="h-full bg-gradient-to-r from-orange-600 to-amber-500"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 p-10 flex flex-col justify-center"
                >
                  <div className="text-center mb-8">
                    <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-serif text-white mb-2">What calls you?</h2>
                    <p className="text-slate-400">Every journey begins with an intention.</p>
                  </div>
                  
                  <div className="space-y-4">
                    {['Seeking Moksha', 'Planning a Yatra', 'Learning Divine Lore', 'Meditative Focus'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setIntent(opt); handleNext(); }}
                        className="w-full p-4 rounded-xl border border-slate-800 hover:border-orange-500/50 hover:bg-orange-500/10 text-left text-slate-300 transition-all flex justify-between items-center group"
                      >
                        {opt}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 p-10 flex flex-col justify-center"
                >
                  <button onClick={handleBack} className="absolute top-8 left-8 text-slate-500 hover:text-white">
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div className="text-center mb-8">
                    <span className="text-amber-500 mx-auto mb-4 text-5xl block">ॐ</span>
                    <h2 className="text-3xl font-serif text-white mb-2">Tutelary Deity</h2>
                    <p className="text-slate-400">Who guides your path?</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Shiva', desc: 'The Transformer' },
                      { name: 'Vishnu', desc: 'The Preserver' },
                      { name: 'Shakti', desc: 'Divine Feminine' },
                      { name: 'All', desc: 'Universal Spirit' }
                    ].map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => { setDeity(opt.name); handleNext(); }}
                        className="p-4 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 text-center transition-all group"
                      >
                        <h3 className="text-amber-400 font-serif text-xl mb-1">{opt.name}</h3>
                        <p className="text-xs text-slate-500">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 p-10 flex flex-col justify-center"
                >
                  <button onClick={handleBack} className="absolute top-8 left-8 text-slate-500 hover:text-white">
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div className="text-center mb-8">
                    <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-serif text-white mb-2">Seal Your Vow</h2>
                    <p className="text-slate-400">Join the sangha (community).</p>
                  </div>
                  
                  <form onSubmit={handleAuth} className="space-y-4 max-w-sm mx-auto w-full">
                    <Button 
                      type="button" 
                      onClick={GoogleSignIn}
                      className="w-full bg-white text-black hover:bg-slate-200 h-12 text-md rounded-xl"
                    >
                      <svg className="w-5 h-5 mr-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                      Continue with Google
                    </Button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-700" /></div>
                      <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#020617] px-2 text-slate-500">Or</span></div>
                    </div>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-900 border-slate-700 text-white h-12 rounded-xl text-md focus:border-amber-500"
                      required
                    />
                    <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white h-12 text-md rounded-xl">
                      {loading ? 'Sending link...' : 'Receive Magic Link'}
                    </Button>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-green-400" />
                  </div>
                  <h2 className="text-4xl font-serif text-white mb-4">Journey Commenced</h2>
                  <p className="text-slate-400 max-w-xs">
                    Please check your email to unveil the path. A magic link has been sent to {email}.
                  </p>
                  <Button onClick={() => onOpenChange(false)} variant="ghost" className="mt-8 text-slate-400 hover:text-white">
                    Close
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
