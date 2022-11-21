import "twin.macro";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

const Laptop = lazy(() => import("./Laptop"));

function Scene() {
  return (
    <div tw="w-full pt-[10vh] h-[50vh]">
      <Canvas
        shadows
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        camera={{ position: [-3.5, 3, 0], fov: 35 }}
      >
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
