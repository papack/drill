import style from "./styles/App.module.css";

import { useState } from "react";
import { a, useSpring } from "@react-spring/web";

import { Redbox } from "./compontents";

function App() {
  const [reverse, setReverse] = useState(false);
  const animation = useSpring({
    from: { transform: "translate(-50%,0%)" },
    transform: "translate(50%,0%)",
    reset: true,
    reverse,
    onRest: () => {
      setReverse(!reverse);
    },
  });

  return (
    <div className={style.container}>
      <a.div style={animation}>
        <Redbox></Redbox>
      </a.div>
    </div>
  );
}

export default App;
