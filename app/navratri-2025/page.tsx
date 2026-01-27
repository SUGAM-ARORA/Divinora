import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Crown, 
  Sparkles,
  Heart,
  Star,
  Flame,
  Lotus,
  Sun,
  Moon
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Navratri 2025 - Nine Nights of Divine Celebration | Divinora',
  description: 'Celebrate Navratri 2025 with daily prayers, goddess worship, and festive traditions. Join the divine celebration of Durga Mata.',
};

export default function Navratri2025Page() {
  const navratriDays = [
    {
      day: 1,
      date: 'October 2, 2025',
      goddess: 'Maa Shailputri',
      color: 'Red',
      description: 'Daughter of the mountains, first form of Durga',
      prayer: 'Om Devi Shailputryai Namah',
      significance: 'Represents nature and purity'
    },
    {
      day: 2,
      date: 'October 3, 2025',
      goddess: 'Maa Brahmacharini',
      color: 'Royal Blue',
      description: 'The ascetic form of Goddess Parvati',
      prayer: 'Om Devi Brahmacharinyai Namah',
      significance: 'Symbolizes penance and devotion'
    },
    {
      day: 3,
      date: 'October 4, 2025',
      goddess: 'Maa Chandraghanta',
      color: 'Yellow',
      description: 'The warrior goddess with moon on forehead',
      prayer: 'Om Devi Chandraghantayai Namah',
      significance: 'Represents bravery and courage'
    },
    {
      day: 4,
      date: 'October 5, 2025',
      goddess: 'Maa Kushmanda',
      color: 'Green',
      description: 'Creator of the universe',
      prayer: 'Om Devi Kushmandayai Namah',
      significance: 'Symbolizes creation and energy'
    },
    {
      day: 5,
      date: 'October 6, 2025',
      goddess: 'Maa Skandamata',
      color: 'Grey',
      description: 'Mother of Lord Kartikeya',
      prayer: 'Om Devi Skandamatayai Namah',
      significance: 'Represents motherhood and protection'
    },
    {
      day: 6,
      date: 'October 7, 2025',
      goddess: 'Maa Katyayani',
      color: 'Orange',
      description: 'The warrior form of Durga',
      prayer: 'Om Devi Katyayanyai Namah',
      significance: 'Symbolizes strength and valor'
    },
    {
      day: 7,
      date: 'October 8, 2025',
      goddess: 'Maa Kalaratri',
      color: 'White',
      description: 'The fierce form destroying evil',
      prayer: 'Om Devi Kalaratryai Namah',
      significance: 'Represents destruction of darkness'
    },
    {
      day: 8,
      date: 'October 9, 2025',
      goddess: 'Maa Mahagauri',
      color: 'Pink',
      description: 'The fair and beautiful goddess',
      prayer: 'Om Devi Mahagauryai Namah',
      significance: 'Symbolizes purity and peace'
    },
    {
      day: 9,
      date: 'October 10, 2025',
      goddess: 'Maa Siddhidatri',
      color: 'Purple',
      description: 'Giver of supernatural powers',
      prayer: 'Om Devi Siddhidatryai Namah',
      significance: 'Represents fulfillment and perfection'
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Red': 'from-red-500 to-pink-500',
      'Royal Blue': 'from-blue-600 to-indigo-600',
      'Yellow': 'from-yellow-500 to-amber-500',
      'Green': 'from-green-500 to-emerald-500',
      'Grey': 'from-gray-500 to-slate-500',
      'Orange': 'from-orange-500 to-red-500',
      'White': 'from-gray-100 to-white',
      'Pink': 'from-pink-500 to-rose-500',
      'Purple': 'from-purple-500 to-violet-500'
    };
    return colorMap[color] || 'from-orange-500 to-pink-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400/30 to-pink-400/30 rounded-full blur-xl animate-float" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full blur-xl animate-float-slow" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-red-400/30 rounded-full blur-xl animate-float" />
        </div>
        
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full animate-pulse-glow">
              <Crown className="h-5 w-5 text-orange-600 animate-bounce" />
              <span className="font-medium text-orange-700 dark:text-orange-300">Divine Celebration 2025</span>
              <Sparkles className="h-5 w-5 text-pink-600 animate-bounce" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Navratri 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              🌺 Nine Sacred Nights of Divine Mother Durga 🌺
            </p>
            
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 max-w-md mx-auto border-2 border-orange-200 dark:border-orange-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">October 2-10, 2025</div>
                <div className="text-sm text-muted-foreground">Nine Days of Divine Blessings</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 animate-pulse-glow">
                <Heart className="h-5 w-5 mr-2" />
                Daily Prayers
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950/30">
                <Calendar className="h-5 w-5 mr-2" />
                Festival Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="nav-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Countdown to Navratri 2025</h2>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">245</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">12</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">34</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">56</div>
                <div className="text-xs text-muted-foreground">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nine Days of Navratri */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nine Sacred Days</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each day of Navratri is dedicated to a different form of Goddess Durga, with specific colors, prayers, and significance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navratriDays.map((day, index) => (
              <Card key={day.day} className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${getColorClass(day.color)}/10 border-2 hover:border-orange-300 dark:hover:border-orange-600`}>
                <CardHeader className="text-center">
                  <div className={`mx-auto p-4 bg-gradient-to-r ${getColorClass(day.color)} rounded-full w-fit mb-4 animate-pulse-glow`}>
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    Day {day.day} • {day.date}
                  </Badge>
                  <CardTitle className="text-xl">{day.goddess}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getColorClass(day.color)}`} />
                    <span className="text-sm font-medium">{day.color}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">{day.description}</p>
                  
                  <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Lotus className="h-4 w-4 text-orange-600" />
                      Daily Prayer
                    </h4>
                    <p className="text-sm font-mono text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/30 p-2 rounded">
                      {day.prayer}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 p-4 rounded-xl">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4 text-pink-600" />
                      Significance
                    </h4>
                    <p className="text-sm text-muted-foreground">{day.significance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navratri Traditions */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Navratri Traditions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate the divine feminine energy through traditional practices and rituals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full w-fit mb-4">
                <Flame className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kalash Sthapana</h3>
              <p className="text-sm text-muted-foreground">Sacred pot installation to invoke divine presence</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full w-fit mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Durga Puja</h3>
              <p className="text-sm text-muted-foreground">Daily worship and offerings to Goddess Durga</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full w-fit mb-4">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fasting</h3>
              <p className="text-sm text-muted-foreground">Spiritual purification through sacred fasting</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="mx-auto p-4 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full w-fit mb-4">
                <Moon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garba & Dandiya</h3>
              <p className="text-sm text-muted-foreground">Traditional dances celebrating divine energy</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        
        <div className="nav-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Divine Celebration</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the power and grace of Goddess Durga during the most auspicious nine nights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 animate-pulse-glow">
              <Sparkles className="h-5 w-5 mr-2" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Calendar className="h-5 w-5 mr-2" />
              Download Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}