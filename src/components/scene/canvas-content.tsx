"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function CanvasContent({ dpr }: { dpr: number }) {
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
