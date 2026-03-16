import { neon } from "@neondatabase/serverless";

const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.NEON_DATABASE_URL;

let schemaInitializationPromise;

function getSqlClient() {
  if (!databaseUrl) {
    throw new Error(
      "Missing Neon Postgres connection string. Set DATABASE_URL (or POSTGRES_URL)."
    );
  }

  return neon(databaseUrl);
}

export function isNeonConfigured() {
  return Boolean(databaseUrl);
}

export async function ensureNeonSchema() {
  if (schemaInitializationPromise) {
    return schemaInitializationPromise;
  }

  const sql = getSqlClient();

  schemaInitializationPromise = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id BIGSERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
  })();

  try {
    await schemaInitializationPromise;
  } catch (error) {
    schemaInitializationPromise = undefined;
    throw error;
  }
}

export async function insertContactSubmission(submission) {
  const sql = getSqlClient();

  await sql`
    INSERT INTO contact_submissions (
      name,
      email,
      subject,
      message,
      submitted_at
    ) VALUES (
      ${submission.name},
      ${submission.email},
      ${submission.subject},
      ${submission.message},
      ${submission.submittedAt}
    )
  `;
}

export async function newsletterSubscriberExists(email) {
  const sql = getSqlClient();
  const existingSubscriber = await sql`
    SELECT id
    FROM newsletter_subscribers
    WHERE email = ${email}
    LIMIT 1
  `;

  return existingSubscriber.length > 0;
}

export async function insertNewsletterSubscriber(subscription) {
  const sql = getSqlClient();

  await sql`
    INSERT INTO newsletter_subscribers (
      email,
      subscribed_at
    ) VALUES (
      ${subscription.email},
      ${subscription.subscribedAt}
    )
  `;
}