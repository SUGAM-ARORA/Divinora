"use client";
import { ChevronRight, ChevronLeft, Loader2 } from "lucide-react"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { FestivalSection } from "@/components/festival-section";
import { NavagrahaSection } from "@/components/navagraha-section";
import { DeityModal } from "@/components/deity-modal";
import { TeachingModal } from "@/components/teaching-modal";
import { StoryModal } from "@/components/story-modal";
import { HistoryModal } from "@/components/history-modal";
import { marked } from 'marked';
import { RotateCw } from 'lucide-react';
import "react-vertical-timeline-component/style.min.css"
import { X } from "lucide-react"
import Link from "next/link"
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {
  BookText,
  Scroll,
  Users,
  History,
  Search,
  Heart,
  Star,
  BookOpen,
  Sparkles,
  Moon,
  Sun,
  ChevronUp,
  Youtube,
} from "lucide-react";
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
      description: "The sacred Hindu scripture that contains the spiritual teachings of Lord Krishna to Arjuna.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://ebooks.tirumala.org/downloads/The%20Bhagavad%20Gita.pdf"
    },
    {
      id: 2,
      title: "Ramayana",
      description: "The epic story of Lord Rama's life, his exile, and his battle with Ravana.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.gutenberg.org/files/24869/24869-pdf.pdf"
    },
    {
      id: 3,
      title: "Mahabharata",
      description: "The great Indian epic that includes the Bhagavad Gita and tells the story of the Kurukshetra War.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.hariomgroup.org/hariombooks_shastra/mahabharata.pdf"
    },
    {
      id: 4,
      title: "Upanishads",
      description: "Ancient philosophical texts that form the theoretical basis for Hinduism.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://estudantedavedanta.net/The-Upanishads-Translated-by-Swami-Paramananda.pdf"

    },
    {
      id: 5,
      title: "Puranas",
      description: "Ancient texts eulogizing various deities through divine stories.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl: "https://www.symb-ol.org/app/download/11197377/18+Puranas.pdf"
    }
  ];

  const histories = [
    {
      year: "3300 BCE - 1700 BCE",
      title: "Indus Valley Civilization",
      description: "One of the oldest civilizations, known for its urban planning, drainage systems, and trade networks. Cities like Harappa and Mohenjo-Daro flourished.",
    },
    {
      year: "1500 BCE - 500 BCE",
      title: "Vedic Period",
      description: "The period when the Vedas, the oldest scriptures of Hinduism, were composed. It laid the foundation for Hindu philosophy, rituals, and social structure.",
    },
    {
      year: "1200 BCE",
      title: "Ramayana Era (Treta Yuga)",
      description: "The legendary era of Lord Rama, chronicled in Valmiki's Ramayana. It depicts the ideals of dharma, duty, and righteousness.",
    },
    {
      year: "1000 BCE",
      title: "Mahabharata Era (Dwapara Yuga)",
      description: "The period of the epic Mahabharata, including the Bhagavad Gita, which serves as a foundational text for Hindu philosophy and ethics.",
    },
    {
      year: "5th Century BCE",
      title: "Emergence of Buddhism and Jainism",
      description: "Siddhartha Gautama (Buddha) and Mahavira established Buddhism and Jainism, respectively, offering alternative spiritual paths while influencing Hindu traditions.",
    },
    {
      year: "322 BCE - 185 BCE",
      title: "Mauryan Empire",
      description: "Founded by Chandragupta Maurya, this was India's first major empire. Ashoka the Great promoted Buddhism and ethical governance based on dharma.",
    },
    {
      year: "2nd Century BCE - 3rd Century CE",
      title: "Sangam Period",
      description: "A golden period for Tamil literature and culture, with extensive references to Hindu deities and temple traditions.",
    },
    {
      year: "78 CE - 250 CE",
      title: "Kushan Empire & Hindu-Buddhist Synthesis",
      description: "Kanishka, a great patron of Buddhism, also saw the rise of Vaishnavism and Shaivism, strengthening Hindu spiritual traditions.",
    },
    {
      year: "320 CE - 550 CE",
      title: "Gupta Empire (Golden Age of Hinduism)",
      description: "A peak in Hindu culture, science, mathematics (Aryabhata), and temple architecture. The Puranas were compiled, and Hindu deities gained widespread worship.",
    },
    {
      year: "8th Century CE",
      title: "Adi Shankaracharya",
      description: "A key philosopher who revived Hinduism through Advaita Vedanta. He established four mathas (monastic centers) across India.",
    },
    {
      year: "9th - 12th Century",
      title: "Bhakti Movement Begins",
      description: "A devotional movement that emphasized personal connection with deities like Vishnu, Shiva, and Devi. Saints like Alvars and Nayanars emerged.",
    },
    {
      year: "1206 - 1526",
      title: "Delhi Sultanate",
      description: "A period of Islamic rule, with Hindu resistance from Rajputs and Vijayanagara kings, and the continued growth of temple culture.",
    },
    {
      year: "1336 - 1646",
      title: "Vijayanagara Empire",
      description: "A powerful Hindu kingdom that resisted Islamic invasions and patronized art, literature, and grand temples like Hampi.",
    },
    {
      year: "1526 - 1857",
      title: "Mughal Empire",
      description: "Founded by Babur, this empire saw Hindu-Muslim cultural synthesis, with leaders like Akbar adopting policies of religious tolerance.",
    },
    {
      year: "1608 - 1818",
      title: "Rise of the Marathas",
      description: "Shivaji Maharaj established the Hindu Maratha Empire, resisting Mughal expansion and reviving Hindu political traditions.",
    },
    {
      year: "1858",
      title: "British Raj",
      description: "British rule began after the Sepoy Mutiny. This period saw Hindu reform movements like Arya Samaj and the Brahmo Samaj.",
    },
    {
      year: "1875",
      title: "Swami Vivekananda and Hindu Renaissance",
      description: "A major revival of Hindu philosophy, with Vivekananda's message of Vedanta and universalism at the 1893 Chicago World Parliament of Religions.",
    },
    {
      year: "1947",
      title: "Independence of India",
      description: "India gains independence from British rule, leading to the partition of India and Pakistan. Hindu culture played a major role in shaping India's identity.",
    },
  ];

  const [pathSelection, setPathSelection] = useState<PathSelectionState>({
    isOpen: false,
    currentQuestionIndex: 0,
    answers: [],
    isLoading: false,
    result: null
  });

  // Questions for the path selection
  const pathQuestions: Question[] = [
    {
      id: 1,
      question: "What is your primary spiritual goal?",
      options: [
        "Moksha (Liberation)",
        "Dharma (Righteous living)",
        "Bhakti (Devotion to God)",
        "Jnana (Spiritual knowledge)",
        "Karma (Selfless service)"
      ]
    },
    {
      id: 2,
      question: "Which deity do you feel most drawn to?",
      options: [
        "Vishnu/Krishna/Rama",
        "Shiva",
        "Devi (Durga, Kali, Lakshmi, Saraswati)",
        "Ganesha",
        "Hanuman",
        "No particular deity"
      ]
    },
    {
      id: 3,
      question: "How do you prefer to practice spirituality?",
      options: [
        "Meditation and yoga",
        "Prayer and rituals",
        "Studying scriptures",
        "Singing bhajans/kirtans",
        "Selfless service"
      ]
    },
    {
      id: 4,
      question: "What time of day do you feel most spiritual?",
      options: [
        "Early morning (Brahma Muhurta)",
        "Sunrise/Sunset",
        "Noon",
        "Night",
        "No particular time"
      ]
    },
    {
      id: 5,
      question: "Which of these values resonates most with you?",
      options: [
        "Truth (Satya)",
        "Compassion (Daya)",
        "Wisdom (Jnana)",
        "Discipline (Tapas)",
        "Love (Prema)"
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

  const filterContent = (items: any[], term: string) => {
    if (!items) return [];
    return items.filter(
      (item) =>
        item.name?.toLowerCase().includes(term.toLowerCase()) ||
        item.title?.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase())
    );
  };

  const handleItemClick = (item: any, type: "deity" | "teaching" | "story" | "history") => {
    setSelectedItem(item);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  // Path selection handlers
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
      // Move to next question
      setPathSelection(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // All questions answered - get recommendation
      getSpiritualRecommendation(newAnswers);
    }
  };

  const goToPreviousQuestion = () => {
    if (pathSelection.currentQuestionIndex > 0) {
      const newAnswers = [...pathSelection.answers];
      newAnswers.pop(); // Remove last answer

      setPathSelection(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        answers: newAnswers
      }));
    }
  };


  const mockRecommendations = [
    `**Bhakti Yoga Path**\nPractice daily kirtan and read the Bhagavad Gita Chapter 12.`,
    `**Jnana Yoga Path**\nStudy the Upanishads and practice "Who am I?" meditation.`,
    `**Karma Yoga Path**\nEngage in selfless service while offering actions to the Divine.`
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


    const apiEndpoints = [
      {
        url: 'https://translation-api.example.com/v1/translate',
        options: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: word,
            source: 'en',
            target: 'sa'
          })
        }
      },
      {
        url: 'https://libretranslate.de/translate',
        options: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            q: word,
            source: 'en',
            target: 'sa',
            format: 'text'
          })
        }
      },
      {
        url: `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|sa`,
        options: { method: 'GET' }
      }
    ];


    for (const endpoint of apiEndpoints) {
      try {
        const response = await fetch(endpoint.url, endpoint.options);

        if (!response.ok) continue;

        const data = await response.json();


        if (endpoint.url.includes('libretranslate')) {
          return data.translatedText;
        } else if (endpoint.url.includes('mymemory')) {
          return data.responseData?.translatedText || "Translation not found";
        } else {

          return data.translation || data.result || "Translation not found";
        }
      } catch (error) {
        console.warn(`API ${endpoint.url} failed:`, error);
        continue;
      }
    }

    throw new Error('All translation services failed');
  };
  const pronounceWord = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voices = window.speechSynthesis.getVoices();
    const sanskritVoice = voices.find(voice =>
      voice.lang.toLowerCase().includes('sa') || 
      voice.lang.toLowerCase().includes('hi') // fallback to Hindi if Sanskrit is unavailable
    );
  
    if (sanskritVoice) {
      utterance.voice = sanskritVoice;
    }
  
    utterance.rate = 0.9;
    utterance.pitch = 1;
  
    window.speechSynthesis.speak(utterance);
  };
  


  return (

    <main className="min-h-screen bg-background">

      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="nav-container">
          {/* Center History Button */}
          <div className="absolute left-1/2 right-1 transform -translate-x-1/2 flex w-25 gap-3">
            <Button
              onClick={() => setShowTimeline(true)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mt-3"
            >
              <History className="h-4 w-4" />
              <span>Explore History</span>
            </Button>
            <Button
              onClick={() => setShowGuides(true)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mt-3"
            >
              <BookOpen className="h-4 w-4" />
              <span>Show Guides</span>
            </Button>
            <Button
              onClick={openPathSelection}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mt-3"
            >
              <BookOpen className="h-4 w-4" />
              <span>Choose your path</span>
            </Button>
            <Button
              onClick={() => setDictionary(prev => ({ ...prev, isOpen: true }))}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mt-3"
            >
              <BookOpen className="h-4 w-4" />
              <span>Dictionary</span>
            </Button>
          </div>

          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookText className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold">Divinora</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search divine wisdom..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:scale-110 transition-transform duration-300"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Path Selection Modal */}
      {pathSelection.isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b">
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
                className="rounded-full"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              {pathSelection.isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Loader2 className="h-8 w-35 animate-spin text-primary" />
                  <p>Analyzing your responses...</p>
                  <p className="text-sm text-muted-foreground">This may take a moment</p>
                </div>
              ) : pathSelection.result ? (
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Your Personalized Path</h3>
                    <div
                      className="bg-secondary/30 p-4 rounded-lg mb-6 prose-p:my-2"
                      dangerouslySetInnerHTML={{ __html: marked(pathSelection.result) }}
                    />
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
                      Close
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">
                    {pathQuestions[pathSelection.currentQuestionIndex].question}
                  </h3>

                  <div className="space-y-3">
                    {pathQuestions[pathSelection.currentQuestionIndex].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-3 whitespace-normal"
                        onClick={() => handleAnswerSelect(option)}
                      >
                        {option}
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
                      Back
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
          className=" mt-9 fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowTimeline(false)}
        >
          <div
            className="bg-background border rounded-lg shadow-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-semibold">Hindu History Timeline</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTimeline(false)}
                className="rounded-full"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <VerticalTimeline>
                {histories.map((event, index) => (
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
                      boxShadow:
                        "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
                      borderRadius: "0.5rem",
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

      {/* Guides Modal */}
      {showGuides && (
        <div
          className="mt-9 fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowGuides(false)}
        >
          <div
            className="bg-background border rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-semibold">Hindu Sacred Guides</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowGuides(false)}
                className="rounded-full"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {guides.map((guide) => (
                  <Card key={guide.id} className="p-4 hover:shadow-md transition-shadow" onClick={() => window.open(guide.pdfUrl, '_blank')}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        {guide.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{guide.title}</h3>
                        <p className="text-muted-foreground">{guide.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="nav-container py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">
            Explore Divine Wisdom
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Immerse yourself in the profound teachings of Sanatan Dharma and discover the timeless
            wisdom of Hindu spirituality, sacred texts, and divine stories.
          </p>
        </header>

        <Tabs defaultValue="deities" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:max-w-4xl lg:mx-auto gap-2">
            <TabsTrigger value="deities" className="card-hover">Deities</TabsTrigger>
            <TabsTrigger value="teachings" className="card-hover">Teachings</TabsTrigger>
            <TabsTrigger value="stories" className="card-hover">Sacred Stories</TabsTrigger>
            <TabsTrigger value="history" className="card-hover">History</TabsTrigger>
            <TabsTrigger value="texts" className="card-hover">Sacred Texts</TabsTrigger>
            <TabsTrigger value="bhakti" className="card-hover">Bhakti Videos</TabsTrigger>
          </TabsList>

          {/* Deities Tab */}
          <TabsContent value="deities" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(deities, searchTerm).map((deity) => (
                <Card
                  key={deity.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer card-expanded"
                  onClick={() => handleItemClick(deity, "deity")}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{deity.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{deity.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deity.attributes.map((attr: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Teachings Tab */}
          <TabsContent value="teachings" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(teachings, searchTerm).map((teaching) => (
                <Card
                  key={teaching.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer card-expanded"
                  onClick={() => handleItemClick(teaching, "teaching")}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{teaching.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{teaching.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore Teaching
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sacred Stories Tab */}
          <TabsContent value="stories" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(sacredStories, searchTerm).map((story) => (
                <Card
                  key={story.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer card-expanded"
                  onClick={() => handleItemClick(story, "story")}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-muted-foreground">{story.tradition}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{story.era}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Story
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterContent(histories, searchTerm).map((history) => (
                <Card
                  key={history.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer card-expanded"
                  onClick={() => handleItemClick(history, "history")}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <History className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{history.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{history.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore History
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sacred Texts Tab */}
          <TabsContent value="texts" className="space-y-8">
            <div className="content-grid">
              {filterContent(holyBooks, searchTerm).map((book) => (
                <Card key={book.id} className="p-6 card-hover">
                  <div className="flex items-center space-x-4 mb-4">
                    <Scroll className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-balance">{book.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-balance">{book.description}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 card-hover">
                      <BookOpen className="mr-2 h-4 w-4" /> Read
                    </Button>
                    <Button variant="ghost" size="icon" className="card-hover">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bhakti Videos Tab */}
          <TabsContent value="bhakti" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bhaktiVideos.map((video) => (
                <Card key={video.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground mb-4">{video.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Youtube className="h-4 w-4 mr-2" />
                    <span>{video.channel}</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Feature Sections */}
        <section className="mt-16 space-y-16">
          <FestivalSection />
          <NavagrahaSection />
        </section>
      </div>

      {/* Modals */}
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

      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-8 right-8 rounded-full shadow-lg card-hover
                   transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
      {/* Dictionary Modal */}
      {dictionary.isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md mx-4 animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-semibold">English to Sanskrit Dictionary</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDictionary(prev => ({ ...prev, isOpen: false }))}
                className="rounded-full"
                aria-label="Close"
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
                  />
                  <Button
                    onClick={handleTranslate}
                    disabled={!dictionary.englishWord.trim() || dictionary.isLoading}
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
                  <div className="p-4 border rounded-md bg-secondary/30 flex justify-between items-center">
                    <p className="text-lg font-medium">{dictionary.sanskritWord}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => pronounceWord(dictionary.sanskritWord)}
                      className="ml-2"
                      aria-label="Pronounce Sanskrit Word"
                    >
                      🔊
                    </Button>
                  </div>
                </div>
              )}


              {dictionary.error && (
                <div className="text-red-500 text-sm">{dictionary.error}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}