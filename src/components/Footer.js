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
          className="rounded-none border-x-0 border-b-0 p-8 sm:px-10 lg:px-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-2xl font-semibold text-primary dark:text-text-primary">
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
                  className="rounded-full border border-primary/15 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/35 hover:bg-primary/10 dark:border-white/10 dark:text-text-primary dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-primary/10 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-text-secondary">
            <a
              href={`mailto:${contactContent.email}`}
              className="font-medium text-primary transition hover:text-sky-600 dark:text-text-primary dark:hover:text-secondary"
            >
              {contactContent.email}
            </a>
            <p>{currentYear} The Explorer&apos;s Journal of Science</p>
          </div>
        </SurfaceCard>
      </div>
    </footer>
  );
}
