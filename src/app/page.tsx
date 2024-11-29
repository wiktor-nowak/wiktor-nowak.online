// "use client";
import Home from "@/components/Home/Home";
import Section from "@/components/Section/Section";
import { SECTIONS } from "@/types/variables";
// import styles from "./page.module.scss";
import { useEffect, useRef } from "react";

const MAIN_PAGE_SECTIONS = SECTIONS.map((section) => (
  <Section section={section} key={section.name}></Section>
));

export default function MainPage() {
  // add a method which checks if I have any hash in my url. If so, scroll to it immediatelly.
  // It is possible to use this:
  // useEffect(() => {
  //   const xd = window.location.hash;
  //   console.log(xd);
  // }, []);

  return (
    <>
      <Home />
      {MAIN_PAGE_SECTIONS}
    </>
  );
}
