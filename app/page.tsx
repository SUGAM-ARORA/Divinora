"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
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
  Snowflake,
  Crown,
  Lotus
} from 'lucide-react';

export default function DivinoraApp() {
  // State Management
  const [selectedSection, setSelectedSection] = useState('home');
  const [selectedDeity, setSelectedDeity] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedTeaching, setSelectedTeaching] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Meditation Timer State
  const [meditationTime, setMeditationTime] = useState(5);
  const [isMediating, setIsMediating] = useState(false);
  const [meditationProgress, setMeditationProgress] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  
  // Spiritual Journey State
  const [spiritualLevel, setSpiritualLevel] = useState(1);
  const [spiritualXP, setSpiritualXP] = useState(0);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [completedActivities, setCompletedActivities] = useState([]);
  
  // Chakra State
  const [selectedChakra, setSelectedChakra] = useState(null);
  const [isChanting, setIsChanting] = useState(false);
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  
  // Mood Tracker State
  const [currentMood, setCurrentMood] = useState('peaceful');
  
  // Sacred Geometry State
  const [selectedGeometry, setSelectedGeometry] = useState('flower-of-life');
  
  // Virtual Pilgrimage State
  const [currentPilgrimage, setCurrentPilgrimage] = useState(null);
  const [pilgrimageProgress, setPilgrimageProgress] = useState(0);

  // Data
  const religions = [
    { 
      name: 'Hinduism', 
      icon: '🕉️', 
      color: 'from-orange-500 to-red-500',
      description: 'Ancient wisdom and eternal dharma',
      followers: '1B+'
    },
    { 
      name: 'Christianity', 
      icon: '✝️', 
      color: 'from-blue-500 to-purple-500',
      description: 'Love, faith, and salvation',
      followers: '2.4B+'
    },
    { 
      name: 'Islam', 
      icon: '☪️', 
      color: 'from-green-500 to-teal-500',
      description: 'Peace and submission to Allah',
      followers: '1.8B+'
    },
    { 
      name: 'Buddhism', 
      icon: '☸️', 
      color: 'from-amber-500 to-orange-500',
      description: 'Path to enlightenment',
      followers: '500M+'
    },
    { 
      name: 'Sikhism', 
      icon: '☬', 
      color: 'from-yellow-500 to-orange-500',
      description: 'One God, equality, service',
      followers: '30M+'
    },
    { 
      name: 'Judaism', 
      icon: '✡️', 
      color: 'from-blue-500 to-indigo-500',
      description: 'Covenant and Torah wisdom',
      followers: '15M+'
    },
  ];

  const deities = [
    {
      id: 1,
      name: 'Lord Krishna',
      religion: 'Hinduism',
      description: 'The divine cowherd, teacher of Bhagavad Gita, and embodiment of divine love and wisdom.',
      attributes: ['Love', 'Wisdom', 'Protection', 'Joy']
    },
    {
      id: 2,
      name: 'Jesus Christ',
      religion: 'Christianity',
      description: 'The Son of God, savior of humanity, and teacher of unconditional love and forgiveness.',
      attributes: ['Love', 'Forgiveness', 'Salvation', 'Peace']
    },
    {
      id: 3,
      name: 'Prophet Muhammad',
      religion: 'Islam',
      description: 'The final messenger of Allah, bringing the message of peace, submission, and unity.',
      attributes: ['Peace', 'Unity', 'Guidance', 'Mercy']
    },
    {
      id: 4,
      name: 'Buddha',
      religion: 'Buddhism',
      description: 'The enlightened one who showed the path to liberation from suffering through the middle way.',
      attributes: ['Enlightenment', 'Compassion', 'Wisdom', 'Liberation']
    },
    {
      id: 5,
      name: 'Guru Nanak',
      religion: 'Sikhism',
      description: 'The first Sikh Guru who taught the oneness of God and equality of all human beings.',
      attributes: ['Equality', 'Truth', 'Service', 'Devotion']
    },
    {
      id: 6,
      name: 'Moses',
      religion: 'Judaism',
      description: 'The great prophet who received the Torah and led the Israelites out of Egypt.',
      attributes: ['Leadership', 'Law', 'Freedom', 'Covenant']
    },
    {
      id: 7,
      name: 'Goddess Durga',
      religion: 'Hinduism',
      description: 'The divine mother, protector of dharma, and destroyer of evil forces.',
      attributes: ['Protection', 'Strength', 'Motherhood', 'Justice']
    },
    {
      id: 8,
      name: 'Virgin Mary',
      religion: 'Christianity',
      description: 'The blessed mother of Jesus, symbol of purity, grace, and maternal love.',
      attributes: ['Purity', 'Grace', 'Motherhood', 'Devotion']
    }
  ];

  const sacredStories = [
    {
      id: 1,
      title: 'The Bhagavad Gita',
      religion: 'Hinduism',
      tradition: 'Hindu Scripture',
      era: '5th century BCE',
      description: 'Divine dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, revealing the path of righteousness and spiritual wisdom.'
    },
    {
      id: 2,
      title: 'The Nativity',
      religion: 'Christianity',
      tradition: 'Christian Gospel',
      era: '1st century CE',
      description: 'The miraculous birth of Jesus Christ in Bethlehem, heralding the arrival of the savior and the message of divine love.'
    },
    {
      id: 3,
      title: 'The Night Journey',
      religion: 'Islam',
      tradition: 'Islamic Tradition',
      era: '7th century CE',
      description: "Prophet Muhammad's miraculous night journey from Mecca to Jerusalem and his ascension to the heavens, receiving divine revelations."
    },
    {
      id: 4,
      title: 'The Buddha\'s Enlightenment',
      religion: 'Buddhism',
      tradition: 'Buddhist Teaching',
      era: '6th century BCE',
      description: 'Prince Siddhartha\'s awakening under the Bodhi tree, discovering the Four Noble Truths and the path to liberation from suffering.'
    },
    {
      id: 5,
      title: 'Guru Nanak\'s Divine Vision',
      religion: 'Sikhism',
      tradition: 'Sikh History',
      era: '15th century CE',
      description: 'Young Nanak\'s spiritual experience at the river, receiving divine calling to spread the message of one God and universal brotherhood.'
    },
    {
      id: 6,
      title: 'The Exodus',
      religion: 'Judaism',
      tradition: 'Hebrew Bible',
      era: '13th century BCE',
      description: 'Moses leading the Israelites out of Egyptian bondage, crossing the Red Sea, and receiving the Ten Commandments at Mount Sinai.'
    }
  ];

  const teachings = [
    {
      id: 1,
      title: 'The Golden Rule',
      religions: ['Christianity', 'Judaism', 'Islam', 'Buddhism', 'Hinduism'],
      description: 'Treat others as you would like to be treated - the universal principle of compassion and empathy found across all major religions.',
      keyPoints: [
        'Found in various forms across all major religions',
        'Forms the basis of ethical behavior and social harmony',
        'Promotes empathy and understanding between people',
        'Creates foundation for peaceful coexistence'
      ]
    },
    {
      id: 2,
      title: 'The Path of Compassion',
      religions: ['Buddhism', 'Christianity', 'Islam', 'Hinduism'],
      description: 'Developing loving-kindness and compassion for all beings as the highest spiritual virtue and path to enlightenment.',
      keyPoints: [
        'Compassion as the highest virtue in spiritual development',
        'Universal love extending to all beings without discrimination',
        'Practical methods for cultivating compassionate heart',
        'Compassion as both means and end of spiritual journey'
      ]
    },
    {
      id: 3,
      title: 'Unity in Diversity',
      religions: ['Hinduism', 'Sikhism', 'Christianity', 'Islam'],
      description: 'Recognizing the divine presence in all beings and traditions while celebrating the beautiful diversity of spiritual expressions.',
      keyPoints: [
        'All paths ultimately lead to the same divine truth',
        'Respect for different spiritual traditions and practices',
        'Finding common ground while honoring differences',
        'Unity consciousness beyond religious boundaries'
      ]
    },
    {
      id: 4,
      title: 'Service to Humanity',
      religions: ['Sikhism', 'Christianity', 'Islam', 'Buddhism', 'Hinduism'],
      description: 'Selfless service (Seva) to others as a form of worship and spiritual practice, seeing the divine in all beings.',
      keyPoints: [
        'Service as worship and spiritual discipline',
        'Helping those in need without expectation of reward',
        'Seeing divine presence in all beings we serve',
        'Community service as path to spiritual growth'
      ]
    }
  ];

  const chakras = [
    { name: 'Muladhara', color: 'bg-red-500', element: 'Earth', mantra: 'LAM', position: 'Root' },
    { name: 'Svadhisthana', color: 'bg-orange-500', element: 'Water', mantra: 'VAM', position: 'Sacral' },
    { name: 'Manipura', color: 'bg-yellow-500', element: 'Fire', mantra: 'RAM', position: 'Solar Plexus' },
    { name: 'Anahata', color: 'bg-green-500', element: 'Air', mantra: 'YAM', position: 'Heart' },
    { name: 'Vishuddha', color: 'bg-blue-500', element: 'Space', mantra: 'HAM', position: 'Throat' },
    { name: 'Ajna', color: 'bg-indigo-500', element: 'Light', mantra: 'OM', position: 'Third Eye' },
    { name: 'Sahasrara', color: 'bg-purple-500', element: 'Thought', mantra: 'AUM', position: 'Crown' }
  ];

  const sacredPlaces = [
    { name: 'Varanasi Ghats', progress: 25, description: 'Ancient spiritual city on the Ganges' },
    { name: 'Mount Kailash', progress: 60, description: 'Sacred mountain, abode of Lord Shiva' },
    { name: 'Bodh Gaya', progress: 40, description: 'Where Buddha attained enlightenment' },
    { name: 'Golden Temple', progress: 80, description: 'Holiest Sikh gurdwara in Amritsar' },
    { name: 'Vatican City', progress: 30, description: 'Spiritual center of Christianity' },
    { name: 'Mecca', progress: 70, description: 'Holiest city in Islam' }
  ];

  const dailyWisdom = [
    { text: "The mind is everything. What you think you become.", source: "Buddha", religion: "Buddhism" },
    { text: "You are what your deep, driving desire is.", source: "Upanishads", religion: "Hinduism" },
    { text: "And whoever relies upon Allah - then He is sufficient for him.", source: "Quran", religion: "Islam" },
    { text: "Love your neighbor as yourself.", source: "Bible", religion: "Christianity" },
    { text: "Truth is the highest virtue, but higher still is truthful living.", source: "Guru Nanak", religion: "Sikhism" },
    { text: "The whole world is one family.", source: "Vasudhaiva Kutumbakam", religion: "Universal" }
  ];

  const stats = [
    { label: 'World Religions', value: '12+', icon: Globe },
    { label: 'Sacred Texts', value: '100+', icon: BookOpen },
    { label: 'Daily Users', value: '50K+', icon: Users },
    { label: 'Countries', value: '150+', icon: Star },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Sacred Texts',
      description: 'Explore holy scriptures from all traditions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Festivals',
      description: 'Celebrate divine occasions worldwide',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Meditation',
      description: 'Find inner peace through practice',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow seekers',
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  // Weather-based spiritual guidance
  const getWeatherGuidance = () => {
    const hour = currentTime.getHours();
    if (hour < 6) return { icon: Moon, text: "Perfect time for deep meditation and inner reflection", color: "text-blue-400" };
    if (hour < 12) return { icon: Sunrise, text: "Morning energy is ideal for new beginnings and prayers", color: "text-orange-400" };
    if (hour < 18) return { icon: Sun, text: "Afternoon light brings clarity for studying sacred texts", color: "text-yellow-400" };
    return { icon: Sunset, text: "Evening twilight invites gratitude and peaceful contemplation", color: "text-purple-400" };
  };

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Meditation Timer Logic
  useEffect(() => {
    let interval;
    if (isMediating) {
      interval = setInterval(() => {
        setMeditationProgress(prev => {
          if (prev >= 100) {
            setIsMediating(false);
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
  }, [isMediating, meditationTime]);

  // Spiritual Level Calculation
  useEffect(() => {
    const newLevel = Math.floor(spiritualXP / 100) + 1;
    if (newLevel > spiritualLevel) {
      setSpiritualLevel(newLevel);
    }
  }, [spiritualXP, spiritualLevel]);

  const handleDeityClick = (deity) => {
    setSelectedDeity(deity);
    setSpiritualXP(prev => prev + 10);
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setSpiritualXP(prev => prev + 15);
  };

  const handleTeachingClick = (teaching) => {
    setSelectedTeaching(teaching);
    setSpiritualXP(prev => prev + 20);
  };

  const startMeditation = () => {
    setIsMediating(true);
    setMeditationProgress(0);
  };

  const stopMeditation = () => {
    setIsMediating(false);
    setMeditationProgress(0);
  };

  const handleChakraChant = (index) => {
    setSelectedChakra(index);
    setIsChanting(true);
    setTimeout(() => setIsChanting(false), 3000);
    setSpiritualXP(prev => prev + 25);
  };

  const currentWisdom = dailyWisdom[Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % dailyWisdom.length];
  const weatherGuidance = getWeatherGuidance();

  const renderHomePage = () => (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-8">
            <Sparkles className="h-5 w-5 text-purple-600 animate-bounce" />
            <span className="font-medium text-purple-700 dark:text-purple-300">Universal Spiritual Wisdom</span>
            <Globe className="h-5 w-5 text-pink-600 animate-bounce" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight mb-8">
            Divinora
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            🌍 Explore divine wisdom from all world religions 🌍<br />
            <span className="text-lg">Sacred texts • Spiritual teachings • Meditation practices • Global community</span>
          </p>
          
          {/* Daily Wisdom Quote */}
          <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
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
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
              onClick={() => setSelectedSection('explore')}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Begin Sacred Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/30 text-lg px-8 py-4"
              onClick={startMeditation}
            >
              <Heart className="h-5 w-5 mr-2" />
              Start Meditation
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="mx-auto p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6">
              <Globe className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">World Religions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Explore Sacred Traditions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the beautiful diversity of spiritual paths that guide billions of people worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religions.map((religion, index) => (
              <Card key={religion.name} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:border-purple-300 dark:hover:border-purple-600 h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto p-6 bg-gradient-to-r ${religion.color} rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{religion.icon}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                    {religion.name}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {religion.followers} followers
                  </Badge>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{religion.description}</p>
                  <Button variant="ghost" className="group-hover:bg-purple-50 dark:group-hover:bg-purple-950/30 transition-colors">
                    Explore Tradition →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Spiritual Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tools and resources to deepen your spiritual journey and connect with the divine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm h-full">
                <div className={`mx-auto p-4 bg-gradient-to-r ${feature.color} rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navratri 2025 Special Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Crown className="h-5 w-5 animate-bounce" />
              <span className="font-medium">Special Celebration</span>
              <Sparkles className="h-5 w-5 animate-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Navratri 2025
            </h2>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              🌺 Nine Sacred Nights of Divine Mother Durga 🌺<br />
              <span className="text-lg">October 2-10, 2025 • Daily prayers • Goddess worship • Festive celebrations</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Join Celebration
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Heart className="h-5 w-5 mr-2" />
                Daily Prayers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderExplorePage = () => (
    <div className="space-y-20 pt-20">
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
                } ${isChanting && selectedChakra === index ? 'animate-pulse' : ''}`}
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
                    onClick={() => setSelectedGeometry(geometry.id)}
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
                        className="absolute w-24 h-24 border-2 border-primary/60 rounded-full animate-spin"
                        style={{
                          transform: `rotate(${i * 60}deg) translateY(-40px)`,
                          transformOrigin: 'center 40px',
                          animationDuration: '10s'
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
                    <div className="absolute inset-0 w-24 h-24 border-2 border-secondary/60 rotate-45 animate-spin" style={{animationDirection: 'reverse'}}></div>
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
                      onClick={() => setCurrentMood(mood)}
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

      {/* Deities Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Divine Beings & Spiritual Figures</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  {deity.attributes.slice(0, 3).map((attr, index) => (
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
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      {/* Floating Spiritual Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
        
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
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
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
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
                <Button 
                  variant={selectedSection === 'home' ? 'default' : 'ghost'}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setSelectedSection('home')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Home
                </Button>
                <Button 
                  variant={selectedSection === 'explore' ? 'default' : 'ghost'}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setSelectedSection('explore')}
                >
                  <Compass className="h-4 w-4 mr-2" />
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
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
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
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setSelectedSection('home')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setSelectedSection('explore')}
              >
                <Compass className="h-4 w-4 mr-2" />
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
      <main className="relative z-10">
        {selectedSection === 'home' && renderHomePage()}
        {selectedSection === 'explore' && renderExplorePage()}
      </main>

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
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-3xl animate-pulse"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      </div>

      {/* Deity Modal */}
      {selectedDeity && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => setSelectedDeity(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {selectedDeity.religion === 'Hinduism' ? '🕉️' : 
                   selectedDeity.religion === 'Christianity' ? '✝️' : 
                   selectedDeity.religion === 'Islam' ? '☪️' : 
                   selectedDeity.religion === 'Buddhism' ? '☸️' : 
                   selectedDeity.religion === 'Judaism' ? '✡️' : 
                   selectedDeity.religion === 'Sikhism' ? '☬' : '🙏'}
                </div>
                <CardTitle className="text-2xl mb-2">{selectedDeity.name}</CardTitle>
                <Badge variant="secondary">{selectedDeity.religion}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{selectedDeity.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Divine Attributes</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDeity.attributes.map((attr, index) => (
                    <Badge key={index} variant="outline">{attr}</Badge>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Devotions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => setSelectedStory(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl mb-2">{selectedStory.title}</CardTitle>
                <Badge variant="secondary">{selectedStory.religion}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{selectedStory.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Tradition:</span>
                  <p className="text-muted-foreground">{selectedStory.tradition}</p>
                </div>
                <div>
                  <span className="font-semibold">Era:</span>
                  <p className="text-muted-foreground">{selectedStory.era}</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Full Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Teaching Modal */}
      {selectedTeaching && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => setSelectedTeaching(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl mb-2">{selectedTeaching.title}</CardTitle>
                <div className="flex flex-wrap gap-1 justify-center">
                  {selectedTeaching.religions.map((religion, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {religion}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{selectedTeaching.description}</p>
              <div>
                <h4 className="font-semibold mb-3">Key Points</h4>
                <ul className="space-y-2">
                  {selectedTeaching.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t">
                <Button className="w-full">
                  <Heart className="h-4 w-4 mr-2" />
                  Save Teaching
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-2xl font-bold">Divinora</span>
            </div>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Connecting hearts and souls through the universal wisdom of all spiritual traditions
            </p>
            <div className="flex justify-center space-x-6 text-sm text-purple-300">
              <span>🕉️ Hinduism</span>
              <span>✝️ Christianity</span>
              <span>☪️ Islam</span>
              <span>☸️ Buddhism</span>
              <span>☬ Sikhism</span>
              <span>✡️ Judaism</span>
            </div>
            <p className="text-sm text-purple-400">
              © 2025 Divinora. Spreading love, peace, and universal wisdom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}