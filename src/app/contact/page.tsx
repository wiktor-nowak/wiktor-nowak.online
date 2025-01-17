import ContactForm from "@/src/components/ContactForm/ContactForm";
import styles from "./page.module.scss";
import { Metadata } from "next";
import Section from "@/src/components/Section/Section";
import { MapPin } from "@/src/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: ""
};

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <h1 className="span__primary">Wiktor Nowak</h1>
        <p className={styles.contact__line}>
          <MapPin width={24} height={24} /> Bielsko-Biała, Poland
        </p>
        <p className={styles.contact__line}>
          <MapPin width={24} height={24} /> Bielsko-Biała, Poland
        </p>
        <p className={styles.contact__line}>
          <MapPin width={24} height={24} /> Bielsko-Biała, Poland
        </p>
        <p className={styles.contact__line}>
          <MapPin width={24} height={24} /> Bielsko-Biała, Poland
        </p>
      </div>

      <Section name="Contact me:" withLine>
        <ContactForm />
      </Section>
    </>
  );
}
