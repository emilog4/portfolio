"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { en } from "./en";
import { sv } from "./sv";
import type { Dictionary } from "./types";

export type Locale = "en" | "sv";

const dictionaries: Record<Locale, Dictionary> = { en, sv };

const STORAGE_KEY = "locale";

const listeners = new Set<() => void>();
let cachedLocale: Locale | null = null;

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sv") return stored;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to default.
  }
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Locale {
  if (cachedLocale === null) {
    cachedLocale = readStoredLocale();
  }
  return cachedLocale;
}

function getServerSnapshot(): Locale {
  return "en";
}

function writeLocale(next: Locale) {
  cachedLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore write failures
  }
  listeners.forEach((listener) => listener());
}

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionaries[locale].meta.title;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale: writeLocale,
      toggleLocale: () => writeLocale(locale === "en" ? "sv" : "en"),
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
