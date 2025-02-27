import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function NextJs({
  height,
  width,
  isActive = false
}: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      className={`${styles.next} ${isActive ? styles["next--active"] : ""}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2116_2326)">
        <path
          d="M20 0C8.96875 0 0 8.96875 0 20C0 31.0312 8.96875 40 20 40C23.5 40 26.7812 39.0938 29.625 37.5312L15.125 17.2812V28.7188H13V13.0625H15.125L30.9062 36.75C36.375 33.1875 40 27.0312 40 20C40 8.96875 31.0312 0 20 0ZM26.9062 26.4375L24.5625 22.9062V13.0625H26.9062V26.4375Z"
          className={styles.next__primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_2116_2326">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
