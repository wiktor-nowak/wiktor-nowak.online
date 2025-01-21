import React from "react";
import styles from "./tech.module.scss";
import Carousel from "./Carousel/Carousel";

function Tech() {
  return (
    <div className={styles.tech}>
      <Carousel />
    </div>
  );
}

export default Tech;
