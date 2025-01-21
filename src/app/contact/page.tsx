import ContactForm from "@/src/components/ContactForm/ContactForm";
import styles from "./page.module.scss";
import { Metadata } from "next";
import Section from "@/src/components/Section/Section";
import { Github, Mail, MapPin, Phone } from "@/src/components/icons";
import Link from "next/link";
import { GITHUB_URL } from "@/src/variables/general";

export const metadata: Metadata = {
  title: "Contact",
  description: ""
};

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <header className={styles.contact__header}>Wiktor Nowak</header>
        <div className={styles.contact__line}>
          <MapPin width={24} height={24} /> Bielsko-Biała, Poland
        </div>
        <div className={styles.contact__line}>
          <Mail width={24} height={24} /> nowak.wiktor95@gmail.com
        </div>
        <div className={styles.contact__line}>
          <Github width={24} height={24} /> <Link href={GITHUB_URL}>github.com/wiktor-nowak</Link>
        </div>
      </div>

      <Section name="Contact me:" withLine>
        <ContactForm />
      </Section>
    </>
  );
}
