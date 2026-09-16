/**
 * 10_React_Three_Fiber_ThreeJS - Hero 3D Badge Canvas
 */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpinningBadge() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.25 : 1}
      >
        <octahedronGeometry args={[1.8, 0]} />
        <MeshDistortMaterial
          color={hovered ? '#818cf8' : '#4f46e5'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-80 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#38bdf8" />
        <SpinningBadge />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
