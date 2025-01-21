import React from "react";
import NavItem from "./NavItem/NavItem";
import styles from "./navigation.module.scss";
import { NAV_SECTIONS } from "@/src/variables/general";

const NAV_ELEMENTS = NAV_SECTIONS.map((el) => {
  if (el.url) {
    return <NavItem url={el.url} text={el.name} key={el.name} />;
  } else {
    return <NavItem text={el.name} key={el.name} isDownloadable />;
  }
});

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>{NAV_ELEMENTS}</ul>
    </nav>
  );
}

export default Navigation;
