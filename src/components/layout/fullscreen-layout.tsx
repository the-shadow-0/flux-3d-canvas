// src/components/layout/fullscreen-layout.tsx
"use client"; // <--- Add this directive

import dynamic from 'next/dynamic';
import { Header } from './header';
import { Footer } from './footer';
import { UiOverlay } from '@/components/ui-overlay/ui-overlay';
import { Loader2 } from 'lucide-react';

const SceneCanvas = dynamic(
  () => import('@/components/scene/scene-canvas').then(mod => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex-grow flex items-center justify-center bg-background/50 p-4">
        <div className="w-full max-w-3xl aspect-[16/10] bg-card/30 rounded-lg shadow-2xl border border-border flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden neon-outline-accent">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-lg">Loading 3D Experience...</p>
        </div>
      </div>
    ),
  }
);

export function FullscreenLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 pb-20 flex flex-col"> {/* Adjust pt/pb for header/footer height */}
        {children || <SceneCanvas />}
      </main>
      <Footer />
      <UiOverlay /> {/* This will position StatsPanel */}
    </div>
  );
}
