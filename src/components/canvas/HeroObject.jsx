import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Blob = () => {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;
    const { x, y } = state.pointer;
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      y * 0.6,
      0.08
    );
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      x * 0.6,
      0.08
    );
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-3, -2, -2]} intensity={3} color="#915EFF" />
      <pointLight position={[3, -2, 2]} intensity={2.5} color="#00cea8" />
      <mesh ref={mesh} position={[1, 0, 0]} scale={2.1}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#915EFF"
          emissive="#3a1d8f"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.7}
          distort={0.38}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
};

const HeroObjectCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Blob />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroObjectCanvas;
