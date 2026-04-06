'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function GoldCoin() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} castShadow>
        <cylinderGeometry args={[2, 2, 0.3, 64]} />
        <meshStandardMaterial
          color="#D4A017"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 64]} />
        <meshStandardMaterial
          color="#B8860B"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
      <mesh position={[0, -0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 64]} />
        <meshStandardMaterial
          color="#B8860B"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCoin() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFF8E7" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#D4A017" />
      <GoldCoin />
      <Environment preset="city" />
    </Canvas>
  );
}
