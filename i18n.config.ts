export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "fr", "de", "nl"],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
