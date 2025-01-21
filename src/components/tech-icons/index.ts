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

import { TechIconWithName } from "@/src/types/style";
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

export const techIcons: TechIconWithName[] = [
  { Icon: Angular, name: "Angular" },
  { Icon: Css, name: "CSS3" },
  { Icon: Git, name: "Git" },
  { Icon: HtmlIcon, name: "HTML5" },
  { Icon: Jest, name: "Jest" },
  { Icon: Js, name: "JavaScript" },
  { Icon: NextJs, name: "Next.js" },
  { Icon: NodeJs, name: "Node.js" },
  { Icon: ReactIcon, name: "React" },
  { Icon: Redux, name: "Redux" },
  { Icon: RollupJs, name: "Rollup.js" },
  { Icon: Sass, name: "Sass" },
  { Icon: TailwindCss, name: "Tailwind CSS" },
  { Icon: TestingLibrary, name: "Testing Library" },
  { Icon: Ts, name: "TypeScript" },
  { Icon: Webpack, name: "Webpack" }
];
