import React from "react";

import style from "./styles/App.module.css";
import { Circle } from "./components";

export default function App() {
  return (
    <div className={style.container}>
      <Circle />
    </div>
  );
}
