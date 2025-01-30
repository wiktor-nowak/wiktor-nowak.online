"use client";

import React from "react";
import Button from "../../Button/Button";
import Link from "next/link";
import styles from "./buttons.module.scss";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/src/variables/general";
import { Github, In } from "@/src/components/icons";
import { HASHTAGS } from "@/src/types/data";

function Buttons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__row}>
        <Button href={GITHUB_URL} text="GitHub" Icon={Github} isShrinking />
        <Link href={`#${HASHTAGS.accomplishments}`}>
          <Button text="Accomplishments" />
        </Link>
      </div>
      <div className={styles.buttons__row}>
        <Button href={CV_URL} text="Download my CV" />
        <Button href={LINKEDIN_URL} text="LinkedIn" Icon={In} isShrinking />
      </div>
    </div>
  );
}

export default Buttons;
