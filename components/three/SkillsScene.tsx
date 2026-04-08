"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Environment, OrbitControls, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

type SkillCategoryId = "backend" | "database" | "payments" | "cloud" | "realtime";

interface SkillNodeData {
  name: string;
  skillKey: string;
  position: [number, number, number];
  category: SkillCategoryId;
  radius: number;
}

/** Positions tuned for a cloud layout; skillKey matches skills page exactly */
const NODES: SkillNodeData[] = [
  { name: "Laravel", skillKey: "Laravel", position: [-2.1, 1.5, 0.2], category: "backend", radius: 0.5 },
  { name: "PHP", skillKey: "PHP (OOP)", position: [-1.0, -0.7, 1.1], category: "backend", radius: 0.4 },
  { name: "REST API", skillKey: "REST API Design", position: [0.5, 1.85, -0.7], category: "backend", radius: 0.36 },
  { name: "Middleware", skillKey: "Middleware Development", position: [1.7, -1.5, 0.35], category: "backend", radius: 0.32 },
  { name: "JWT", skillKey: "JWT Authentication", position: [-2.3, -1.1, -0.8], category: "backend", radius: 0.3 },

  { name: "MySQL", skillKey: "MySQL", position: [-1.5, 2.0, 0.85], category: "database", radius: 0.46 },
  { name: "Redis", skillKey: "Redis", position: [1.35, -0.55, 1.95], category: "database", radius: 0.38 },
  { name: "Queries", skillKey: "Query Optimization", position: [0.2, 0.5, -2.0], category: "database", radius: 0.3 },
  { name: "Indexing", skillKey: "Database Indexing", position: [-1.2, -1.8, -1.4], category: "database", radius: 0.28 },
  { name: "Cache", skillKey: "Caching Strategies", position: [2.0, 1.0, -1.5], category: "database", radius: 0.28 },

  { name: "Gateway", skillKey: "Payment Gateway Integration", position: [2.45, 0.15, -0.95], category: "payments", radius: 0.4 },
  { name: "GoHighLevel", skillKey: "GoHighLevel CRM", position: [-2.25, 0.85, 1.35], category: "payments", radius: 0.36 },
  { name: "Webhooks", skillKey: "Webhook Management", position: [0.15, -2.05, 1.25], category: "payments", radius: 0.32 },
  { name: "PCI", skillKey: "PCI DSS Compliance", position: [-0.6, 1.2, 1.9], category: "payments", radius: 0.28 },
  { name: "Transactions", skillKey: "Transaction Processing", position: [1.8, -2.0, -0.4], category: "payments", radius: 0.3 },

  { name: "AWS", skillKey: "AWS (EC2, RDS, S3)", position: [2.05, 1.75, -0.15], category: "cloud", radius: 0.42 },
  { name: "Docker", skillKey: "Docker", position: [-1.85, 0.25, 1.95], category: "cloud", radius: 0.33 },
  { name: "CI/CD", skillKey: "CI/CD Pipelines", position: [0.95, 1.15, -1.75], category: "cloud", radius: 0.32 },
  { name: "Linux", skillKey: "Linux Server Management", position: [-0.75, -1.95, -1.05], category: "cloud", radius: 0.3 },
  { name: "Git", skillKey: "Git & Version Control", position: [2.15, -1.05, 0.85], category: "cloud", radius: 0.31 },

  { name: "Queues", skillKey: "Laravel Queues (Redis)", position: [2.25, 0.75, 1.05], category: "realtime", radius: 0.35 },
  { name: "Jobs", skillKey: "Background Jobs", position: [-0.45, -1.35, 1.75], category: "realtime", radius: 0.32 },
  { name: "Async", skillKey: "Async Processing", position: [1.55, 2.1, 0.55], category: "realtime", radius: 0.3 },
  { name: "Push", skillKey: "Push Notifications", position: [-1.6, 0.3, -1.85], category: "realtime", radius: 0.28 },
];

const CATEGORY_COLOR: Record<SkillCategoryId, THREE.Color> = {
  backend: new THREE.Color("#2563EB"),
  database: new THREE.Color("#0D9488"),
  payments: new THREE.Color("#EA580C"),
  cloud: new THREE.Color("#7C3AED"),
  realtime: new THREE.Color("#DB2777"),
};

