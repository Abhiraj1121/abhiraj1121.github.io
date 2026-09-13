import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { projects } from "../data/projects";
import ProjectNode from "./ProjectNode";

function CameraRig({ isMobile }: { isMobile: boolean }) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, -2.4, 0));
  const baseY = useRef<number | null>(null);

  useFrame(() => {
    // capture the y AdaptiveCamera set for this viewport, once, on first frame
    if (baseY.current === null) baseY.current = camera.position.y;

    const intensity = isMobile ? 0.35 : 0.9;
    const tx = pointer.x * intensity;
    const ty = pointer.y * (intensity * 0.55);

    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (baseY.current + ty - camera.position.y) * 0.04;
    camera.lookAt(target.current);
  });

  return null;
}

interface Props {
  isMobile?: boolean;
}

export default function Scene({ isMobile = false }: Props) {
  return (
    <>
      <CameraRig isMobile={isMobile} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={1.1} color="#8b5cf6" />
      <pointLight position={[-6, -3, -4]} intensity={0.8} color="#4c6fff" />
      <hemisphereLight args={["#8b5cf6", "#050508", 0.3]} />

      {projects.map((project, i) => (
        <ProjectNode key={project.id} project={project} index={i} isMobile={isMobile} />
      ))}
    </>
  );
}
