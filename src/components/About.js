import Section, { SurfaceCard } from "@/components/Section";
import { aboutContent } from "@/content/site";

const overviewCards = [
  {
    title: "Our Mission",
    description:
      "The mission of The Explorer's Journal of Science is to create an accessible platform where students can share their research, ideas, and discoveries with a global audience. We strive to promote scientific curiosity, critical thinking, and academic integrity.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become a globally recognized student-led scientific journal that nurtures young researchers and encourages interdisciplinary collaboration.",
  },
];

const detailSections = [
  {
    title: "What We Do",
    items: [
      {
        title: "Publishing",
        description:
          "Publish student research papers for a wider academic audience.",
      },
      {
        title: "Communication",
        description:
          "Create opportunities for clear and confident scientific communication.",
      },
      {
        title: "Mentorship",
        description:
          "Support young researchers through mentorship and editorial guidance.",
      },
      {
        title: "Collaboration",
        description:
          "Promote global collaboration in STEM across disciplines and communities.",
      },
    ],
  },
  {
    title: "Our Values",
    items: [
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
    ],
  },
];

const detailCardClass =
  "rounded-3xl border border-secondary/20 bg-white/85 px-4 py-4 shadow-[0_12px_28px_rgba(34,211,238,0.08)] dark:border-white/10 dark:bg-white/5";

const detailBadgeClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-sm font-semibold text-sky-700 dark:bg-secondary/20 dark:text-text-primary";

const detailBodyClass =
  "text-sm leading-6 text-slate-700 dark:text-text-secondary";

function OverviewCard({ title, description }) {
  return (
    <SurfaceCard accent="primary" className="group flex h-full flex-col p-7 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-primary dark:text-text-primary">
        {title}
      </h3>
      <p className="mt-5 flex-1 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
        {description}
      </p>
    </SurfaceCard>
  );
}

function DetailItem({ index, title, description }) {
  return (
    <div className={detailCardClass}>
      <div className="flex items-start gap-3">
        <span className={detailBadgeClass}>0{index + 1}</span>
        <p className="pt-1 text-base font-semibold text-primary dark:text-text-primary">
          {title}
        </p>
      </div>
      <p className={`mt-3 ${detailBodyClass}`}>{description}</p>
    </div>
  );
}

function DetailSection({ title, items }) {
  return (
    <SurfaceCard accent="secondary" className="group flex h-full flex-col p-7 hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-primary dark:text-text-primary">
        {title}
      </h3>
      <div className="mt-6 grid flex-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <DetailItem
            key={item.title}
            index={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SurfaceCard>
  );
}

export default function About() {
  const { id, title, intro, overviewCards, detailSections } = aboutContent;

  return (
    <Section id={id} title={title} intro={intro}>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {overviewCards.map((card) => (
            <OverviewCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}

          {detailSections.map((section) => (
            <DetailSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
      </div>
    </Section>
  );
}
