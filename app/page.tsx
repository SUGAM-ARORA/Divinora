"use client";
import { ChevronRight, ChevronLeft, Loader2, Globe, Heart, Users, BookOpen, Star, Calendar, Sparkles, Search, Sun, Moon, ChevronUp, Youtube, History, RotateCw, X, Play, Pause, Volume2, VolumeX, Compass, Map, Camera, Share2, Download, Bookmark, Eye, EyeOff, Zap, Wind, Waves, Mountain, TreePine, Flower2, Lightbulb, Brain, Target, Award, Gift, Music, Headphones, Mic, Radio, Palette, Brush, Image, Video, FileText, MessageCircle, Phone, Mail, MapPin, Clock, TrendingUp, Filter, SortAsc, Grid, List, Maximize2, Minimize2, RefreshCw, Settings, HelpCircle, Info, AlertCircle, CheckCircle, XCircle, Plus, Minus, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, MoreHorizontal, MoreVertical, ExternalLink, Copy, Edit, Trash2, Save, Upload, FolderOpen, Archive, Tag, Flag, Shield, Lock, Unlock, Key, User, UserPlus, UserMinus, UserCheck, UserX, Users2, Crown, Gem, Coins, DollarSign, CreditCard, Wallet, ShoppingCart, ShoppingBag, Package, Truck, Home, Building, School, Church, Fuel as Mosque, MoveDiagonal as Synagogue, BookTemplate as Temple, Castle, Landmark, Grid as Bridge, Plane, Car, Bus, Train, Ship, Bike, Wallet as Walk, Sun as Run, Gamepad2, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Puzzle, Trophy, Medal, Ribbon, Flame, Snowflake, Droplets, Cloud, CloudRain, CloudSnow, CloudLightning, Rainbow, Sunrise, Sunset, MoonIcon, Stars, Home as Comet, Rocket, Satellite, Globe2, Earth, Compass as CompassIcon, Navigation, Route, MapPinned, Locate, LocateFixed, LocateOff, Radar, Scan, QrCode, Barcode, Hash, AtSign, Percent, Equal, EqualNot as NotEqual, Calculator, Ruler, Scissors, Paperclip, Link, Unlink, RockingChair as Chain, Anchor, Magnet, Zap as ZapIcon, Battery, BatteryLow, Plug, Power, PowerOff, Wifi, WifiOff, Bluetooth, BluetoothConnected, BluetoothSearching, BluetoothOff, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Antenna, Radio as RadioIcon, Tv, Monitor, Smartphone, Tablet, Laptop, LampDesk as Desktop, Watch, Gamepad, Joystick, Mouse, Keyboard, Printer, Scan as Scanner, Fan as Fax, Webcam, Microscope as Microphone, Speaker, Headphones as HeadphonesIcon, VolumeOff, Volume1, Volume as VolumeIcon, Shuffle, Repeat, Repeat1, SkipBack, SkipForward, FastForward, Rewind, PlayCircle, PauseCircle, StopCircle, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Diamond, Spade, Club, Heart as HeartIcon, Star as StarIcon, Bookmark as BookmarkIcon, Flag as FlagIcon, Pin, PinOff, ThumbsUp as Thumbsup, ThumbsDown, HandMetal, Space as Peace, Handshake, Clapperboard as Clap, Waves as Wave, Route as Salute, SprayCan as Pray, Cast as Namaste } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { FestivalSection } from "@/components/festival-section";
import { NavagrahaSection } from "@/components/navagraha-section";
import { DeityModal } from "@/components/deity-modal";
import { TeachingModal } from "@/components/teaching-modal";
import { StoryModal } from "@/components/story-modal";
import { HistoryModal } from "@/components/history-modal";
import { marked } from 'marked';
import "react-vertical-timeline-component/style.min.css"
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "next-themes";
import { holyBooks, deities, sacredStories, teachings, histories, bhaktiVideos } from "@/lib/content";

type Question = {
  id: number;
  question: string;
  options: string[];
};

type DictionaryState = {
  isOpen: boolean;
  englishWord: string;
  sanskritWord: string;
  isLoading: boolean;
  error: string | null;
};

type PathSelectionState = {
  isOpen: boolean;
  currentQuestionIndex: number;
  answers: string[];
  isLoading: boolean;
  result: string | null;
};

type ViewMode = "grid" | "list" | "card";
type SortMode = "name" | "religion" | "popularity" | "recent";

// New unique features
type MeditationState = {
  isActive: boolean;
  duration: number;
  currentTime: number;
  breathingPhase: 'inhale' | 'hold' | 'exhale';
  soundEnabled: boolean;
};

type VirtualPilgrimageState = {
  isActive: boolean;
  currentLocation: string;
  visitedPlaces: string[];
  currentStep: number;
  totalSteps: number;
};

type SpiritualJourneyState = {
  level: number;
  experience: number;
  badges: string[];
  dailyStreak: number;
  completedActivities: string[];
};

