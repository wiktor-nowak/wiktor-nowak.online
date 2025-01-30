"use client";

import React, { useRef, useActionState } from "react";
import { sendEmail } from "../../actions/sendEmail";
import styles from "./contact-form.module.scss";
import { EMAIL_FORM_SETUP } from "@/src/variables/general";
import { EmailFormState } from "../../types/email";
import Button from "../Button/Button";

const initialEmailState: EmailFormState = {};

function ContactForm() {
  const [serverState, formAction] = useActionState(sendEmail, initialEmailState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={formAction} ref={formRef} className={styles.form}>
      <p className={styles.form__info}>All fields in the form are required.</p>
      <div className={styles.form__field}>
        <div className={styles.form__label}>
          <label htmlFor="signature" className={styles.form__title}>
            {EMAIL_FORM_SETUP.signature.controlName}
          </label>
          <p className={styles.form__error}>{serverState.errors?.signature}</p>
        </div>
        <input
          type="text"
          name="signature"
          defaultValue={serverState.data?.signature}
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>
          <label htmlFor="email" className={styles.form__title}>
            {EMAIL_FORM_SETUP.email.controlName}
          </label>
          <p className={styles.form__error}>{serverState.errors?.email}</p>
        </div>
        <input
          type="text"
          name="email"
          defaultValue={serverState.data?.email}
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>
          <label htmlFor="message" className={styles.form__title}>
            {EMAIL_FORM_SETUP.message.controlName}
          </label>
          <p className={styles.form__error}>{serverState.errors?.message}</p>
        </div>
        <textarea
          name="message"
          defaultValue={serverState.data?.message}
          className={`${styles.form__input} ${styles["form__input--textfield"]}`}
        />
      </div>
      <Button type="submit" text="Send Message" />
    </form>
  );
}

export default ContactForm;
