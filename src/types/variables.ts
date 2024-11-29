export enum HASHTAGS {
  timeline = "timeline",
  accomplishments = "accomplishments",
  techstack = "techstack"
}

export const SECTIONS: SectionsType = [
  {
    name: "Timeline",
    hashtag: HASHTAGS.timeline
  },
  {
    name: "Accomplishments",
    hashtag: HASHTAGS.accomplishments
  },
  {
    name: "Languages"
  },
  {
    name: "Tech Stack",
    hashtag: HASHTAGS.techstack
  },
  {
    name: "Hobbies"
  }
];

export const NAV_SECTIONS: NavSectionsType = [
  {
    url: "/",
    name: "Home"
  },
  {
    name: "Timeline",
    url: `/#${HASHTAGS.timeline}`
  },
  {
    name: "Accomplishments",
    url: `/#${HASHTAGS.accomplishments}`
  },
  {
    name: "Tech Stack",
    url: `/#${HASHTAGS.techstack}`
  },
  {
    name: "CV"
  },
  {
    url: "/contact",
    name: "Contact"
  }
];

export type NavSectionType = {
  url?: string;
  name: string;
};

export type NavSectionsType = NavSectionType[];

export type SectionType = {
  hashtag?: HASHTAGS;
  name: string;
};

export type SectionsType = SectionType[];
