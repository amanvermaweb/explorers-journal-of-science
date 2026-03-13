function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const accentThemes = {
  primary: {
    surface:
      "border-primary/16 bg-linear-to-br from-[rgba(250,252,255,0.98)] via-[rgba(241,247,255,0.94)] to-primary/12 shadow-[0_24px_60px_rgba(59,130,246,0.14)] ring-1 ring-white/55 dark:border-primary/18 dark:from-[rgba(8,14,26,0.94)] dark:via-[rgba(11,20,36,0.95)] dark:to-[rgba(32,61,112,0.28)] dark:shadow-[0_26px_64px_rgba(2,6,23,0.52)] dark:ring-primary/10",
    outline:
      "border-primary/16 bg-linear-to-b from-[rgba(250,252,255,0.78)] to-[rgba(241,247,255,0.58)] shadow-[0_18px_38px_rgba(59,130,246,0.08)] ring-1 ring-white/45 dark:border-primary/15 dark:from-[rgba(8,14,26,0.74)] dark:to-[rgba(8,14,26,0.54)] dark:shadow-[0_20px_48px_rgba(2,6,23,0.42)] dark:ring-primary/10",
    avatar:
      "border-primary/16 bg-linear-to-br from-primary/10 via-[rgba(246,251,255,0.96)] to-secondary/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:border-primary/18 dark:from-primary/12 dark:via-[rgba(10,18,34,0.96)] dark:to-secondary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    badge:
      "bg-primary/12 text-primary dark:bg-primary/20 dark:text-text-primary",
    button:
      "border-primary/18 bg-linear-to-b from-primary/10 to-primary/7 text-primary shadow-[0_12px_28px_rgba(59,130,246,0.08)] hover:-translate-y-0.5 hover:border-primary/32 hover:bg-primary/14 hover:shadow-[0_16px_34px_rgba(59,130,246,0.14)] dark:border-primary/22 dark:bg-linear-to-b dark:from-primary/18 dark:to-[rgba(15,23,42,0.62)] dark:text-text-primary dark:shadow-[0_14px_28px_rgba(2,6,23,0.34)] dark:hover:border-primary/34 dark:hover:from-primary/22 dark:hover:to-[rgba(15,23,42,0.7)]",
    marker: "bg-primary/15 dark:bg-primary/25",
    eyebrow: "text-primary dark:text-text-primary",
  },
  secondary: {
    surface:
      "border-secondary/20 bg-linear-to-br from-[rgba(249,253,255,0.98)] via-[rgba(239,251,255,0.94)] to-secondary/11 shadow-[0_24px_60px_rgba(34,211,238,0.12)] ring-1 ring-white/55 dark:border-secondary/18 dark:from-[rgba(7,16,24,0.94)] dark:via-[rgba(8,22,31,0.95)] dark:to-[rgba(17,88,104,0.24)] dark:shadow-[0_26px_64px_rgba(2,6,23,0.52)] dark:ring-secondary/10",
    outline:
      "border-secondary/20 bg-linear-to-b from-[rgba(246,253,255,0.8)] to-[rgba(239,251,255,0.56)] shadow-[0_18px_38px_rgba(34,211,238,0.08)] ring-1 ring-white/45 dark:border-secondary/18 dark:from-[rgba(7,16,24,0.74)] dark:to-[rgba(7,16,24,0.54)] dark:shadow-[0_20px_48px_rgba(2,6,23,0.42)] dark:ring-secondary/10",
    avatar:
      "border-secondary/20 bg-linear-to-br from-secondary/10 via-[rgba(247,255,255,0.96)] to-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] dark:border-secondary/18 dark:from-secondary/12 dark:via-[rgba(8,20,28,0.96)] dark:to-primary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    badge:
      "bg-secondary/15 text-secondary dark:bg-secondary/20 dark:text-text-primary",
    button:
      "border-secondary/20 bg-linear-to-b from-secondary/12 to-secondary/8 text-primary shadow-[0_12px_28px_rgba(34,211,238,0.08)] hover:-translate-y-0.5 hover:border-secondary/34 hover:bg-secondary/16 hover:shadow-[0_16px_34px_rgba(34,211,238,0.14)] dark:border-secondary/22 dark:bg-linear-to-b dark:from-secondary/14 dark:to-[rgba(15,23,42,0.62)] dark:text-text-primary dark:shadow-[0_14px_28px_rgba(2,6,23,0.34)] dark:hover:border-secondary/34 dark:hover:from-secondary/18 dark:hover:to-[rgba(15,23,42,0.7)]",
    marker: "bg-secondary dark:bg-secondary/80",
    eyebrow: "text-secondary dark:text-secondary",
  },
};

export default function Section({
  id,
  title,
  intro,
  children,
  className,
  contentClassName = "mt-10",
}) {
  return (
    <section
      id={id}
      className={joinClasses(
        "relative isolate px-6 py-20 sm:px-10 lg:px-16 lg:py-24 before:absolute before:inset-x-4 before:inset-y-6 before:-z-10 before:rounded-[2.75rem] before:border before:border-primary/8 before:bg-linear-to-b before:from-white/38 before:via-white/18 before:to-transparent before:shadow-[0_26px_70px_rgba(15,23,42,0.035)] before:backdrop-blur-[2px] sm:before:inset-x-6 lg:before:inset-x-8 dark:before:border-white/6 dark:before:from-[rgba(7,14,24,0.5)] dark:before:via-[rgba(7,14,24,0.2)] dark:before:to-transparent dark:before:shadow-[0_24px_60px_rgba(0,0,0,0.22)]",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {title ? (
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-primary sm:text-4xl lg:text-[2.8rem] dark:text-text-primary">
            {title}
          </h2>
        ) : null}

        {intro ? (
          <div className="mt-4 max-w-3xl">
            <p className="text-base leading-8 text-slate-700/95 sm:text-[1.02rem] dark:text-text-secondary">
              {intro}
            </p>
          </div>
        ) : null}

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}

export function SurfaceCard({
  as: Component = "article",
  accent = "primary",
  className,
  children,
  ...props
}) {
  const theme = accentThemes[accent] ?? accentThemes.primary;

  return (
    <Component
      {...props}
      className={joinClasses(
        "relative overflow-hidden rounded-4xl border transition duration-300 before:pointer-events-none before:absolute before:inset-x-7 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/85 before:to-transparent dark:before:via-white/10",
        theme.surface,
        className
      )}
    >
      {children}
    </Component>
  );
}

export function OutlineCard({
  as: Component = "article",
  accent = "primary",
  className,
  children,
  ...props
}) {
  const theme = accentThemes[accent] ?? accentThemes.primary;

  return (
    <Component
      {...props}
      className={joinClasses(
        "relative overflow-hidden rounded-3xl border transition duration-300 before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/80 before:to-transparent dark:before:via-white/10",
        theme.outline,
        className
      )}
    >
      {children}
    </Component>
  );
}

export { joinClasses };