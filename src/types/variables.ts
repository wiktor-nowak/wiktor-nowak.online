export enum HASHTAGS {
  timeline = "timeline",
  accomplishments = "accomplishments",
  techstack = "techstack"
}

export const SECTIONS: SectionsType = {
  timeline: {
    name: "Timeline",
    hashtag: HASHTAGS.timeline
  },
  acc: {
    name: "Accomplishments",
    hashtag: HASHTAGS.accomplishments
  },
  languages: {
    name: "Languages"
  },
  tech: {
    name: "Tech Stack",
    hashtag: HASHTAGS.techstack
  },
  hobbies: {
    name: "Hobbies"
  }
};

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

export type SectionsType = {
  [key: string]: SectionType;
};

export const EMAIL_FORM_SETUP = {
  signature: {
    controlName: "imię i nazwisko",
    errorText: "Wpisz imię i nazwisko"
  },
  email: {
    controlName: "adres e-mail",
    errorText: "Adres email jest niepoprawny"
  },
  message: {
    controlName: "wiadomość",
    errorText: "Wpisz treść wiadomości"
  }
};
