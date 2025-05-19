// src/components/scene/r3f-content.tsx
"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const DynamicBaseScene = dynamic(
  () => import('./base-scene').then(mod => mod.BaseScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }
);

interface R3FContentProps {
  dpr: number;
  setDpr: (dpr: number) => void;
  isModelInScene: boolean;
}

export function R3FContent({ dpr, setDpr, isModelInScene }: R3FContentProps) {
  return (
    <div className="w-full h-full">
      <DynamicBaseScene dpr={dpr} />
    </div>
  );
}

export default R3FContent;
