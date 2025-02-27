import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function Angular({
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
      className={`${styles.angular} ${isActive ? styles["angular--active"] : ""}`}
    >
      <path
        d="M19.9407 0.320618L1.42285 6.83749L4.34879 31.0991L19.9604 39.6794L35.6522 30.9831L38.5772 6.72218L19.9407 0.320618Z"
        className={styles.angular__grey}
      />
      <path
        d="M36.73 8.12435L19.8975 2.38403V37.6293L34.004 29.8222L36.73 8.12435Z"
        className={styles.angular__primary}
      />
      <path
        d="M3.50024 8.2278L6.00837 29.9259L19.8971 37.6294V2.38342L3.50024 8.2278Z"
        className={styles.angular__secondary}
      />
      <path
        d="M24.5311 21.1469L19.8976 23.3138H15.0139L12.7179 29.0556L8.44824 29.135L19.8976 3.66376L24.5311 21.1469ZM24.0829 20.0559L19.9282 11.8306L16.5201 19.9144H19.8973L24.0829 20.0559Z"
        className={styles.angular__grey}
      />
      <path
        d="M19.8972 3.66376L19.9278 11.8306L23.795 19.9206H19.9057L19.8972 23.3084L25.275 23.3138L27.7882 29.1356L31.8738 29.2113L19.8972 3.66376Z"
        className={styles.angular__grey}
      />
    </svg>
  );
}
