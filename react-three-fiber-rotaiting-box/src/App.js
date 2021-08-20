import style from "./styles/App.module.css";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef();
  const animation = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray",
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <a.mesh
      ref={ref}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      onClick={() => {
        setActive(!active);
      }}
      scale={animation.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial attach="material" color={animation.color} />
    </a.mesh>
  );
};

function App() {
  return (
    <div className={style.container}>
      <div className={style.canvasContainer}>
        <Canvas className={style.canvas}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
