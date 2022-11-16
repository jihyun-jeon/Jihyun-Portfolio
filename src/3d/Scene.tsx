import "twin.macro";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";

function Scene() {
  return (
    <div tw="w-full h-[50vh]">
      <Canvas
        shadows
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        camera={{ position: [-3.5, 3, 0], fov: 35 }}
      >
        <Laptop />
      </Canvas>
    </div>
  );
}

export default Scene;
