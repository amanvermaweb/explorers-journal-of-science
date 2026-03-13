import Link from "next/link";
import { SurfaceCard } from "@/components/Section";
import {
  contactContent,
  footerContent,
  navigationItems,
  siteMetadata,
} from "@/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-auto w-full pt-4">
      <div className="w-full">
        <SurfaceCard
          as="div"
          accent="primary"
          className="rounded-none border-x-0 border-b-0 bg-linear-to-r from-[rgba(248,251,255,0.94)] via-[rgba(241,247,255,0.9)] to-[rgba(236,245,255,0.92)] p-8 sm:px-10 lg:px-16 dark:bg-linear-to-r dark:from-[rgba(6,12,24,0.96)] dark:via-[rgba(9,18,32,0.94)] dark:to-[rgba(8,16,30,0.96)]"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-2xl font-bold tracking-[-0.04em] text-primary dark:text-text-primary">
                {siteMetadata.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base dark:text-text-secondary">
                {footerContent.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-primary/15 bg-white/48 px-4 py-2 text-sm font-medium text-primary shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/10 dark:border-primary/16 dark:bg-slate-900/72 dark:text-text-primary dark:hover:bg-primary/14"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-primary/10 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-text-secondary">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={`mailto:${contactContent.email}`}
                className="font-medium text-primary transition hover:text-sky-600 dark:text-text-primary dark:hover:text-secondary"
              >
                {contactContent.email}
              </a>
              <a
                href={footerContent.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary transition hover:text-sky-600 dark:text-text-primary dark:hover:text-secondary"
              >
                LinkedIn
              </a>
            </div>
            <p>{currentYear} The Explorer&apos;s Journal of Science</p>
          </div>
        </SurfaceCard>
      </div>
    </footer>
  );
}
