import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Calendar, Star, Sparkles, Scroll, Candy as Candle, Shield } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Judaism - Covenant, Torah & Tradition | Divinora',
  description: 'Explore Jewish faith, Torah teachings, traditions, and the covenant between God and the Jewish people.',
};

export default function JudaismPage() {
  const figures = [
    { name: 'Moses (Moshe)', description: 'The greatest prophet and lawgiver', image: 'https://images.pexels.com/photos/8468486/pexels-photo-8468486.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Abraham (Avraham)', description: 'Father of the Jewish people', image: 'https://images.pexels.com/photos/8468487/pexels-photo-8468487.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'King David', description: 'The shepherd king and psalmist', image: 'https://images.pexels.com/photos/8468488/pexels-photo-8468488.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Rabbi Hillel', description: 'Great sage and teacher', image: 'https://images.pexels.com/photos/8468489/pexels-photo-8468489.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const celebrations = [
    { name: 'Passover', date: 'Spring (Nisan)', description: 'Freedom from Egyptian slavery' },
    { name: 'Rosh Hashanah', date: 'Fall (Tishrei)', description: 'Jewish New Year' },
    { name: 'Yom Kippur', date: 'Fall (Tishrei)', description: 'Day of Atonement' },
    { name: 'Hanukkah', date: 'Winter (Kislev)', description: 'Festival of Lights' },
  ];

  const texts = [
    { name: 'Torah', description: 'The Five Books of Moses' },
    { name: 'Talmud', description: 'Rabbinical discussions and interpretations' },
    { name: 'Tanakh', description: 'Hebrew Bible (Torah, Nevi\'im, Ketuvim)' },
    { name: 'Mishnah', description: 'Oral Torah written down' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">✡️</span>
              <span className="font-medium text-blue-700 dark:text-blue-300">Covenant & Torah</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Judaism
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the ancient covenant between God and the Jewish people. Explore the Torah, 
              Jewish traditions, and the rich heritage that has guided the Jewish community for millennia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Study Torah
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/30">
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
              <div className="text-3xl font-bold text-blue-600">3500+</div>
              <div className="text-sm text-muted-foreground">Years of History</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">15M+</div>
              <div className="text-sm text-muted-foreground">Jews Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">613</div>
              <div className="text-sm text-muted-foreground">Commandments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">5</div>
              <div className="text-sm text-muted-foreground">Books of Torah</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewish Figures */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Great Figures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from the prophets, kings, and sages who shaped Jewish history and faith
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {figures.map((figure, index) => (
              <Card key={figure.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={figure.image}
                      alt={figure.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{figure.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{figure.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Texts */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Texts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Study the Torah and Jewish wisdom literature that guide Jewish life and practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 dark:border-blue-800">
                    Read Text
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jewish Celebrations */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jewish Holidays</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate the festivals that commemorate Jewish history and covenant with God
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrations.map((celebration, index) => (
              <Card key={celebration.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-blue-600" />
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
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Honor the Covenant</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the Jewish community in studying Torah, observing traditions, and living according to God's commandments
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Learn Judaism
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Daily Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}