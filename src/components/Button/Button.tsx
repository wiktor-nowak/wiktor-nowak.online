"use client";

import React, { ComponentPropsWithoutRef, ComponentType } from "react";
import styles from "./button.module.scss";
import { IconType } from "@/src/types/style";
import Link from "next/link";

type ButtonType = {
  href?: string;
  isShrinking?: boolean;
  Icon?: ComponentType<IconType>;
  text: string;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  href = undefined,
  Icon = null,
  isShrinking = false,
  text,
  onClick
}: ButtonType) {
  const buttonElement = (
    <button
      onClick={onClick}
      className={`${styles.button} ${isShrinking ? styles["button--shrinking"] : ""}`}
    >
      {Icon && <Icon width={24} height={24} />}
      <p className={styles.button__text}>{text}</p>
    </button>
  );

  return (
    <>
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {buttonElement}
        </Link>
      ) : (
        <>{buttonElement}</>
      )}
    </>
  );
}
