"use client";

import React, { useState } from "react";
import styles from "./acc-line.module.scss";
import { Angular, Css, Git, NextJs, ReactIcon } from "../../tech-icons";
import TechIcon from "../../TechIcon/TechIcon";
import Image, { StaticImageData } from "next/image";
import Button from "@/src/components/Button/Button";
import PhotoModal from "../../PhotoModal/PhotoModal";

type AccLineTypes = {
  waveImage: StaticImageData;
  projectImage?: StaticImageData;
  children: React.ReactNode;
};

function AccLine({ waveImage, projectImage = undefined, children }: AccLineTypes) {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive((prevModalState: boolean) => !prevModalState);
  };

  return (
    <div className={styles.line}>
      <div className={styles.line__content}>{children}</div>
      <div className={styles.line__wave}>
        <div className={styles.line__picture}>
          <Image src={waveImage.src} alt="Wave Image." fill />
          {projectImage && (
            <Button onClick={toggleModal}>
              <p>See more</p>
            </Button>
          )}
        </div>
        <div className={styles.line__icons}>
          <TechIcon signature="AngularJS" height={40} width={40} IconComponent={Angular} />
          <TechIcon signature="CSS3" height={40} width={40} IconComponent={Css} />
          <TechIcon signature="Git" height={40} width={40} IconComponent={Git} />
          <TechIcon signature="React" height={40} width={40} IconComponent={ReactIcon} />
          <TechIcon signature="Next.js" height={40} width={40} IconComponent={NextJs} />
        </div>
      </div>
      {modalActive && projectImage && (
        <PhotoModal deactivateModal={toggleModal} link={projectImage.src} />
      )}
    </div>
  );
}

export default AccLine;
