# The Explorer's Journal of Science

Student-led journal website built with Next.js (App Router).

## Overview

This project powers the public website for The Explorer's Journal of Science, including:

- A multi-section landing page (hero, about, research, team, board, advisors, partners, contact)
- Newsletter signup API
- Contact form API
- Server-side persistence to Neon Postgres
- Best-effort email notifications through a local `sendmail` binary

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- ESLint 9 + `eslint-config-next`
- `@tsparticles/react` + `@tsparticles/slim` for background effects

## Project Structure

```text
src/
    app/
        api/
            contact/route.js
            newsletter/route.js
        globals.css
        layout.js
        page.js
    components/
    content/site.js
    lib/
        contact.js
        newsletter.js
        neon.js
        sendmail.js
```

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: create production build
- `npm run start`: serve production build
- `npm run lint`: run ESLint

## API Endpoints

### `POST /api/contact`

Request body:

```json
{
    "name": "Your Name",
    "email": "you@example.com",
    "subject": "Question",
    "message": "Hello team"
}
```

Behavior:

- Validates required fields and email format
- Stores submission in Neon table `contact_submissions`
- Attempts notification email (best effort)

### `POST /api/newsletter`

Request body:

```json
{
    "email": "you@example.com"
}
```

Behavior:

- Validates email format
- Rejects duplicate subscriptions
- Stores subscriber in Neon table `newsletter_subscribers`
- Attempts notification email (best effort)

## Data and Email Notes

- Form and newsletter data are persisted to Neon Postgres.
- Required environment variable: `DATABASE_URL` (or `POSTGRES_URL`).
- Notification delivery failure does not block data persistence.
- If `sendmail` is unavailable, requests can still succeed but notifications are skipped.

## Deployment Notes

Before production deployment, you should:

1. Ensure Neon/Postgres connection variables are set in your deployment environment.
2. Replace local `sendmail` dependency with a managed provider (Resend, SendGrid, SES, Postmark, etc.).
3. Add abuse protection for form endpoints (rate limiting and bot protection).
4. Add monitoring/alerting around API failures.

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands should pass before deployment.
