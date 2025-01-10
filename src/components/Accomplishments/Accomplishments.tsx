import React from "react";
import styles from "./accomplishments.module.scss";
import {
  ArrowFilled,
  ArrowUnfilled,
  ChevronRight,
  Close,
  Delete,
  Github,
  In,
  Mail,
  Menu,
  Phone
} from "../icons";
import { Check } from "../icons/Check";
import {
  Angular,
  Git,
  HtmlIcon,
  Jest,
  Js,
  NextJs,
  NodeJs,
  ReactIcon,
  Redux,
  RollupJs,
  Sass,
  TailwindCss,
  TestingLibrary,
  Ts,
  Webpack
} from "../tech-icons";
import { Css } from "../tech-icons/Css";

function Accomplishments() {
  return (
    <div className={styles.accomplishments}>
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
    </div>
  );
}

export default Accomplishments;
