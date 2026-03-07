import React from "react";

const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of academic honesty and ethical publishing.",
  },
  {
    title: "Accessibility",
    description:
      "We believe that every student should have the opportunity to publish their work.",
  },
  {
    title: "Collaboration",
    description:
      "Science grows through collaboration across cultures and disciplines.",
  },
  {
    title: "Innovation",
    description:
      "We encourage original ideas and creative approaches to solving scientific problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary">
          About Us
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <div className="rounded-3xl border border-primary/15 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15">
            <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            The mission of The Explorer&apos;s Journal of Science is to create
            an accessible platform where students can share their research,
            ideas, and discoveries with a global audience. We strive to promote
            scientific curiosity, critical thinking, and academic integrity.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/15 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15">
            <h2 className="text-2xl font-semibold text-primary">Our Vision</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            Our vision is to become a globally recognized student-led scientific
            journal that nurtures young researchers and encourages
            interdisciplinary collaboration.
            </p>
          </div>
          <div className="rounded-3xl border border-secondary/20 p-6 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20">
            <h2 className="text-2xl font-semibold text-primary">What We Do</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            Publish student research papers. Provide opportunities for
            scientific communication. Support young researchers through
            mentorship and editorial guidance. Promote global collaboration in
            STEM.
            </p>
          </div>
          <div className="rounded-3xl border border-secondary/20 p-6 shadow-[0_12px_30px_rgba(34,211,238,0.08)] md:col-span-2 dark:border-secondary/20">
            <h2 className="text-2xl font-semibold text-primary">Our Values</h2>
            <div className="mt-4 space-y-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-secondary/20 px-4 py-4 dark:border-white/10"
                >
                  <p className="text-base font-semibold text-primary dark:text-text-primary">
                    {index + 1}. {value.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
