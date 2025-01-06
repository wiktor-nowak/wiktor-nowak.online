"use client";

import React from "react";
import styles from "./button.module.scss";
import { Arrow } from "../icons";

type ButtonType = {
  text: string;
  isIconButton?: boolean;
};
function clicked() {
  window.alert("Siema!");
}

export default function Button({ text, isIconButton = false }: ButtonType) {
  return (
    <button
      className={`${styles.button} ${isIconButton ? styles["button--icon"] : ""}`}
      onClick={clicked}
    >
      <p>{text}</p>
      {isIconButton ?? <Arrow />}
    </button>
  );
}
