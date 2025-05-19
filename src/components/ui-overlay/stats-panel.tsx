"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Box } from 'lucide-react';

export function StatsPanel() {
  const [fps, setFps] = useState<number | null>(null);
  const [objectCount, setObjectCount] = useState<number | null>(null);

  useEffect(() => {
    // Mock FPS and object count updates
    setFps(Math.floor(Math.random() * 5 + 58)); // Simulate 58-62 FPS
    setObjectCount(Math.floor(Math.random() * 10 + 5)); // Simulate 5-14 objects

    const intervalId = setInterval(() => {
      setFps(Math.floor(Math.random() * 5 + 58));
      setObjectCount(prev => prev ? prev + Math.floor(Math.random()*3-1) : Math.floor(Math.random() * 10 + 5) ); // Small fluctuations
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="glassmorphic w-full sm:w-auto neon-outline-primary">
      <CardHeader>
        <CardTitle className="text-lg neon-text-primary flex items-center">
          <Zap className="mr-2 h-5 w-5" />
          Scene Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className="font-mono neon-text-accent">{fps !== null ? fps : '--'}</span>
        </div>
        <div className="flex justify-between">
          <span>Objects:</span>
          <span className="font-mono neon-text-accent">{objectCount !== null ? objectCount : '--'}</span>
        </div>
        {/* In a real R3F app, you'd get these from useThree or performance monitors */}
      </CardContent>
    </Card>
  );
}
