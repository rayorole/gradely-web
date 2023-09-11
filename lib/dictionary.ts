import type { Locale } from "../i18n.config";

const dictionaries = {
  en: () => import("@/lang/en.json").then((m) => m.default),
  fr: () => import("@/lang/fr.json").then((m) => m.default),
  de: () => import("@/lang/de.json").then((m) => m.default),
  nl: () => import("@/lang/nl.json").then((m) => m.default),
} as const;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
