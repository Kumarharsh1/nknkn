import React, { Suspense, useEffect, useRef } from "react";
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

// Glowing dots at each vertex of the grid
const NetworkNodes = ({ radius = 2.3 }) => {
  const geometry = new THREE.IcosahedronGeometry(radius, 2);
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
        color="#ffffff"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
};

// Tilted elliptical orbit ring
const OrbitRing = ({
  radiusX = 3,
  radiusZ = 1.2,
  rotationX = 0,
  color = "#00ffff",
}) => {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * radiusX,
        0,
        Math.sin(theta) * radiusZ
      )
    );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry} rotation={[rotationX, 0, 0]}>
      <lineBasicMaterial color={color} transparent opacity={0.6} />
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
      <Earth />
      <NetworkGrid radius={2.3} />
      <NetworkNodes radius={2.3} />
      <OrbitRing radiusX={3.2} radiusZ={1.3} rotationX={0.3} />
      <OrbitRing radiusX={3.0} radiusZ={1.5} rotationX={-0.2} color="#33ffff" />
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
