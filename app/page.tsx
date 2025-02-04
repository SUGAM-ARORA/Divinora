"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DeityModal } from "@/components/deity-modal";
import { TeachingModal } from "@/components/teaching-modal";
import { StoryModal } from "@/components/story-modal";
import { HistoryModal } from "@/components/history-modal";
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

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<"deity" | "teaching" | "story" | "history" | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="nav-container">
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
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
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
      </div>

      {/* Modals */}
      <DeityModal
        deity={modalType === "deity" ? selectedItem : null}
        isOpen={modalType === "deity"}
        onClose={() => setModalType(null)}
      />
      <TeachingModal
        teaching={modalType === "teaching" ? selectedItem : null}
        isOpen={modalType === "teaching"}
        onClose={() => setModalType(null)}
      />
      <StoryModal
        story={modalType === "story" ? selectedItem : null}
        isOpen={modalType === "story"}
        onClose={() => setModalType(null)}
      />
      <HistoryModal
        history={modalType === "history" ? selectedItem : null}
        isOpen={modalType === "history"}
        onClose={() => setModalType(null)}
      />

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

const holyBooks = [
  {
    id: 1,
    name: "The Holy Bible",
    description: "The sacred text of Christianity, containing the Old and New Testaments.",
  },
  {
    id: 2,
    name: "The Holy Quran",
    description: "The central religious text of Islam, believed to be a revelation from Allah.",
  },
  {
    id: 3,
    name: "Bhagavad Gita",
    description: "A 700-verse Hindu scripture that is part of the epic Mahabharata.",
  },
  {
    id: 4,
    name: "Torah",
    description: "The central text of Judaism, comprising the first five books of the Hebrew Bible.",
  },
  {
    id: 5,
    name: "Tripitaka",
    description: "The traditional term for the Buddhist scriptures, the earliest collection of Buddhist teachings.",
  },
  {
    id: 6,
    name: "Guru Granth Sahib",
    description: "The central religious scripture of Sikhism, regarded as the final, sovereign guru.",
  },
];

const deities = [
  {
    id: "shiva",
    name: "Lord Shiva",
    description: "The destroyer and transformer in the Trimurti, known for cosmic dance and deep meditation.",
    attributes: ["Destroyer", "Transformer", "Ascetic", "Yogi", "Nataraja"],
    iconography: "Third eye, crescent moon, Ganga, snake, trishul",
    stories: ["Drinking of poison", "Marriage to Parvati", "Ganga's descent"],
  },
  {
    id: "vishnu",
    name: "Lord Vishnu",
    description: "The preserver and protector of the universe, known for his various avatars.",
    attributes: ["Preserver", "Protector", "Sustainer", "All-pervading"],
    iconography: "Four arms, Chakra, Conch, Lotus, Mace",
    incarnations: ["Krishna", "Rama", "Narasimha", "Vamana"],
  },
  {
    id: "brahma",
    name: "Lord Brahma",
    description: "The creator of the universe and all beings, master of the Vedas and knowledge.",
    attributes: ["Creator", "Knowledge", "Wisdom", "Vedas"],
    iconography: "Four heads, Four Vedas, Swan vehicle",
  },
  {
    id: "ganesh",
    name: "Lord Ganesha",
    description: "The remover of obstacles and patron of arts and sciences.",
    attributes: ["Wisdom", "Success", "New Beginnings", "Arts"],
    iconography: "Elephant head, Mouse vehicle, Modak",
  },
  {
    id: "krishna",
    name: "Lord Krishna",
    description: "The divine incarnation of Vishnu, known for the Bhagavad Gita and his divine play.",
    attributes: ["Divine Love", "Wisdom", "Protection", "Dharma"],
    iconography: "Flute, Peacock feather, Blue complexion",
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    description: "The mighty devotee of Lord Rama, symbol of strength and devotion.",
    attributes: ["Devotion", "Strength", "Service", "Celibacy"],
    iconography: "Monkey form, Mace, Mountain",
  },
];