function SoftFog() {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.FogExp2("#E8EEF7", 0.042);
    return () => {
      scene.fog = null;
    };
  }, [scene]);
  return null;
}

interface SkillSphereProps {
  node: SkillNodeData;
  activeSkill: string | null;
  activeCategory: string;
  onPick: (skillKey: string) => void;
}

function SkillSphere({ node, activeSkill, activeCategory, onPick }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const base = useMemo(
    () => ({ y: node.position[1], phase: node.position[0] * 1.6 + node.position[2] * 2.0 }),
    [node.position]
  );

  const isActive = activeSkill === node.skillKey;
  const dimOthers = activeCategory !== node.category && !isActive;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = base.y + Math.sin(t * 0.85 + base.phase) * 0.11;
    }
    if (meshRef.current) {
      const pulse = isActive ? 1 + Math.sin(t * 2.6) * 0.055 : 1;
      const hoverBoost = hovered ? 1.1 : 1;
      const s = node.radius * pulse * hoverBoost;
      meshRef.current.scale.setScalar(s);
    }
  });

  const color = CATEGORY_COLOR[node.category];
  const emissiveStr = isActive ? 0.5 : hovered ? 0.32 : dimOthers ? 0.07 : 0.2;
  const opacity = dimOthers ? 0.4 : isActive ? 1 : hovered ? 0.94 : 0.8;

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      e.stopPropagation();
      onPick(node.skillKey);
    },
    [node.skillKey, onPick]
  );

  return (
    <group ref={groupRef} position={node.position}>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[1, 40, 40]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveStr}
          metalness={0.32}
          roughness={0.16}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={opacity}
          toneMapped
        />
      </mesh>

      {isActive && (
        <mesh scale={node.radius * 1.6}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshBasicMaterial color={color} transparent opacity={0.11} depthWrite={false} />
        </mesh>
      )}

      <Billboard position={[0, node.radius + 0.44, 0]}>
        <Text
          fontSize={0.2}
          color={dimOthers ? "#94A3B8" : "#64748B"}
          fillOpacity={dimOthers ? 0.5 : 0.9}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.018}
          outlineColor="#ffffff"
          outlineOpacity={0.9}
          maxWidth={2.4}
        >
          {node.name}
        </Text>
      </Billboard>
    </group>
  );
}

interface SceneInnerProps {
  activeSkill: string | null;
  activeCategory: string;
  onPick: (skillKey: string) => void;
}

function SceneContent({ activeSkill, activeCategory, onPick }: SceneInnerProps) {
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <SoftFog />
      <color attach="background" args={["#EEF2F7"]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 11, 6]} intensity={1.05} color="#FFFBF5" />
      <directionalLight position={[-5, -3, -4]} intensity={0.32} color="#C4B5FD" />
      <pointLight position={[0, 5, 4]} intensity={0.45} color="#BFDBFE" distance={22} />
      <pointLight position={[-3, -2, 5]} intensity={0.22} color="#5EEAD4" distance={18} />

      <Environment preset="city" environmentIntensity={0.75} />

      <group>
        {NODES.map((node) => (
          <SkillSphere
            key={node.skillKey}
            node={node}
            activeSkill={activeSkill}
            activeCategory={activeCategory}
            onPick={onPick}
          />
        ))}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={5.2}
        maxDistance={13.5}
        rotateSpeed={0.62}
        zoomSpeed={0.65}
        autoRotate={!dragging}
        autoRotateSpeed={0.28}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </>
  );
}

export interface SkillsSceneProps {
  activeSkill: string | null;
  activeCategory: string;
  onNodeClick: (skillKey: string) => void;
}

export default function SkillsScene({
  activeSkill,
  activeCategory,
  onNodeClick,
}: SkillsSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      style={{ width: "100%", height: "100%", touchAction: "none" }}
      dpr={[1, Math.min(2, typeof window !== "undefined" ? window.devicePixelRatio : 1)]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 1.1, 8.2], fov: 50, near: 0.1, far: 55 }}
    >
      <SceneContent
        activeSkill={activeSkill}
        activeCategory={activeCategory}
        onPick={onNodeClick}
      />
    </Canvas>
  );
}
