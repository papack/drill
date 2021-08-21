import React, { useRef, useState } from "react";
import style from "./styles/App.module.css";
import { useFrame, Canvas, applyProps } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";

const Box = (props) => {
  const ref = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { color, scale } = useSpring({
    scale: active ? 1.5 : 1,
    color: hovered ? "hotpink" : "orange",
  });

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
  });

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={scale}
      onClick={() => {
        setActive(!active);
      }}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial color={color} />
    </a.mesh>
  );
};

export default function App() {
  return (
    <div className={style.container}>
      <div className={style.canvasContainer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}
