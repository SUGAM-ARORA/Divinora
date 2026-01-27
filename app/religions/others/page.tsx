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
  Globe,
  Leaf,
  Sun
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Other Religions - Universal Wisdom & Traditions | Divinora',
  description: 'Explore diverse spiritual traditions including Jainism, Taoism, Shinto, Zoroastrianism, and indigenous wisdom.',
};

export default function OthersPage() {
  const traditions = [
    { name: 'Jainism', description: 'Path of non-violence and liberation', image: 'https://images.pexels.com/photos/8468490/pexels-photo-8468490.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '☸️' },
    { name: 'Taoism', description: 'The Way of natural harmony', image: 'https://images.pexels.com/photos/8468491/pexels-photo-8468491.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '☯️' },
    { name: 'Shinto', description: 'Japanese way of the spirits', image: 'https://images.pexels.com/photos/8468492/pexels-photo-8468492.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '⛩️' },
    { name: 'Zoroastrianism', description: 'Ancient Persian wisdom', image: 'https://images.pexels.com/photos/8468493/pexels-photo-8468493.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '🔥' },
    { name: 'Bahá\'í Faith', description: 'Unity of God, religions, and humanity', image: 'https://images.pexels.com/photos/8468494/pexels-photo-8468494.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '⭐' },
    { name: 'Indigenous Spirituality', description: 'Native wisdom traditions', image: 'https://images.pexels.com/photos/8468495/pexels-photo-8468495.jpeg?auto=compress&cs=tinysrgb&w=400', symbol: '🌿' },
  ];

  const universalPrinciples = [
    { name: 'Compassion', description: 'Universal love and kindness' },
    { name: 'Wisdom', description: 'Seeking truth and understanding' },
    { name: 'Peace', description: 'Inner and outer harmony' },
    { name: 'Service', description: 'Helping others and community' },
    { name: 'Unity', description: 'Recognizing our interconnectedness' },
    { name: 'Reverence', description: 'Respect for all life and creation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">🌍</span>
              <span className="font-medium text-emerald-700 dark:text-emerald-300">Universal Wisdom</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Other Spiritual Traditions
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the rich diversity of spiritual traditions from around the world. 
              Discover ancient wisdom, indigenous practices, and universal principles that unite all seekers of truth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Traditions
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30">
                <Heart className="h-5 w-5 mr-2" />
                Universal Prayers
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
              <div className="text-3xl font-bold text-emerald-600">100+</div>
              <div className="text-sm text-muted-foreground">Spiritual Traditions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">1000+</div>
              <div className="text-sm text-muted-foreground">Indigenous Cultures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">∞</div>
              <div className="text-sm text-muted-foreground">Paths to Truth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">1</div>
              <div className="text-sm text-muted-foreground">Universal Spirit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Traditions */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diverse Traditions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the beautiful diversity of spiritual paths and wisdom traditions from around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditions.map((tradition, index) => (
              <Card key={tradition.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={tradition.image}
                      alt={tradition.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{tradition.symbol}</span>
                        <h3 className="font-semibold">{tradition.name}</h3>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{tradition.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-emerald-600 hover:text-emerald-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Principles */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Universal Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common values and teachings that unite all spiritual traditions across cultures and time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universalPrinciples.map((principle, index) => (
              <Card key={principle.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{principle.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interfaith Dialogue */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interfaith Harmony</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building bridges between different faith communities through dialogue, understanding, and shared values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full w-fit mb-4">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unity in Diversity</h3>
              <p className="text-muted-foreground">Celebrating the beautiful diversity of spiritual expressions while recognizing our common humanity.</p>
            </Card>
            
            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full w-fit mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shared Values</h3>
              <p className="text-muted-foreground">Finding common ground in love, compassion, justice, and service to others across all traditions.</p>
            </Card>
            
            <Card className="text-center p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full w-fit mb-4">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mutual Respect</h3>
              <p className="text-muted-foreground">Honoring each tradition's unique contributions while learning from one another with respect.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Embrace Universal Wisdom</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the global community of seekers exploring the infinite paths to truth and spiritual fulfillment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Explore Wisdom
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Universal Peace
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}