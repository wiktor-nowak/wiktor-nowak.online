"use client";

import React from "react";
import styles from "./tech.module.scss";
import Carousel from "./Carousel/Carousel";
import { techIcons } from "@/src/components/tech-icons";

function Tech() {
  return (
    <div className={styles.tech}>
      <Carousel icons={techIcons} />
      {/* {ICONS.map((Icon) => {
        return <TechIcon signature={Icon.name} height={24} width={24} IconComponent={Icon} />;
      })} */}
    </div>
  );
}

export default Tech;
