import { a, useSpring } from "@react-spring/web";
import { useState } from "react";

import style from "./styles/App.module.css";

function App() {
  const [reverse, setReverse] = useState(false);
  const [hover, setHover] = useState(false);

  const { fill } = useSpring({
    from: {
      fill: "green",
    },
    to: { fill: "red" },
    delay: 500,
    reverse,
    reset: true,
    onRest: () => {
      setReverse(!reverse);
    },
  });

  const { width, height, transform } = useSpring({
    width: hover ? "100" : "50",
    height: hover ? "100" : "50",
    transform: hover ? "translate(-50px,-50px)" : "translate(-25px,-25px)",
  });

  return (
    <a.div className={style.container}>
      <div style={{ backgroundColor: "black" }}>
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
        >
          <a.rect
            onPointerOver={() => {
              setHover(true);
            }}
            onPointerOut={() => {
              setHover(false);
            }}
            style={{
              fill,
              width,
              height,
              transform,
            }}
            x="250"
            y="250"
          />
        </svg>
      </div>
    </a.div>
  );
}

export default App;
