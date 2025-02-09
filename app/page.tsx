"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { FestivalSection } from "@/components/festival-section";
import { NavagrahaSection } from "@/components/navagraha-section";
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

  if (!mounted) {
    return null;
  }

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