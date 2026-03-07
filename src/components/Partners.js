import Image from "next/image";
import Link from "next/link";
import React from "react";

const partners = [
  {
    name: "STEMise Community",
    logo: "/partner1.png",
    description:
      "A community dedicated to promoting STEM education and diversity.",
  },
  {
    name: "Minorities in STEM",
    logo: "/partner2.png",
    description:
      "An organization focused on supporting underrepresented groups in STEM fields.",
  },
  {
    name: "Team Neuron",
    logo: "/partner3.png",
    description:
      "A student-led initiative that fosters collaboration and innovation in neuroscience research.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary">
          Partners
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner, index) => (
            <article
              key={index}
              className="rounded-3xl border border-primary/15 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] transition duration-200 even:border-secondary/20 even:shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-primary/15 dark:even:border-secondary/20"
            >
              <div className="flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
              <p className="mt-6 text-2xl font-semibold text-primary dark:text-text-primary">
                {partner.name}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-3xl border border-secondary/20 px-6 py-5 text-base leading-8 text-slate-700 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20 dark:text-text-secondary">
          Send an Email on this email id ejs.{" "}
          <Link
            href="mailto:sciencejournal@gmail.com"
            className="font-semibold text-primary transition duration-200 hover:text-secondary"
          >
            mailto:sciencejournal@gmail.com
          </Link>{" "}
          to get partnered with us.
        </p>
      </div>
    </section>
  );
}
