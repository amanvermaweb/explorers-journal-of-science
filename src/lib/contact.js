import { contactContent, journalEmail } from "@/content/site";
import { ensureNeonSchema, insertContactSubmission } from "@/lib/neon";
import { trySendPlainTextEmail } from "@/lib/sendmail";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeField(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendContactNotification(submission) {
  const recipientEmail =
    process.env.CONTACT_NOTIFICATION_EMAIL || journalEmail;
  const notificationSubject = `Contact form submission: ${submission.subject}`;
  const notificationBody = [
    "A new contact form submission was received.",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Submitted at: ${submission.submittedAt}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  await trySendPlainTextEmail(
    {
      to: recipientEmail,
      from: journalEmail,
      replyTo: submission.email,
      subject: notificationSubject,
      body: notificationBody,
    },
    "contact form notification"
  );
}

export async function submitContactForm(payload) {
  const name = normalizeField(payload?.name);
  const email = normalizeField(payload?.email).toLowerCase();
  const subject =
    normalizeField(payload?.subject) || contactContent.form.defaultSubject;
  const message = normalizeField(payload?.message);

  if (!name) {
    return {
      ok: false,
      status: 400,
      message: "Enter your name.",
    };
  }

  if (!email) {
    return {
      ok: false,
      status: 400,
      message: "Enter your email address.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      ok: false,
      status: 400,
      message: "Enter a valid email address.",
    };
  }

  if (!message) {
    return {
      ok: false,
      status: 400,
      message: "Enter a message.",
    };
  }

  const submissionRecord = {
    name,
    email,
    subject,
    message,
    submittedAt: new Date().toISOString(),
  };

  await ensureNeonSchema();
  await insertContactSubmission(submissionRecord);

  await sendContactNotification(submissionRecord);

  return {
    ok: true,
    status: 201,
    message: "Your message was sent.",
  };
}