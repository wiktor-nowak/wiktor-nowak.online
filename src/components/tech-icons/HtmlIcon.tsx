import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function HtmlIcon({
  height,
  width,
  isActive = false
}: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.html} ${isActive ? styles["html--active"] : ""}`}
    >
      <path
        d="M5.94907 35.5862L2.82251 0.519043H37.1775L34.0475 35.5809L19.9791 39.4809L5.94907 35.5862Z"
        className={styles.html__primary}
      />
      <path
        d="M20 36.5L31.3681 33.3481L34.0428 3.38623H20V36.5Z"
        className={styles.html__secondary}
      />
      <path
        d="M20 16.3922H14.3088L13.9156 11.9878H20V7.68719H9.21533L9.31846 8.84094L10.3753 20.6931H20V16.3922ZM20 27.5619L19.981 27.5672L15.1913 26.2734L14.8853 22.8438H10.5675L11.17 29.5966L19.9803 32.0422L20 32.0369V27.5619Z"
        className={styles.html__grey}
      />
      <path
        d="M19.9851 16.3922V20.6931H25.281L24.782 26.2709L19.9851 27.5656V32.0403L28.8023 29.5966L28.867 28.87L29.8776 17.5472L29.9823 16.3922H28.8235H19.9851ZM19.9851 7.68719V11.9878H30.3739L30.4601 11.0216L30.6564 8.84094L30.7592 7.68719H19.9851Z"
        className={styles.html__grey}
      />
    </svg>
  );
}
