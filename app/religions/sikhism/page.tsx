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
  Crown,
  Sword,
  Users
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sikhism - One God, Equality & Service | Divinora',
  description: 'Explore Sikh teachings, Guru Granth Sahib, and the path of devotion, equality, and selfless service.',
};

export default function SikhismPage() {
  const gurus = [
    { name: 'Guru Nanak Dev Ji', description: 'Founder of Sikhism', image: 'https://images.pexels.com/photos/8468482/pexels-photo-8468482.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Guru Gobind Singh Ji', description: 'Tenth Guru, founder of Khalsa', image: 'https://images.pexels.com/photos/8468483/pexels-photo-8468483.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Guru Arjan Dev Ji', description: 'Fifth Guru, compiler of Adi Granth', image: 'https://images.pexels.com/photos/8468484/pexels-photo-8468484.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Guru Tegh Bahadur Ji', description: 'Ninth Guru, protector of religious freedom', image: 'https://images.pexels.com/photos/8468485/pexels-photo-8468485.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const celebrations = [
    { name: 'Vaisakhi', date: 'April 13-14', description: 'Birth of Khalsa and harvest festival' },
    { name: 'Guru Nanak Jayanti', date: 'November', description: 'Birthday of Guru Nanak' },
    { name: 'Guru Gobind Singh Jayanti', date: 'January', description: 'Birthday of tenth Guru' },
    { name: 'Hola Mohalla', date: 'March', description: 'Sikh festival of martial arts' },
  ];

  const texts = [
    { name: 'Guru Granth Sahib', description: 'The eternal Guru and holy scripture' },
    { name: 'Japji Sahib', description: 'Morning prayer by Guru Nanak' },
    { name: 'Rehras Sahib', description: 'Evening prayer' },
    { name: 'Kirtan Sohila', description: 'Night prayer before sleep' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/20 dark:via-orange-950/20 dark:to-red-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">☬</span>
              <span className="font-medium text-yellow-700 dark:text-yellow-300">Ik Onkar</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Sikhism
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow the path of the Gurus who taught devotion to one God, equality of all people, 
              and selfless service to humanity. Discover the wisdom of the Guru Granth Sahib and the Khalsa way of life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Read Gurbani
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-200 hover:bg-yellow-50 dark:border-yellow-800 dark:hover:bg-yellow-950/30">
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
              <div className="text-3xl font-bold text-yellow-600">550+</div>
              <div className="text-sm text-muted-foreground">Years of Sikhism</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">30M+</div>
              <div className="text-sm text-muted-foreground">Sikhs Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">10</div>
              <div className="text-sm text-muted-foreground">Human Gurus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1430</div>
              <div className="text-sm text-muted-foreground">Pages in Guru Granth Sahib</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sikh Gurus */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Ten Gurus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from the divine teachers who established Sikhism and guided the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gurus.map((guru, index) => (
              <Card key={guru.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={guru.image}
                      alt={guru.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{guru.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{guru.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-yellow-600 hover:text-yellow-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Texts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Study the Guru Granth Sahib and daily prayers that guide Sikh spiritual life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-yellow-200 hover:bg-yellow-50 dark:border-yellow-800">
                    Read Gurbani
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sikh Celebrations */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sikh Celebrations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate the Gurpurabs and festivals that mark important events in Sikh history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrations.map((celebration, index) => (
              <Card key={celebration.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-yellow-600" />
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
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Serve Humanity</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the Sikh community in devotion to one God, equality for all, and selfless service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Learn Sikhism
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Daily Seva
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}