import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
  isMobile?: boolean;
}

export default function ProjectNode({ project, index, isMobile = false }: Props) {
  const group = useRef<THREE.Group>(null);
  const seed = index * 1.37;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = project.position[1] + Math.sin(t * 0.6 + seed) * 0.18;
    group.current.rotation.y = Math.sin(t * 0.2 + seed) * 0.1;
  });

  const baseFactor = project.featured ? 7.5 : 9.5;
  // NOTE: drei's Html scales UP as distanceFactor increases (scale = objectScale * distanceFactor).
  // A fraction below 1 shrinks mobile cards; a value above 1 would enlarge them.
  const distanceFactor = isMobile ? baseFactor * 0.72 : baseFactor;

  return (
    <group ref={group} position={project.position}>
      <Html center distanceFactor={distanceFactor}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block w-32 sm:w-52 select-none touch-manipulation rounded-xl sm:rounded-2xl border px-2.5 py-2 sm:px-4 sm:py-3 backdrop-blur-md transition-all duration-300 active:scale-95
          ${project.featured
              ? "border-violet/60 bg-gradient-to-br from-violet/25 to-cyan/10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]"
              : "border-white/10 bg-white/5 hover:border-violet/50 hover:bg-white/10"}
          hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.5)]`}
        >
          <div className="flex items-center justify-between mb-1 sm:mb-1.5">
            <div
              className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-[#07080c]"
              style={{ background: `linear-gradient(135deg, ${project.c1}, ${project.c2})` }}
            >
              {project.icon}
            </div>
            <span className="text-muted text-[10px] sm:text-xs opacity-60 group-hover:opacity-100 group-hover:text-white transition">
              ↗
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">{project.name}</h3>
          <p className="mt-0.5 sm:mt-1 hidden sm:block text-[11px] leading-snug text-muted line-clamp-2">
            {project.desc}
          </p>
        </a>
      </Html>
    </group>
  );
}
