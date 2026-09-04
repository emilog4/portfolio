"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { profile } from "@/lib/i18n/profile";

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="border-t border-line px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{dictionary.location}</p>
      </div>
    </footer>
  );
}
