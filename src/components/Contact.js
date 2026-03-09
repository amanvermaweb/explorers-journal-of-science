"use client";

import { useState } from "react";
import Section, { SurfaceCard } from "@/components/Section";
import { contactContent } from "@/content/site";

const initialFormState = contactContent.form.fields.reduce((formState, field) => {
  formState[field.name] = "";
  return formState;
}, {});

const initialSubmissionState = {
  status: "idle",
  message: "",
};

function FieldLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-primary dark:text-text-primary"
    >
      {children}
    </label>
  );
}

function FormField({ field, value, onChange }) {
  const fieldClassName =
    "w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-text-primary";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.id}
        name={field.name}
        value={value}
        onChange={onChange}
        required
        rows={field.rows}
        className={fieldClassName}
        placeholder={field.placeholder}
      />
    );
  }

  return (
    <input
      id={field.id}
      name={field.name}
      type={field.type}
      value={value}
      onChange={onChange}
      autoComplete={field.autoComplete}
      required
      className={fieldClassName}
      placeholder={field.placeholder}
    />
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [submissionState, setSubmissionState] = useState(initialSubmissionState);
  const topFields = contactContent.form.fields.slice(0, 2);
  const remainingFields = contactContent.form.fields.slice(2);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setSubmissionState((currentState) =>
      currentState.message
        ? initialSubmissionState
        : currentState
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmissionState({
      status: "submitting",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        setSubmissionState({
          status: "error",
          message: payload.message,
        });
        return;
      }

      setFormData(initialFormState);
      setSubmissionState({
        status: "success",
        message: payload.message,
      });
    } catch {
      setSubmissionState({
        status: "error",
        message: "Unable to send your message right now.",
      });
    }
  }

  const isSubmitting = submissionState.status === "submitting";
  const messageClassName =
    submissionState.status === "error"
      ? "text-rose-600 dark:text-rose-300"
      : "text-emerald-700 dark:text-emerald-300";

  return (
    <Section id={contactContent.id} title={contactContent.title}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <SurfaceCard accent="primary" className="p-8">
          <h3 className="text-2xl font-semibold text-primary dark:text-text-primary">
            {contactContent.heading}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            {contactContent.description}
          </p>

          <div className="mt-8 space-y-5">
            {contactContent.methods.map((method) => (
              <div key={method.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-secondary">
                  {method.label}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-2 inline-block text-lg font-semibold text-primary transition hover:text-sky-600 dark:text-text-primary dark:hover:text-secondary"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-primary dark:text-text-primary">
                    {method.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard as="form" accent="secondary" className="p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            {topFields.map((field) => (
              <div key={field.id} className="space-y-2">
                <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
                <FormField
                  field={field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          {remainingFields.map((field) => (
            <div key={field.id} className="mt-5 space-y-2">
              <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
              <FormField
                field={field}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {isSubmitting ? "Sending..." : contactContent.form.submitLabel}
            </button>
          </div>

          {submissionState.message ? (
            <p className={`mt-4 text-sm font-medium ${messageClassName}`}>
              {submissionState.message}
            </p>
          ) : null}
        </SurfaceCard>
      </div>
    </Section>
  );
}
