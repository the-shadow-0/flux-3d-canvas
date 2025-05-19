// src/components/scene/lighting-rig.tsx
"use client";

import { Environment, Sky } from '@react-three/drei';

export function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 7]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="hsl(var(--accent))"
      />
      <pointLight 
        position={[-5, 5, -5]} 
        intensity={0.8} 
        color="hsl(var(--primary))" 
        distance={30}
        decay={1.5} 
      />
      <Environment preset="sunset" background={false} /> 
      <Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25} />
    </>
  );
}
