import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import portrait from "@/public/photos/wiktor-nowak-photo-saturated-600.png";
import Buttons from "./Buttons/Buttons";

function Home() {
  return (
    <div className={styles.homepage}>
      {/* <div className={styles.homepage__mobile}>
        <div>
          Self-taught Software Engineer <span className="span__primary">with one year +</span> of
          <span className="span__primary"> commercial experience </span>working as Frontend
          Developer in React based project. Eager to build my career and{" "}
          <span className="span__secondary">hungry for more</span> experience in building web
          applications.
        </div>
      </div> */}
      <div className={styles.homepage__anchor}>
        <div className={styles.homepage__photo}>
          <Image alt="Wiktor Nowak portrait" src={portrait} width={1200} height={1200} />
          <div className={styles.homepage__name}>Wiktor Nowak</div>
        </div>
        <div className={styles.homepage__side}>
          <div className={styles.homepage__upper}>
            <div>
              Self-taught Software Engineer <span className="span__primary">with one year +</span>{" "}
              of
              <span className="span__primary"> commercial experience </span>working as Frontend
              Developer in React based project. Eager to build my career and{" "}
              <span className="span__secondary">hungry for more</span> experience in building web
              applications.
            </div>
          </div>
          <Buttons />
          <div className={styles.homepage__lower}>
            <div>
              I am constantly developing my skills in programming. My goal is to build
              <span className="span__secondary">
                {" "}
                functional websites and web applications{" "}
              </span>{" "}
              with increased accessibility for{" "}
              <span className="span__primary"> excellent user experience</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// /* Vector 6 */

// position: absolute;
// width: 288px;
// height: 288px;
// left: 0px;
// top: 0px;

// /* grey transparent */
// background: rgba(79, 79, 79, 0.3);
