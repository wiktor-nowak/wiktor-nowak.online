import React, { ReactElement } from "react";
import { TechIconType } from "@/src/types/style";
import styles from "./tech-icons.module.scss";

export function NodeJs({ height, width }: TechIconType): ReactElement<TechIconType> {
  return (
    <svg
      width={width}
      height={height}
      className={styles.node}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.2409 9.47938L21.4606 1.47782C20.5916 0.982817 19.46 0.982817 18.5841 1.47782L4.65656 9.47938C3.75969 9.99532 3.125 10.965 3.125 12.0022V27.9841C3.125 29.0213 3.77625 29.9913 4.67313 30.51L8.35281 32.6C10.1116 33.4663 10.7331 33.4663 11.5334 33.4663C14.1375 33.4663 15.625 31.8916 15.625 29.145V13.3669C15.625 13.1441 15.5091 12.8125 15.2903 12.8125H13.5331C13.3106 12.8125 12.8125 13.1441 12.8125 13.3666V29.1447C12.8125 30.3622 11.7112 31.5738 9.65312 30.5447L5.85094 28.3531C5.71844 28.2813 5.625 28.1366 5.625 27.9841V12.0022C5.625 11.8516 5.79844 11.7003 5.93188 11.6231L19.8144 3.63532C19.9441 3.56188 20.1347 3.56188 20.2641 3.63532L33.9772 11.6213C34.1084 11.7003 34.0622 11.8469 34.0622 12.0022V27.9841C34.0622 28.1366 34.1194 28.285 33.9897 28.3584L20.2128 36.3509C20.0947 36.4219 19.9481 36.4219 19.8187 36.3509L16.2853 34.2419C16.1787 34.18 16.0522 34.1578 15.95 34.215C14.9669 34.7722 14.7856 34.8463 13.8634 35.1659C13.6366 35.245 13.3019 35.3822 13.9916 35.7688L18.6159 38.5044C19.0574 38.7594 19.5583 38.8937 20.0681 38.8938C20.5813 38.8938 21.0838 38.7606 21.5266 38.5044L35.2406 30.51C36.1375 29.9875 36.5625 29.0213 36.5625 27.9841V12.0022C36.5625 10.965 36.1375 9.99782 35.2409 9.47938ZM24.3469 25.4516C20.6825 25.4516 19.8753 24.4406 19.6063 22.6184C19.575 22.4222 19.4084 22.1875 19.2087 22.1875H17.4178C17.1962 22.1875 17.0181 22.4563 17.0181 22.6769C17.0181 25.01 18.2866 27.8369 24.3472 27.8369C28.7344 27.8369 31.2497 26.1322 31.2497 23.1153C31.2497 20.1241 29.2287 19.3391 24.9741 18.7759C20.6734 18.2075 20.2366 17.9203 20.2366 16.9128C20.2366 16.0822 20.6066 14.9744 23.7909 14.9744C26.6362 14.9744 27.685 15.585 28.1166 17.5028C28.1534 17.6831 28.3181 17.8125 28.5041 17.8125H30.3022C30.4128 17.8125 30.5184 17.7678 30.5959 17.6888C30.6709 17.6038 30.7106 17.4972 30.7006 17.3828C30.4222 14.0803 28.2281 12.5413 23.7906 12.5413C19.8434 12.5413 17.4888 14.2081 17.4888 17.0022C17.4888 20.0328 19.8316 20.8703 23.6206 21.245C28.1534 21.6894 28.5059 22.3519 28.5059 23.2434C28.5059 24.7919 27.2628 25.4516 24.3469 25.4516Z"
        className={styles.node__primary}
      />
    </svg>
  );
}
