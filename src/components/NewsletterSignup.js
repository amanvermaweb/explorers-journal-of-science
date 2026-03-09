"use client";

import { useState } from "react";

const initialFormState = {
  email: "",
  status: "idle",
  message: "",
};

export default function NewsletterSignup({ title, description, submitLabel }) {
  const [formState, setFormState] = useState(initialFormState);

  async function handleSubmit(event) {
    event.preventDefault();

    setFormState((currentState) => ({
      ...currentState,
      status: "submitting",
      message: "",
    }));

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formState.email }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setFormState((currentState) => ({
          ...currentState,
          status: "error",
          message: payload.message,
        }));

        return;
      }

      setFormState({
        email: "",
        status: "success",
        message: payload.message,
      });
    } catch {
      setFormState((currentState) => ({
        ...currentState,
        status: "error",
        message: "Unable to process your subscription right now.",
      }));
    }
  }

  const isSubmitting = formState.status === "submitting";
  const messageClassName =
    formState.status === "error"
      ? "text-rose-600 dark:text-rose-300"
      : "text-emerald-700 dark:text-emerald-300";

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-2xl rounded-4xl border border-primary/15 bg-white/80 p-6 text-left shadow-[0_16px_40px_rgba(59,130,246,0.12)] ring-1 ring-primary/10 backdrop-blur-sm dark:border-primary/20 dark:bg-white/5 dark:ring-white/10">
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold text-primary sm:text-2xl dark:text-text-primary">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            {description}
          </p>
        </div>

        <form className="mt-6 flex flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formState.email}
            onChange={(event) =>
              setFormState((currentState) => ({
                ...currentState,
                email: event.target.value,
                message: "",
                status: currentState.status === "success" ? "idle" : currentState.status,
              }))
            }
            placeholder="Enter your email"
            className="w-full rounded-full border border-primary/15 bg-white px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-950/40 dark:text-text-primary"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer inline-flex shrink-0 items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-600 hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            {isSubmitting ? "Subscribing..." : submitLabel}
          </button>
        </form>

        {formState.message ? (
          <p className={`mt-4 text-sm font-medium ${messageClassName}`}>
            {formState.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}