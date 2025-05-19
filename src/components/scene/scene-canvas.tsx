// src/components/scene/scene-canvas.tsx
"use client";

import { useState, Suspense, useEffect, lazy } from 'react';
import { ModelLoader } from './model-loader';
import { Loader2 } from 'lucide-react'; // Using a generic loader icon

// Dynamically import the R3F specific content using React.lazy
const R3FDynamicContent = lazy(() => import('./r3f-content'));

export function SceneCanvas() {
  const [isModelInScene, setIsModelInScene] = useState(false);
  const [hasLoadingProcessCompleted, setHasLoadingProcessCompleted] = useState(false);
  const [dpr, setDpr] = useState(1.5); // Default DPR
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  const handleLoadInitiated = () => {
    setIsModelInScene(true); // This will now enable the physics/lighting, but BoxDemo is commented out in R3FContent
    setHasLoadingProcessCompleted(false); // Reset for new loading sequence
  };

  const handleLoadingSequenceComplete = () => {
    setHasLoadingProcessCompleted(true);
  };

  const suspenseFallbackForLazyLoad = (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
      <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
      Preparing 3D Scene...
    </div>
  );

  const initialCanvasPlaceholder = (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
      <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
      Initializing 3D Scene...
    </div>
  );

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-background/50 p-4 overflow-auto">
      <div className="w-full max-w-3xl aspect-[16/10] bg-card/30 rounded-lg shadow-2xl border border-border flex items-center justify-center text-muted-foreground relative overflow-hidden neon-outline-accent">
        {isClientMounted ? (
          <Suspense fallback={suspenseFallbackForLazyLoad}>
            <R3FDynamicContent
              dpr={dpr}
              setDpr={setDpr}
              isModelInScene={isModelInScene}
            />
          </Suspense>
        ) : (
          initialCanvasPlaceholder
        )}
      </div>
      <ModelLoader
        modelPath="/models/demo.glb"
        onLoadInitiated={handleLoadInitiated}
        onLoadingSequenceComplete={handleLoadingSequenceComplete}
        showAsLoaded={isModelInScene && hasLoadingProcessCompleted}
      />
      <p className="mt-4 text-sm text-center text-muted-foreground italic max-w-md">
        This is a 3D scene rendered with React Three Fiber. The "loaded" model (BoxDemo) is currently commented out for debugging.
      </p>
    </div>
  );
}
