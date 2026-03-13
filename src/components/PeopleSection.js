import Image from "next/image";
import Section, { SurfaceCard, accentThemes, joinClasses } from "@/components/Section";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function PersonCard({ person, accent, showProfileLinks }) {
  const styles = accentThemes[accent] ?? accentThemes.primary;
  const initials = getInitials(person.name);
  const hasLinkedIn = showProfileLinks && Boolean(person.linkedinUrl);
  const hasPhoto = Boolean(person.photo);

  return (
    <SurfaceCard accent={accent} className="group flex h-full flex-col p-6 hover:-translate-y-1.5 hover:shadow-[0_28px_62px_rgba(15,23,42,0.09)]">
      {hasPhoto ? (
        <div className="flex max-w-full justify-center">
          <div
            className={joinClasses(
              "inline-flex max-w-full items-center justify-center overflow-hidden rounded-3xl border p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
              styles.avatar
            )}
          >
            <Image
              src={person.photo}
              alt={`${person.name} portrait`}
              width={1400}
              height={900}
              className="h-52 w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : (
        <div
          className={joinClasses(
            "flex h-56 items-center justify-center rounded-3xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
            styles.avatar
          )}
        >
          <span
            className={joinClasses(
              "inline-flex rounded-3xl px-6 py-4 text-4xl font-bold tracking-[-0.04em] shadow-[0_12px_28px_rgba(15,23,42,0.08)]",
              styles.badge
            )}
          >
            {initials}
          </span>
        </div>
      )}

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-bold tracking-[-0.04em] text-primary dark:text-text-primary">
          {person.name}
        </h3>
        <p className="mt-3 inline-flex w-fit rounded-full border border-primary/12 bg-white/44 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.05)] dark:border-primary/14 dark:bg-[rgba(7,14,24,0.72)] dark:text-text-secondary">
          {person.role}
        </p>
        {person.description ? (
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
            {person.description}
          </p>
        ) : null}
      </div>

      {showProfileLinks && hasLinkedIn ? (
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
      ) : showProfileLinks ? (
        <span
          className={joinClasses(
            "mt-6 inline-flex w-fit rounded-2xl border px-4 py-3 font-semibold opacity-60",
            styles.button
          )}
        >
          Profile Coming Soon
        </span>
      ) : null}
    </SurfaceCard>
  );
}

export default function PeopleSection({
  id,
  title,
  intro,
  people,
  accent = "primary",
  showProfileLinks = true,
}) {
  return (
    <Section id={id} title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {people.map((person) => (
          <PersonCard
            key={`${title}-${person.name}`}
            person={person}
            accent={accent}
            showProfileLinks={showProfileLinks}
          />
        ))}
      </div>
    </Section>
  );
}