"use client";

import { Reveal } from "@/components/Reveal";
import { HeroMark } from "@/components/illustrations/HeroMark";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden px-6 pt-28 pb-10 md:px-10"
    >
      <HeroMark />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {dictionary.location} — {dictionary.role}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 font-serif text-[15vw] leading-[0.94] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem]">
            Emil
            <br />
            Lögdberg
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-9 max-w-2xl text-xl text-ink md:text-2xl">{hero.statement}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-4 max-w-xl text-balance text-ink-muted">{hero.description}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors duration-300 hover:bg-accent-strong"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink/5"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between pt-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.availability}
          </div>

          <div className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted sm:flex">
            {hero.scroll}
            <span aria-hidden="true" className="animate-bounce">
              ↓
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
