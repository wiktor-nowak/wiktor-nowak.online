"use client";

import React, { useState } from "react";
import styles from "./mail-copy.module.scss";
import { Mail } from "../icons";

function MailCopy() {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("nowak.wiktor95@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.copied}>
      <Mail width={24} height={24} />
      <p onClick={copyToClipboard}>nowak.wiktor95@gmail.com</p>
      {isCopied && <p className={styles.copied__info}>E-mail copied!</p>}
    </div>
  );
}

export default MailCopy;
