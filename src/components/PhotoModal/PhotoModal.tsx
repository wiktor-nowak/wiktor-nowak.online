import Image from "next/image";
import styles from "./photo-modal.module.scss";
import React from "react";

type ModalComponentType = {
  link?: string;
  deactivateModal: () => void;
};

function PhotoModal({ link, deactivateModal }: ModalComponentType) {
  return (
    <div className={styles.modal__background} onClick={deactivateModal}>
      <div className={styles.modal}>
        <Image src={link} alt={link} height={500} width={500} layout="responsive" />
      </div>
    </div>
  );
}

export default PhotoModal;
