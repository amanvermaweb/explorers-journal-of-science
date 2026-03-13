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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const collapseMenuOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", collapseMenuOnDesktop);

    return () => {
      window.removeEventListener("resize", collapseMenuOnDesktop);
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 top-3 z-10 m-auto w-[94vw] rounded-[1.5rem] border border-primary/16 bg-linear-to-r from-[rgba(243,248,255,0.86)] via-[rgba(248,251,255,0.78)] to-[rgba(238,247,255,0.86)] px-3 py-2 text-sm text-slate-800 shadow-[0_22px_70px_rgba(59,130,246,0.14)] ring-1 ring-white/60 backdrop-blur-md backdrop-saturate-150 sm:w-[90vw] sm:px-4 md:top-4 md:w-[80vw] md:rounded-[2rem] md:px-10 md:py-3 md:text-base dark:border-primary/14 dark:bg-linear-to-r dark:from-[rgba(6,12,24,0.9)] dark:via-[rgba(9,18,32,0.86)] dark:to-[rgba(7,16,26,0.9)] dark:text-text-secondary dark:ring-primary/10 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between md:hidden">
        <Link
          href="#hero"
          className="rounded-full px-2.5 py-1.5 text-sm font-semibold tracking-[0.02em] text-slate-800 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 dark:text-text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          Explorer Journal
        </Link>
        <button
          type="button"
          aria-controls="mobile-navbar-links"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/16 bg-white/55 text-slate-800 transition hover:border-primary/24 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 dark:border-primary/24 dark:bg-slate-900/70 dark:text-text-primary"
        >
          <span
            aria-hidden="true"
            className={joinClasses(
              "absolute h-0.5 w-5 rounded-full bg-current transition duration-200",
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            aria-hidden="true"
            className={joinClasses(
              "absolute h-0.5 w-5 rounded-full bg-current transition duration-200",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            aria-hidden="true"
            className={joinClasses(
              "absolute h-0.5 w-5 rounded-full bg-current transition duration-200",
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </div>

      <div
        id="mobile-navbar-links"
        className={joinClasses(
          "mt-2 flex w-full flex-col gap-1 md:mt-0 md:flex md:flex-row md:items-center md:justify-center md:gap-2",
          isMenuOpen ? "flex" : "hidden md:flex"
        )}
      >
        {navigationItems.map(({ href, label }) => {
          const isActive = activeHref === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={joinClasses(
                "w-full cursor-pointer rounded-full border px-3.5 py-2 text-left text-sm font-medium tracking-[0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:w-auto md:text-center md:text-base",
                isActive
                  ? "border-primary/18 bg-primary/10 text-primary shadow-[0_10px_24px_rgba(59,130,246,0.12)] dark:border-primary/22 dark:bg-primary/16 dark:text-text-primary dark:shadow-[0_10px_24px_rgba(2,6,23,0.32)]"
                  : "border-transparent text-slate-700 hover:-translate-y-0.5 hover:border-primary/14 hover:bg-white/55 hover:text-primary dark:text-text-secondary dark:hover:border-primary/16 dark:hover:bg-slate-900/70 dark:hover:text-text-primary"
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
