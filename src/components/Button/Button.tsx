"use client";

import React, { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.scss";
import { IconType } from "@/src/types/style";
import Link from "next/link";

type ButtonType = {
  isRound?: boolean;
  href?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  isRound = false,
  href = undefined,
  onClick,
  children
}: ButtonType) {
  return (
    <>
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <button
            onClick={onClick}
            className={`${styles.button} ${isRound ? styles["button--isRound"] : ""}`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${styles.button} ${isRound ? styles["button--isRound"] : ""}`}
        >
          {children}
        </button>
      )}
    </>
  );
}
