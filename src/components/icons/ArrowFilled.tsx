import React from "react";
import { checkType, IconType } from "@/src/types/style";
import styles from "./icons.module.scss";

export function ArrowFilled({ height, width, state = "basic" }: IconType) {
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
        d="M10 18.5V13H5L12 4L19 13H14V18.5H10Z"
        className={`${styles[`stroke__${style}`]} ${styles[`fill__${style}`]}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
