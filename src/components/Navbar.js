"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { joinClasses } from "@/components/Section";
import { navigationItems } from "@/content/site";

const ACTIVE_SECTION_OFFSET = 140;

function getActiveSection() {
  const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;
  let currentSection = navigationItems[0].href;

  for (const { href } of navigationItems) {
    const section = document.getElementById(href.slice(1));

    if (section && scrollPosition >= section.offsetTop) {
      currentSection = href;
    }
  }

  const isAtPageBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 16;

  return isAtPageBottom
    ? navigationItems[navigationItems.length - 1].href
    : currentSection;
}

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(navigationItems[0].href);

  useEffect(() => {
    const syncActiveSection = () => {
      setActiveHref(getActiveSection());
    };

    syncActiveSection();
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-4 z-10 m-auto flex h-[10vh] w-[90vw] items-center justify-center gap-2 rounded-4xl border border-primary/20 bg-white/55 px-4 py-3 text-sm text-slate-800 shadow-[0_18px_50px_rgba(59,130,246,0.12)] ring-1 ring-secondary/15 backdrop-blur-sm backdrop-saturate-150 sm:w-[85vw] sm:px-6 md:w-[80vw] md:justify-between md:px-10 md:text-base dark:border-primary/15 dark:bg-slate-950/45 dark:text-text-secondary dark:ring-secondary/20 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      {navigationItems.map(({ href, label }) => {
        const isActive = activeHref === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={joinClasses(
              "cursor-pointer border-b-2 px-3 py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:text-base",
              isActive
                ? "border-primary text-primary dark:text-text-primary"
                : "border-transparent text-slate-700 hover:border-primary/70 hover:text-primary dark:text-text-secondary dark:hover:border-secondary/70 dark:hover:text-text-primary"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
