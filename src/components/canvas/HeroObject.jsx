import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Blob = ({ isMobile }) => {
  const group = useRef();
  const core = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;

    if (group.current) {
      // Rotate toward the cursor for a lively, interactive feel
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        x * 0.5,
        0.06
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -y * 0.5,
        0.06
      );
      // Subtle parallax drift toward the pointer
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        x * 0.6,
        0.05
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        y * 0.4,
        0.05
      );
    }

    if (core.current) {
      // Counter-rotate the inner core for depth
      core.current.rotation.y -= 0.004;
      core.current.rotation.z += 0.002;
    }
  });

  const scale = isMobile ? 1.7 : 2.5;
  const position = isMobile ? [0, -0.4, 0] : [1.9, 0, 0];

  return (
    <Float speed={1.6} rotationIntensity={1} floatIntensity={1.6}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <pointLight position={[-4, -2, -2]} intensity={4} color="#915EFF" />
      <pointLight position={[4, -2, 2]} intensity={3} color="#00cea8" />

      <group ref={group} position={position}>
        <mesh ref={core} scale={scale}>
          <icosahedronGeometry args={[1, 14]} />
          <MeshDistortMaterial
            color="#7c4dff"
            emissive="#3a1d8f"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.7}
            distort={0.35}
            speed={1.4}
          />
        </mesh>

        <mesh scale={scale * 1.28}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#00cea8"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeroObjectCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Blob isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroObjectCanvas;