type WeatherSpiritualState = {
  weather: string;
  spiritualMessage: string;
  suggestedPractice: string;
  mood: string;
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<"deity" | "teaching" | "story" | "history" | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [selectedReligion, setSelectedReligion] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortMode, setSortMode] = useState<SortMode>("name");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [volume, setVolume] = useState([50]);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [showDailyWisdom, setShowDailyWisdom] = useState(true);
  const [showWeatherSpiritual, setShowWeatherSpiritual] = useState(false);
  const [showSpiritualCompass, setShowSpiritualCompass] = useState(false);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [showPrayerReminder, setShowPrayerReminder] = useState(false);
  const [showSacredGeometry, setShowSacredGeometry] = useState(false);
  const [showAuraVisualization, setShowAuraVisualization] = useState(false);
  const [showChakraAlignment, setShowChakraAlignment] = useState(false);
  const [showMeditationTimer, setShowMeditationTimer] = useState(false);
  const [showVirtualPilgrimage, setShowVirtualPilgrimage] = useState(false);
  const [showSpiritualJourney, setShowSpiritualJourney] = useState(false);
  const [showDreamJournal, setShowDreamJournal] = useState(false);
  const [showMantraGenerator, setShowMantraGenerator] = useState(false);
  const [showSacredCalendar, setShowSacredCalendar] = useState(false);
  const [showEnergyVisualization, setShowEnergyVisualization] = useState(false);

  // New state for unique features
  const [meditation, setMeditation] = useState<MeditationState>({
    isActive: false,
    duration: 300, // 5 minutes
    currentTime: 0,
    breathingPhase: 'inhale',
    soundEnabled: true
  });

  const [virtualPilgrimage, setVirtualPilgrimage] = useState<VirtualPilgrimageState>({
    isActive: false,
    currentLocation: '',
    visitedPlaces: [],
    currentStep: 0,
    totalSteps: 10
  });

  const [spiritualJourney, setSpiritualJourney] = useState<SpiritualJourneyState>({
    level: 1,
    experience: 0,
    badges: [],
    dailyStreak: 0,
    completedActivities: []
  });

  const [weatherSpiritual, setWeatherSpiritual] = useState<WeatherSpiritualState>({
    weather: 'sunny',
    spiritualMessage: 'Let your inner light shine as bright as the sun',
    suggestedPractice: 'Sun Salutation Meditation',
    mood: 'energetic'
  });

  const [currentMood, setCurrentMood] = useState('peaceful');
  const [dailyWisdom, setDailyWisdom] = useState({
    quote: "The light that shines in the eye is really the light of the heart.",
    author: "Rumi",
    religion: "Sufism"
  });

  const [dictionary, setDictionary] = useState<DictionaryState>({
    isOpen: false,
    englishWord: "",
    sanskritWord: "",
    isLoading: false,
    error: null
  });

  const timelineEvents = [
    {
      year: "3300 BCE - 1700 BCE",
      title: "Indus Valley Civilization",
      description: "One of the oldest civilizations, known for its urban planning, drainage systems, and trade networks. Cities like Harappa and Mohenjo-Daro flourished.",
    },
    {
      year: "c. 2000 BCE",
      title: "Abraham's Covenant",
      description: "Abraham's covenant with God, establishing the foundation of monotheistic traditions including Judaism, Christianity, and Islam.",
    },
    {
      year: "1500 BCE - 500 BCE",
      title: "Vedic Period",
      description: "The period when the Vedas, the oldest scriptures of Hinduism, were composed. It laid the foundation for Hindu philosophy, rituals, and social structure.",
    },
    {
      year: "c. 1300 BCE",
      title: "Moses and the Torah",
      description: "Moses receives the Torah at Mount Sinai, establishing the foundation of Jewish law and monotheistic worship.",
    },
    {
      year: "563-483 BCE",
      title: "Life of Buddha",
      description: "Siddhartha Gautama attains enlightenment and becomes the Buddha, founding Buddhism and teaching the path to liberation from suffering.",
    },
    {
      year: "4 BCE - 30 CE",
      title: "Life of Jesus Christ",
      description: "The birth, ministry, crucifixion, and resurrection of Jesus Christ, the central figure of Christianity.",
    },
    {
      year: "570-632 CE",
      title: "Prophet Muhammad (PBUH)",
      description: "The life of Prophet Muhammad, the final messenger in Islam, who received the Quran and established the Islamic faith.",
    },
    {
      year: "1469-1539 CE",
      title: "Guru Nanak Dev Ji",
      description: "The founder of Sikhism who preached the unity of God, equality of all humans, and the importance of honest living.",
    }
  ];

  const religions = [
    { id: "all", name: "All Traditions", icon: <Globe className="h-4 w-4" />, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "Hinduism", name: "Hinduism", icon: "🕉️", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { id: "Christianity", name: "Christianity", icon: "✝️", color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
    { id: "Islam", name: "Islam", icon: "☪️", color: "bg-gradient-to-r from-green-500 to-teal-500" },
    { id: "Buddhism", name: "Buddhism", icon: "☸️", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { id: "Judaism", name: "Judaism", icon: "🔯", color: "bg-gradient-to-r from-blue-600 to-purple-600" },
    { id: "Sikhism", name: "Sikhism", icon: "☬", color: "bg-gradient-to-r from-amber-500 to-yellow-500" }
  ];

  const [pathSelection, setPathSelection] = useState<PathSelectionState>({
    isOpen: false,
    currentQuestionIndex: 0,
    answers: [],
    isLoading: false,
    result: null
  });

  const pathQuestions: Question[] = [
    {
      id: 1,
      question: "What is your primary spiritual goal?",
      options: [
        "Inner Peace and Harmony",
        "Divine Connection and Love",
        "Wisdom and Understanding",
        "Service to Others",
        "Liberation from Suffering"
      ]
    },
    {
      id: 2,
      question: "Which spiritual practice resonates most with you?",
      options: [
        "Prayer and Worship",
        "Meditation and Contemplation",
        "Study of Sacred Texts",
        "Community Service",
        "Ritual and Ceremony"
      ]
    },
    {
      id: 3,
      question: "How do you prefer to connect with the Divine?",
      options: [
        "Through personal prayer",
        "In community worship",
        "In nature and solitude",
        "Through service to others",
        "Through sacred music and art"
      ]
    },
    {
      id: 4,
      question: "What spiritual value is most important to you?",
      options: [
        "Compassion and Love",
        "Truth and Honesty",
        "Justice and Fairness",
        "Humility and Surrender",
        "Wisdom and Knowledge"
      ]
    },
    {
      id: 5,
      question: "Which approach to spirituality appeals to you most?",
      options: [
        "Devotional and heart-centered",
        "Intellectual and philosophical",
        "Practical and service-oriented",
        "Mystical and experiential",
        "Traditional and ritualistic"
      ]
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Bhagavad Gita",
      religion: "Hinduism",
      description: "The sacred Hindu scripture that contains the spiritual teachings of Lord Krishna to Arjuna.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://ebooks.tirumala.org/downloads/The%20Bhagavad%20Gita.pdf"
    },
    {
      id: 2,
      title: "Holy Bible",
      religion: "Christianity",
      description: "The sacred text of Christianity, containing the Old and New Testaments.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.bible.com/"
    },
    {
      id: 3,
      title: "Holy Quran",
      religion: "Islam",
      description: "The central religious text of Islam, believed to be a revelation from Allah.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://quran.com/"
    },
    {
      id: 4,
      title: "Tripitaka",
      religion: "Buddhism",
      description: "The traditional term for the Buddhist scriptures, the earliest collection of Buddhist teachings.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.accesstoinsight.org/"
    },
    {
      id: 5,
      title: "Torah",
      religion: "Judaism",
      description: "The central text of Judaism, comprising the first five books of the Hebrew Bible.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.sefaria.org/"
    },
    {
      id: 6,
      title: "Guru Granth Sahib",
      religion: "Sikhism",
      description: "The central religious scripture of Sikhism, regarded as the final, sovereign guru.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.sikhnet.com/gurbani"
    }
  ];

  // Unique features data
  const sacredGeometryPatterns = [
    { name: "Flower of Life", meaning: "Unity and creation", pattern: "🌸" },
    { name: "Sri Yantra", meaning: "Divine feminine energy", pattern: "🔺" },
    { name: "Merkaba", meaning: "Light-spirit-body", pattern: "⭐" },
    { name: "Mandala", meaning: "Circle of completion", pattern: "🎯" },
    { name: "Celtic Knot", meaning: "Eternal cycle", pattern: "🌀" },
    { name: "Tree of Life", meaning: "Connection of all life", pattern: "🌳" }
  ];

  const chakras = [
    { name: "Root", color: "red", element: "Earth", mantra: "LAM" },
    { name: "Sacral", color: "orange", element: "Water", mantra: "VAM" },
    { name: "Solar Plexus", color: "yellow", element: "Fire", mantra: "RAM" },
    { name: "Heart", color: "green", element: "Air", mantra: "YAM" },
    { name: "Throat", color: "blue", element: "Space", mantra: "HAM" },
    { name: "Third Eye", color: "indigo", element: "Light", mantra: "OM" },
    { name: "Crown", color: "violet", element: "Thought", mantra: "SILENCE" }
  ];

  const virtualPilgrimageSites = [
    { name: "Varanasi, India", religion: "Hinduism", description: "The spiritual capital of India" },
    { name: "Jerusalem", religion: "Christianity/Judaism/Islam", description: "Holy city for three faiths" },
    { name: "Mecca, Saudi Arabia", religion: "Islam", description: "Holiest site in Islam" },
    { name: "Bodh Gaya, India", religion: "Buddhism", description: "Where Buddha attained enlightenment" },
    { name: "Golden Temple, India", religion: "Sikhism", description: "Holiest Sikh shrine" },
    { name: "Mount Kailash, Tibet", religion: "Hinduism/Buddhism", description: "Sacred mountain" }
  ];

  const moodOptions = [
    { name: "Peaceful", icon: "🕊️", color: "blue" },
    { name: "Grateful", icon: "🙏", color: "green" },
    { name: "Contemplative", icon: "🤔", color: "purple" },
    { name: "Joyful", icon: "😊", color: "yellow" },
    { name: "Seeking", icon: "🔍", color: "orange" },
    { name: "Compassionate", icon: "❤️", color: "red" }
  ];

  useEffect(() => {
    setMounted(true);
    // Load user preferences
    const savedFavorites = localStorage.getItem('divinora-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    // Initialize spiritual journey
    const savedJourney = localStorage.getItem('divinora-journey');
    if (savedJourney) {
      setSpiritualJourney(JSON.parse(savedJourney));
    }

    // Set daily wisdom
    const today = new Date().toDateString();
    const savedWisdom = localStorage.getItem('divinora-daily-wisdom');
    const savedDate = localStorage.getItem('divinora-wisdom-date');
    
    if (savedDate !== today) {
      // Generate new daily wisdom
      const wisdomQuotes = [
        { quote: "The light that shines in the eye is really the light of the heart.", author: "Rumi", religion: "Sufism" },
        { quote: "Be yourself and you will know the non-self.", author: "Buddha", religion: "Buddhism" },
        { quote: "God is closer to you than your jugular vein.", author: "Quran", religion: "Islam" },
        { quote: "The kingdom of God is within you.", author: "Jesus Christ", religion: "Christianity" },
        { quote: "Truth is one, sages call it by many names.", author: "Rigveda", religion: "Hinduism" },
        { quote: "Recognize the whole human race as one.", author: "Guru Nanak", religion: "Sikhism" }
      ];
      const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
      setDailyWisdom(randomWisdom);
      localStorage.setItem('divinora-daily-wisdom', JSON.stringify(randomWisdom));
      localStorage.setItem('divinora-wisdom-date', today);
    } else if (savedWisdom) {
      setDailyWisdom(JSON.parse(savedWisdom));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Save favorites to localStorage
    localStorage.setItem('divinora-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    // Save spiritual journey to localStorage
    localStorage.setItem('divinora-journey', JSON.stringify(spiritualJourney));
  }, [spiritualJourney]);

  // Meditation timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (meditation.isActive) {
      interval = setInterval(() => {
        setMeditation(prev => {
          if (prev.currentTime >= prev.duration) {
            return { ...prev, isActive: false, currentTime: 0 };
          }
          
          // Breathing pattern: 4 seconds inhale, 4 seconds hold, 4 seconds exhale
          const cycleTime = prev.currentTime % 12;
          let breathingPhase: 'inhale' | 'hold' | 'exhale';
          if (cycleTime < 4) breathingPhase = 'inhale';
          else if (cycleTime < 8) breathingPhase = 'hold';
          else breathingPhase = 'exhale';
          
          return {
            ...prev,
            currentTime: prev.currentTime + 1,
            breathingPhase
          };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [meditation.isActive]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filterContent = (items: any[], term: string, religion: string = "all") => {
    if (!items) return [];
    let filtered = items.filter((item) => {
      const matchesSearch = 
        item.name?.toLowerCase().includes(term.toLowerCase()) ||
        item.title?.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase());
      
      const matchesReligion = religion === "all" || 
        item.religion === religion || 
        item.religions?.includes(religion);
      
      return matchesSearch && matchesReligion;
    });

    // Apply sorting
    switch (sortMode) {
      case "name":
        filtered.sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
        break;
      case "religion":
        filtered.sort((a, b) => a.religion.localeCompare(b.religion));
        break;
      case "popularity":
        // Sort by favorites first, then by name
        filtered.sort((a, b) => {
          const aFav = favorites.includes(a.id || a.name);
          const bFav = favorites.includes(b.id || b.name);
          if (aFav && !bFav) return -1;
          if (!aFav && bFav) return 1;
          return (a.name || a.title).localeCompare(b.name || b.title);
        });
        break;
    }

    return filtered;
  };

  const handleItemClick = (item: any, type: "deity" | "teaching" | "story" | "history") => {
    setSelectedItem(item);
    setModalType(type);
    
    // Add to spiritual journey experience
    setSpiritualJourney(prev => ({
      ...prev,
      experience: prev.experience + 10,
      completedActivities: [...prev.completedActivities, `viewed_${type}_${item.id || item.name}`]
    }));
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const openPathSelection = () => {
    setPathSelection({
      isOpen: true,
      currentQuestionIndex: 0,
      answers: [],
      isLoading: false,
      result: null
    });
  };

  const closePathSelection = () => {
    setPathSelection({
      isOpen: false,
      currentQuestionIndex: 0,
      answers: [],
      isLoading: false,
      result: null
    });
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...pathSelection.answers, answer];
    setPathSelection(prev => ({
      ...prev,
      answers: newAnswers
    }));

    if (pathSelection.currentQuestionIndex < pathQuestions.length - 1) {
      setPathSelection(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      getSpiritualRecommendation(newAnswers);
    }
  };

  const goToPreviousQuestion = () => {
    if (pathSelection.currentQuestionIndex > 0) {
      const newAnswers = [...pathSelection.answers];
      newAnswers.pop();

      setPathSelection(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        answers: newAnswers
      }));
    }
  };

  const mockRecommendations = [
    `**Devotional Path (Bhakti)**\n\nBased on your responses, a heart-centered devotional approach would suit you well. Focus on:\n\n• Daily prayer and worship\n• Singing devotional songs\n• Reading inspiring spiritual stories\n• Cultivating love and surrender to the Divine`,
    `**Wisdom Path (Jnana)**\n\nYour inclination toward knowledge suggests the path of wisdom. Consider:\n\n• Study of sacred texts and philosophy\n• Contemplative meditation\n• Self-inquiry practices\n• Seeking guidance from wise teachers`,
    `**Service Path (Karma)**\n\nYour desire to serve others indicates the path of selfless action. Practice:\n\n• Community service and charity\n• Helping those in need\n• Working without attachment to results\n• Seeing the Divine in all beings`
  ];

  const getSpiritualRecommendation = async (answers: string[]) => {
    setPathSelection(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch('/api/path-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to get recommendation');
      }

      setPathSelection(prev => ({
        ...prev,
        result: data.recommendation,
        isLoading: false
      }));
    } catch (error) {
      setPathSelection(prev => ({
        ...prev,
        error: "Connection issue - showing sample recommendation",
        result: mockRecommendations[
          Math.floor(Math.random() * mockRecommendations.length)
        ],
        isLoading: false
      }));
    }
  };

  const restartPathSelection = () => {
    setPathSelection({
      isOpen: true,
      currentQuestionIndex: 0,
      answers: [],
      isLoading: false,
      result: null
    });
  };

  const startMeditation = (duration: number) => {
    setMeditation({
      isActive: true,
      duration,
      currentTime: 0,
      breathingPhase: 'inhale',
      soundEnabled: true
    });
  };

  const stopMeditation = () => {
    setMeditation(prev => ({ ...prev, isActive: false, currentTime: 0 }));
  };

  const startVirtualPilgrimage = (location: string) => {
    setVirtualPilgrimage({
      isActive: true,
      currentLocation: location,
      visitedPlaces: [location],
      currentStep: 1,
      totalSteps: 10
    });
    setShowVirtualPilgrimage(true);
  };

  const playAudio = (track: any) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    
    // Create a mock audio experience since we can't actually play audio files
    setCurrentTrack(track);
    setIsPlaying(true);
    setShowMiniPlayer(true);
    
    // Simulate audio playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 30000); // Stop after 30 seconds for demo
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTranslate = async () => {
    if (!dictionary.englishWord.trim()) return;

    setDictionary(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      sanskritWord: ""
    }));

    try {
      const translation = await translateToSanskrit(dictionary.englishWord);

      setDictionary(prev => ({
        ...prev,
        sanskritWord: translation,
        isLoading: false
      }));
    } catch (error) {
      setDictionary(prev => ({
        ...prev,
        error: "Failed to translate. Please try again.",
        isLoading: false
      }));
    }
  };

  const translateToSanskrit = async (word: string): Promise<string> => {
    const commonTranslations: Record<string, string> = {
      "peace": "शान्तिः",
      "love": "प्रेम",
      "wisdom": "ज्ञानम्",
      "light": "ज्योतिः",
      "truth": "सत्यम्",
      "hello": "नमस्ते",
      "thank you": "धन्यवादः",
      "god": "भगवान्",
      "prayer": "प्रार्थना",
      "meditation": "ध्यानम्",
      "soul": "आत्मा",
      "divine": "दिव्य",
      "sacred": "पवित्र",
      "temple": "मन्दिरम्",
      "blessing": "आशीर्वाद"
    };

    const lowerWord = word.toLowerCase();
    if (commonTranslations[lowerWord]) {
      return commonTranslations[lowerWord];
    }

    throw new Error('Translation not available');
  };

  const pronounceWord = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const sanskritVoice = voices.find(voice =>
      voice.lang.toLowerCase().includes('sa') ||
      voice.lang.toLowerCase().includes('hi')
    );

    if (sanskritVoice) {
      utterance.voice = sanskritVoice;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const renderContentGrid = (items: any[], type: string) => {
    const filteredItems = filterContent(items, searchTerm, selectedReligion);
    
    if (viewMode === "list") {
      return (
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-primary/50 hover:border-l-primary bg-gradient-to-r from-card to-card/50"
              onClick={() => handleItemClick(item, type as any)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.religion || "Universal"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id || item.name);
                      }}
                      className="p-1 h-auto"
                    >
                      <Heart 
                        className={`h-4 w-4 transition-colors ${
                          favorites.includes(item.id || item.name) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-muted-foreground hover:text-red-500'
                        }`} 
                      />
                    </Button>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.name || item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      );
    }

    return (
      <div className={`grid gap-6 transition-all duration-300 ${
        viewMode === "card" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }`}>
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 ${
              viewMode === "card" ? "p-6" : "p-4"
            }`}
            onClick={() => handleItemClick(item, type as any)}
          >
            <CardHeader className={viewMode === "card" ? "pb-4" : "pb-2"}>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {item.religion || "Universal"}
                </Badge>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id || item.name);
                    }}
                    className="p-1 h-auto"
                  >
                    <Heart 
                      className={`h-4 w-4 transition-colors ${
                        favorites.includes(item.id || item.name) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-muted-foreground hover:text-red-500'
                      }`} 
                    />
                  </Button>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
              <CardTitle className={`group-hover:text-primary transition-colors ${
                viewMode === "card" ? "text-xl" : "text-lg"
              }`}>
                {item.name || item.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className={`text-muted-foreground mb-4 ${
                viewMode === "card" ? "line-clamp-3" : "line-clamp-2"
              }`}>
                {item.description}
              </p>
              
              {item.attributes && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.attributes.slice(0, viewMode === "card" ? 4 : 3).map((attr: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {attr}
                    </Badge>
                  ))}
                  {item.attributes.length > (viewMode === "card" ? 4 : 3) && (
                    <Badge variant="outline" className="text-xs">
                      +{item.attributes.length - (viewMode === "card" ? 4 : 3)} more
                    </Badge>
                  )}
                </div>
              )}
              
              {item.religions && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.religions.slice(0, 4).map((religion: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {religion}
                    </Badge>
                  ))}
                  {item.religions.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{item.religions.length - 4}
                    </Badge>
                  )}
                </div>
              )}
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-primary to-secondary p-4 rounded-full">
              <BookOpen className="h-12 w-12 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Loading Divinora...
          </h2>
          <p className="text-muted-foreground">Preparing your spiritual journey</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 z-50 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 gap-4 sm:gap-0 py-4 sm:py-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-primary to-secondary p-2 rounded-full">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Divinora
                </h1>
                <p className="text-xs text-muted-foreground">Universal Spiritual Wisdom</p>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                onClick={() => setShowTimeline(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <History className="h-4 w-4" />
                <span className="text-sm">Timeline</span>
              </Button>
              <Button
                onClick={() => setShowGuides(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Sacred Texts</span>
              </Button>
              <Button
                onClick={openPathSelection}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Star className="h-4 w-4" />
                <span className="text-sm">Find Path</span>
              </Button>
              <Button
                onClick={() => setDictionary(prev => ({ ...prev, isOpen: true }))}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">Translate</span>
              </Button>
              <Button
                onClick={() => setShowMeditationTimer(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Brain className="h-4 w-4" />
                <span className="text-sm">Meditate</span>
              </Button>
              <Button
                onClick={() => setShowVirtualTour(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Map className="h-4 w-4" />
                <span className="text-sm">Virtual Tour</span>
              </Button>
            </div>

            {/* Enhanced Search and Controls */}
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search divine wisdom..."
                  className="pl-10 w-full border-2 focus:border-primary/50 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
                className="hover:scale-110 transition-transform duration-300 rounded-full"
              >
                <Filter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:scale-110 transition-transform duration-300 rounded-full"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Enhanced Filters Panel */}
          {showFilters && (
            <div className="border-t py-4 space-y-4 animate-in slide-in-from-top-2">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">View:</span>
                  <div className="flex border rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="px-3 py-1"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="px-3 py-1"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "card" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("card")}
                      className="px-3 py-1"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Sort:</span>
                  <select
                    value={sortMode}
                    onChange={(e) => setSortMode(e.target.value as SortMode)}
                    className="px-3 py-1 border rounded-md bg-background text-sm"
                  >
                    <option value="name">Name</option>
                    <option value="religion">Religion</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="flex items-center gap-2"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  <span className="text-sm">{isFullscreen ? "Exit" : "Fullscreen"}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Daily Wisdom Banner */}
      {showDailyWisdom && (
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">Daily Wisdom</p>
                  <p className="text-sm text-muted-foreground italic">"{dailyWisdom.quote}"</p>
                  <p className="text-xs text-muted-foreground">— {dailyWisdom.author}, {dailyWisdom.religion}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDailyWisdom(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Spiritual Journey Progress */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b bg-gradient-to-r from-background to-secondary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium">Level {spiritualJourney.level}</span>
            </div>
            <div className="flex-1 max-w-xs">
              <Progress value={(spiritualJourney.experience % 100)} className="h-2" />
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm">{spiritualJourney.dailyStreak} day streak</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {spiritualJourney.badges.slice(0, 3).map((badge, index) => (
              <div key={index} className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 text-white" />
              </div>
            ))}
            {spiritualJourney.badges.length > 3 && (
              <span className="text-xs text-muted-foreground">+{spiritualJourney.badges.length - 3}</span>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
        <div className="relative py-16 sm:py-24">
          <header className="text-center mb-12 px-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-in fade-in-0 slide-in-from-top-4">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Welcome to Universal Spirituality</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-top-6 duration-1000">
              Explore Divine Wisdom
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-top-8 duration-1000 delay-300">
              Discover the profound teachings and timeless wisdom from all world religions and spiritual traditions. 
              A sacred space where seekers of all faiths can find inspiration, guidance, and universal truth.
            </p>
            
            {/* Enhanced Religion Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              {religions.map((religion) => (
                <Button
                  key={religion.id}
                  variant={selectedReligion === religion.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedReligion(religion.id)}
                  className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    selectedReligion === religion.id ? religion.color + " text-white shadow-lg" : ""
                  }`}
                >
                  {typeof religion.icon === 'string' ? (
                    <span className="text-sm">{religion.icon}</span>
                  ) : (
                    religion.icon
                  )}
                  <span className="text-sm">{religion.name}</span>
                </Button>
              ))}
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-card to-primary/5" onClick={() => setShowMeditationTimer(true)}>
                <div className="text-center space-y-2">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Meditate</h3>
                  <p className="text-xs text-muted-foreground">Guided meditation</p>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-card to-secondary/5" onClick={() => setShowVirtualTour(true)}>
                <div className="text-center space-y-2">
                  <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                    <Map className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-sm">Virtual Tour</h3>
                  <p className="text-xs text-muted-foreground">Sacred places</p>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-card to-amber-500/5" onClick={() => setShowSacredGeometry(true)}>
                <div className="text-center space-y-2">
                  <div className="p-3 bg-amber-500/10 rounded-full w-fit mx-auto">
                    <Compass className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-sm">Sacred Geometry</h3>
                  <p className="text-xs text-muted-foreground">Divine patterns</p>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-card to-green-500/5" onClick={() => setShowMoodTracker(true)}>
                <div className="text-center space-y-2">
                  <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-sm">Mood Tracker</h3>
                  <p className="text-xs text-muted-foreground">Spiritual wellness</p>
                </div>
              </Card>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <div className={`nav-container py-12 ${isFullscreen ? 'max-w-full px-2' : ''}`}>
        <Tabs defaultValue="deities" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:max-w-5xl lg:mx-auto gap-2 h-auto p-2">
            <TabsTrigger value="deities" className="card-hover flex items-center gap-2 py-3">
              <Sparkles className="h-4 w-4" />
              <span>Sacred Figures</span>
            </TabsTrigger>
            <TabsTrigger value="teachings" className="card-hover flex items-center gap-2 py-3">
              <Users className="h-4 w-4" />
              <span>Teachings</span>
            </TabsTrigger>
            <TabsTrigger value="stories" className="card-hover flex items-center gap-2 py-3">
              <BookOpen className="h-4 w-4" />
              <span>Sacred Stories</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="card-hover flex items-center gap-2 py-3">
              <History className="h-4 w-4" />
              <span>History</span>
            </TabsTrigger>
            <TabsTrigger value="texts" className="card-hover flex items-center gap-2 py-3">
              <BookOpen className="h-4 w-4" />
              <span>Sacred Texts</span>
            </TabsTrigger>
            <TabsTrigger value="devotional" className="card-hover flex items-center gap-2 py-3">
              <Youtube className="h-4 w-4" />
              <span>Devotional</span>
            </TabsTrigger>
          </TabsList>

          {/* Sacred Figures Tab */}
          <TabsContent value="deities" className="space-y-8">
            {renderContentGrid(deities, "deity")}
          </TabsContent>

          {/* Teachings Tab */}
          <TabsContent value="teachings" className="space-y-8">
            {renderContentGrid(teachings, "teaching")}
          </TabsContent>

          {/* Sacred Stories Tab */}
          <TabsContent value="stories" className="space-y-8">
            {renderContentGrid(sacredStories, "story")}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8">
            {renderContentGrid(histories, "history")}
          </TabsContent>

          {/* Sacred Texts Tab */}
          <TabsContent value="texts" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(holyBooks, searchTerm, selectedReligion).map((book) => (
                <Card key={book.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {book.religion}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(book.id.toString());
                          }}
                          className="p-1 h-auto"
                        >
                          <Heart 
                            className={`h-4 w-4 transition-colors ${
                              favorites.includes(book.id.toString()) 
                                ? 'text-red-500 fill-red-500' 
                                : 'text-muted-foreground hover:text-red-500'
                            }`} 
                          />
                        </Button>
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {book.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{book.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div>
                        <span className="font-medium">Language:</span>
                        <p className="text-muted-foreground">{book.language}</p>
                      </div>
                      <div>
                        <span className="font-medium">Verses:</span>
                        <p className="text-muted-foreground">{book.verses}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-blue-500 transition-colors">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-green-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Enhanced Devotional Videos Tab */}
          <TabsContent value="devotional" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(bhaktiVideos, searchTerm, selectedReligion).map((video) => (
                <Card key={video.id} className="group p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50">
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => playAudio(video)}
                        className="p-2 h-auto bg-black/50 hover:bg-black/70 text-white border-0"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => toggleFavorite(video.id.toString())}
                        className="p-2 h-auto bg-black/50 hover:bg-black/70 text-white border-0"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.includes(video.id.toString()) 
                              ? 'text-red-500 fill-red-500' 
                              : 'text-white'
                          }`} 
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {video.religion}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Youtube className="h-4 w-4 mr-2 text-red-500" />
                      <span>{video.channel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Feature Sections */}
        <section className="mt-20 space-y-20">
          <FestivalSection />
          <NavagrahaSection />
        </section>
      </div>

      {/* Mini Audio Player */}
      {showMiniPlayer && currentTrack && (
        <div className="fixed bottom-4 right-4 bg-card border rounded-lg shadow-lg p-4 w-80 z-40 animate-in slide-in-from-bottom-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Music className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentTrack.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentTrack.channel}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={togglePlayPause}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowMiniPlayer(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      )}

      {/* All Modals */}
      {modalType === "deity" && selectedItem && (
        <DeityModal
          deity={selectedItem}
          isOpen={modalType === "deity"}
          onClose={closeModal}
        />
      )}

      {modalType === "teaching" && selectedItem && (
        <TeachingModal
          teaching={selectedItem}
          isOpen={modalType === "teaching"}
          onClose={closeModal}
        />
      )}

      {modalType === "story" && selectedItem && (
        <StoryModal
          story={selectedItem}
          isOpen={modalType === "story"}
          onClose={closeModal}
        />
      )}

      {modalType === "history" && selectedItem && (
        <HistoryModal
          history={selectedItem}
          isOpen={modalType === "history"}
          onClose={closeModal}
        />
      )}

      {/* Meditation Timer Modal */}
      {showMeditationTimer && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-md animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Meditation Timer
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMeditationTimer(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {!meditation.isActive ? (
                <>
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <Brain className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Choose Your Session</h3>
                    <p className="text-muted-foreground">Select a duration for your meditation practice</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={() => startMeditation(300)}
                      className="h-16 flex flex-col items-center justify-center space-y-1"
                      variant="outline"
                    >
                      <Clock className="h-5 w-5" />
                      <span>5 min</span>
                    </Button>
                    <Button
                      onClick={() => startMeditation(600)}
                      className="h-16 flex flex-col items-center justify-center space-y-1"
                      variant="outline"
                    >
                      <Clock className="h-5 w-5" />
                      <span>10 min</span>
                    </Button>
                    <Button
                      onClick={() => startMeditation(900)}
                      className="h-16 flex flex-col items-center justify-center space-y-1"
                      variant="outline"
                    >
                      <Clock className="h-5 w-5" />
                      <span>15 min</span>
                    </Button>
                    <Button
                      onClick={() => startMeditation(1200)}
                      className="h-16 flex flex-col items-center justify-center space-y-1"
                      variant="outline"
                    >
                      <Clock className="h-5 w-5" />
                      <span>20 min</span>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-6">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-primary/20"></div>
                    <div 
                      className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent animate-spin"
                      style={{ animationDuration: '4s' }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">
                          {Math.floor((meditation.duration - meditation.currentTime) / 60)}:
                          {String((meditation.duration - meditation.currentTime) % 60).padStart(2, '0')}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {meditation.breathingPhase}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg font-medium">
                        {meditation.breathingPhase === 'inhale' && 'Breathe In...'}
                        {meditation.breathingPhase === 'hold' && 'Hold...'}
                        {meditation.breathingPhase === 'exhale' && 'Breathe Out...'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Follow the breathing pattern for a peaceful meditation
                      </p>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <Button onClick={stopMeditation} variant="outline">
                        <Square className="h-4 w-4 mr-2" />
                        Stop
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={meditation.soundEnabled}
                          onCheckedChange={(checked) => 
                            setMeditation(prev => ({ ...prev, soundEnabled: checked }))
                          }
                        />
                        <span className="text-sm">Sound</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sacred Geometry Modal */}
      {showSacredGeometry && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary" />
                Sacred Geometry
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSacredGeometry(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Divine Patterns in Nature</h3>
                <p className="text-muted-foreground">
                  Explore the mathematical patterns that appear throughout creation, 
                  representing the underlying order of the universe.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sacredGeometryPatterns.map((pattern, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-6xl mb-4">{pattern.pattern}</div>
                    <h4 className="text-lg font-semibold mb-2">{pattern.name}</h4>
                    <p className="text-sm text-muted-foreground">{pattern.meaning}</p>
                    <Button variant="outline" className="mt-4 w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      Meditate
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Sacred Geometry in Practice</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  These patterns can be used for meditation, contemplation, and understanding 
                  the divine order that underlies all of creation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Meditation Focus</Badge>
                  <Badge variant="outline">Spiritual Art</Badge>
                  <Badge variant="outline">Divine Mathematics</Badge>
                  <Badge variant="outline">Universal Harmony</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chakra Alignment Modal */}
      {showChakraAlignment && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Chakra Alignment
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowChakraAlignment(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Energy Centers</h3>
                <p className="text-muted-foreground">
                  Balance your chakras for optimal spiritual and physical well-being
                </p>
              </div>

              <div className="space-y-4">
                {chakras.map((chakra, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-secondary/5 transition-colors">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: chakra.color }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{chakra.name} Chakra</h4>
                      <p className="text-sm text-muted-foreground">Element: {chakra.element}</p>
                      <p className="text-sm font-mono">{chakra.mantra}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Chant
                    </Button>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Start Full Chakra Meditation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tour Modal */}
      {showVirtualTour && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Map className="h-6 w-6 text-primary" />
                Virtual Pilgrimage
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowVirtualTour(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Sacred Places Around the World</h3>
                <p className="text-muted-foreground">
                  Experience the spiritual energy of holy sites from the comfort of your home
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {virtualPilgrimageSites.map((site, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">{site.name}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {site.religion}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => startVirtualPilgrimage(site.name)}
                          className="p-1 h-auto"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                      <h4 className="font-semibold mb-2">{site.name}</h4>
                      <p className="text-sm text-muted-foreground">{site.description}</p>
                      <Button variant="outline" className="w-full mt-4">
                        <Camera className="h-4 w-4 mr-2" />
                        Start Virtual Visit
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mood Tracker Modal */}
      {showMoodTracker && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-md animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Spiritual Mood Tracker
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMoodTracker(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">How are you feeling spiritually today?</h3>
                <p className="text-sm text-muted-foreground">
                  Track your spiritual wellness and receive personalized guidance
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {moodOptions.map((mood, index) => (
                  <Button
                    key={index}
                    variant={currentMood === mood.name.toLowerCase() ? "default" : "outline"}
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => setCurrentMood(mood.name.toLowerCase())}
                  >
                    <span className="text-2xl">{mood.icon}</span>
                    <span className="text-sm">{mood.name}</span>
                  </Button>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <h4 className="font-semibold mb-2">Recommended Practice</h4>
                <p className="text-sm text-muted-foreground">
                  {currentMood === 'peaceful' && "Continue with gratitude meditation and gentle breathing exercises."}
                  {currentMood === 'grateful' && "Practice loving-kindness meditation and share your blessings with others."}
                  {currentMood === 'contemplative' && "Engage in deep study of sacred texts and philosophical reflection."}
                  {currentMood === 'joyful' && "Express your joy through devotional singing and community service."}
                  {currentMood === 'seeking' && "Explore new spiritual practices and seek guidance from wise teachers."}
                  {currentMood === 'compassionate' && "Focus on service to others and healing practices."}
                </p>
              </div>

              <Button className="w-full">
                <Target className="h-4 w-4 mr-2" />
                Get Personalized Guidance
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Path Selection Modal */}
      {pathSelection.isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold">
                {pathSelection.result
                  ? "Your Spiritual Path"
                  : `Discover Your Path (${pathSelection.currentQuestionIndex + 1}/${pathQuestions.length})`
                }
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closePathSelection}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              {pathSelection.isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-lg">Analyzing your spiritual inclinations...</p>
                  <p className="text-sm text-muted-foreground">This may take a moment</p>
                </div>
              ) : pathSelection.result ? (
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Your Personalized Spiritual Path
                      </h3>
                      <div
                        className="prose-p:my-2"
                        dangerouslySetInnerHTML={{ __html: marked(pathSelection.result) }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={restartPathSelection}
                      variant="outline"
                      className="flex-1"
                    >
                      <RotateCw className="h-4 w-4 mr-2" />
                      Start Over
                    </Button>
                    <Button
                      onClick={closePathSelection}
                      className="flex-1"
                    >
                      Continue Journey
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">
                      {pathQuestions[pathSelection.currentQuestionIndex].question}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Choose the option that resonates most with your heart
                    </p>
                  </div>

                  <div className="space-y-3">
                    {pathQuestions[pathSelection.currentQuestionIndex].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-4 px-6 whitespace-normal hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                        onClick={() => handleAnswerSelect(option)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                          <span>{option}</span>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {pathSelection.currentQuestionIndex > 0 && (
                    <Button
                      variant="ghost"
                      onClick={goToPreviousQuestion}
                      className="mt-4"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous Question
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Timeline Modal */}
      {showTimeline && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTimeline(false)}
        >
          <div
            className="bg-background border rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <History className="h-6 w-6 text-primary" />
                Religious History Timeline
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTimeline(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <VerticalTimeline>
                {timelineEvents.map((event, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={event.year}
                    dateClassName="font-medium dark:text-gray-300 text-gray-700"
                    icon={<History className="h-full w-full p-1.5" />}
                    iconStyle={{
                      background: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                    }}
                    contentStyle={{
                      background: "hsl(var(--card))",
                      color: "hsl(var(--card-foreground))",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      borderRadius: "0.75rem",
                      border: "1px solid hsl(var(--border))",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid hsl(var(--card))",
                    }}
                  >
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-muted-foreground mt-2">{event.description}</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      )}

      {/* Sacred Texts Modal */}
      {showGuides && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowGuides(false)}
        >
          <div
            className="bg-background border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Sacred Texts & Scriptures
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowGuides(false)}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide) => (
                  <Card 
                    key={guide.id} 
                    className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02]" 
                    onClick={() => window.open(guide.pdfUrl, '_blank')}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {guide.religion}
                          </Badge>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{guide.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Translation Dictionary Modal */}
      {dictionary.isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-md animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Universal Translator
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDictionary(prev => ({ ...prev, isOpen: false }))}
                className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="english-word" className="block text-sm font-medium">
                  English Word
                </label>
                <div className="flex gap-2">
                  <Input
                    id="english-word"
                    placeholder="Enter English word..."
                    value={dictionary.englishWord}
                    onChange={(e) => setDictionary(prev => ({
                      ...prev,
                      englishWord: e.target.value
                    }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleTranslate();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleTranslate}
                    disabled={!dictionary.englishWord.trim() || dictionary.isLoading}
                    className="px-6"
                  >
                    {dictionary.isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Translate"
                    )}
                  </Button>
                </div>
              </div>

              {dictionary.sanskritWord && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Sanskrit Translation</label>
                  <div className="p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 flex justify-between items-center">
                    <p className="text-lg font-medium">{dictionary.sanskritWord}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => pronounceWord(dictionary.sanskritWord)}
                      className="ml-2 hover:bg-primary/10"
                      aria-label="Pronounce Sanskrit Word"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {dictionary.error && (
                <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                  {dictionary.error}
                </div>
              )}

              <div className="text-xs text-muted-foreground">
                <p>Currently supports basic Sanskrit translations. More languages coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/50 hover:scale-110 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      {/* Floating Action Menu */}
      <div className="fixed bottom-8 left-8 z-40">
        <div className="flex flex-col space-y-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/50 hover:scale-110"
            onClick={() => setShowSacredGeometry(true)}
          >
            <Compass className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:border-secondary/50 hover:scale-110"
            onClick={() => setShowChakraAlignment(true)}
          >
            <Zap className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:border-amber-500/50 hover:scale-110"
            onClick={() => setShowMoodTracker(true)}
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </main>
  );
}