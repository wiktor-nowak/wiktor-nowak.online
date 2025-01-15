import React from "react";
import styles from "./timeline-card.module.scss";

type TimelineCardTypes = {
  title: string;
  alignedRight?: boolean;
  children: React.ReactNode;
};

function TimelineCard({ title, alignedRight = false, children }: TimelineCardTypes) {
  return (
    <>
      {alignedRight ? (
        <div className={`${styles.card} ${styles.card__right}`}>
          <div className={styles.card__blank} />
          <div className={styles.card__content}>
            <div className={styles.card__triangle__right} />
            <h3 className={styles.card__header}>{title}</h3>
            <div className={styles.card__description}>{children}</div>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.card__content}>
            <h3 className={styles.card__header}>{title}</h3>
            <div className={styles.card__description}>{children}</div>
            <div className={styles.card__triangle} />
          </div>
          <div className={styles.card__blank} />
        </div>
      )}
    </>
  );
}

export default TimelineCard;
