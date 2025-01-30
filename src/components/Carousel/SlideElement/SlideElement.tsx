"use client";

import React, { useState } from "react";
import styles from "./slide-element.module.scss";
import { TechIconWithName } from "@/src/types/style";

export default function SlideElement({ Icon, name }: TechIconWithName) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.element}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Icon width={40} height={40} isActive={isActive} />
      <div className={`${styles.element__name} ${isActive ? styles["element__name--active"] : ""}`}>
        {name}
      </div>
    </div>
  );
}
