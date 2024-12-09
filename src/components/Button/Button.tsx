"use client";

import React from "react";
import styles from "./button.module.scss";

type ButtonType = {
  text: string;
  variant: string;
};
function clicked() {
  window.alert("Siema!");
}

export default function Button({ text, variant }: ButtonType) {
  return (
    <button className={styles.button} onClick={clicked}>
      <p>{text}</p>
    </button>
  );
}
