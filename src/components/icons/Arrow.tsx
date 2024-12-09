import React from "react";
import styles from "./icons.module.scss";

export function Arrow() {
  return (
    <svg
      width={128}
      height={128}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <path
        d="M23.75 9.75V37.75M23.75 37.75L31.75 29.75M23.75 37.75L15.75 29.75"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
