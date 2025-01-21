import { StaticImageData } from "next/image";

export enum HASHTAGS {
  timeline = "timeline",
  accomplishments = "accomplishments",
  techstack = "techstack"
}

export type NavSectionType = {
  url?: string;
  name: string;
};

export type NavSectionsType = NavSectionType[];

export type SectionType = {
  hashtag?: HASHTAGS;
  name: string;
};

export type SectionsType = {
  [key: string]: SectionType;
};

export type ActivatedItemType = {
  isActive: boolean;
  toggleActive: () => void;
};