const sacredStories = [
  {
    id: 1,
    title: "Samudra Manthan",
    description: "The churning of the cosmic ocean by devas and asuras, revealing divine treasures and amrita.",
    tradition: "Hinduism",
    era: "Ancient",
    category: "Creation Myths",
  },
  {
    id: 2,
    title: "Krishna's Rasleela",
    description: "The divine dance of Lord Krishna with the gopis, symbolizing the soul's longing for divine union.",
    tradition: "Hinduism",
    era: "Dwapara Yuga",
    category: "Divine Play",
  },
  {
    id: 3,
    title: "Rama's Exile",
    description: "The story of Lord Rama's 14-year exile and the events leading to the defeat of Ravana.",
    tradition: "Hinduism",
    era: "Treta Yuga",
    category: "Epic",
  },
  {
    id: 4,
    title: "Moses and the Exodus",
    description: "The liberation of the Israelites from Egyptian slavery through divine intervention.",
    tradition: "Judaism",
    era: "Ancient",
    category: "Liberation",
  },
  {
    id: 5,
    title: "The Night Journey",
    description: "Prophet Muhammad's miraculous journey from Mecca to Jerusalem and ascension to heaven.",
    tradition: "Islam",
    era: "7th Century CE",
    category: "Miraculous Journey",
  },
  {
    id: 6,
    title: "Buddha's Enlightenment",
    description: "Siddhartha Gautama's journey to enlightenment under the Bodhi tree.",
    tradition: "Buddhism",
    era: "5th Century BCE",
    category: "Enlightenment",
  },
];

const teachings = [
  {
    id: 1,
    title: "Compassion",
    description: "Explore how different religions teach and practice compassion towards all beings.",
  },
  {
    id: 2,
    title: "Peace",
    description: "Discover teachings about inner peace and harmony across religious traditions.",
  },
  {
    id: 3,
    title: "Wisdom",
    description: "Learn about the pursuit of wisdom and enlightenment in various faiths.",
  },
  {
    id: 4,
    title: "Love",
    description: "Understanding divine love and its expression in different religious contexts.",
  },
  {
    id: 5,
    title: "Justice",
    description: "Explore religious perspectives on justice, fairness, and moral conduct.",
  },
  {
    id: 6,
    title: "Service",
    description: "Learn about the importance of serving others in various religious traditions.",
  },
];

const histories = [
  {
    id: 1,
    title: "Origins",
    description: "Explore the historical origins and development of major world religions.",
  },
  {
    id: 2,
    title: "Sacred Places",
    description: "Discover the most important religious sites and their significance.",
  },
  {
    id: 3,
    title: "Prophets & Saints",
    description: "Learn about the lives and teachings of religious leaders throughout history.",
  },
  {
    id: 4,
    title: "Religious Art",
    description: "Explore the rich artistic traditions associated with different faiths.",
  },
  {
    id: 5,
    title: "Traditions",
    description: "Understanding the rituals and practices that shape religious life.",
  },
  {
    id: 6,
    title: "Modern Impact",
    description: "Examine the influence of religions on contemporary society and culture.",
  },
];

const bhaktiVideos = [
  {
    id: 1,
    title: "Om Namah Shivaya Chanting",
    description: "Peaceful chanting of the sacred Shiva mantra for meditation and spiritual elevation.",
    youtubeId: "mPgMJ9c_GRg",
    channel: "Divine Bhakti",
  },
  {
    id: 2,
    title: "Krishna Bhajan Collection",
    description: "Beautiful collection of Krishna bhajans for devotional inspiration.",
    youtubeId: "u9FwN5GTUQ8",
    channel: "Spiritual Rhythms",
  },
  {
    id: 3,
    title: "Hanuman Chalisa",
    description: "The powerful Hanuman Chalisa recitation with lyrics and meaning.",
    youtubeId: "AETFvQonfV8",
    channel: "Sacred Chants",
  },
];