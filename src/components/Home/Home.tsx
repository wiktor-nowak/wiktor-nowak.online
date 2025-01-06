import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import portrait from "../../../public/author_portrait.png";

function Home() {
  return (
    <div className={styles.homepage__content}>
      <Image alt="Wiktor Nowak portrait" src={portrait} />
    </div>
  );
}

export default Home;
