import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { MeditationTool } from '@/components/meditation-tool';

export const metadata: Metadata = {
  title: 'Meditation & Prayer Tool | Divinora',
  description: 'Find inner peace through guided meditation, prayer, and mindfulness practices from various spiritual traditions.',
};

export default function MeditationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      <Navbar />
      <div className="py-8">
        <MeditationTool />
      </div>
    </div>
  );
}