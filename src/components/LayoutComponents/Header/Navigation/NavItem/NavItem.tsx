"use client";

import { CV_URL } from "@/src/variables/general";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import { Else, If, Then } from "react-if";
import styles from "./nav-item.module.scss";

type NavItemType = {
  url?: string;
  text: string;
  isDownloadable?: boolean;
} & ComponentPropsWithoutRef<"a">;

function NavItem({ url = "/", text, onClick, isDownloadable = false }: NavItemType) {
  const pathName = usePathname();

  return (
    <li>
      <If condition={isDownloadable}>
        <Then>
          <Link
            className={styles.navlink}
            href={CV_URL}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </Link>
        </Then>
        <Else>
          <Link
            className={`${styles.navlink} ${pathName === url ? styles.navlink__active : ""}`}
            onClick={onClick}
            href={url}
          >
            {text}
          </Link>
        </Else>
      </If>
    </li>
  );
}

export default NavItem;
