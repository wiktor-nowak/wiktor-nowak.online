import { CV_URL } from "@/src/variables/general";
import Link from "next/link";
import React from "react";
import { Else, If, Then } from "react-if";

type NavItemType = {
  url?: string;
  text: string;
  isDownloadable?: boolean;
};

function NavItem({ url = "/", text, isDownloadable = false }: NavItemType) {
  return (
    <li>
      <If condition={isDownloadable}>
        <Then>
          <Link href={CV_URL} target="_blank" rel="noopener noreferrer">
            {text}
          </Link>
        </Then>
        <Else>
          <Link href={url}>{text}</Link>
        </Else>
      </If>
    </li>
  );
}

export default NavItem;
