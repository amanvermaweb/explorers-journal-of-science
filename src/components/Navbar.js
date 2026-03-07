import Link from "next/link";

export default function Navbar() {
  const navItems = [
    ["#hero", "Hero"],
    ["#about", "About"],
    ["#research", "Research"],
    ["#team", "Team"],
    ["#partners", "Partners"],
    ["#contact", "Contact"],
  ];

  return (
    <nav className="fixed inset-x-0 top-4 m-auto flex h-[10vh] w-[90vw] items-center justify-center gap-2 rounded-4xl border border-primary/20 bg-white/55 px-4 py-3 text-sm text-slate-800 shadow-[0_18px_50px_rgba(59,130,246,0.12)] ring-1 ring-secondary/15 backdrop-blur-sm backdrop-saturate-150 sm:w-[85vw] sm:px-6 md:w-[80vw] md:justify-between md:px-10 md:text-base dark:border-primary/15 dark:bg-slate-950/45 dark:text-text-secondary dark:ring-secondary/20 dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
      {navItems.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className="rounded-full px-3 py-2 transition duration-200 hover:bg-primary hover:text-text-primary dark:hover:bg-primary/20 dark:hover:text-text-primary"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
