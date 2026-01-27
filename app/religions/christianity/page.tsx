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
  Cross,
  Dove,
  Church
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Christianity - Faith, Hope & Love | Divinora',
  description: 'Explore Christian faith, biblical teachings, saints, and spiritual practices. Discover the message of love and salvation.',
};

export default function ChristianityPage() {
  const saints = [
    { name: 'Jesus Christ', description: 'The Son of God and Savior', image: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Virgin Mary', description: 'Mother of Jesus', image: 'https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Saint Peter', description: 'The Rock of the Church', image: 'https://images.pexels.com/photos/8468472/pexels-photo-8468472.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Saint Paul', description: 'Apostle to the Gentiles', image: 'https://images.pexels.com/photos/8468473/pexels-photo-8468473.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const celebrations = [
    { name: 'Christmas', date: 'December 25', description: 'Birth of Jesus Christ' },
    { name: 'Easter', date: 'March-April', description: 'Resurrection of Jesus' },
    { name: 'Pentecost', date: '50 days after Easter', description: 'Coming of the Holy Spirit' },
    { name: 'Good Friday', date: 'Friday before Easter', description: 'Crucifixion of Jesus' },
  ];

  const texts = [
    { name: 'The Holy Bible', description: 'Sacred scripture of Christianity' },
    { name: 'New Testament', description: 'Life and teachings of Jesus Christ' },
    { name: 'Psalms', description: 'Songs and prayers of worship' },
    { name: 'Gospels', description: 'Accounts of Jesus\' life and ministry' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="nav-container relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full">
              <span className="text-2xl">✝️</span>
              <span className="font-medium text-blue-700 dark:text-blue-300">Faith, Hope & Love</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Christianity
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the transformative message of God's love through Jesus Christ. 
              Explore biblical teachings, Christian traditions, and the path of faith that has guided billions for over two millennia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Read Scripture
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
              <div className="text-3xl font-bold text-blue-600">2000+</div>
              <div className="text-sm text-muted-foreground">Years of Faith</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.4B+</div>
              <div className="text-sm text-muted-foreground">Christians Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">66</div>
              <div className="text-sm text-muted-foreground">Books in Bible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">12</div>
              <div className="text-sm text-muted-foreground">Apostles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Saints and Figures */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Holy Figures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from the lives and teachings of Jesus Christ and the saints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saints.map((saint, index) => (
              <Card key={saint.name} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={saint.image}
                      alt={saint.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{saint.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{saint.description}</p>
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sacred Scripture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the Word of God and find guidance for your spiritual journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {texts.map((text, index) => (
              <Card key={text.name} className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{text.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{text.description}</p>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 dark:border-blue-800">
                    Read Passages
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Christian Celebrations */}
      <section className="py-16">
        <div className="nav-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Christian Celebrations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate the life, death, and resurrection of Jesus Christ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrations.map((celebration, index) => (
              <Card key={celebration.name} className="text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full w-fit">
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
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="nav-container text-center">
          <h2 className="text-3xl font-bold mb-4">Walk in Faith</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover the love of Christ and join a community of believers worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Sparkles className="h-5 w-5 mr-2" />
              Begin Journey
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