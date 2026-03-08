import NewsletterSignup from "@/components/NewsletterSignup";
import { heroContent } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-black leading-tight text-primary sm:text-5xl lg:text-6xl dark:text-text-primary">
          {heroContent.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg dark:text-text-secondary">
          {heroContent.description}
        </p>

        <NewsletterSignup {...heroContent.newsletter} />
      </div>
    </section>
  );
}
