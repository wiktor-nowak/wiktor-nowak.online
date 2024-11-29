import { SectionType } from "@/types/variables";
import styles from "./section.module.scss";
import React, { ReactNode } from "react";

type SectionComponentType = {
  section: SectionType;
};

function Section({ section }: SectionComponentType, children: ReactNode) {
  return (
    <section>
      <div className={styles["heading-container"]}>
        <h2 id={section?.hashtag}>My {section.name.toLowerCase()}:</h2>
      </div>
      <div className={styles["section-content"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo numquam porro
        provident minus, quod, iusto nisi atque itaque earum maiores dicta deleniti optio, ratione
        id illo dolores ipsam corrupti voluptatibus dolorum facilis. Culpa esse quidem architecto
        aliquam. Distinctio iure dolore voluptates facilis cumque perspiciatis a molestias sapiente
        pariatur? Similique minus error quos nesciunt ullam. Ullam quae illum totam atque ipsum,
        tempora obcaecati quas facere libero non praesentium, possimus repellat esse, amet rem sit
        ipsam nulla!
      </div>
      {children}
    </section>
  );
}

export default Section;
