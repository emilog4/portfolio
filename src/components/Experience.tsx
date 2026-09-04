"use client";

import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Experience() {
  const { dictionary } = useLocale();
  const { experience, sectionLabels } = dictionary;

  return (
    <section id="experience" className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {sectionLabels.experience}
          </p>
        </Reveal>

        <div className="mt-10">
          {experience.map((entry, i) => (
            <Reveal key={entry.org} delay={i * 0.05}>
              <div className="grid gap-2 border-t border-line py-8 first:border-t-0 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
                    {entry.dates}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="font-serif text-2xl text-ink">{entry.org}</p>
                  <p className="mt-1 text-sm text-ink-muted">{entry.role}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="max-w-[48ch] text-sm leading-relaxed text-ink-muted">
                    {entry.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
