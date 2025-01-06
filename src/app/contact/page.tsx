import ContactForm from "@/src/components/ContactForm/ContactForm";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: ""
};

export default function Contact() {
  return (
    <main>
      <h1 className={styles.colorrr}>CONTACT</h1>
      <h3>The contact will be available soon!</h3>

      <ContactForm />
      <div className={styles.contact__content} />
    </main>
  );
}
