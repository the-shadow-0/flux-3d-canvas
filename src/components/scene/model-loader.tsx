// src/components/scene/model-loader.tsx
"use client";

import { useState, useEffect } from 'react';
import { AiProgressBar } from '@/components/ui-overlay/progress-bar';
import { Button } from '@/components/ui/button';
import { PackageCheck } from 'lucide-react';

export function ModelLoader({
  modelPath = "/models/demo.glb",
  onLoadInitiated,
  onLoadingSequenceComplete,
  showAsLoaded,
}: {
  modelPath?: string;
  onLoadInitiated: () => void;
  onLoadingSequenceComplete: () => void;
  showAsLoaded: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false); // Internal loading simulation state
  const [progress, setProgress] = useState(0);    // Internal progress state
  const [modelName, setModelName] = useState("Demo Model");

  useEffect(() => {
    const name = modelPath.split('/').pop()?.split('.')[0] || "Asset";
    setModelName(name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_]/g, " "));
  }, [modelPath]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.floor(Math.random() * 10) + 5;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            setProgress(100);
            onLoadingSequenceComplete(); // Notify parent that the simulation is done
            return 100;
          }
          return newProgress;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isLoading, onLoadingSequenceComplete]);

  const handleLoadButtonClick = () => {
    setProgress(0);
    setIsLoading(true); // Start internal loading simulation
    onLoadInitiated();  // Notify parent to add model to scene and reset completion flags
  };

  if (isLoading) { // Internal simulation running
    return <AiProgressBar isLoading={true} currentProgress={Math.min(progress, 100)} modelName={modelName} />;
  }

  if (showAsLoaded) { // Parent says model is in scene AND loading sequence is complete
    return (
      <div className="text-center p-8 space-y-4">
        <PackageCheck className="w-16 h-16 text-green-500 mx-auto neon-text-accent" />
        <p className="text-lg font-semibold">Model <span className="text-primary">{modelName}</span> Ready!</p>
        <Button onClick={handleLoadButtonClick} variant="outline" className="neon-outline-primary neon-outline-primary-hover">Reload Model</Button>
      </div>
    );
  }

  // Initial state or model is not 'showAsLoaded'
  return (
    <div className="text-center p-8">
      <Button onClick={handleLoadButtonClick} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-outline-primary neon-outline-primary-hover">
        Load 3D Model ({modelName})
      </Button>
    </div>
  );
}
