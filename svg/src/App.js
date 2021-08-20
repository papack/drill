import { a, useSpring } from "@react-spring/web";
import { useState } from "react";

import style from "./styles/App.module.css";

function App() {
  const [reverse, setReverse] = useState(false);

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

  return (
    <a.div className={style.container}>
      <div style={{ backgroundColor: "black" }}>
        <svg width="500" height="500">
          <a.rect style={{ fill }} x="225" y="225" width="50" height="50" />
        </svg>
      </div>
    </a.div>
  );
}

export default App;
