import "twin.macro";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import Loader from "./Loader";
import React from "react";

const Laptop = lazy(() => import("./Laptop"));

function Scene() {
  return (
    <div tw="w-full pt-[10vh] h-[50vh]">
      <Canvas
        shadows
        //preserveDrawingBuffer 캔버스 초기화 방지(브라우저가 캔버스 지우는거 방지)
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        camera={{ fov: 28, zoom: 3, position: [0, 1, 2] }}
      >
        <Suspense fallback={<Loader />}>
          <Laptop />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
