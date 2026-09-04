"use client";

import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Skills() {
  const { dictionary } = useLocale();
  const { now, skillCategories, sectionLabels } = dictionary;

  return (
    <section className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {sectionLabels.skills}
              </p>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {skillCategories.map((category, i) => (
                <Reveal key={category.label} delay={i * 0.06}>
                  <p className="font-serif text-xl text-ink">{category.label}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-sm text-ink-muted">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {sectionLabels.now}
              </p>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink">{now.text}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
                {now.updatedLabel} {now.updated}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
