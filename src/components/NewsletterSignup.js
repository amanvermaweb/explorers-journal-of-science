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
      <div className="w-full max-w-2xl rounded-4xl border border-primary/16 bg-linear-to-br from-[rgba(250,252,255,0.92)] via-[rgba(243,248,255,0.9)] to-[rgba(238,246,255,0.88)] p-6 text-left shadow-[0_24px_60px_rgba(59,130,246,0.14)] ring-1 ring-white/60 backdrop-blur-sm dark:border-primary/18 dark:bg-linear-to-br dark:from-[rgba(7,14,24,0.92)] dark:via-[rgba(10,19,34,0.9)] dark:to-[rgba(26,54,98,0.28)] dark:ring-primary/10">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold tracking-[-0.04em] text-primary sm:text-2xl dark:text-text-primary">
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
            className="w-full rounded-full border border-primary/16 bg-[rgba(251,253,255,0.96)] px-5 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition duration-200 focus:-translate-y-0.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_12px_24px_rgba(59,130,246,0.1)] dark:border-primary/16 dark:bg-[rgba(5,12,22,0.78)] dark:text-text-primary dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(59,130,246,0.26)] transition duration-200 hover:-translate-y-0.5 hover:border-sky-600 hover:bg-sky-600 hover:shadow-[0_18px_36px_rgba(59,130,246,0.3)] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
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