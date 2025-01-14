import React from "react";
import styles from "./carousel.module.scss";

type ButtonType = {
  isRound?: boolean;
  children: React.ReactNode;
};

export default function Carousel({ isRound = false, children }: ButtonType) {
  return <button className={styles.carousel}>{children}</button>;
}
