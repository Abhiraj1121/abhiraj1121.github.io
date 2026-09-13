import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useFieldGeometry(count: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#4c6fff"),
      new THREE.Color("#f0b429"),
    ];
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);
}

function ParticleField({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const { positions, colors } = useFieldGeometry(count);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.015;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function NebulaGrid({ divisions }: { divisions: number }) {
  const grid = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!grid.current) return;
    grid.current.position.z = (state.clock.elapsedTime * 0.15) % 4;
  });
  return (
    <group ref={grid} position={[0, -3.5, -6]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <gridHelper args={[40, divisions, "#4c6fff", "#1a1830"]} />
    </group>
  );
}

interface Props {
  isMobile?: boolean;
}

export default function Background({ isMobile = false }: Props) {
  const particleCount = isMobile ? 900 : 2400;
  const gridDivisions = isMobile ? 20 : 40;

  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 8, 22]} />
      <ambientLight intensity={0.15} />
      <ParticleField count={particleCount} />
      <NebulaGrid divisions={gridDivisions} />
    </>
  );
}
