import styles from "./section.module.scss";
import React, { ReactNode } from "react";

type SectionComponentType = {
  hashtag?: string;
  name: string;
  children: ReactNode;
};

function Section({ hashtag, name, children }: SectionComponentType) {
  return (
    <section id={hashtag} className={styles.section}>
      <h2 className={styles.section__heading}>My {name.toLowerCase()}:</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  );
}

export default Section;
