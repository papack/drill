import React from "react";

import style from "./styles/App.module.css";
import { Gauge } from "./components";

export default function App() {
  return (
    <div className={style.container}>
      <Gauge speed="0" />
    </div>
  );
}
