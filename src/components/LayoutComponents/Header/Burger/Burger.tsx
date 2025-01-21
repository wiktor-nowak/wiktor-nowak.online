import React from "react";
import styles from "./burger.module.scss";
import { ActivatedItemType } from "@/src/types/data";
import { Close, Menu } from "@/src/components/icons";

function Burger({ isActive, toggleActive }: ActivatedItemType) {
  return (
    <div className={styles.burger} onClick={toggleActive}>
      {isActive ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
    </div>
  );
}

export default Burger;
