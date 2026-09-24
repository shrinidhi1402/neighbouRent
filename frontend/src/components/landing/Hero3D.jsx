import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment, ContactShadows, Center, Image } from '@react-three/drei';
import * as THREE from 'three';

const ProductCard = ({ url, position, rotation, scale, floatSpeed = 1, floatIntensity = 1, floatRotation = 0.5 }) => {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const targetScale = hovered ? scale * 1.1 : scale;
    ref.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    
    if (hovered) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotation[1] + 0.15, 0.1);
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, position[2] + 0.3, 0.1);
      ref.current.material.color.lerp(new THREE.Color('#ffffff'), 0.1); // subtle brighten
    } else {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotation[1], 0.1);
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, position[2], 0.1);
      ref.current.material.color.lerp(new THREE.Color('#f8fafc'), 0.1);
    }
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={floatRotation} floatIntensity={floatIntensity}>
      <Image 
        ref={ref}
        url={url} 
        position={position}
        rotation={rotation}
        scale={[scale, scale]} // width/height for Image component
        transparent
        opacity={1}
        radius={0.2} // rounded corners
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { setHover(false); document.body.style.cursor = 'auto'; }}
      />
      {/* Backside so it's not invisible from behind */}
      <mesh position={[position[0], position[1], position[2] - 0.01]} rotation={rotation} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
    </Float>
  );
};

const GeometricShape = ({ type, position, color, scale, floatSpeed, floatIntensity }) => {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    const targetScale = hovered ? scale * 1.1 : scale;
    ref.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
  });

  let Geometry;
  if (type === 'diamond') Geometry = <octahedronGeometry args={[1, 0]} />;
  if (type === 'sphere') Geometry = <sphereGeometry args={[1, 32, 32]} />;
  if (type === 'torus') Geometry = <torusGeometry args={[1, 0.3, 16, 32]} />;
  if (type === 'box') Geometry = <boxGeometry args={[1.2, 1.2, 1.2]} />;

  return (
    <Float speed={floatSpeed} rotationIntensity={1} floatIntensity={floatIntensity}>
      <mesh 
        ref={ref} 
        position={position} 
        scale={scale}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHover(false); document.body.style.cursor = 'auto'; }}
      >
        {Geometry}
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.1} 
          transmission={type === 'diamond' ? 0.8 : 0} 
          thickness={0.5} 
          envMapIntensity={2}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
};

const SceneGroup = () => {
  const group = useRef();
  useFrame((state) => {
    // Parallax effect following mouse
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse.x * 0.5, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, state.mouse.y * 0.5, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.1, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.1, 0.05);
  });

  return (
    <group ref={group}>
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 8, Math.PI / 8]}
        azimuth={[-Math.PI / 8, Math.PI / 8]}
      >
        <Center position={[0, 0, 0]}>
          {/* Main Product Cards (Images as 3D Planes) */}
          <ProductCard url="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80" position={[1.5, 0.5, 1.5]} rotation={[0, -0.2, 0]} scale={2.5} floatSpeed={1.5} floatIntensity={1} />
          <ProductCard url="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" position={[-1.5, 1.5, 0.5]} rotation={[0, 0.3, 0]} scale={2} floatSpeed={2} floatIntensity={1.5} />
          <ProductCard url="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80" position={[0, -2, 1]} rotation={[0, 0.1, 0]} scale={2.2} floatSpeed={1.2} floatIntensity={1} />
          <ProductCard url="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80" position={[-2, -1, 0]} rotation={[0, 0.2, -0.1]} scale={1.8} floatSpeed={2.5} floatIntensity={0.8} />
          <ProductCard url="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80" position={[2, -1.5, -0.5]} rotation={[0, -0.3, 0.1]} scale={1.8} floatSpeed={2} floatIntensity={1.2} />
          <ProductCard url="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80" position={[-2.5, 2.5, -1]} rotation={[0, 0.2, -0.05]} scale={1.7} floatSpeed={1.8} floatIntensity={1.3} />
          <ProductCard url="https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=600&q=80" position={[2.5, 2.2, -0.5]} rotation={[0, -0.2, 0.1]} scale={1.6} floatSpeed={2.2} floatIntensity={1.1} />
          <ProductCard url="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" position={[0, 3, -1]} rotation={[0, -0.1, 0]} scale={1.5} floatSpeed={1.7} floatIntensity={0.9} />
          
          {/* Decorative Elements matching the brand */}
          <GeometricShape type="diamond" position={[3, 2, -1]} color="#60a5fa" scale={0.8} floatSpeed={2} floatIntensity={2} />
          <GeometricShape type="diamond" position={[-3, -1.5, -2]} color="#93c5fd" scale={1.2} floatSpeed={1.5} floatIntensity={1.5} />
          <GeometricShape type="sphere" position={[-2, 3.5, -1.5]} color="#bfdbfe" scale={0.6} floatSpeed={3} floatIntensity={1} />
          <GeometricShape type="torus" position={[2.5, -2, -1]} color="#ffffff" scale={0.5} floatSpeed={2.5} floatIntensity={2} />
          <GeometricShape type="box" position={[0.5, 3, -0.5]} color="#eff6ff" scale={0.7} floatSpeed={1.8} floatIntensity={1.2} />
          <GeometricShape type="diamond" position={[1.5, -3, -2]} color="#3b82f6" scale={0.5} floatSpeed={2.2} floatIntensity={1.5} />
        </Center>

        <ContactShadows position={[0, -4, 0]} opacity={0.3} scale={20} blur={2} far={5} />
      </PresentationControls>
    </group>
  );
};

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <spotLight position={[-10, 10, -5]} intensity={1} color="#bfdbfe" />
      <Suspense fallback={null}>
        <SceneGroup />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
