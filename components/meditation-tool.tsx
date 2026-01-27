"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw, Heart, Bot as Lotus, Volume2, VolumeX, Timer, Sparkles } from 'lucide-react';

interface MeditationSession {
  id: string;
  title: string;
  duration: number;
  type: 'guided' | 'music' | 'silence';
  description: string;
  audioUrl?: string;
}

const meditationSessions: MeditationSession[] = [
  {
    id: 'om-chanting',
    title: 'Om Chanting',
    duration: 10,
    type: 'guided',
    description: 'Sacred Om mantra chanting for inner peace',
    audioUrl: '/audio/om-chanting.mp3'
  },
  {
    id: 'breathing',
    title: 'Mindful Breathing',
    duration: 15,
    type: 'guided',
    description: 'Focus on breath awareness and mindfulness'
  },
  {
    id: 'loving-kindness',
    title: 'Loving Kindness',
    duration: 20,
    type: 'guided',
    description: 'Cultivate compassion and universal love'
  },
  {
    id: 'silent',
    title: 'Silent Meditation',
    duration: 25,
    type: 'silence',
    description: 'Pure silence for deep contemplation'
  }
];

export function MeditationTool() {
  const [selectedSession, setSelectedSession] = useState<MeditationSession | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [volume, setVolume] = useState([50]);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, timeLeft]);

  const startSession = (session: MeditationSession) => {
    setSelectedSession(session);
    setTimeLeft(session.duration * 60);
    setIsPlaying(true);

    if (session.audioUrl && audioRef.current) {
      audioRef.current.src = session.audioUrl;
      audioRef.current.volume = volume[0] / 100;
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const resetSession = () => {
    setIsPlaying(false);
    setTimeLeft(selectedSession ? selectedSession.duration * 60 : 0);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0] / 100;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <audio ref={audioRef} />
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full">
          <Lotus className="h-4 w-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Meditation & Prayer</span>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Sacred Meditation Tool
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find inner peace through guided meditation, prayer, and mindfulness practices
        </p>
      </div>

      {/* Session Selection */}
      {!selectedSession && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meditationSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => startSession(session)}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {session.title}
                  </CardTitle>
                  <Badge variant="secondary">
                    {session.duration} min
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{session.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="capitalize">
                    {session.type}
                  </Badge>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Active Session */}
      {selectedSession && (
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{selectedSession.title}</CardTitle>
            <p className="text-muted-foreground">{selectedSession.description}</p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Timer Display */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-8 border-purple-200 dark:border-purple-800"></div>
                <div 
                  className="absolute inset-0 rounded-full border-8 border-purple-500 transition-all duration-1000"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(2 * Math.PI * (1 - timeLeft / (selectedSession.duration * 60)) - Math.PI/2)}% ${50 + 50 * Math.sin(2 * Math.PI * (1 - timeLeft / (selectedSession.duration * 60)) - Math.PI/2)}%, 50% 50%)`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {formatTime(timeLeft)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {isPlaying ? 'Meditating...' : 'Paused'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={resetSession}
                className="rounded-full"
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                onClick={togglePlayPause}
                className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-16 h-16"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedSession(null)}
                className="rounded-full"
              >
                <Timer className="h-5 w-5" />
              </Button>
            </div>

            {/* Volume Control */}
            {selectedSession.audioUrl && (
              <div className="flex items-center space-x-4 max-w-xs mx-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  value={volume}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground w-8">
                  {volume[0]}
                </span>
              </div>
            )}

            {/* Breathing Guide */}
            {selectedSession.id === 'breathing' && isPlaying && (
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-breathe opacity-70"></div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Follow the circle: Breathe in as it expands, breathe out as it contracts
                </p>
              </div>
            )}

            {/* Completion Message */}
            {timeLeft === 0 && selectedSession && (
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800">
                <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                  Session Complete!
                </h3>
                <p className="text-green-600 dark:text-green-400">
                  You have completed your {selectedSession.title} meditation. Take a moment to appreciate this peaceful state.
                </p>
                <Button
                  className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  onClick={() => setSelectedSession(null)}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Choose Another Session
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}