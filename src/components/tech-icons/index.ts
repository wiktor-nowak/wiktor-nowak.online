export * from "./Angular";
export * from "./Css";
export * from "./Git";
export * from "./HtmlIcon";
export * from "./Jest";
export * from "./Js";
export * from "./NextJs";
export * from "./Redux";
export * from "./ReactIcon";
export * from "./NodeJs";
export * from "./RollupJs";
export * from "./Sass";
export * from "./TailwindCss";
export * from "./TestingLibrary";
export * from "./Ts";
export * from "./Webpack";

import { ReactElement } from "react";
import { Angular } from "./Angular";
import { Css } from "./Css";
import { Git } from "./Git";
import { HtmlIcon } from "./HtmlIcon";
import { Jest } from "./Jest";
import { Js } from "./Js";
import { NextJs } from "./NextJs";
import { NodeJs } from "./NodeJs";
import { ReactIcon } from "./ReactIcon";
import { Redux } from "./Redux";
import { RollupJs } from "./RollupJs";
import { Sass } from "./Sass";
import { TailwindCss } from "./TailwindCss";
import { TestingLibrary } from "./TestingLibrary";
import { Ts } from "./Ts";
import { Webpack } from "./Webpack";

const DIMENSIONS = {
  height: 40,
  width: 40
};

export const techIcons = [
  { Icon: Angular, props: DIMENSIONS, name: "Angular" },
  { Icon: Css, props: DIMENSIONS, name: "CSS3" },
  { Icon: Git, props: DIMENSIONS, name: "Git" },
  { Icon: HtmlIcon, props: DIMENSIONS, name: "HTML5" },
  { Icon: Jest, props: DIMENSIONS, name: "Jest" },
  { Icon: Js, props: DIMENSIONS, name: "JavaScript" },
  { Icon: NextJs, props: DIMENSIONS, name: "Next.js" },
  { Icon: NodeJs, props: DIMENSIONS, name: "Node.js" },
  { Icon: ReactIcon, props: DIMENSIONS, name: "React" },
  { Icon: Redux, props: DIMENSIONS, name: "Redux" },
  { Icon: RollupJs, props: DIMENSIONS, name: "Rollup.js" },
  { Icon: Sass, props: DIMENSIONS, name: "Sass" },
  { Icon: TailwindCss, props: DIMENSIONS, name: "Tailwind CSS" },
  { Icon: TestingLibrary, props: DIMENSIONS, name: "Testing Library" },
  { Icon: Ts, props: DIMENSIONS, name: "TypeScript" },
  { Icon: Webpack, props: DIMENSIONS, name: "Webpack" }
];
