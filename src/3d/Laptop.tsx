import {
  AccumulativeShadows,
  Environment,
  RandomizedLight,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/web";
import { Vector3 } from "three";
import Model from "./Model";
import { useCallback, useEffect, useState } from "react";

function Laptop() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const spring = useSpring({
    from: { mouseX: 0, mouseY: 1 },
    to: { mouseX: mouseX, mouseY: mouseY },
  });

  useFrame(({ camera }) => {
    camera.position.z = spring.mouseX.get();
    camera.position.y = spring.mouseY.get() * 0.3;
    camera.lookAt(new Vector3(0, 0.7, 0));
  });

  const onMouseMove = useCallback((e: MouseEvent) => {
    const hw = window.innerWidth / 2;
    const x = 1 - e.clientX / hw;

    setMouseX(x);

    const hh = window.innerHeight / 2;
    const y = 1 - e.clientY / hh;

    setMouseY(-y + 2);

    // setMouseX(e.clientX * 1);
    // setMouseY(e.clientY * -1 + 2);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousedown", onMouseMove);
    };
  }, []);

  return (
    <>
      <pointLight
        castShadow
        color={"#ffc926"}
        intensity={3}
        position={[1.1, 1.9, 1.3]}
        shadow-bias={-0.0005}
        shadow-camera-far={10}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight
        castShadow
        color={"#01c4f5"}
        intensity={10}
        position={[2, 1, 0]}
        shadow-bias={-0.0005}
        shadow-camera-far={10}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight
        color={"#ffffff"}
        intensity={0.5}
        position={[-3, 1, 3]}
        shadow-bias={-0.05}
        shadow-camera-far={10}
      />

      <Model />
      <AccumulativeShadows
        temporal
        toneMapped={true}
        frames={100}
        scale={10}
        opacity={0.4}
      >
        <RandomizedLight
          amount={8}
          radius={3}
          ambient={0.5}
          position={[6, 4, -2]}
        />
      </AccumulativeShadows>
      <Environment
        files={`${import.meta.env.BASE_URL}3d/photo_studio_loft_hall_1k.hdr`}
      />
    </>
  );
}

export default Laptop;
