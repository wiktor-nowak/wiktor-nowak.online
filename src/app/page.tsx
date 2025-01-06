import Home from "@/src/components/Home/Home";
import { SECTIONS } from "@/src/types/variables";
import styles from "./page.module.scss";
import Section from "@/src/components/Section/Section";
import Accomplishments from "@/src/components/Accomplishments/Accomplishments";
import List from "@/src/components/List/List";
import Tech from "@/src/components/Tech/Tech";
import Button from "../components/Button/Button";
import type { Metadata } from "next";

// const MAIN_PAGE_SECTIONS = SECTIONS.map((section) => (
//   <Section section={section} key={section.name}></Section>
// ));

const HOBBIES = ["Sport", "Heavy music", "Board & PC Games"];
const LANGUAGES = ["English - C1", "Polish - native"];

export default function MainPage() {
  // add a method which checks if I have any hash in my url. If so, scroll to it immediatelly.
  // It is possible to use this:
  // useEffect(() => {
  //   const xd = window.location.hash;
  //   console.log(xd);
  // }, []);

  return (
    <>
      <Home />
      <div className={styles.home__content}></div>
      <Section name={SECTIONS.timeline.name} hashtag={SECTIONS.timeline.hashtag}>
        <p>timeline</p>
      </Section>
      <Section name={SECTIONS.acc.name} hashtag={SECTIONS.acc.hashtag}>
        <p>timeline</p>
        <Accomplishments />
      </Section>
      <Section name={SECTIONS.languages.name} hashtag={SECTIONS.languages.hashtag}>
        <List list={LANGUAGES} />
      </Section>
      <Section name={SECTIONS.tech.name} hashtag={SECTIONS.tech.hashtag}>
        <p>timeline</p>
        <Tech />
      </Section>
      <Section name={SECTIONS.hobbies.name} hashtag={SECTIONS.hobbies.hashtag}>
        <List list={HOBBIES} />
      </Section>
      <Button text="Download my CV" />
      <Button text="" isIconButton />
    </>
  );
}
