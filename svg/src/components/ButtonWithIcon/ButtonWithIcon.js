import React from "react";
import style from "./ButtonWithIcon.module.css";
import { IconDownload } from "../";

export const ButtonWithIcon = () => {
  return (
    <button className={style.button}>
      <div className={style.icon}>
        <IconDownload />
      </div>
      <div className={style.text}>Download</div>
    </button>
  );
};
