import { IconType } from "@/src/types/style";
import styles from "./acc-tech-icon.module.scss";
import React, { ReactNode } from "react";

type SectionComponentType = {
  signature?: string;
  height: number;
  width: number;
  IconComponent: React.ComponentType<IconType>;
};

function AccTechIcon({ signature, height, width, IconComponent }: SectionComponentType) {
  return (
    <section id={signature} className={styles.tech}>
      <IconComponent height={height} width={width} />
      <p className={styles.tech__signature}>{signature}</p>
    </section>
  );
}

export default AccTechIcon;
