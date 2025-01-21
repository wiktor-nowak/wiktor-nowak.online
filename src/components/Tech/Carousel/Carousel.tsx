"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import SlideElement from "./SlideElement/SlideElement";
import { techIcons } from "@/src/components/tech-icons";

export default function Carousel() {
  const OPTIONS: EmblaOptionsType = { align: "center", loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({
      startDelay: 500,
      speed: 1
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
    <div className={styles.tech}>
      <div className={styles.embla} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {techIcons.map(({ Icon, name }, index: number) => {
              return (
                <div className={styles.embla__slide} key={index}>
                  <SlideElement Icon={Icon} name={name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
