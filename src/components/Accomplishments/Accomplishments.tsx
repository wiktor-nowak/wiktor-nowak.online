import React from "react";
import styles from "./accomplishments.module.scss";
import AccLine from "./AccLine/AccLine";
import { importImages } from "@/src/lib/importImages";
import kc from "@/public/screenshots/kc1.png";
import ng from "@/public/screenshots/ng1.png";
import sado from "@/public/screenshots/sadowski.png";

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
        Sustainable growth is in my opinion a key to good carrier. To achieve it I am using not only
        those possibilities that my current employer or customer give, but also focus on building my
        own projects. This particular website may be a great example. In previous months I was
        learning Next.js to get familiar with SSR, which also comes hand in hand with styling using
        Tailwind. This approach, different than classic stylesheet may cause significant speed up in
        development. Apart from that, I finished Angular course organized by EPAM to grasp the
        differences, between most popular frontend frameworks. I also focus on accessibility in web
        development to prepare projects, which can be useful for everyone. Plese find some more
        details about my work below.
      </p>
      <AccLine
        waveImage={IMAGES[0]}
        title={`${1}. Personal trainer webpage`}
        projectImage={sado}
        displayedIcons={["TypeScript", "Next.js", "React", "Sass"]}
      >
        <p className={styles.accomplishments__paragraph}>
          When I recieved a request from <span className="span__secondary">Personal Trainer</span> I
          was quite interested as sports is one of things I love doing in my spare time. Working on
          <span className="span__primary">
            <a href="https://sadowskitrenuje.pl/"> www.sadowskitrenuje.pl </a>
          </span>
          offered me a great opportunity to learn more about Next.js.
        </p>
        <p className={styles.accomplishments__paragraph}>
          It is a fairly simple design with some practical features like contact mail form and
          included payment links. My primary focus was laid on{" "}
          <span className="span__secondary"> reflecting the design </span> the client demanded.
        </p>
        <p className={styles.accomplishments__paragraph}>
          I hope end-users will be as satisfied with using this website as I was from the effect.
        </p>
      </AccLine>
      <AccLine
        waveImage={IMAGES[1]}
        title={`${2}. Components / Functionalities`}
        projectImage={ng}
        displayedIcons={["React", "JavaScript", "Redux", "Sass", "Git"]}
      >
        <p className={styles.accomplishments__paragraph}>
          As <span className="span__secondary">NorthGravity</span> employee, I was involved in
          building
          <span className="span__primary"> the core product </span>
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
          <span className="span__secondary">my attitude towards our clients</span> as well as{" "}
          <span className="span__secondary">communication skills</span> and marked them as one of{" "}
          <span className="span__secondary">my strengths</span>.
        </p>
      </AccLine>
      <AccLine
        waveImage={IMAGES[2]}
        title={`${3}. Knowledge Center`}
        projectImage={kc}
        displayedIcons={["React", "JavaScript", "HTML5", "Sass", "Git"]}
      >
        <p className={styles.accomplishments__paragraph}>
          One of my first tasks, which{" "}
          <span className="span__secondary">helped me to get into real life development</span> was
          creating an important part of the application my company was developing, which is
          Knowledge Center.
          <span className="span__primary">xxx</span>
        </p>
        <p className={styles.accomplishments__paragraph}>
          I co-build most of the features in this subproject,{" "}
          <span className="span__primary">
            which enables the platform users to understand how to use it
          </span>{" "}
          and where to find particular tools and features.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          It was <span className="span__primary">important</span> especially{" "}
          <span className="span__primary">for</span> the new users or{" "}
          <span className="span__primary">future clients</span> to see the full potential of the
          website.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          While working on this project I learned a lot, especially about{" "}
          <span className="span__secondary">
            {" "}
            implementing search calls support as well as navigating{" "}
          </span>{" "}
          and scrolling to particular headers of a blog article or documentation page.
        </p>
      </AccLine>
      <AccLine
        title={`${4}. Jest configuration and writing tests`}
        waveImage={IMAGES[3]}
        displayedIcons={["Jest", "Testing Library", "Rollup.js", "Webpack"]}
      >
        <p className={styles.accomplishments__paragraph}>
          One of my <span className="span__secondary"> biggest responsibilities </span> while
          working for NG was to introduce unit tests into the frontend part of the application.
        </p>
        <p className={styles.accomplishments__paragraph}>
          For sure, I can say that I learned a lot about{" "}
          <span className="span__secondary"> setting up test environments </span> for projects using
          Webpack and Rollup and preparing tests of course.
        </p>
        <p className={styles.accomplishments__paragraph}>
          I prepared tests for the custom components library, as well as those checking API handling
          methods.
        </p>
        <p className={styles.accomplishments__paragraph}>
          <span className="span__primary">Unit testing </span> with Jest is quite a modern way to
          secure the components from unnecessary failures while being used in views and pages of the
          application. The testing framework features were additionally extended by other useful
          methods from
          <span className="span__secondary"> Testing Library</span>, which helped me render and
          rerender components, as well as mock user interactions in a nice and clean way.
        </p>
        <p className={styles.accomplishments__paragraph}>
          I hope we all can agree that
          <span className="span__primary"> tests make applications more reliable </span>. Going
          further, I believe that the time I spent on these tasks was the next pebble on the road to
          achieve reliable and safe code.
        </p>
      </AccLine>
      <AccLine
        title={`${5}. Fixing bugs & Refactoring`}
        waveImage={IMAGES[4]}
        displayedIcons={["React", "JavaScript", "TypeScript", "Redux"]}
      >
        <p className={styles.accomplishments__paragraph}>
          Apart from building components and creating new functionalities, my work also focused on
          <span className="span__primary"> fixing bugs</span> which were reported by testers or
          found while further development of the application.
        </p>
        <p className={styles.accomplishments__paragraph}>
          In order to do that, I needed to{" "}
          <span className="span__secondary"> read a lot of code</span>, quite frequently spread
          across the project. I find it really useful for{" "}
          <span className="span__secondary">deeper understanding</span> of how different parts of
          the application works.{" "}
        </p>
        <p className={styles.accomplishments__paragraph}>
          Reading code builds a firm idea on
          <span className="span__secondary"> how data flows through the application</span> , which I
          believe I have.
        </p>
      </AccLine>
      <AccLine
        waveImage={IMAGES[5]}
        displayedIcons={["HTML5", "CSS3", "JavaScript"]}
        title={`${6}. Legacy code`}
      >
        <p className={styles.accomplishments__paragraph}>
          My tasks sometimes included working with{" "}
          <span className="span__primary">legacy code</span> also.
        </p>
        <p className={styles.accomplishments__paragraph}>
          The majority of application code I worked with was built using functional{" "}
          <span className="span__secondary">React</span> components, although some of them,
          especially older parts were coded with <span className="span__secondary">JS classes</span>
          what probably occur a lot in projects developed for couple years already.
        </p>
        <p className={styles.accomplishments__paragraph}>
          {" "}
          I learned how this approach can give us some advantages (eg. using specific boundary
          components to pass redux props to their children).
        </p>
        <p className={styles.accomplishments__paragraph}>
          To the contrary, the most challenging task in terms of handling solutions used in the
          past, was <span className="span__secondary">to prepare HTML/FTL templates</span> to be
          used with Outlook 2013 and older versions of this popular software.
        </p>
        <p className={styles.accomplishments__paragraph}>
          Tasks like that seem annoying and boring but I do approach these in different manner. I
          believe them to be challenges, which can be cracked with use of some extra time and effort
          and can give us valuable lessons and help value more modern solutions.
        </p>
      </AccLine>
    </div>
  );
}

export default Accomplishments;
