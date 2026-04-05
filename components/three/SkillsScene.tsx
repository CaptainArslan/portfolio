"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeData {
  name: string;
  position: [number, number, number];
  category: "backend" | "database" | "cloud" | "payment" | "frontend" | "devops";
}

const SKILLS_DATA: SkillNodeData[] = [
  // Backend
  { name: "Laravel", position: [-2, 1.5, 0], category: "backend" },
  { name: "PHP", position: [-1, -1, 1], category: "backend" },
  { name: "REST API", position: [0.5, 2, -1], category: "backend" },
  { name: "Middleware", position: [1.5, -2, 0.5], category: "backend" },
  { name: "JWT", position: [-2.5, -1.5, -1], category: "backend" },
  { name: "Queue", position: [2.5, 1, 1], category: "backend" },
  { name: "Webhooks", position: [0, -2.5, 1], category: "backend" },

  // Database
  { name: "MySQL", position: [-1.5, 2, 1], category: "database" },
  { name: "Redis", position: [1.5, -1, 2], category: "database" },

  // Cloud & DevOps
  { name: "AWS", position: [2, 2, 0], category: "cloud" },
  { name: "Docker", position: [-2, 0, 2], category: "devops" },
  { name: "CI/CD", position: [1, 1.5, -2], category: "devops" },
  { name: "Linux", position: [-1, -2, -1], category: "devops" },

  // Payment & Integrations
  { name: "Payment Gateway", position: [2.5, 0.5, -1], category: "payment" },
  { name: "GoHighLevel", position: [-2.5, 1, 1], category: "cloud" },

  // Frontend & Tools
  { name: "JavaScript", position: [0, 0, 2], category: "frontend" },
  { name: "HTML/CSS", position: [1, -2.5, 0], category: "frontend" },
  { name: "Bootstrap", position: [-1.5, 1, -2], category: "frontend" },
  { name: "Git", position: [2, -1.5, 1], category: "devops" },
  { name: "Composer", position: [0.5, 2.5, -1], category: "devops" },
];

const CATEGORY_COLORS: Record<string, string> = {
  backend: "#3B82F6",    // blue
  database: "#10B981",   // green
  cloud: "#A855F7",      // purple
  payment: "#F59E0B",    // yellow
  frontend: "#EC4899",   // pink
  devops: "#06B6D4",     // cyan
};

interface SkillNodeProps {
  skill: SkillNodeData;
  activeSkill: string | null;
  onNodeClick: (skill: string) => void;
}

function SkillNode({ skill, activeSkill, onNodeClick }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const isActive = activeSkill === skill.name;
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Slow continuous orbit
    groupRef.current.rotation.y += 0.0005;

    if (meshRef.current) {
      // Pulsing scale for active node
      if (isActive) {
        const scale = 1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
        meshRef.current.scale.set(scale, scale, scale);
      } else {
        meshRef.current.scale.set(1, 1, 1);
      }
    }
  });

  return (
    <group ref={groupRef} position={skill.position}>
      <mesh
        ref={meshRef}
        onClick={() => onNodeClick(skill.name)}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial
          color={CATEGORY_COLORS[skill.category]}
          transparent
          opacity={isActive ? 0.9 : 0.7}
          emissive={CATEGORY_COLORS[skill.category]}
          emissiveIntensity={isActive ? 0.8 : hovered ? 0.5 : 0.2}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Text Label */}
      <Text
        position={[0, 0.6, 0]}
        fontSize={0.25}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
      >
        {skill.name}
      </Text>

      {/* Glow effect for active node */}
      {isActive && (
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial
            color={CATEGORY_COLORS[skill.category]}
            transparent
            opacity={0.1}
          />
        </mesh>
      )}
    </group>
  );
}

interface SceneProps {
  activeSkill: string | null;
  onNodeClick: (skill: string) => void;
}

function SkillsSceneContent({ activeSkill, onNodeClick }: SceneProps) {
  return (
    <>
      <perspectiveCamera position={[0, 0, 8]} fov={60} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={0.9} color="#E0F2FE" />
      <pointLight position={[-10, -10, 5]} intensity={0.4} color="#A78BFA" />

      {SKILLS_DATA.map((skill) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          activeSkill={activeSkill}
          onNodeClick={onNodeClick}
        />
      ))}

      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        autoRotate
        autoRotateSpeed={2}
        rotateSpeed={0.5}
      />
    </>
  );
}

interface SkillsSceneProps {
  activeSkill: string | null;
  onNodeClick: (skill: string) => void;
}

export default function SkillsScene({ activeSkill, onNodeClick }: SkillsSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      dpr={[1, 2]}
    >
      <SkillsSceneContent activeSkill={activeSkill} onNodeClick={onNodeClick} />
    </Canvas>
  );
}
