import React from "react";
import styles from "./timeline.module.scss";
import TimelineCard from "./TimelineCard/TimelineCard";
import Section from "../Section/Section";
import { SECTIONS } from "@/src/variables/general";

const epam = (
  <TimelineCard title={"EPAM"}>
    <p className={styles.timeline__position}>Front-End mentoring program</p>
    <span className={styles.timeline__time}>Aug 2024 - now</span>
  </TimelineCard>
);
const northGravity = (
  <TimelineCard title={"NorthGravity Sp. z o. o."} alignedRight>
    <p className={styles.timeline__position}>ASSOCIATE SOFTWARE ENGINEER</p>
    <ul className={styles.timeline__list}>
      <li>Components development using React JS framework</li>
      <li>Bugs fixes and analyzing code in order to refactor</li>
      <li>Coding automatic tests for product application</li>
      <li>Cooperation with team to build clean and efficient code</li>
      <li>Contact and cooperation with clients from abroad</li>
      <li>Grow as a part of scrum team</li>
    </ul>
    <span className={styles.timeline__time}>Jul 2023 - Sep 2024</span>
  </TimelineCard>
);
const scrum = (
  <TimelineCard title={"Scrum.org"}>
    <p className={styles.timeline__position}>PSM 1 Certificate</p>
    <span className={styles.timeline__time}>2022</span>
  </TimelineCard>
);
const vesuvius = (
  <TimelineCard title={"Vesuvius Sp. z o. o."} alignedRight>
    <p className={styles.timeline__position}>RFQ & Design engineer</p>
    <ul className={styles.timeline__list}>
      <li>RFQ processing</li>
      <li>Mechanical design</li>
      <li>Multicultural corporate environment</li>
    </ul>
    <span className={styles.timeline__time}>Jul 2021 - Dec 2023</span>
  </TimelineCard>
);
const mora = (
  <TimelineCard title={"MORA Solutions Sp. z o. o."} alignedRight>
    <p className={styles.timeline__position}>TEAM LEADER / Design engineer</p>
    <ul className={styles.timeline__list}>
      <li>Project management</li>
      <li>Scrum-based task management introduction</li>
      <li>Mechanical design</li>
      <li>Team management</li>
    </ul>
    <span className={styles.timeline__time}>Dec 2019 - Jul 2021</span>
  </TimelineCard>
);
const seedia = (
  <TimelineCard title={"SEEDiA Sp. z o. o."} alignedRight>
    <p className={styles.timeline__position}>Design engineer</p>
    <ul className={styles.timeline__list}>
      <li>Mechanical design</li>
      <li>Supervision over interns</li>
      <li>Start-up environment</li>
    </ul>
    <span className={styles.timeline__time}>Jun 2017 - Sep 2019</span>
  </TimelineCard>
);
const agh = (
  <TimelineCard title={"AGH: University of Science and Technology"}>
    <p className={styles.timeline__position}>Mechanical engineering B. Eng.</p>
    <p className={styles.timeline__text}>Thesis on: Heat transfer analysis of solar bench by CFD</p>
    <span className={styles.timeline__time}>Sep 2014 - Feb 2018</span>
  </TimelineCard>
);

function Timeline() {
  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.timeline__desktop}>
          <Section name={SECTIONS.timeline.name} hashtag={SECTIONS.timeline.hashtag}>
            <div className={styles.timeline__line} />
            <div className={styles.timeline__gap} />
            {epam}
            {northGravity}
            {scrum}
            {vesuvius}
            <div className={styles.timeline__gap} />
            {mora}
            <div className={styles.timeline__gap} />
            {seedia}
            {agh}
          </Section>
        </div>
        <div className={styles.timeline__mobile}>
          <Section name="My Timeline - experience:" hashtag={SECTIONS.timeline.hashtag}>
            <div className={styles.timeline__top} />
            {northGravity}
            <div className={styles.timeline__gap} />
            {vesuvius}
            <div className={styles.timeline__gap} />
            {mora}
            <div className={styles.timeline__gap} />
            {seedia}
          </Section>
          <Section name="My Timeline - education:" hashtag={SECTIONS.timeline.hashtag}>
            <div className={styles.timeline__top} />
            {epam}
            <div className={styles.timeline__gap} />
            {scrum}
            <div className={styles.timeline__gap} />
            {agh}
          </Section>
        </div>
      </div>
    </>
  );
}

export default Timeline;
