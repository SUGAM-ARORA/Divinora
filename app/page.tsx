"use client";

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

import "react-vertical-timeline-component/style.min.css"
import {  X } from "lucide-react"
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

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<"deity" | "teaching" | "story" | "history" | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  
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
      pdfUrl:"https://www.gutenberg.org/files/24869/24869-pdf.pdf"
    },
    {
      id: 3,
      title: "Mahabharata",
      description: "The great Indian epic that includes the Bhagavad Gita and tells the story of the Kurukshetra War.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl:"https://www.hariomgroup.org/hariombooks_shastra/mahabharata.pdf"
    },
    {
      id: 4,
      title: "Upanishads",
      description: "Ancient philosophical texts that form the theoretical basis for Hinduism.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl:"https://estudantedavedanta.net/The-Upanishads-Translated-by-Swami-Paramananda.pdf"

    },
    {
      id: 5,
      title: "Puranas",
      description: "Ancient texts eulogizing various deities through divine stories.",
      icon: <BookOpen className="h-5 w-5" />,
      pdfUrl:"https://www.symb-ol.org/app/download/11197377/18+Puranas.pdf"
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

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="nav-container">
          {/* Center History Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex w-25 gap-5">
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
                    <div  className="flex items-start space-x-4">
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
    </main>
  );
}