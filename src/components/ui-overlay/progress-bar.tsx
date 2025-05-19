"use client";

import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { generateLoadProgressBar, type GenerateLoadProgressBarOutput } from '@/ai/flows/generate-load-progress-bar';
import { Loader } from 'lucide-react';

interface AiProgressBarProps {
  isLoading: boolean;
  currentProgress: number;
  modelName?: string;
}

export function AiProgressBar({ isLoading, currentProgress, modelName = "Asset" }: AiProgressBarProps) {
  const [progressText, setProgressText] = useState<string>("Initializing load sequence...");
  const [aiResponse, setAiResponse] = useState<GenerateLoadProgressBarOutput | null>(null);
  const [isFetchingAiText, setIsFetchingAiText] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsFetchingAiText(true);
      generateLoadProgressBar({ modelName, loadPercentage: currentProgress })
        .then(response => {
          setAiResponse(response);
          setProgressText(response.progressBarDescription);
        })
        .catch(error => {
          console.error("AI Progress Bar Error:", error);
          setProgressText(`Loading ${modelName}... ${currentProgress}%`);
        })
        .finally(() => {
          setIsFetchingAiText(false);
        });
    } else {
      setProgressText("Load complete!");
    }
  }, [isLoading, currentProgress, modelName]);

  if (!isLoading && currentProgress === 100) {
     return (
        <div className="text-center p-4 text-sm text-green-400 neon-text-accent">
            {progressText}
        </div>
     );
  }
  
  if (!isLoading) return null;


  return (
    <div className="w-full space-y-2 p-3 rounded-lg glassmorphic neon-outline-accent">
      <div className="flex items-center justify-between text-xs mb-1">
        <p className="flex items-center gap-1">
          {isFetchingAiText && <Loader className="h-3 w-3 animate-spin" />}
          <span className="neon-text-primary">{modelName}</span> - Loading...
        </p>
        <p className="font-mono">{currentProgress}%</p>
      </div>
      <Progress value={currentProgress} className="w-full h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
      <p className="text-xs text-center italic text-muted-foreground pt-1 min-h-[2em]">{progressText}</p>
    </div>
  );
}
