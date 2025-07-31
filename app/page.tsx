"use client";
import { ChevronRight, ChevronLeft, Loader2, Globe, Heart, Users, BookOpen, Star, Calendar, Sparkles, Search, Sun, Moon, ChevronUp, Youtube, History, RotateCw, X } from "lucide-react"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const [dictionary, setDictionary] = useState<DictionaryState>({
    isOpen: false,
    englishWord: "",
    sanskritWord: "",
    isLoading: false,
    error: null
  });

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filterContent = (items: any[], term: string, religion: string = "all") => {
    if (!items) return [];
    return items.filter((item) => {
      const matchesSearch = 
        item.name?.toLowerCase().includes(term.toLowerCase()) ||
        item.title?.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase());
      
      const matchesReligion = religion === "all" || 
        item.religion === religion || 
        item.religions?.includes(religion);
      
      return matchesSearch && matchesReligion;
    });
  };

  const handleItemClick = (item: any, type: "deity" | "teaching" | "story" | "history") => {
    setSelectedItem(item);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
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

  if (!mounted) {
    return null;
  }

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
      "thank you": "धन्यवादः"
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Enhanced Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 z-50 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 gap-4 sm:gap-0 py-4 sm:py-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-75"></div>
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

            {/* Action Buttons */}
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
                <span className="text-sm">Find Your Path</span>
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
            </div>

            {/* Search and Theme */}
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
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:scale-110 transition-transform duration-300 rounded-full"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
        <div className="relative py-16 sm:py-24">
          <header className="text-center mb-12 px-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to Universal Spirituality</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Explore Divine Wisdom
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the profound teachings and timeless wisdom from all world religions and spiritual traditions. 
              A sacred space where seekers of all faiths can find inspiration, guidance, and universal truth.
            </p>
            
            {/* Religion Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {religions.map((religion) => (
                <Button
                  key={religion.id}
                  variant={selectedReligion === religion.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedReligion(religion.id)}
                  className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    selectedReligion === religion.id ? religion.color + " text-white" : ""
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
          </header>
        </div>
      </div>

      {/* Main Content */}
      <div className="nav-container py-12">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(deities, searchTerm, selectedReligion).map((deity) => (
                <Card
                  key={deity.id}
                  className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50"
                  onClick={() => handleItemClick(deity, "deity")}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {deity.religion}
                      </Badge>
                      <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {deity.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{deity.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {deity.attributes.slice(0, 3).map((attr: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {attr}
                        </Badge>
                      ))}
                      {deity.attributes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{deity.attributes.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Explore Wisdom
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Teachings Tab */}
          <TabsContent value="teachings" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(teachings, searchTerm, selectedReligion).map((teaching) => (
                <Card
                  key={teaching.id}
                  className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50"
                  onClick={() => handleItemClick(teaching, "teaching")}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Universal Teaching
                      </Badge>
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {teaching.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{teaching.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {teaching.religions.slice(0, 4).map((religion: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {religion}
                        </Badge>
                      ))}
                      {teaching.religions.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{teaching.religions.length - 4}
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sacred Stories Tab */}
          <TabsContent value="stories" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(sacredStories, searchTerm, selectedReligion).map((story) => (
                <Card
                  key={story.id}
                  className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50"
                  onClick={() => handleItemClick(story, "story")}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {story.religion}
                      </Badge>
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{story.description}</p>
                    <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                      <span>{story.tradition}</span>
                      <span>•</span>
                      <span>{story.era}</span>
                    </div>
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {story.universalTheme}
                      </Badge>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(histories, searchTerm, selectedReligion).map((history) => (
                <Card
                  key={history.id}
                  className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50"
                  onClick={() => handleItemClick(history, "history")}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Religious History
                      </Badge>
                      <History className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {history.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{history.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <History className="mr-2 h-4 w-4" />
                      Explore History
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                      <BookOpen className="h-5 w-5 text-primary" />
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
                      <Button variant="ghost" size="icon" className="hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Devotional Videos Tab */}
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
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Youtube className="h-4 w-4 mr-2 text-red-500" />
                    <span>{video.channel}</span>
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
                      🔊
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
        className={`fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/50 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </main>
  );
}