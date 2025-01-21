import Home from "@/src/components/Home/Home";
import { CV_URL, SECTIONS } from "@/src/variables/general";
import styles from "./page.module.scss";

import Section from "@/src/components/Section/Section";
import Accomplishments from "@/src/components/Accomplishments/Accomplishments";
import List from "@/src/components/List/List";
import Tech from "@/src/components/Tech/Tech";
import Button from "../components/Button/Button";
import Timeline from "../components/Timeline/Timeline";
import Link from "next/link";
import Carousel from "../components/Tech/Carousel/Carousel";

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
        <Timeline />
      </Section>
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

      <Link href={CV_URL} target="_blank" rel="noopener noreferrer">
        <Button>
          <p>Download my CV</p>
        </Button>
      </Link>
      {/* <Link href="./cv/CV_WiktorNowak.pdf" target="_blank" rel="noopener noreferrer"></Link> */}

      {/* <div>
        <h3>Icons:</h3>
        <ArrowFilled height={60} width={60} />
        <ArrowUnfilled height={60} width={60} />
        <Check height={60} width={60} />
        <ChevronRight height={60} width={60} />
        <Close height={60} width={60} />
        <Delete height={60} width={60} />
        <Github height={60} width={60} />
        <In height={60} width={60} />
        <Mail height={60} width={60} />
        <Menu height={60} width={60} />
        <Phone height={60} width={60} />
        <h3>Tech Icons:</h3>
        <Angular height={60} width={60} />
        <Css height={60} width={60} />
        <Git height={60} width={60} />
        <HtmlIcon height={60} width={60} />
        <Jest height={60} width={60} />
        <Js height={60} width={60} />
        <NextJs height={60} width={60} />
        <NodeJs height={60} width={60} />
        <ReactIcon height={60} width={60} />
        <Redux height={60} width={60} />
        <RollupJs height={60} width={60} />
        <Sass height={60} width={60} />
        <TailwindCss height={60} width={60} />
        <TestingLibrary height={60} width={60} />
        <Ts height={60} width={60} />
        <Webpack height={60} width={60} />
      </div> */}
    </>
  );
}
