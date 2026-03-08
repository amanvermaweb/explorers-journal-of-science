import Link from "next/link";
import Section, {
  OutlineCard,
  SurfaceCard,
  accentThemes,
  joinClasses,
} from "@/components/Section";
import { researchContent } from "@/content/site";

function ResearchCard({ title, items, accent, ordered = false }) {
  const theme = accentThemes[accent] ?? accentThemes.primary;
  const ListTag = ordered ? "ol" : "ul";

  return (
    <OutlineCard accent={accent} className="p-6">
      <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
        {title}
      </h3>
      <ListTag className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3">
            {ordered ? (
              <span
                className={joinClasses(
                  "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  theme.badge
                )}
              >
                {index + 1}
              </span>
            ) : (
              <span
                className={joinClasses(
                  "mt-2 h-2 w-2 shrink-0 rounded-full",
                  theme.marker
                )}
              />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
    </OutlineCard>
  );
}

export default function Research() {
  const { id, title, intro, cards, submissionForm } = researchContent;

  return (
    <Section id={id} title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <ResearchCard key={card.title} {...card} />
        ))}

        <SurfaceCard
          as="article"
          accent="secondary"
          className="flex flex-col items-center justify-center p-6 text-center md:col-span-2"
        >
          <h3 className="text-xl font-semibold text-primary dark:text-text-primary">
            {submissionForm.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            {submissionForm.description}
          </p>
          <Link
            href={submissionForm.href}
            target="_blank"
            rel="noreferrer"
            className={joinClasses(
              "mt-6 inline-flex rounded-2xl border px-4 py-3 font-semibold transition duration-200",
              accentThemes.secondary.button
            )}
          >
            Open Submission Form
          </Link>
        </SurfaceCard>
      </div>
    </Section>
  );
}
