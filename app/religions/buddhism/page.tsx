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
  Lotus,
  Mountain,
  Leaf
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Buddhism - Path to Enlightenment | Divinora',
  description: 'Explore Buddhist teachings, meditation practices, and the Noble Eightfold Path to liberation from suffering.',
};

export default function BuddhismPage() {
  const buddhas = [
    { name: 'Gautama Buddha', description: 'The enlightened one', image: 'https://images.pexels.com/photos/8468478/pexels-photo-8468478.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Avalokiteshvara', description: 'Bodhisattva of compassion', image: 'https://images.pexels.com/photos/8468479/pexels-photo-8468479.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Manjushri', description: 'Bodhisattva of wisdom', image: 'https://images.pexels.com/photos/8468480/pexels-photo-8468480.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Tara', description: 'Mother of liberation', image: 'https://images.pexels.com/photos/8468481/pexels-photo-8468481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const celebrations = [
    { name: 'Vesak Day', date: 'Full moon in May', description: 'Buddha\'s birth, enlightenment, and death' },
    { name: 'Dharma Day', date: 'Full moon in July', description: 'First teaching of Buddha' },
    { name: 'Sangha Day', date: 'Full moon in March', description: 'Honoring the Buddhist community' },
    { name: 'Kathina', date: 'October-November', description: 'Offering robes to monks' },
  ];

  const texts = [
    { name: 'Tripitaka', description: 'The three baskets of Buddhist scripture' },
    { name: 'Dhammapada', description: 'Sayings of the Buddha' },
    { name: 'Lotus Sutra', description: 'Universal enlightenment teaching' },
    { name: 'Heart Sutra', description: 'Essence of wisdom perfection' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-red-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">☸️</span>
              <span className="font-medium text-amber-700 dark:text-amber-300">Path to Enlightenment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Buddhism
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow the Middle Way to liberation from suffering. Discover the Buddha's teachings, 
              practice mindfulness and compassion, and walk the Noble Eightfold Path to enlightenment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Study Dharma
              </Button>
              <Button size="lg" variant="outline" className="border-amber-200 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-950/30">
                <Heart className="h-5 w-5 mr-2" />
                Meditation
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
              <div className="text-3xl font-bold text-amber-600">2500+</div>
              <div className="text-sm text-muted-foreground">Years of Wisdom</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">500M+</div>
              <div className="text-sm text-muted-foreground">Buddhists Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">4</div>
              <div className="text-sm text-muted-foreground">Noble Truths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">8</div>
              <div className="text-sm text-muted-foreground">Fold Path</div>
            </div>
          </div>
        </div>
      </section>

      {/* Buddhas and Bodhisattvas */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enlightened Beings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from the Buddha and Bodhisattvas who guide us on the path to awakening
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buddhas.map((buddha, index) => (
              <Card key={buddha.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={buddha.image}
                      alt={buddha.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{buddha.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{buddha.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-amber-600 hover:text-amber-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Texts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Study the Buddha's teachings preserved in ancient scriptures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-amber-200 hover:bg-amber-50 dark:border-amber-800">
                    Read Teachings
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buddhist Celebrations */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Buddhist Celebrations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Observe the sacred days that commemorate the Buddha's life and teachings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrations.map((celebration, index) => (
              <Card key={celebration.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">{celebration.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {celebration.date}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{celebration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Walk the Middle Way</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Begin your journey toward enlightenment through mindfulness, compassion, and wisdom
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Start Practice
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Meditation Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}