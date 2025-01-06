import React from "react";
import styles from "../layout.module.scss";
import Navigation from "@/src/components/Navigation/Navigation";

function Header() {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["logo-like"]}>Wiktor Nowak</div>
      <Navigation />
    </header>
  );
}

export default Header;
