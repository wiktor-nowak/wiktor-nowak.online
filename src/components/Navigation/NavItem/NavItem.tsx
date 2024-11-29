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
          <p>{text}</p>
        </Then>
        <Else>
          <Link href={url}>{text}</Link>
        </Else>
      </If>
    </li>
  );
}

export default NavItem;
