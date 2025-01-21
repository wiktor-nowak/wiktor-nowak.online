"use client";

import { TechIconComponent } from "@/src/types/style";
import styles from "./acc-tech-icon.module.scss";
import React, { useState } from "react";

type SectionComponentType = {
  signature?: string;
  IconComponent: TechIconComponent;
};

function AccTechIcon({ signature, IconComponent }: SectionComponentType) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section
      id={signature}
      className={styles.tech}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <IconComponent height={40} width={40} isActive={isActive} />
      <p
        className={`${styles.tech__signature} ${isActive ? styles["tech__signature--active"] : ""}`}
      >
        {signature}
      </p>
    </section>
  );
}

export default AccTechIcon;
