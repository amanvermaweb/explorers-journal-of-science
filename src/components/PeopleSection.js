import Section, { SurfaceCard, accentThemes, joinClasses } from "@/components/Section";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function PersonCard({ person, accent }) {
  const styles = accentThemes[accent] ?? accentThemes.primary;
  const initials = getInitials(person.name);
  const hasLinkedIn = Boolean(person.linkedinUrl);

  return (
    <SurfaceCard accent={accent} className="group flex h-full flex-col p-6 hover:-translate-y-1">
      <div
        className={joinClasses(
          "flex h-56 items-center justify-center rounded-3xl border",
          styles.avatar
        )}
      >
        <span
          className={joinClasses(
            "inline-flex rounded-3xl px-6 py-4 text-4xl font-semibold",
            styles.badge
          )}
        >
          {initials}
        </span>
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-semibold text-primary dark:text-text-primary">
          {person.name}
        </h3>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-text-secondary">
          {person.role}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
          {person.description}
        </p>
      </div>

      {hasLinkedIn ? (
        <a
          href={person.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={joinClasses(
            "mt-6 inline-flex w-fit rounded-2xl border px-4 py-3 font-semibold transition duration-200",
            styles.button
          )}
        >
          LinkedIn Profile
        </a>
      ) : (
        <span
          className={joinClasses(
            "mt-6 inline-flex w-fit rounded-2xl border px-4 py-3 font-semibold opacity-60",
            styles.button
          )}
        >
          Profile Coming Soon
        </span>
      )}
    </SurfaceCard>
  );
}

export default function PeopleSection({
  id,
  title,
  intro,
  people,
  accent = "primary",
}) {
  return (
    <Section id={id} title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {people.map((person) => (
          <PersonCard
            key={`${title}-${person.name}`}
            person={person}
            accent={accent}
          />
        ))}
      </div>
    </Section>
  );
}