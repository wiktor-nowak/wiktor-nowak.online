import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import portrait from "../../../public/author_portrait.png";
import { Arrow } from "../icons";
// import Button from "../Button/Button";

function Home() {
  return (
    <div className={styles.homepage__content}>
      <Image alt="Wiktor Nowak portrait" src={portrait} />
      <section>Page in build.</section>
      <Arrow />
      {/* <Button text="SIEMA" variant="lol" /> */}
    </div>
  );
}

export default Home;
