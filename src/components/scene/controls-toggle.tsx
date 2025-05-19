// src/components/scene/controls-toggle.tsx
"use client";

import { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Orbit, Send } from 'lucide-react'; // Using Send for Fly as Plane is not in lucide

export function ControlsToggle() {
  const [isFlyControls, setIsFlyControls] = useState(false);

  const toggleControls = () => {
    setIsFlyControls(!isFlyControls);
    // In a real R3F app, this would change the active camera controls
    // e.g., by setting state that's read by the R3F canvas to switch
    // between <OrbitControls /> and <FlyControls />.
    console.log("Controls toggled to:", isFlyControls ? "Orbit" : "Fly");
  };

  return (
    <div className="flex items-center space-x-2 p-2 rounded-lg glassmorphic neon-outline-accent">
      <Label htmlFor="controls-switch" className="flex items-center gap-2 cursor-pointer">
        {isFlyControls ? <Send className="w-5 h-5 text-accent" /> : <Orbit className="w-5 h-5 text-accent" />}
        <span className="text-sm font-medium">
          {isFlyControls ? 'Fly Controls' : 'Orbit Controls'}
        </span>
      </Label>
      <Switch
        id="controls-switch"
        checked={isFlyControls}
        onCheckedChange={toggleControls}
        aria-label={`Switch to ${isFlyControls ? 'Orbit' : 'Fly'} controls`}
        className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-primary"
      />
    </div>
  );
}
