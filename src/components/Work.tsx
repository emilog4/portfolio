"use client";

import { Reveal } from "@/components/Reveal";
import { BudapestArt, TaxiRobotArt, TetrisArt, VacationArt } from "@/components/illustrations/ProjectArt";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Project } from "@/lib/i18n/types";

const artById: Record<string, React.ComponentType<{ className?: string }>> = {
  "taxi-robot": TaxiRobotArt,
  "vacation-optimizer": VacationArt,
  "budapest-spots": BudapestArt,
  tetris: TetrisArt,
};

function ProjectRow({
  project,
  index,
  roleLabel,
  outcomeLabel,
}: {
  project: Project;
  index: number;
  roleLabel: string;
  outcomeLabel: string;
}) {
  const Art = artById[project.id];
  const reversed = index % 2 === 1;

  return (
    <article className="border-t border-line py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
        <div
          className={`md:col-span-7 ${reversed ? "md:order-2" : "md:order-1"}`}
        >
          <Reveal>
            <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.year}</span>
              {project.status && (
                <span className="rounded-full border border-accent/40 px-2 py-0.5 text-accent">
                  {project.status}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-4 font-serif text-4xl text-ink md:text-5xl">{project.name}</h3>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[58ch] text-ink-muted leading-relaxed">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                  {roleLabel}
                </dt>
                <dd className="mt-1 text-sm text-ink">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                  {outcomeLabel}
                </dt>
                <dd className="mt-1 max-w-xs text-sm text-ink">{project.outcome}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {project.link && (
            <Reveal delay={0.25}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="underline-hover focus-ring mt-7 inline-flex items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-[0.12em] text-ink"
              >
                {project.linkLabel ?? project.link}
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          )}
        </div>

        <div className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-paper-alt p-6">
              {Art && <Art className="h-full w-full" />}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const { dictionary } = useLocale();
  const { projects, work, sectionLabels } = dictionary;

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {sectionLabels.work}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl text-ink md:text-4xl">
            {work.heading}
          </h2>
        </Reveal>

        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              roleLabel={work.roleLabel}
              outcomeLabel={work.outcomeLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
