import React from "react";
import { checkType, IconType } from "@/src/types/style";
import styles from "./icons.module.scss";

export function Menu({ height, width }: IconType) {
  return (
    <svg
      width={width}
      height={height}
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 12H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
