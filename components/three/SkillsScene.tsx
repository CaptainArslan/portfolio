"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Text, Billboard, Line, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

type SkillCategoryId = "backend" | "database" | "payments" | "cloud" | "realtime";

interface SkillNodeData {
  name: string;
  skillKey: string;
  position: [number, number, number];
  category: SkillCategoryId;
  radius: number;
}

/** Positions tuned for a network layout; skillKey matches skills page exactly */
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
  backend: new THREE.Color("#3B82F6"),
  database: new THREE.Color("#2DD4BF"),
  payments: new THREE.Color("#FB923C"),
  cloud: new THREE.Color("#A78BFA"),
  realtime: new THREE.Color("#F472B6"),
};

const BG_COLOR = "#0F172A";
const NODE_SCALE = 1.18;

function SoftFog() {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.FogExp2(BG_COLOR, 0.032);
    return () => {
      scene.fog = null;
    };
  }, [scene]);
  return null;
}

/** Glowing core at the center — the "hub" every skill connects back to */
function CoreHub({ reduceMotion }: { reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pulse = reduceMotion ? 1 : 1 + Math.sin(t * 1.4) * 0.06;
    if (meshRef.current) meshRef.current.scale.setScalar(0.5 * pulse);
    if (haloRef.current) haloRef.current.scale.setScalar(0.82 * (reduceMotion ? 1 : 1 + Math.sin(t * 1.4) * 0.1));
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color="#DBEAFE"
          emissive="#60A5FA"
          emissiveIntensity={0.9}
          metalness={0.2}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.14} depthWrite={false} />
      </mesh>
    </group>
  );
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
      groupRef.current.position.y = base.y + Math.sin(t * 0.6 + base.phase) * 0.055;
    }
    if (meshRef.current) {
      const pulse = isActive ? 1 + Math.sin(t * 2.6) * 0.06 : 1;
      const hoverBoost = hovered ? 1.12 : 1;
      const s = node.radius * NODE_SCALE * pulse * hoverBoost;
      meshRef.current.scale.setScalar(s);
      meshRef.current.rotation.y = t * 0.15 + base.phase;
      meshRef.current.rotation.x = t * 0.08;
    }
  });

  const color = CATEGORY_COLOR[node.category];
  const emissiveStr = isActive ? 0.95 : hovered ? 0.65 : dimOthers ? 0.32 : 0.5;
  const opacity = dimOthers ? 0.62 : isActive ? 1 : hovered ? 0.97 : 0.92;
  const lineOpacity = dimOthers ? 0.18 : isActive ? 0.85 : hovered ? 0.55 : 0.26;

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      e.stopPropagation();
      onPick(node.skillKey);
    },
    [node.skillKey, onPick]
  );

  const tetherEnd: [number, number, number] = [-node.position[0], -node.position[1], -node.position[2]];

  return (
    <group ref={groupRef} position={node.position}>
      {/* Tether line back to the core hub */}
      <Line
        points={[[0, 0, 0], tetherEnd]}
        color={color}
        lineWidth={isActive ? 1.8 : 1}
        transparent
        opacity={lineOpacity}
      />

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
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveStr}
          metalness={0.35}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          flatShading
          transparent
          opacity={opacity}
          toneMapped
        />
      </mesh>

      {isActive && (
        <mesh scale={node.radius * NODE_SCALE * 1.7}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshBasicMaterial color={color} transparent opacity={0.16} depthWrite={false} />
        </mesh>
      )}

      {/* Isolated Suspense so a slow/unavailable font-glyph fetch only ever
          hides this one label — never the hub, gems, or connector lines. */}
      <Suspense fallback={null}>
        <Billboard position={[0, node.radius * NODE_SCALE + 0.44, 0]}>
          <Text
            fontSize={0.2}
            color={dimOthers ? "#93A3B8" : "#F1F5F9"}
            fillOpacity={dimOthers ? 0.75 : 0.98}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.014}
            outlineColor="#0B1220"
            outlineOpacity={0.9}
            maxWidth={2.4}
          >
            {node.name}
          </Text>
        </Billboard>
      </Suspense>
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
  const reduceMotion = !!useReducedMotion();

  return (
    <>
      <SoftFog />

      <ambientLight intensity={0.55} color="#CBD5F5" />
      <directionalLight position={[6, 9, 6]} intensity={1.3} color="#F8FAFC" />
      <pointLight position={[-4, 2, 4]} intensity={11} color="#3B82F6" distance={15} decay={2} />
      <pointLight position={[4, -2, -3]} intensity={9} color="#A78BFA" distance={15} decay={2} />
      <pointLight position={[0, -4, 3]} intensity={5.5} color="#2DD4BF" distance={13} decay={2} />

      <Sparkles
        count={70}
        scale={8}
        size={1.6}
        speed={reduceMotion ? 0 : 0.18}
        opacity={0.35}
        color="#93C5FD"
      />

      <CoreHub reduceMotion={reduceMotion} />

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
        autoRotate={!dragging && !reduceMotion}
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
        alpha: true,
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
