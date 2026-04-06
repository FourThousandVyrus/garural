'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    globeRef.current.rotation.y += delta * 0.1;
  });

  const ghanaPosition = useMemo(() => {
    const lat = THREE.MathUtils.degToRad(7.9);
    const lon = THREE.MathUtils.degToRad(-1.0);
    const r = 2.02;
    return new THREE.Vector3(
      r * Math.cos(lat) * Math.cos(lon),
      r * Math.sin(lat),
      r * Math.cos(lat) * Math.sin(lon)
    );
  }, []);

  const sourceCountries = useMemo(() => {
    const coords = [
      { lat: 51.5, lon: -0.1 },   // UK
      { lat: 38.9, lon: -77.0 },   // US
      { lat: 52.5, lon: 13.4 },    // Germany
      { lat: 41.9, lon: 12.5 },    // Italy
    ];
    return coords.map(({ lat, lon }) => {
      const latRad = THREE.MathUtils.degToRad(lat);
      const lonRad = THREE.MathUtils.degToRad(lon);
      const r = 2.02;
      return new THREE.Vector3(
        r * Math.cos(latRad) * Math.cos(lonRad),
        r * Math.sin(latRad),
        r * Math.cos(latRad) * Math.sin(lonRad)
      );
    });
  }, []);

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial color="#1A2D52" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Ghana point */}
      <mesh position={ghanaPosition}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#D4A017" />
      </mesh>
      <mesh position={ghanaPosition}>
        <ringGeometry args={[0.08, 0.15, 32]} />
        <meshBasicMaterial color="#D4A017" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Source country points */}
      {sourceCountries.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      ))}
    </group>
  );
}

export default function GlobeVisualization() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
