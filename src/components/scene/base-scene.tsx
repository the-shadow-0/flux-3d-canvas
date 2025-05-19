"use client";

import { useEffect, useState } from 'react';
import { type Canvas } from '@react-three/fiber';

type ThreeComponents = {
    Canvas: typeof Canvas;
    OrbitControls: any;
};

export function BaseScene({ dpr }: { dpr: number }) {
    const [Components, setComponents] = useState<ThreeComponents | null>(null);

    useEffect(() => {
        const loadComponents = async () => {
            const [{ Canvas }, { OrbitControls }] = await Promise.all([
                import('@react-three/fiber'),
                import('@react-three/drei')
            ]);
            setComponents({ Canvas, OrbitControls });
        };
        loadComponents();
    }, []);

    if (!Components) return null;
    const { Canvas, OrbitControls } = Components;

    return (
        <Canvas dpr={dpr} camera={{ position: [0, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
}
