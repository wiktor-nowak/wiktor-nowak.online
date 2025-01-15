"use client";

import React, { useRef, useActionState } from "react";
import { sendEmail } from "../../actions/sendEmail";
import { EMAIL_FORM_SETUP } from "@/src/variables/general";
import { EmailFormState } from "../../types/email";

const initialEmailState: EmailFormState = {};

function ContactForm() {
  const [serverState, formAction] = useActionState(sendEmail, initialEmailState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={formAction} ref={formRef}>
      <div>
        <label htmlFor="signature">{EMAIL_FORM_SETUP.signature.controlName}</label>
        <input type="text" name="signature" defaultValue={serverState.data?.signature} />
        <p>{serverState.errors?.signature}</p>
      </div>
      <div>
        <label htmlFor="email">{EMAIL_FORM_SETUP.email.controlName}</label>
        <input type="text" name="email" defaultValue={serverState.data?.email} />
        <p>{serverState.errors?.email}</p>
      </div>
      <div>
        <label htmlFor="message">{EMAIL_FORM_SETUP.message.controlName}</label>
        <textarea name="message" defaultValue={serverState.data?.message} />
        <p>{serverState.errors?.message}</p>
      </div>
      <button type="submit">SEND</button>
    </form>
  );
}

export default ContactForm;
