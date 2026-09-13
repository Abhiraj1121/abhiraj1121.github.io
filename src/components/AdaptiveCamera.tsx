import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function AdaptiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const persp = camera as THREE.PerspectiveCamera;
    const aspect = size.width / size.height;
    const isPortrait = aspect < 0.9;
    const isNarrow = size.width < 640;

    persp.fov = isPortrait ? 75 : isNarrow ? 62 : 55;
    persp.position.set(0, isPortrait ? 0.1 : 0.5, isPortrait ? 13 : isNarrow ? 10 : 9);
    persp.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}
