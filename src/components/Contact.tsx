"use client";

import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { profile } from "@/lib/i18n/profile";

export function Contact() {
  const { dictionary } = useLocale();
  const { contact, sectionLabels } = dictionary;

  const socialLinks = [
    { label: contact.linkedinLabel, href: profile.linkedin, Icon: LinkedInIcon },
    { label: contact.githubLabel, href: profile.github, Icon: GitHubIcon },
  ];

  return (
    <section id="contact" className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {sectionLabels.contact}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">
            {contact.heading1}
            <br />
            {contact.heading2}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            href={`mailto:${profile.email}`}
            className="underline-hover focus-ring group mt-10 inline-flex items-center gap-3 rounded-sm font-serif text-2xl text-ink md:text-3xl"
          >
            {profile.email}
            <ArrowUpRightIcon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {socialLinks.map((link, i) => (
            <Reveal key={link.label} delay={0.16 + i * 0.05}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline-hover focus-ring inline-flex items-center gap-2 rounded-sm text-ink-muted transition-colors hover:text-ink"
              >
                <link.Icon className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.12em]">
                  {link.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
