// export enum COLORS_NAMES {
//   primary = "primary",
//   secondary = "secondary",
//   white = "white",
//   disabled = "disabled",
//   through = "through"
// }

export type IconState = "basic" | "disabled" | "primary";

export type IconType = {
  height: number;
  width: number;
  state?: IconState;
};

export type TechIconType = Omit<IconType, "state">;

export function checkType(x: IconState): string {
  let style: string;
  switch (x) {
    case "primary":
      style = "primary";
      break;
    case "disabled":
      style = "disabled";
      break;
    case "basic":
      style = "white";
      break;
    default:
      style = "white";
  }
  return style;
}

// export type IconExtendedType = IconType & {
//   color_extended?: COLORS_NAMES;
// };
