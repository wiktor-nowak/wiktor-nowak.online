"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Carousel({ icons }: { icons: any }) {
  const OPTIONS: EmblaOptionsType = { align: "center", loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({
      startDelay: 500,
      speed: 0.8
    })
  ]);

  const startAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.play();
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.stop();
  }, [emblaApi]);

  return (
    <div className={styles.embla} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {icons.map(({ Icon, props, name }, index: number) => {
            return (
              <div className={styles.embla__slide} key={index}>
                <Icon {...props} />
                <div className={styles.embla__name}>{name}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.embla__bg} />
      </div>
    </div>
  );
}
