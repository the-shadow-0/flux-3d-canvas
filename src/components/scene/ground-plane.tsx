// src/components/scene/ground-plane.tsx
"use client";

import * as THREE from 'three'; // Moved to top
import { usePlane } from '@react-three/cannon';
import { Grid } from '@react-three/drei';
import type { PublicApi } from '@react-three/cannon';

export function GroundPlane() {
  // Physics plane (invisible, for collisions)
  const [ref] = usePlane(() => ({ 
    rotation: [-Math.PI / 2, 0, 0], 
    position: [0, 0, 0], // Position at the origin y=0
    type: 'Static', 
    mass: 0 
  })) as [React.RefObject<THREE.Mesh>, PublicApi];

  return (
    <>
      {/* Visual Grid - does not interact with physics */}
      <Grid
        position={[0, 0.01, 0]} // Slightly above the physics plane to avoid z-fighting
        args={[100, 100]}
        cellSize={0.5}
        cellThickness={1}
        cellColor={'hsl(var(--accent))'}
        sectionSize={2.5}
        sectionThickness={1.5}
        sectionColor={'hsl(var(--primary))'}
        fadeDistance={50}
        fadeStrength={1}
        infiniteGrid
        side={THREE.DoubleSide}
      />
      {/* This mesh is for the physics plane, can be made invisible */}
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="transparent" transparent opacity={0} />
      </mesh>
    </>
  );
}
