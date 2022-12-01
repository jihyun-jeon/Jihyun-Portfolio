import "twin.macro";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div tw="w-20 h-2 border border-black bg-transparent">
        <div tw="bg-mainOrange h-full" style={{ width: `${progress}%` }}></div>
      </div>
    </Html>
  );
}

export default Loader;
