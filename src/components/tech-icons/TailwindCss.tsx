import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function TailwindCss({
  height,
  width,
  isActive = false
}: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      className={`${styles.tailwind} ${isActive ? styles["tailwind--active"] : ""}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2198_2388)">
        <path
          d="M20.0012 8.00061C14.6678 8.00061 11.3356 10.6662 10.0012 15.9997C12.0006 13.3337 14.3347 12.334 17.0006 13.0006C18.5228 13.38 19.6106 14.4837 20.8153 15.7069C22.7759 17.6965 25.0453 20 30.0012 20C35.3343 20 38.6668 17.334 40.0012 11.9994C38.0015 14.6669 35.6678 15.6665 33.0015 15C31.4797 14.6203 30.3931 13.5169 29.1868 12.2937C27.2275 10.304 24.9587 8.00061 20.0012 8.00061ZM10.0012 20C4.6681 20 1.3356 22.6659 0.0012207 28.0006C2.0006 25.3331 4.33435 24.3334 7.0006 25C8.52278 25.3797 9.6106 26.4831 10.8153 27.7062C12.7759 29.6959 15.0453 31.9994 20.0012 31.9994C25.3343 31.9994 28.6668 29.3337 30.0012 24.0003C28.0015 26.6662 25.6678 27.6659 23.0015 26.9994C21.4797 26.62 20.3931 25.5162 19.1868 24.2931C17.2275 22.3034 14.9587 20 10.0012 20Z"
          className={styles.tailwind__primary}
        />
      </g>
      <defs>
        <clipPath id="clip0_2198_2388">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
