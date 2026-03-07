import Link from "next/link";

const submissionTypes = [
  "Student research papers and review articles",
  "Science explainers and conceptual essays",
  "Experimental reports and data-driven projects",
  "Interviews, opinion pieces, and features on scientific innovation",
  "Learning experiences and reflections in STEM",
];

const formattingRequirements = [
  "Manuscripts must be written in English.",
  "Research papers should include a title, abstract, introduction, methodology, results, discussion, and references.",
];

const ethicalGuidelines = [
  "All submissions must adhere to academic integrity and ethical research practices.",
  "Plagiarism, falsification of data, and unethical research practices will result in rejection.",
];

const submissionProcess = [
  "Prepare your manuscript following the formatting guidelines.",
  "Submit your manuscript through the submission form given below.",
  "The editorial team will review your submission.",
  "Authors will receive feedback and publication decisions.",
];

export default function Research() {
  return (
    <section id="research" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary">
          Research Section
        </h2>
        <div className="mt-10 rounded-4xl border border-primary/15 p-8 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15">
          <div className="h-1 w-20 rounded-full bg-secondary/80" />
          <div className="mt-6 max-w-3xl">
            <h3 className="text-2xl font-semibold text-primary dark:text-text-primary">
              Submission Guidelines
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base dark:text-text-secondary">
              We welcome submissions from students and early-stage researchers in
              various fields of science.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-primary/15 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15">
              <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
                Submissions May Include
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {submissionTypes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-secondary/20 p-6 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20">
              <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
                Formatting Requirements
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {formattingRequirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-secondary/20 p-6 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20">
              <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
                Ethical Guidelines
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {ethicalGuidelines.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-primary/15 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15">
              <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
                Submission Process
              </h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {submissionProcess.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-text-primary">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-50 px-4 py-4 dark:bg-white/5">
                <p className="text-sm text-slate-700 dark:text-text-secondary">
                  Submission form:
                </p>
                <Link
                  href="https://forms.gle/jN5hwF7EQjNkr4mM7"
                  className="mt-2 inline-block break-all font-semibold text-primary transition duration-200 hover:text-secondary"
                >
                  https://forms.gle/jN5hwF7EQjNkr4mM7
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
