"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function About() {
  const { dictionary } = useLocale();
  const { about, strengths, sectionLabels } = dictionary;

  return (
    <section id="about" className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {sectionLabels.about}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <Reveal>
                <div className="relative aspect-[3/4] w-40 overflow-hidden rounded-2xl border border-line bg-paper-alt sm:w-56 md:w-full">
                  <Image
                    src="/emil-portrait.webp"
                    alt="Portrait of Emil Lögdberg"
                    fill
                    sizes="(min-width: 768px) 22vw, 224px"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.05 * i}>
                <p className="mt-6 text-lg leading-relaxed text-ink first:mt-0 md:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {sectionLabels.strengths}
              </p>
            </Reveal>
            <ul className="mt-6 flex flex-col gap-6">
              {strengths.map((strength, i) => (
                <Reveal as="li" key={strength.title} delay={0.1 + i * 0.05}>
                  <p className="font-serif text-lg text-ink">{strength.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{strength.detail}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
