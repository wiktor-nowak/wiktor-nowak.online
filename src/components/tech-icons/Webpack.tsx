import React, { ReactElement } from "react";

import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function Webpack({
  height,
  width,
  isActive = false
}: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      className={`${styles.webpack} ${isActive ? styles["webpack--active"] : ""}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6532 30.6562L20.7 39.6875V32.6531L30.625 27.1875L36.6532 30.6562ZM37.7469 29.6688V10.7969L31.9094 14.1719V26.3L37.7438 29.6656L37.7469 29.6688ZM3.34692 30.6562L19.2844 39.6813V32.6531L9.3563 27.1875L3.34692 30.6562ZM2.25317 29.6688V10.7969L8.09067 14.1719V26.3L2.25317 29.6688ZM2.93755 9.575L19.3 0.3125V7.1125L8.81567 12.8781L8.7313 12.925L2.93755 9.575ZM37.0563 9.575L20.7 0.3125V7.1125L31.1844 12.875L31.2688 12.9219L37.0625 9.575H37.0563Z"
        className={styles.webpack__secondary}
      />
      <path
        d="M19.3001 31.0532L9.49072 25.6563V14.975L19.3001 20.625V31.0532ZM20.7001 31.0532L30.5095 25.6625V14.975L20.7001 20.625V31.0532ZM10.1563 13.75L20.0001 8.3313L29.8438 13.75L20.0001 19.425L10.1563 13.75Z"
        className={styles.webpack__primary}
      />
    </svg>
  );
}
