function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const accentThemes = {
  primary: {
    surface:
      "border-primary/15 bg-linear-to-br from-white via-white to-primary/5 shadow-[0_16px_40px_rgba(59,130,246,0.12)] dark:border-primary/20 dark:from-white/5 dark:via-white/5 dark:to-primary/10",
    outline:
      "border-primary/15 shadow-[0_12px_30px_rgba(59,130,246,0.08)] dark:border-primary/15",
    avatar:
      "border-primary/15 bg-linear-to-br from-primary/12 via-white to-secondary/10 dark:border-primary/20 dark:from-primary/10 dark:via-white/5 dark:to-secondary/10",
    badge:
      "bg-primary/12 text-primary dark:bg-primary/20 dark:text-text-primary",
    button:
      "border-primary/20 bg-primary/10 text-primary hover:border-primary/35 hover:bg-primary/15 dark:border-primary/20 dark:bg-white/5 dark:text-text-primary dark:hover:bg-white/10",
    marker: "bg-primary/15 dark:bg-primary/25",
    eyebrow: "text-primary dark:text-text-primary",
  },
  secondary: {
    surface:
      "border-secondary/20 bg-linear-to-br from-white via-white to-secondary/8 shadow-[0_16px_40px_rgba(34,211,238,0.12)] dark:border-secondary/20 dark:from-white/5 dark:via-white/5 dark:to-secondary/10",
    outline:
      "border-secondary/20 shadow-[0_12px_30px_rgba(34,211,238,0.08)] dark:border-secondary/20",
    avatar:
      "border-secondary/20 bg-linear-to-br from-secondary/12 via-white to-primary/10 dark:border-secondary/20 dark:from-secondary/10 dark:via-white/5 dark:to-primary/10",
    badge:
      "bg-secondary/15 text-sky-700 dark:bg-secondary/20 dark:text-text-primary",
    button:
      "border-secondary/20 bg-secondary/10 text-primary hover:border-secondary/35 hover:bg-secondary/15 dark:border-secondary/20 dark:bg-white/5 dark:text-text-primary dark:hover:bg-white/10",
    marker: "bg-secondary dark:bg-secondary/80",
    eyebrow: "text-sky-700 dark:text-secondary",
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
        "px-6 py-20 sm:px-10 lg:px-16 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {title ? (
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl dark:text-text-primary">
            {title}
          </h2>
        ) : null}

        {intro ? (
          <div className="mt-4 max-w-3xl">
            <p className="text-base leading-8 text-slate-700 dark:text-text-secondary">
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
        "rounded-4xl border transition duration-300",
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
        "rounded-3xl border transition duration-300",
        theme.outline,
        className
      )}
    >
      {children}
    </Component>
  );
}

export { joinClasses };