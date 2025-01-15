import React from "react";
import styles from "./accomplishments.module.scss";
import AccLine from "./AccLine/AccLine";
import { importImages } from "@/src/lib/importImages";
import kc from "@/public/screenshots/kc1.png";
import ng from "@/public/screenshots/ng1.png";

let IMAGES = [];
async function loadImages() {
  try {
    const images = await importImages("public/images");
    IMAGES = images;
  } catch (error) {
    console.error(error);
  }
}
loadImages();

function Accomplishments() {
  return (
    <div className={styles.accomplishments}>
      <p className={styles.accomplishments__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minus. Quasi quae ullam
        voluptas doloremque magnam id corrupti veritatis, expedita exercitationem vel! Ipsam saepe
        consectetur dolore explicabo corporis atque deserunt. Nam enim aliquam sapiente placeat
        possimus adipisci cum ex quam repellendus vitae sunt nisi commodi quia esse quisquam
        cupiditate labore hic eum culpa, consequatur asperiores vero quasi debitis! Ab, maiores.
      </p>
      <AccLine waveImage={IMAGES[0]} projectImage={ng}>
        <h3>1. &ensp; Components / Functionalities</h3>
        <p className={styles.accomplishments__paragraph}>
          As a <span className={styles.span__secondary}>NorthGravity</span> employee, I was involved
          in building
          <span className={styles.span__primary}> the core product </span>
          offered by the company.
        </p>
        <p className={styles.accomplishments__paragraph}>
          Work was wrapped in two week sprints, during which I did my best to deliver particular
          pieces I was assigned with.
        </p>
        <p className={styles.accomplishments__paragraph}>
          It usually included implementing features requested by clients or proposed by the R&D team
          and then showcasing those to the stakeholders.
        </p>
        <p className={styles.accomplishments__paragraph}>
          My superiors appreciated{" "}
          <span className={styles.span__secondary}>my attitude towards our clients</span> as well as{" "}
          <span className={styles.span__secondary}>communication skills</span> and marked them as
          one of <span className={styles.span__secondary}>my strengths</span>.
        </p>
      </AccLine>
      <AccLine waveImage={IMAGES[1]} projectImage={kc}>
        <h3>2. &ensp; Knowledge Center</h3>
        <p className={styles.accomplishments__paragraph}>
          One of my first tasks, which helped me to get into real life development was creating an
          important part of the application my company was developing, which is Knowledge Center.
          <span className={styles.span__primary}>xxx</span>
          <span className={styles.span__secondary}>xxx</span>
        </p>
        <p className={styles.accomplishments__paragraph}>
          I co-build most of the features in this subproject, which enables the platform users to
          understand how to use it and where to find particular tools and features.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          It was important especially for the new users or future clients to see the full potential
          of the website.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          While working on this project I learned a lot, especially about implementing search calls
          support as well as navigating and scrolling to particular headers of a blog article or
          documentation page.
        </p>
      </AccLine>
      <AccLine waveImage={IMAGES[2]}>
        <h3>3. &ensp; Jest configuration</h3>
        <p className={styles.accomplishments__paragraph}>
          One of my biggest responsibilities while working in NG was to introduce unit tests into
          the frontend part of the application.
          <span className={styles.span__primary}>xxx</span>
          <span className={styles.span__secondary}>xxx</span>
        </p>
        <p className={styles.accomplishments__paragraph}>
          Work was wrapped in two week sprints, during which I did my best to deliver particular
          pieces I was assigned with.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          For sure, I can say that I learned a lot about setting up test environments for projects
          using Webpack and Rollup and preparing tests of course.
        </p>
      </AccLine>
      <AccLine waveImage={IMAGES[3]}>
        <h3>4. &ensp; Jest + RTL</h3>
        <p className={styles.accomplishments__paragraph}>
          These two keywords above address how I helped my team in making sure their changes are
          safe for the rest of the application.
        </p>
        <p className={styles.accomplishments__paragraph}>
          I prepared tests for the custom components library, as well as those checking API handling
          methods.
        </p>
        <p className={styles.accomplishments__paragraph}>
          Unit testing with Jest is quite a modern way to secure the components from unnecessary
          failures while being used in views and pages of the application.
        </p>
        <p className={styles.accomplishments__paragraph}>
          The testing framework features were additionally extended by other useful methods from
          Testing Library, which helped me render and rerender components, as well as mock user
          interactions in a nice and clean way.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          I hope you all can agree with me that tests make applications more reliable.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          Hope the time I spent on these tasks was the next pebble on the road to achieve this goal
          for my company. <span className={styles.span__primary}>xxx</span>
          <span className={styles.span__secondary}>xxx</span>
        </p>
      </AccLine>
      <AccLine waveImage={IMAGES[4]}>
        <h3>5. &ensp; Fixing bugs & Refactoring</h3>
        <p className={styles.accomplishments__paragraph}>
          Apart from building components and creating new functionalities, my work also focused on
          <span className={styles.span__primary}> fixing bugs</span>.
        </p>
        <p className={styles.accomplishments__paragraph}>
          These were reported by testers or found while further development of the application.
        </p>
        <p className={styles.accomplishments__paragraph}>
          In order to do that, I needed to{" "}
          <span className={styles.span__secondary}> read a lot of code</span>, quite frequently
          spread out across the project. I find it really useful for{" "}
          <span className={styles.span__secondary}>deeper understanding</span> of how different
          parts of the application works.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          Reading code builds a firm{" "}
          <span className={styles.span__secondary}>
            idea on how data flows through the application
          </span>{" "}
          , which I believe I have.
        </p>
      </AccLine>
      <AccLine waveImage={IMAGES[5]}>
        <h3>6. &ensp; Legacy code</h3>
        <p className={styles.accomplishments__paragraph}>
          My tasks sometimes included working with{" "}
          <span className={styles.span__primary}>legacy code</span> also.
        </p>
        <p className={styles.accomplishments__paragraph}>
          The majority of application code I worked with was built using functional{" "}
          <span className={styles.span__secondary}>React</span> components, although some of them,
          especially older parts were coded with{" "}
          <span className={styles.span__secondary}>JS classes</span>.
        </p>
        <p className={styles.accomplishments__paragraph}>
          {" "}
          I learned how this approach can give us some advantages (eg. using specific boundary
          components to pass redux props to their children).
        </p>
        <p className={styles.accomplishments__paragraph}>
          These things probably occur a lot in many currently developed projects.
        </p>
        <p className={styles.accomplishments__paragraph}>
          To the contrary, the most challenging task in terms of handling solutions used in the
          past, was <span className={styles.span__secondary}>to prepare HTML/FTL templates</span> to
          be used with Outlook 2013 version.
        </p>
        <p className={styles.accomplishments__paragraph}>
          Tasks like that seem annoying and boring but I do not approach such tasks in this manner.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          I believe them to be challenges, which can be cracked with use of some extra time and
          effort and can give us valuable lessons.
        </p>
      </AccLine>
    </div>
  );
}

export default Accomplishments;
