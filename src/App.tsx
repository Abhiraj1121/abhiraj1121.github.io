import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Background from "./components/Background";
import Scene from "./components/Scene";
import OverlayUI from "./components/OverlayUI";
import AdaptiveCamera from "./components/AdaptiveCamera";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <div
      className="relative overflow-hidden bg-bg touch-none"
      style={{ height: "100dvh", width: "100vw" }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 8], fov: 55 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <AdaptiveCamera />
          <Background isMobile={isMobile} />
          <Scene isMobile={isMobile} />
        </Suspense>
      </Canvas>
      <OverlayUI />
    </div>
  );
}
