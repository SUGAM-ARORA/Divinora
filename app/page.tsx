"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Heart, 
  Star, 
  Sparkles, 
  Moon, 
  Sun, 
  Waves, 
  Zap, 
  Compass,
  Eye,
  Flame,
  Flower,
  TreePine,
  Mountain,
  Wind,
  Play,
  Pause,
  Volume2,
  VolumeX,
  User,
  LogIn,
  Menu,
  X,
  Globe,
  BookOpen,
  Users,
  Calendar,
  Award,
  Target,
  Lightbulb,
  Headphones,
  Camera,
  Map,
  Gift,
  Shield,
  Infinity,
  Feather,
  Leaf,
  Sunrise,
  Sunset,
  CloudRain,
  Rainbow,
  Snowflake
} from 'lucide-react';
import { deities, festivals, sacredStories, teachings, histories, bhaktiVideos, navagrahas } from '@/lib/content';
import { DeityModal } from '@/components/deity-modal';
import { StoryModal } from '@/components/story-modal';
import { TeachingModal } from '@/components/teaching-modal';
import { HistoryModal } from '@/components/history-modal';
import { FestivalSection } from '@/components/festival-section';
import { NavagrahaSection } from '@/components/navagraha-section';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { UserNav } from '@/components/user-nav';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  // State Management
  const [selectedDeity, setSelectedDeity] = useState<any>(null);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [selectedTeaching, setSelectedTeaching] = useState<any>(null);
  const [selectedHistory, setSelectedHistory] = useState<any>(null);
  const [isDeityModalOpen, setIsDeityModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isTeachingModalOpen, setIsTeachingModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'card'>('grid');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState<any>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Meditation Timer State
  const [meditationTime, setMeditationTime] = useState(5);
  const [isMediating, setIsMediating] = useState(false);
  const [meditationProgress, setMeditationProgress] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  
  // Spiritual Journey State
  const [spiritualLevel, setSpiritualLevel] = useState(1);
  const [spiritualXP, setSpiritualXP] = useState(0);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);
  
  // Chakra State
  const [selectedChakra, setSelectedChakra] = useState<number | null>(null);
  const [isChanting, setIsChanting] = useState(false);
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  
  // Mood Tracker State
  const [currentMood, setCurrentMood] = useState<'peaceful' | 'seeking' | 'grateful' | 'contemplative' | 'joyful'>('peaceful');
  
  // Sacred Geometry State
  const [selectedGeometry, setSelectedGeometry] = useState<'flower-of-life' | 'sri-yantra' | 'merkaba' | 'mandala'>('flower-of-life');
  
  // Virtual Pilgrimage State
  const [currentPilgrimage, setCurrentPilgrimage] = useState<string | null>(null);
  const [pilgrimageProgress, setPilgrimageProgress] = useState(0);

  const { toast } = useToast();

  // Chakras Data
  const chakras = [
    { name: 'Muladhara', color: 'bg-red-500', element: 'Earth', mantra: 'LAM', position: 'Root' },
    { name: 'Svadhisthana', color: 'bg-orange-500', element: 'Water', mantra: 'VAM', position: 'Sacral' },
    { name: 'Manipura', color: 'bg-yellow-500', element: 'Fire', mantra: 'RAM', position: 'Solar Plexus' },
    { name: 'Anahata', color: 'bg-green-500', element: 'Air', mantra: 'YAM', position: 'Heart' },
    { name: 'Vishuddha', color: 'bg-blue-500', element: 'Space', mantra: 'HAM', position: 'Throat' },
    { name: 'Ajna', color: 'bg-indigo-500', element: 'Light', mantra: 'OM', position: 'Third Eye' },
    { name: 'Sahasrara', color: 'bg-purple-500', element: 'Thought', mantra: 'AUM', position: 'Crown' }
  ];

  // Sacred Places for Virtual Pilgrimage
  const sacredPlaces = [
    { name: 'Varanasi Ghats', progress: 25, description: 'Ancient spiritual city on the Ganges' },
    { name: 'Mount Kailash', progress: 60, description: 'Sacred mountain, abode of Lord Shiva' },
    { name: 'Bodh Gaya', progress: 40, description: 'Where Buddha attained enlightenment' },
    { name: 'Golden Temple', progress: 80, description: 'Holiest Sikh gurdwara in Amritsar' },
    { name: 'Vatican City', progress: 30, description: 'Spiritual center of Christianity' },
    { name: 'Mecca', progress: 70, description: 'Holiest city in Islam' }
  ];

  // Daily Wisdom Quotes
  const dailyWisdom = [
    { text: "The mind is everything. What you think you become.", source: "Buddha", religion: "Buddhism" },
    { text: "You are what your deep, driving desire is.", source: "Upanishads", religion: "Hinduism" },
    { text: "And whoever relies upon Allah - then He is sufficient for him.", source: "Quran", religion: "Islam" },
    { text: "Love your neighbor as yourself.", source: "Bible", religion: "Christianity" },
    { text: "Truth is the highest virtue, but higher still is truthful living.", source: "Guru Nanak", religion: "Sikhism" },
    { text: "The whole world is one family.", source: "Vasudhaiva Kutumbakam", religion: "Universal" }
  ];

  // Weather-based spiritual guidance
  const getWeatherGuidance = () => {
    const hour = currentTime.getHours();
    if (hour < 6) return { icon: Moon, text: "Perfect time for deep meditation and inner reflection", color: "text-blue-400" };
    if (hour < 12) return { icon: Sunrise, text: "Morning energy is ideal for new beginnings and prayers", color: "text-orange-400" };
    if (hour < 18) return { icon: Sun, text: "Afternoon light brings clarity for studying sacred texts", color: "text-yellow-400" };
    return { icon: Sunset, text: "Evening twilight invites gratitude and peaceful contemplation", color: "text-purple-400" };
  };

  // Initialize user session
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (event === 'SIGNED_IN') {
        setShowAuthDialog(false);
        toast({
          title: "Welcome to your spiritual journey! 🙏",
          description: "May you find peace and wisdom here.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [toast]);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Meditation Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMediating) {
      interval = setInterval(() => {
        setMeditationProgress(prev => {
          if (prev >= 100) {
            setIsMediating(false);
            toast({
              title: "Meditation Complete! 🧘‍♀️",
              description: "You've completed your spiritual practice. Well done!",
            });
            setSpiritualXP(prev => prev + 50);
            return 0;
          }
          return prev + (100 / (meditationTime * 60));
        });
      }, 1000);

      // Breathing guidance
      const breathingInterval = setInterval(() => {
        setBreathingPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, 4000);

      return () => {
        clearInterval(interval);
        clearInterval(breathingInterval);
      };
    }
  }, [isMediating, meditationTime, toast]);

  // Spiritual Level Calculation
  useEffect(() => {
    const newLevel = Math.floor(spiritualXP / 100) + 1;
    if (newLevel > spiritualLevel) {
      setSpiritualLevel(newLevel);
      toast({
        title: `Spiritual Level Up! 🌟`,
        description: `You've reached level ${newLevel} on your spiritual journey!`,
      });
    }
  }, [spiritualXP, spiritualLevel, toast]);

  const handleDeityClick = (deity: any) => {
    setSelectedDeity(deity);
    setIsDeityModalOpen(true);
    setSpiritualXP(prev => prev + 10);
  };

  const handleStoryClick = (story: any) => {
    setSelectedStory(story);
    setIsStoryModalOpen(true);
    setSpiritualXP(prev => prev + 15);
  };

  const handleTeachingClick = (teaching: any) => {
    setSelectedTeaching(teaching);
    setIsTeachingModalOpen(true);
    setSpiritualXP(prev => prev + 20);
  };

  const handleHistoryClick = (history: any) => {
    setSelectedHistory(history);
    setIsHistoryModalOpen(true);
    setSpiritualXP(prev => prev + 15);
  };

  const startMeditation = () => {
    setIsMediating(true);
    setMeditationProgress(0);
    toast({
      title: "Meditation Started 🧘‍♀️",
      description: "Follow the breathing guidance and find your inner peace.",
    });
  };

  const stopMeditation = () => {
    setIsMediating(false);
    setMeditationProgress(0);
  };

  const handleChakraChant = (index: number) => {
    setSelectedChakra(index);
    setIsChanting(true);
    setTimeout(() => setIsChanting(false), 3000);
    setSpiritualXP(prev => prev + 25);
    toast({
      title: `Chanting ${chakras[index].mantra} 🕉️`,
      description: `Activating your ${chakras[index].name} chakra`,
    });
  };

  const currentWisdom = dailyWisdom[Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % dailyWisdom.length];
  const weatherGuidance = getWeatherGuidance();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-float delay-3000"></div>
        
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-secondary/20 rotate-45 animate-pulse"></div>
        </div>
      </div>

      {/* Revolutionary Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Sacred Symbol */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Divinora
                </h1>
                <p className="text-xs text-muted-foreground">Universal Spiritual Wisdom</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore
                </Button>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </Button>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Festivals
                </Button>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                  <Award className="h-4 w-4 mr-2" />
                  Journey
                </Button>
              </div>

              {/* Spiritual Level Display */}
              <div className="flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Level {spiritualLevel}</span>
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                    style={{ width: `${(spiritualXP % 100)}%` }}
                  />
                </div>
              </div>

              {/* User Authentication */}
              {user ? (
                <UserNav user={user} />
              ) : (
                <Button 
                  onClick={() => setShowAuthDialog(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Join Journey
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Explore
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Festivals
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Award className="h-4 w-4 mr-2" />
                Journey
              </Button>
              {!user && (
                <Button 
                  onClick={() => setShowAuthDialog(true)}
                  className="w-full bg-gradient-to-r from-primary to-secondary"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Join Journey
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Revolutionary Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 animate-gradient-shift"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Daily Wisdom */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <weatherGuidance.icon className={`h-5 w-5 ${weatherGuidance.color}`} />
                <span className="text-sm font-medium">{weatherGuidance.text}</span>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="space-y-8">
              <div className="animate-scale-in">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                    Discover
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient-text delay-500">
                    Divine Wisdom
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
                  Embark on a transformative spiritual journey through the sacred teachings of all world religions. 
                  Find peace, wisdom, and enlightenment in one unified platform.
                </p>
              </div>

              {/* Daily Wisdom Quote */}
              <div className="animate-slide-up delay-1000">
                <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">Today's Wisdom</span>
                  </div>
                  <blockquote className="text-lg italic text-center mb-4">
                    "{currentWisdom.text}"
                  </blockquote>
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">— {currentWisdom.source}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {currentWisdom.religion}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-1500">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Compass className="h-5 w-5 mr-2" />
                  Begin Your Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/50 hover:border-primary bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-full hover:bg-primary/10 transition-all duration-300"
                  onClick={startMeditation}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Start Meditation
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 animate-fade-in delay-2000">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Religions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-muted-foreground">Sacred Texts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Deities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">∞</div>
                  <div className="text-sm text-muted-foreground">Wisdom</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Interactive Meditation Timer */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Sacred Meditation Timer
              </h2>
              <p className="text-muted-foreground text-lg">
                Find inner peace with guided breathing and mindfulness
              </p>
            </div>

            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-white/20 shadow-2xl">
              <div className="text-center space-y-8">
                {/* Breathing Animation */}
                <div className="relative">
                  <div 
                    className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center transition-all duration-4000 ${
                      isMediating ? (breathingPhase === 'inhale' ? 'scale-125' : breathingPhase === 'hold' ? 'scale-110' : 'scale-100') : 'scale-100'
                    }`}
                  >
                    <div className="text-white font-medium">
                      {isMediating ? breathingPhase.toUpperCase() : 'READY'}
                    </div>
                  </div>
                  {isMediating && (
                    <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
                  )}
                </div>

                {/* Timer Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration: {meditationTime} minutes</label>
                    <Slider
                      value={[meditationTime]}
                      onValueChange={(value) => setMeditationTime(value[0])}
                      max={30}
                      min={1}
                      step={1}
                      className="w-64 mx-auto"
                      disabled={isMediating}
                    />
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={isMediating ? stopMeditation : startMeditation}
                      size="lg"
                      className={`px-8 py-4 rounded-full ${
                        isMediating 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                      }`}
                    >
                      {isMediating ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                      {isMediating ? 'Stop' : 'Start'} Meditation
                    </Button>
                  </div>

                  {isMediating && (
                    <div className="space-y-2">
                      <Progress value={meditationProgress} className="w-full" />
                      <p className="text-sm text-muted-foreground">
                        {Math.floor((meditationProgress / 100) * meditationTime)} / {meditationTime} minutes
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Chakra Alignment System */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Chakra Alignment System
              </h2>
              <p className="text-muted-foreground text-lg">
                Balance your energy centers with sacred mantras and visualization
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
              {chakras.map((chakra, index) => (
                <Card 
                  key={index} 
                  className={`p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    selectedChakra === index ? 'ring-4 ring-primary/50 shadow-2xl' : ''
                  } ${isChanting && selectedChakra === index ? 'animate-pulse-glow' : ''}`}
                  onClick={() => handleChakraChant(index)}
                >
                  <div className={`w-16 h-16 ${chakra.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{chakra.mantra}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{chakra.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{chakra.position}</p>
                  <p className="text-xs text-muted-foreground">{chakra.element}</p>
                </Card>
              ))}
            </div>

            {selectedChakra !== null && (
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 max-w-md mx-auto">
                  <h3 className="font-semibold mb-2">Chanting {chakras[selectedChakra].mantra}</h3>
                  <p className="text-sm text-muted-foreground">
                    Focus on your {chakras[selectedChakra].position} chakra and feel the {chakras[selectedChakra].element} element flowing through you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sacred Geometry Explorer */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Sacred Geometry Explorer
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover the divine mathematics that underlies all creation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'flower-of-life', name: 'Flower of Life', description: 'Symbol of creation and cosmic order' },
                    { id: 'sri-yantra', name: 'Sri Yantra', description: 'Sacred geometry of divine feminine' },
                    { id: 'merkaba', name: 'Merkaba', description: 'Vehicle of light and ascension' },
                    { id: 'mandala', name: 'Mandala', description: 'Circle of wholeness and unity' }
                  ].map((geometry) => (
                    <Button
                      key={geometry.id}
                      variant={selectedGeometry === geometry.id ? "default" : "outline"}
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => setSelectedGeometry(geometry.id as any)}
                    >
                      <div className="text-sm font-medium">{geometry.name}</div>
                      <div className="text-xs text-muted-foreground text-center">{geometry.description}</div>
                    </Button>
                  ))}
                </div>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Meditation Focus</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gaze softly at the sacred pattern while breathing deeply. Allow the geometry to guide your consciousness toward unity and divine understanding.
                  </p>
                  <Button className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Begin Geometric Meditation
                  </Button>
                </Card>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-80 h-80 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center">
                  {selectedGeometry === 'flower-of-life' && (
                    <div className="relative">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-24 h-24 border-2 border-primary/60 rounded-full animate-spin-slow"
                          style={{
                            transform: `rotate(${i * 60}deg) translateY(-40px)`,
                            transformOrigin: 'center 40px'
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {selectedGeometry === 'sri-yantra' && (
                    <div className="relative">
                      <div className="w-32 h-32 border-2 border-primary/60 rotate-0 animate-pulse"></div>
                      <div className="absolute inset-0 w-32 h-32 border-2 border-secondary/60 rotate-180 animate-pulse delay-1000"></div>
                    </div>
                  )}
                  {selectedGeometry === 'merkaba' && (
                    <div className="relative">
                      <div className="w-24 h-24 border-2 border-primary/60 rotate-45 animate-spin"></div>
                      <div className="absolute inset-0 w-24 h-24 border-2 border-secondary/60 rotate-45 animate-spin-reverse"></div>
                    </div>
                  )}
                  {selectedGeometry === 'mandala' && (
                    <div className="relative">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-16 bg-gradient-to-t from-primary to-secondary rounded-full animate-pulse"
                          style={{
                            transform: `rotate(${i * 45}deg)`,
                            transformOrigin: 'center bottom'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Pilgrimage Tours */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Virtual Pilgrimage Tours
              </h2>
              <p className="text-muted-foreground text-lg">
                Journey to sacred places from the comfort of your home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sacredPlaces.map((place, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative h-48 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                    <Map className="h-16 w-16 text-white/80" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{place.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{place.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{place.progress}%</span>
                      </div>
                      <Progress value={place.progress} className="h-2" />
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => {
                        setCurrentPilgrimage(place.name);
                        setPilgrimageProgress(place.progress);
                        setSpiritualXP(prev => prev + 30);
                        toast({
                          title: `Pilgrimage to ${place.name} 🏛️`,
                          description: "Your virtual spiritual journey begins!",
                        });
                      }}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Begin Pilgrimage
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Mood Tracker */}
        <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Spiritual Mood Tracker
              </h2>
              <p className="text-muted-foreground text-lg">
                Track your spiritual wellness and receive personalized guidance
              </p>
            </div>

            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-center">How are you feeling spiritually today?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {[
                      { mood: 'peaceful', icon: Leaf, color: 'text-green-500', label: 'Peaceful' },
                      { mood: 'seeking', icon: Compass, color: 'text-blue-500', label: 'Seeking' },
                      { mood: 'grateful', icon: Heart, color: 'text-pink-500', label: 'Grateful' },
                      { mood: 'contemplative', icon: Eye, color: 'text-purple-500', label: 'Contemplative' },
                      { mood: 'joyful', icon: Sun, color: 'text-yellow-500', label: 'Joyful' }
                    ].map(({ mood, icon: Icon, color, label }) => (
                      <Button
                        key={mood}
                        variant={currentMood === mood ? "default" : "outline"}
                        className="h-20 flex flex-col items-center space-y-2"
                        onClick={() => setCurrentMood(mood as any)}
                      >
                        <Icon className={`h-6 w-6 ${color}`} />
                        <span className="text-xs">{label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center">
                  <h4 className="font-semibold mb-2">Personalized Guidance</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentMood === 'peaceful' && "Your peaceful state is beautiful. Consider deepening it with meditation or nature contemplation."}
                    {currentMood === 'seeking' && "Your seeking spirit is admirable. Explore sacred texts or join a spiritual discussion today."}
                    {currentMood === 'grateful' && "Gratitude opens the heart to divine blessings. Share your joy with others through service."}
                    {currentMood === 'contemplative' && "Deep reflection leads to wisdom. Spend time in quiet contemplation or journaling."}
                    {currentMood === 'joyful' && "Your joy is a gift to the world. Express it through prayer, song, or acts of kindness."}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Explore Section */}
        <section id="explore" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Explore Divine Wisdom
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover the rich tapestry of spiritual knowledge from traditions around the world
              </p>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  List
                </Button>
                <Button
                  variant={viewMode === 'card' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('card')}
                >
                  Cards
                </Button>
              </div>
            </div>

            {/* Deities Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Divine Beings & Spiritual Figures</h3>
              <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :
                viewMode === 'list' ? 'grid-cols-1' :
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {deities.slice(0, 8).map((deity) => (
                  <Card 
                    key={deity.id} 
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/50"
                    onClick={() => handleDeityClick(deity)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                        {deity.religion === 'Hinduism' ? '🕉️' : 
                         deity.religion === 'Christianity' ? '✝️' : 
                         deity.religion === 'Islam' ? '☪️' : 
                         deity.religion === 'Buddhism' ? '☸️' : 
                         deity.religion === 'Judaism' ? '✡️' : 
                         deity.religion === 'Sikhism' ? '☬' : '🙏'}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-xs">
                          {deity.religion}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {deity.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {deity.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {deity.attributes.slice(0, 3).map((attr: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {attr}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sacred Stories Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Sacred Stories & Legends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sacredStories.slice(0, 6).map((story) => (
                  <Card 
                    key={story.id} 
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => handleStoryClick(story)}
                  >
                    <div className="relative h-40 bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-amber-600/60" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="text-xs">
                          {story.religion}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {story.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{story.tradition}</span>
                        <span>{story.era}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Teachings Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Universal Teachings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachings.slice(0, 4).map((teaching) => (
                  <Card 
                    key={teaching.id} 
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => handleTeachingClick(teaching)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Lightbulb className="h-8 w-8 text-primary" />
                        <div className="flex flex-wrap gap-1">
                          {teaching.religions.slice(0, 3).map((religion, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {religion}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {teaching.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {teaching.description}
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {teaching.keyPoints.slice(0, 2).map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Festival Section */}
        <FestivalSection />

        {/* Navagraha Section */}
        <NavagrahaSection />

        {/* Audio Player */}
        <div className="fixed bottom-6 right-6 z-40">
          <Card className="p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center space-x-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  min={0}
                  step={1}
                  className="w-20"
                />
              </div>
              <div className="text-xs text-muted-foreground">
                Devotional Music
              </div>
            </div>
          </Card>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 left-6 z-40">
          <Button
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl animate-pulse-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Sparkles className="h-6 w-6" />
          </Button>
        </div>
      </main>

      {/* Modals */}
      <DeityModal
        deity={selectedDeity}
        isOpen={isDeityModalOpen}
        onClose={() => setIsDeityModalOpen(false)}
      />
      <StoryModal
        story={selectedStory}
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
      <TeachingModal
        teaching={selectedTeaching}
        isOpen={isTeachingModalOpen}
        onClose={() => setIsTeachingModalOpen(false)}
      />
      <HistoryModal
        history={selectedHistory}
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
        onSuccess={() => setShowAuthDialog(false)}
      />
    </div>
  );
}