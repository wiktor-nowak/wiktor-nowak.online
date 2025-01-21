import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import portrait from "@/public/photos/wiktor-nowak-photo-saturated-600.png";
import Button from "../Button/Button";
import { Github, In } from "../icons";
import Link from "next/link";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/src/variables/general";
import { HASHTAGS } from "@/src/types/data";

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__visible}>
        <div className={styles.homepage__photo}>
          <Image alt="Wiktor Nowak portrait" src={portrait} width={1200} height={1200} />
          <div className={styles.homepage__name}>Wiktor Nowak</div>
        </div>
        <div className={styles.homepage__lore}>
          Lorem ipsum <span className="span__primary">Wiktor Nowak</span> Dolor sit amet,
          consectetur adipiscing elit sed do{" "}
          <span className="span__secondary">eiusmod tempor </span>
          incididunt ut labore.
        </div>
      </div>
      <div className={styles.homepage__under}>
        <div className={styles.homepage__buttons}>
          <Button href={GITHUB_URL}>
            <p>
              <Github height={24} width={24} />
              GitHub
            </p>
          </Button>
          <Link href={`#${HASHTAGS.accomplishments}`}>
            <Button>
              <p>Accomplishments</p>
            </Button>
          </Link>
          <Button href={LINKEDIN_URL}>
            <p>
              <In height={24} width={24} /> LinkedIn
            </p>
          </Button>
          <Button href={CV_URL}>
            <p>Download my CV</p>
          </Button>
        </div>
        <div className={styles.homepage__sentence}>
          Ut enim ad minim veniam, quis nostrud exercitation
          <span className="span__secondary"> ullamco laboris</span> nisi utaliquip ex ea commodo
          consequat.
        </div>
      </div>
    </div>
  );
}

export default Home;
