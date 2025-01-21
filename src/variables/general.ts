import { HASHTAGS, SectionsType, NavSectionsType } from "../types/data";

export const SECTIONS: SectionsType = {
  timeline: {
    name: "My Timeline:",
    hashtag: HASHTAGS.timeline
  },
  acc: {
    name: "My Accomplishments:",
    hashtag: HASHTAGS.accomplishments
  },
  languages: {
    name: "My Languages:"
  },
  tech: {
    name: "My Tech Stack:",
    hashtag: HASHTAGS.techstack
  },
  hobbies: {
    name: "My Hobbies:"
  }
};

const ERROR_TEXT = "The field is required.";

export const EMAIL_FORM_SETUP = {
  signature: {
    controlName: "Full name:",
    errorText: ERROR_TEXT
  },
  email: {
    controlName: "Email address:",
    errorText: ERROR_TEXT
  },
  message: {
    controlName: "Message:",
    errorText: ERROR_TEXT
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

export const CV_URL = "./cv/CV_WiktorNowak.pdf";

export const LINKEDIN_URL = "https://www.linkedin.com/in/wiktornowak95/";
export const GITHUB_URL = "https://github.com/wiktor-nowak";
