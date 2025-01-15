import React from "react";
import styles from "./timeline.module.scss";
import TimelineCard from "./TimelineCard/TimelineCard";

function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__line} />
      <TimelineCard title={"EPAM"}>
        <p className={styles.timeline__position}>Front-End mentoring program</p>
        <h4 className={styles.timeline__time}>Aug 2024 - now</h4>
      </TimelineCard>
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
        <h4 className={styles.timeline__time}>Jul 2023 - Sep 2024</h4>
      </TimelineCard>
      <TimelineCard title={"Scrum.org"}>
        <p className={styles.timeline__position}>PSM 1 Certificate</p>
        <h4 className={styles.timeline__time}>2022</h4>
      </TimelineCard>
      <TimelineCard title={"Vesuvius Sp. z o. o."} alignedRight>
        <p className={styles.timeline__position}>RFQ & Design engineer</p>
        <ul className={styles.timeline__list}>
          <li>RFQ processing</li>
          <li>Mechanical design</li>
          <li>Multicultural corporate environment</li>
        </ul>
        <h4 className={styles.timeline__time}>Jul 2021 - Dec 2023</h4>
      </TimelineCard>
      <div className={styles.timeline__gap} />
      <TimelineCard title={"MORA Solutions Sp. z o. o."} alignedRight>
        <p className={styles.timeline__position}>TEAM LEADER / Design engineer</p>
        <ul className={styles.timeline__list}>
          <li>Project management</li>
          <li>Scrum-based task management introduction</li>
          <li>Mechanical design</li>
          <li>Team management</li>
        </ul>
        <h4 className={styles.timeline__time}>Dec 2019 - Jul 2021</h4>
      </TimelineCard>
      <div className={styles.timeline__gap} />
      <TimelineCard title={"SEEDiA Sp. z o. o."} alignedRight>
        <p className={styles.timeline__position}>Design engineer</p>
        <ul className={styles.timeline__list}>
          <li>Mechanical design</li>
          <li>Supervision over interns</li>
          <li>Start-up environment</li>
        </ul>
        <h4 className={styles.timeline__time}>Jun 2017 - Sep 2019</h4>
      </TimelineCard>
      <TimelineCard title={"AGH: University of Science and Technology"}>
        <p className={styles.timeline__position}>Mechanical engineering B. Eng.</p>
        <p>Thesis on: Heat transfer analysis of solar bench by CFD</p>
        <h4 className={styles.timeline__time}>Sep 2014 - Feb 2018</h4>
      </TimelineCard>
    </div>
  );
}

export default Timeline;
