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
              className="flex h-full flex-col p-6 hover:-translate-y-1.5 hover:shadow-[0_28px_62px_rgba(15,23,42,0.09)]"
            >
              <div className="relative mx-auto aspect-square w-full max-w-52 overflow-hidden rounded-2xl border border-primary/12 bg-linear-to-br from-[rgba(248,251,255,0.88)] to-[rgba(238,247,255,0.78)] shadow-[0_14px_34px_rgba(15,23,42,0.06)] dark:border-primary/14 dark:bg-linear-to-br dark:from-[rgba(7,14,24,0.82)] dark:to-[rgba(10,19,34,0.68)]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 1280px) 13rem, (min-width: 768px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-2xl font-bold tracking-[-0.04em] text-primary dark:text-text-primary">
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
      <OutlineCard accent="secondary" className="mt-10 px-6 py-5 shadow-[0_18px_42px_rgba(34,211,238,0.08)]">
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
