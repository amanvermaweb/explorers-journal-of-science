import { spawn } from "node:child_process";

function escapeHeaderValue(value) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

export async function sendPlainTextEmail({
  to,
  from,
  replyTo,
  subject,
  body,
}) {
  const messageLines = [
    `To: ${escapeHeaderValue(to)}`,
    `From: ${escapeHeaderValue(from)}`,
    `Reply-To: ${escapeHeaderValue(replyTo)}`,
    `Subject: ${escapeHeaderValue(subject)}`,
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
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

export async function trySendPlainTextEmail(message, context) {
  try {
    await sendPlainTextEmail(message);
    return true;
  } catch (error) {
    console.error(`Failed to send ${context}.`, error);
    return false;
  }
}