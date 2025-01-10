import React from "react";
import { checkType, IconType } from "@/src/types/style";
import styles from "./icons.module.scss";

export function ChevronRight({ height, width, state = "basic" }: IconType) {
  const style = checkType(state);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        className={styles[`stroke__${style}`]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
