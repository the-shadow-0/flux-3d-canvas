// src/components/scene/box-demo.tsx
"use client";

import type { PublicApi } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import type * as THREE from 'three'; // Only for type, not direct import

export function BoxDemo() {
  // The type for the ref from useBox is React.MutableRefObject<THREE.Object3D | undefined>
  // A THREE.Mesh is an Object3D, so this should be fine.
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0], args: [1,1,1] })) as [React.RefObject<THREE.Mesh>, PublicApi];

  useEffect(() => {
    if (ref.current) {
      // Initial animation
      gsap.fromTo(ref.current.scale, { x: 0.1, y: 0.1, z: 0.1 }, { x: 1, y: 1, z: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' });
      gsap.fromTo(ref.current.rotation, { y: 0 }, { y: Math.PI * 2, duration: 3, ease: 'power1.out' });
    }
  }, [ref]);

  useFrame((state, delta) => {
    // Continuous subtle rotation
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  const handleClick = () => {
    // Apply an upward impulse on click
    api.applyImpulse([0, 5, 0], [0, 0, 0]);
    // Add a little spin
    api.applyLocalTorque([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5], [0,0,0]);

    // Visual feedback
    if (ref.current) {
      gsap.to(ref.current.scale, {
        x: 1.2, y: 1.2, z: 1.2, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut'
      });
    }
  };

  return (
    <mesh ref={ref} onClick={handleClick} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hsl(var(--primary))" metalness={0.6} roughness={0.3} emissive="hsl(var(--primary))" emissiveIntensity={0.2} />
    </mesh>
  );
}
