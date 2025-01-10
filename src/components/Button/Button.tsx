"use client";

import React from "react";
import styles from "./button.module.scss";
import { IconType } from "@/src/types/style";

type ButtonType = {
  isRound?: boolean;
  children: React.ReactNode;
};
function clicked() {
  window.alert("Siema!");
}

export default function Button({ isRound = false, children }: ButtonType) {
  return (
    <button
      className={`${styles.button} ${isRound ? styles["button--isRound"] : ""}`}
      onClick={clicked}
    >
      {children}
    </button>
  );
}

// ${isRound ? styles["button--icon"] : ""}`
