import React from "react";
import styles from "./icons.module.scss";
import { checkType, IconType } from "@/src/types/style";

export function Check({ height, width, state = "basic" }: IconType) {
  const style = checkType(state);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 9L13.5 25.5L6 18"
        className={styles[`stroke__${style}`]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
