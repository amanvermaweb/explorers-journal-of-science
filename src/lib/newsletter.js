import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { journalEmail } from "@/content/site";

const subscribersFilePath = path.join(
  process.cwd(),
  "data",
  "newsletter-subscribers.json"
);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readSubscribers() {
  try {
    const fileContent = await readFile(subscribersFilePath, "utf8");
    const parsedContent = JSON.parse(fileContent);

    return Array.isArray(parsedContent) ? parsedContent : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeSubscribers(subscribers) {
  await mkdir(path.dirname(subscribersFilePath), { recursive: true });
  await writeFile(
    subscribersFilePath,
    JSON.stringify(subscribers, null, 2) + "\n",
    "utf8"
  );
}

function escapeHeaderValue(value) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function sendSubscriptionNotification({ email, subscribedAt }) {
  const recipientEmail = process.env.NEWSLETTER_NOTIFICATION_EMAIL || journalEmail;
  const messageLines = [
    `To: ${escapeHeaderValue(recipientEmail)}`,
    `From: ${escapeHeaderValue(journalEmail)}`,
    `Reply-To: ${escapeHeaderValue(email)}`,
    `Subject: ${escapeHeaderValue(`New newsletter subscription: ${email}`)}`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    "A new newsletter signup was submitted.",
    "",
    `Email: ${email}`,
    `Subscribed at: ${subscribedAt}`,
  ];

  await new Promise((resolve, reject) => {
    const sendmailProcess = spawn(
      process.env.SENDMAIL_PATH || "/usr/sbin/sendmail",
      ["-t", "-i"]
    );

    let stderr = "";

    sendmailProcess.on("error", reject);

    sendmailProcess.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    sendmailProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          stderr || `sendmail exited with non-zero status code ${code}`
        )
      );
    });

    sendmailProcess.stdin.end(messageLines.join("\n"));
  });
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

  const subscribers = await readSubscribers();

  if (subscribers.some((subscriber) => subscriber.email === email)) {
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

  const nextSubscribers = [
    ...subscribers,
    subscriptionRecord,
  ];

  await writeSubscribers(nextSubscribers);

  try {
    await sendSubscriptionNotification(subscriptionRecord);
  } catch (error) {
    await writeSubscribers(subscribers);
    throw error;
  }

  return {
    ok: true,
    status: 201,
    message: "You are subscribed to the newsletter.",
  };
}