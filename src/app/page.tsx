import Home from "@/src/components/Home/Home";
import { CV_URL, SECTIONS } from "@/src/variables/general";
import styles from "./page.module.scss";

import Section from "@/src/components/Section/Section";
import Accomplishments from "@/src/components/Accomplishments/Accomplishments";
import List from "@/src/components/List/List";
import Button from "../components/Button/Button";
import Timeline from "../components/Timeline/Timeline";
import Link from "next/link";
import Carousel from "../components/Carousel/Carousel";

const HOBBIES = ["Sport", "Heavy music", "Board & PC Games"];
const LANGUAGES = ["English - C1", "Polish - native"];

export default function MainPage() {
  return (
    <>
      <Home />
      <Timeline />
      <Section name={SECTIONS.acc.name} hashtag={SECTIONS.acc.hashtag}>
        <Accomplishments />
      </Section>
      <Section name={SECTIONS.languages.name} hashtag={SECTIONS.languages.hashtag} withLine>
        <List list={LANGUAGES} />
      </Section>
      <Section name={SECTIONS.tech.name} hashtag={SECTIONS.tech.hashtag} withLine>
        <Carousel />
      </Section>
      <Section name={SECTIONS.hobbies.name} hashtag={SECTIONS.hobbies.hashtag} withLine>
        <List list={HOBBIES} />
      </Section>
      <div className={styles.download__button}>
        <Link href={CV_URL} target="_blank" rel="noopener noreferrer">
          <Button text="Download my CV" />
        </Link>
      </div>
    </>
  );
}
