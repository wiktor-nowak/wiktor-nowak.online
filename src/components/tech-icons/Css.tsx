import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function Css({ height, width, isActive = false }: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.css} ${isActive ? styles["css--active"] : ""}`}
    >
      <path
        d="M5.87942 35.6634L2.73755 0.422485H37.2625L34.1175 35.6581L19.9791 39.5778L5.87942 35.6634Z"
        className={styles.css__primary}
      />
      <path
        d="M20.0002 36.5819L31.4249 33.4144L34.1127 3.30377H20.0002V36.5819Z"
        className={styles.css__secondary}
      />
      <path
        d="M20.0002 16.0716H25.7196L26.1146 11.6456H20.0002V7.32343H30.8384L30.7346 8.48311L29.6721 20.3937H20.0002V16.0716Z"
        className={styles.css__grey}
      />
      <path
        d="M20.026 27.2965L20.007 27.3022L15.1935 26.0025L14.8857 22.5553H10.5476L11.1529 29.3419L20.0064 31.799L20.026 31.7934V27.2965Z"
        className={styles.css__grey}
      />
      <path
        d="M25.3522 20.2109L24.8316 25.9991L20.011 27.3003V31.7972L28.8716 29.3416L28.9366 28.6112L29.6885 20.2109H25.3522Z"
        className={styles.css__grey}
      />
      <path
        d="M20.0151 7.32343V11.6456H9.57511L9.48855 10.6744L9.29167 8.48311L9.18823 7.32343H20.0151ZM20.0004 16.0722V20.3944H15.2476L15.161 19.4231L14.9639 17.2319L14.8607 16.0722H20.0004Z"
        className={styles.css__grey}
      />
    </svg>
  );
}
