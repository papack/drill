import React from "react";

import style from "./styles/App.module.css";
import { Gauge } from "./components";

export default function App() {
  return (
    <div className={style.container}>
      <Gauge current={40} minValue={0} maxValue={180} steps={10} />
    </div>
  );
}
