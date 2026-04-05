"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface Node {
  position: [number, number, number];
  velocity: [number, number, number];
}

// Seeded random for deterministic positions
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function Nodes() {
  const nodesRef = useRef<Node[]>([]);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodeCountRef = useRef(30);

  // Initialize nodes with deterministic positions
  useMemo(() => {
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCountRef.current; i++) {
      nodes.push({
        position: [
          (seededRandom(i * 73) - 0.5) * 8,
          (seededRandom(i * 137) - 0.5) * 8,
          (seededRandom(i * 211) - 0.5) * 8,
        ],
        velocity: [
          (seededRandom(i * 53 + 1000) - 0.5) * 0.01,
          (seededRandom(i * 97 + 1000) - 0.5) * 0.01,
          (seededRandom(i * 181 + 1000) - 0.5) * 0.01,
        ],
      });
    }
    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    // Adjust node count based on window size
    const handleResize = () => {
      nodeCountRef.current = window.innerWidth < 768 ? 15 : 30;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    // Update node positions
    if (!meshRef.current) return;

    const nodes = nodesRef.current;
    const damping = 0.98;
    const boundaries = 4;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Add slight drift
      node.velocity[0] += (seededRandom(i * 71 + Date.now() * 0.0001) - 0.5) * 0.0008;
      node.velocity[1] += (seededRandom(i * 113 + Date.now() * 0.0001) - 0.5) * 0.0008;
      node.velocity[2] += (seededRandom(i * 193 + Date.now() * 0.0001) - 0.5) * 0.0008;

      node.velocity[0] *= damping;
      node.velocity[1] *= damping;
      node.velocity[2] *= damping;

      node.position[0] += node.velocity[0];
      node.position[1] += node.velocity[1];
      node.position[2] += node.velocity[2];

      // Bounce off boundaries
      if (Math.abs(node.position[0]) > boundaries) node.velocity[0] *= -1;
      if (Math.abs(node.position[1]) > boundaries) node.velocity[1] *= -1;
      if (Math.abs(node.position[2]) > boundaries) node.velocity[2] *= -1;

      const dummy = new THREE.Object3D();
      dummy.position.set(...node.position);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update lines
    if (linesRef.current) {
      const positions: number[] = [];
      const distanceThreshold = 2.5;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].position[0] - nodes[j].position[0];
          const dy = nodes[i].position[1] - nodes[j].position[1];
          const dz = nodes[i].position[2] - nodes[j].position[2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < distanceThreshold) {
            positions.push(...nodes[i].position);
            positions.push(...nodes[j].position);
          }
        }
      }

      const geometry = linesRef.current.geometry as THREE.BufferGeometry;
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    }
  });

  return (
    <>
      {/* Nodes */}
      <instancedMesh
        ref={meshRef}
        args={[new THREE.SphereGeometry(0.06, 8, 8), new THREE.MeshStandardMaterial({
          color: "#DBEAFE",
          transparent: true,
          opacity: 0.6,
          emissive: "#60A5FA",
          emissiveIntensity: 0.3,
        }), nodeCountRef.current]}
      />

      {/* Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={0} array={new Float32Array()} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#93C5FD" transparent opacity={0.3} linewidth={1} />
      </lineSegments>
    </>
  );
}

function Scene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!cameraRef.current) return;

    const targetRotationX = mouseRef.current.y * 0.3;
    const targetRotationY = mouseRef.current.x * 0.3;

    cameraRef.current.rotation.x += (targetRotationX - cameraRef.current.rotation.x) * 0.05;
    cameraRef.current.rotation.y += (targetRotationY - cameraRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} fov={60} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#E0F2FE" />
      <Nodes />
      <OrbitControls enabled={false} />
    </>
  );
}

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
}
