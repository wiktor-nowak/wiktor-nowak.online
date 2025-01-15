"use client";

import React, { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.scss";
import { IconType } from "@/src/types/style";

type ButtonType = {
  isRound?: boolean;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function Button({ isRound = false, onClick, children }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isRound ? styles["button--isRound"] : ""}`}
    >
      {children}
    </button>
  );
}

// ${isRound ? styles["button--icon"] : ""}`
