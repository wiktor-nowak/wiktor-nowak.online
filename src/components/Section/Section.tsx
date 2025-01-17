import styles from "./section.module.scss";
import React, { ReactNode } from "react";

type SectionComponentType = {
  hashtag?: string;
  name: string;
  withLine?: boolean;
  children: ReactNode;
};

function Section({ hashtag, name, withLine = false, children }: SectionComponentType) {
  return (
    <section id={hashtag} className={styles.section}>
      {withLine && <div className={styles.section__line} />}
      <h2 className={styles.section__heading}>{name}</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  );
}

export default Section;
