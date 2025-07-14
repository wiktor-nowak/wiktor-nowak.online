"use server";

import { convertZodErrors } from "./errors";
import { EMAIL_FORM_SETUP } from "@/src/variables/general";
import { EmailFormState, StringMap } from "../types/email";
import nodemailer from "nodemailer";
import { SMTP_EMAIL } from "../variables/general";
import z from "zod";

const emailSchema = z.object({
  signature: z.string().min(1, EMAIL_FORM_SETUP.signature.errorText),
  email: z
    .string()
    .min(1, EMAIL_FORM_SETUP.email.errorText)
    .email({ message: EMAIL_FORM_SETUP.email.errorText }),
  message: z.string().min(1, EMAIL_FORM_SETUP.message.errorText),
});

export const sendEmail = async (
  prevState: EmailFormState,
  formData: FormData
): Promise<EmailFormState> => {
  const { SMTP_PASSWORD } = process.env;
  const unvalidatedEmailData: StringMap = {
    signature: formData.get("signature") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const validated = emailSchema.safeParse(unvalidatedEmailData);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return { errors, data: unvalidatedEmailData };
  } else {
    const testResult = await transport.verify();
    if (testResult) {
      const formattedMessage = `<h1> Message from ${unvalidatedEmailData.signature}</h1><br/>
        ${unvalidatedEmailData.message}`;

      await transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        subject: `New contact from ${unvalidatedEmailData.signature} | wiktor-nowak.online`,
        html: formattedMessage,
        text: `Recived from:  ${unvalidatedEmailData.signature} | from email address: ${unvalidatedEmailData.email} | <br/> message: ${unvalidatedEmailData.message}`,
        replyTo: unvalidatedEmailData.email,
      });
    }
    return { successMessage: "Email sent successfully!", data: {} };
  }
};
