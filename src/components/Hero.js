import NewsletterSignup from "@/components/NewsletterSignup";
import { heroContent } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-5xl rounded-[2.75rem] border border-primary/10 bg-linear-to-b from-white/34 via-white/12 to-transparent px-4 py-8 text-center shadow-[0_28px_80px_rgba(59,130,246,0.08)] backdrop-blur-[2px] sm:px-8 lg:px-10 dark:border-primary/14 dark:from-[rgba(7,14,24,0.72)] dark:via-[rgba(7,14,24,0.4)] dark:to-transparent dark:shadow-[0_30px_76px_rgba(0,0,0,0.24)]">
        <h1 className="text-4xl font-black leading-[0.92] tracking-[-0.065em] text-primary sm:text-5xl lg:text-6xl dark:text-text-primary">
          {heroContent.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700/95 sm:text-lg dark:text-text-secondary">
          {heroContent.description}
        </p>

        <NewsletterSignup {...heroContent.newsletter} />
      </div>
    </section>
  );
}
