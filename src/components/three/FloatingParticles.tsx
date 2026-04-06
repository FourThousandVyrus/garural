'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function createDeterministicRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function Particles({ count = 200 }) {
  const meshRef = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    const random = createDeterministicRandom(count);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (random() - 0.5) * 20;
      arr[i * 3 + 1] = (random() - 0.5) * 20;
      arr[i * 3 + 2] = (random() - 0.5) * 20;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.02;
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += delta * 0.1;
      if (posArr[i * 3 + 1] > 10) posArr[i * 3 + 1] = -10;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        color="#D4A017"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Particles />
    </Canvas>
  );
}
