"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const StarBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={1}
        />
      </Canvas>
    </div>
  );
};

export default StarBackground;
