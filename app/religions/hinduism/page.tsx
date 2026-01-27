import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  BookOpen, 
  Calendar, 
  Star, 
  Sparkles,
  Temple,
  Lotus,
  Sun
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hinduism - Sacred Wisdom & Teachings | Divinora',
  description: 'Explore the rich traditions, sacred texts, deities, and spiritual practices of Hinduism. Discover ancient wisdom for modern living.',
};

export default function HinduismPage() {
  const deities = [
    { name: 'Lord Shiva', description: 'The destroyer and transformer', image: 'https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Lord Vishnu', description: 'The preserver and protector', image: 'https://images.pexels.com/photos/7978944/pexels-photo-7978944.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Goddess Durga', description: 'The divine mother and warrior', image: 'https://images.pexels.com/photos/9324030/pexels-photo-9324030.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Lord Ganesha', description: 'The remover of obstacles', image: 'https://images.pexels.com/photos/7978945/pexels-photo-7978945.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const festivals = [
    { name: 'Diwali', date: 'October-November', description: 'Festival of lights' },
    { name: 'Holi', date: 'March', description: 'Festival of colors' },
    { name: 'Navratri', date: 'September-October', description: 'Nine nights of the goddess' },
    { name: 'Dussehra', date: 'September-October', description: 'Victory of good over evil' },
  ];

  const texts = [
    { name: 'Bhagavad Gita', description: 'Sacred dialogue between Krishna and Arjuna' },
    { name: 'Ramayana', description: 'Epic tale of Lord Rama' },
    { name: 'Mahabharata', description: 'Great epic of ancient India' },
    { name: 'Vedas', description: 'Ancient sacred texts' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">🕉️</span>
              <span className="font-medium text-orange-700 dark:text-orange-300">Sanatana Dharma</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Hinduism
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the eternal wisdom of Sanatana Dharma - the world's oldest living religion. 
              Explore sacred texts, divine deities, ancient practices, and timeless teachings that guide millions on their spiritual journey.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Sacred Texts
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950/30">
                <Heart className="h-5 w-5 mr-2" />
                Daily Prayers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="nav-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">5000+</div>
              <div className="text-sm text-muted-foreground">Years of Wisdom</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">1B+</div>
              <div className="text-sm text-muted-foreground">Followers Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">330M+</div>
              <div className="text-sm text-muted-foreground">Deities & Forms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">4</div>
              <div className="text-sm text-muted-foreground">Sacred Vedas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Deities */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Divine Deities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the divine forms and their sacred teachings that guide spiritual seekers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deities.map((deity, index) => (
              <Card key={deity.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={deity.image}
                      alt={deity.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{deity.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{deity.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-orange-600 hover:text-orange-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Texts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ancient scriptures containing timeless wisdom and spiritual guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-orange-200 hover:bg-orange-50 dark:border-orange-800">
                    Read Excerpts
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Festivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate the divine through joyous festivals and spiritual observances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivals.map((festival, index) => (
              <Card key={festival.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{festival.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {festival.date}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{festival.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of seekers exploring the profound wisdom of Hindu traditions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Daily Devotion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}