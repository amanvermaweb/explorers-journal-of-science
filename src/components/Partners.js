import Image from "next/image";
import Link from "next/link";
import Section, {
  OutlineCard,
  SurfaceCard,
  accentThemes,
  joinClasses,
} from "@/components/Section";
import { partnersContent } from "@/content/site";

export default function Partners() {
  const { id, title, intro, items, partnershipEmail } = partnersContent;

  return (
    <Section id={id} title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((partner, index) => {
          const accent = index % 2 === 0 ? "primary" : "secondary";
          const theme = accentThemes[accent];

          return (
            <SurfaceCard
              key={partner.name}
              accent={accent}
              className="flex h-full flex-col p-6"
            >
              <div className="relative mx-auto aspect-square w-full max-w-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/5">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1280px) 13rem, (min-width: 768px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-2xl font-semibold text-primary dark:text-text-primary">
                {partner.name}
              </p>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {partner.description}
              </p>
              <Link
                href={partner.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={joinClasses(
                  "mt-6 inline-flex w-fit rounded-2xl border px-4 py-3 font-semibold transition duration-200",
                  theme.button
                )}
              >
                LinkedIn Page
              </Link>
            </SurfaceCard>
          );
        })}
      </div>
      <OutlineCard accent="secondary" className="mt-10 px-6 py-5">
        <p className="text-base leading-8 text-slate-700 dark:text-text-secondary">
          Send an email to
          <Link
            href={`mailto:${partnershipEmail}`}
            className="ml-2 font-semibold text-primary transition duration-200 hover:text-secondary"
          >
            {partnershipEmail}
          </Link>{" "}
          to get partnered with us.
        </p>
      </OutlineCard>
    </Section>
  );
}
