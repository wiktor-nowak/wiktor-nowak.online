"use client";

import React, { useState } from "react";
import styles from "./acc-line.module.scss";
import TechIcon from "./AccTechIcon/AccTechIcon";
import Image, { StaticImageData } from "next/image";
import Button from "@/src/components/Button/Button";
import PhotoModal from "../../PhotoModal/PhotoModal";
import { techIcons } from "@/src/components/tech-icons";

type AccLineTypes = {
  waveImage: StaticImageData;
  title: string;
  projectImage?: StaticImageData;
  displayedIcons?: string[];
  children: React.ReactNode;
};

function AccLine({
  waveImage,
  title,
  projectImage = undefined,
  displayedIcons = [],
  children
}: AccLineTypes) {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive((prevModalState: boolean) => !prevModalState);
  };

  return (
    <div className={styles.line}>
      <div className={styles.line__content}>
        <header className={styles.line__header}>{title}</header>
        {children}
      </div>
      <div className={styles.line__wave}>
        <div className={styles.line__picture}>
          <Image src={waveImage.src} alt="Wave Image." fill />
          {projectImage && <Button onClick={toggleModal} text="See more" />}
        </div>
        <div className={styles.line__icons}>
          {techIcons
            .filter(({ name }) => {
              return displayedIcons.includes(name);
            })
            .map(({ Icon, name }, index: number) => (
              <TechIcon signature={name} IconComponent={Icon} key={index} />
            ))}
        </div>
      </div>
      {modalActive && projectImage && (
        <PhotoModal deactivateModal={toggleModal} link={projectImage.src} />
      )}
    </div>
  );
}

export default AccLine;
