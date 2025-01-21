"use client";

import React, { useState } from "react";
import styles from "../layout.module.scss";
import Navigation from "./Navigation/Navigation";
import { Menu } from "../../icons";
import Burger from "./Burger/Burger";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false);

  const toggleActivation = () => setIsMobileMenuActive((prevActive) => !prevActive);
  return (
    <header className={styles.header}>
      <div className={styles.header__bar}>
        <div className={styles["logo-like"]}>Wiktor Nowak</div>
        <Navigation />
        <Burger toggleActive={toggleActivation} isActive={isMobileMenuActive} />
      </div>
      <div className={styles.header__line} />
      <MobileMenu toggleActive={toggleActivation} isActive={isMobileMenuActive} />
    </header>
  );
}

export default Header;
