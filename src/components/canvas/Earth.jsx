import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("/models/Earth_1_12756.glb");

  useEffect(() => {
    // Normalize the model: recenter on origin and scale to a consistent size
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 4 / maxDim;
    scene.scale.setScalar(scale);
    scene.position.set(
      -center.x * scale,
      -center.y * scale,
      -center.z * scale
    );
  }, [scene]);

  return <primitive object={scene} />;
};

// Wireframe geodesic sphere (the network grid)
const NetworkGrid = ({ radius = 2.3 }) => {
  const geometry = new THREE.IcosahedronGeometry(radius, 2);
  return (
    <lineSegments geometry={new THREE.WireframeGeometry(geometry)}>
      <lineBasicMaterial color="#00ffff" transparent opacity={0.35} />
    </lineSegments>
  );
};

// Soft radial glow sprite for the vertex dots
const useGlowTexture = () =>
  useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(94,234,212,0.8)");
    gradient.addColorStop(1, "rgba(94,234,212,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

// Glowing dots at each vertex of the grid
const NetworkNodes = ({ radius = 2.3 }) => {
  const glowTexture = useGlowTexture();
  const geometry = useMemo(
    () => new THREE.IcosahedronGeometry(radius, 2),
    [radius]
  );
  const positions = geometry.attributes.position.array;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={glowTexture}
        size={0.18}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#5eead4"
      />
    </points>
  );
};

// Tilted elliptical orbit ring (proper 3D criss-cross)
const OrbitRing = ({
  radius = 3.2,
  tiltX = 0,
  tiltZ = 0,
  color = "#5eead4",
  opacity = 0.5,
}) => {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius * 0.35
      )
    );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry} rotation={[tiltX, 0, tiltZ]}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
};

// Earth + network grid + nodes + orbit rings, rotating together
const EarthWithNetwork = () => {
  const group = useRef();

  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.0015;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} />
      <Earth />
      <NetworkGrid radius={2.3} />
      <NetworkNodes radius={2.3} />
      <OrbitRing radius={3.2} tiltX={1.4} tiltZ={0.15} />
      <OrbitRing radius={3.2} tiltX={1.4} tiltZ={-0.55} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-3, 2, 8] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthWithNetwork />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
