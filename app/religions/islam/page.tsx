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
  Mosque,
  Moon,
  Compass
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Islam - Peace, Submission & Unity | Divinora',
  description: 'Explore Islamic faith, Quranic teachings, prophetic traditions, and the path of submission to Allah.',
};

export default function IslamPage() {
  const prophets = [
    { name: 'Prophet Muhammad (PBUH)', description: 'The final messenger of Allah', image: 'https://images.pexels.com/photos/8468474/pexels-photo-8468474.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Prophet Ibrahim (AS)', description: 'Father of the faithful', image: 'https://images.pexels.com/photos/8468475/pexels-photo-8468475.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Prophet Musa (AS)', description: 'Moses, who received the Torah', image: 'https://images.pexels.com/photos/8468476/pexels-photo-8468476.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Prophet Isa (AS)', description: 'Jesus, the Messiah', image: 'https://images.pexels.com/photos/8468477/pexels-photo-8468477.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const celebrations = [
    { name: 'Eid al-Fitr', date: 'End of Ramadan', description: 'Festival of breaking the fast' },
    { name: 'Eid al-Adha', date: '10th Dhul Hijjah', description: 'Festival of sacrifice' },
    { name: 'Ramadan', date: '9th month', description: 'Month of fasting and reflection' },
    { name: 'Hajj', date: '8-12 Dhul Hijjah', description: 'Pilgrimage to Mecca' },
  ];

  const texts = [
    { name: 'The Holy Quran', description: 'The final revelation from Allah' },
    { name: 'Sahih Bukhari', description: 'Authentic sayings of Prophet Muhammad (PBUH)' },
    { name: 'Sahih Muslim', description: 'Collection of prophetic traditions' },
    { name: 'Tafsir', description: 'Quranic commentary and interpretation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 dark:from-green-950/20 dark:via-teal-950/20 dark:to-blue-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">☪️</span>
              <span className="font-medium text-green-700 dark:text-green-300">Peace & Submission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Islam
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the path of peace and submission to Allah. Explore the Quran, 
              follow the example of Prophet Muhammad (PBUH), and join the global ummah in worship and brotherhood.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Read Quran
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/30">
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
              <div className="text-3xl font-bold text-green-600">1400+</div>
              <div className="text-sm text-muted-foreground">Years of Islam</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">1.8B+</div>
              <div className="text-sm text-muted-foreground">Muslims Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">114</div>
              <div className="text-sm text-muted-foreground">Chapters in Quran</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">5</div>
              <div className="text-sm text-muted-foreground">Daily Prayers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prophets */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Noble Prophets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from the messengers of Allah who guided humanity throughout history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prophets.map((prophet, index) => (
              <Card key={prophet.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={prophet.image}
                      alt={prophet.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{prophet.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{prophet.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-green-600 hover:text-green-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Texts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Study the Quran and Hadith for guidance in all aspects of life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-green-200 hover:bg-green-50 dark:border-green-800">
                    Read Verses
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Celebrations */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Islamic Celebrations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Observe the blessed occasions and acts of worship in Islam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrations.map((celebration, index) => (
              <Card key={celebration.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-green-600" />
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
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Submit to Allah</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the global Muslim community in worship, brotherhood, and submission to Allah
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Learn Islam
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Prayer Times
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}