import { journalEmail } from "@/content/site";
import {
  ensureNeonSchema,
  insertNewsletterSubscriber,
  newsletterSubscriberExists,
} from "@/lib/neon";
import { trySendPlainTextEmail } from "@/lib/sendmail";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendSubscriptionNotification({ email, subscribedAt }) {
  const recipientEmail = process.env.NEWSLETTER_NOTIFICATION_EMAIL || journalEmail;
  const notificationBody = [
    "A new newsletter signup was submitted.",
    "",
    `Email: ${email}`,
    `Subscribed at: ${subscribedAt}`,
  ];

  await trySendPlainTextEmail(
    {
      to: recipientEmail,
      from: journalEmail,
      replyTo: email,
      subject: `New newsletter subscription: ${email}`,
      body: notificationBody.join("\n"),
    },
    "newsletter notification"
  );
}

export async function subscribeToNewsletter(rawEmail) {
  const email = rawEmail.trim().toLowerCase();

  if (!email) {
    return {
      ok: false,
      status: 400,
      message: "Enter an email address.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      ok: false,
      status: 400,
      message: "Enter a valid email address.",
    };
  }

  await ensureNeonSchema();
  const alreadySubscribed = await newsletterSubscriberExists(email);

  if (alreadySubscribed) {
    return {
      ok: false,
      status: 409,
      message: "This email is already subscribed.",
    };
  }

  const subscriptionRecord = {
    email,
    subscribedAt: new Date().toISOString(),
  };

  await insertNewsletterSubscriber(subscriptionRecord);
  await sendSubscriptionNotification(subscriptionRecord);

  return {
    ok: true,
    status: 201,
    message: "You are subscribed to the newsletter.",
  };
}