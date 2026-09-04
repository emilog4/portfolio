"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { profile } from "@/lib/i18n/profile";

function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`focus-ring rounded-sm transition-colors ${
          locale === "en" ? "text-ink" : "text-ink-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-ink-muted">
        /
      </span>
      <button
        type="button"
        onClick={() => setLocale("sv")}
        aria-pressed={locale === "sv"}
        className={`focus-ring rounded-sm transition-colors ${
          locale === "sv" ? "text-ink" : "text-ink-muted hover:text-ink"
        }`}
      >
        SV
      </button>
    </div>
  );
}

export function Nav() {
  const { dictionary } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/90 backdrop-blur-sm" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-ink focus-ring rounded-sm"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {dictionary.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="underline-hover focus-ring rounded-sm font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="border-l border-line pl-8">
            <LocaleToggle />
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="focus-ring relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-sm md:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <ul className="flex flex-col items-start gap-6">
                {dictionary.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="focus-ring font-serif text-4xl text-ink"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * dictionary.nav.length }}
              >
                <LocaleToggle className="mt-10" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
