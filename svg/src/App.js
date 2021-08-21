import React from "react";
import style from "./styles/App.module.css";
import { Animation } from "./components";

export default function App() {
  return (
    <div className={style.container}>
      <Animation></Animation>
    </div>
  );
}
