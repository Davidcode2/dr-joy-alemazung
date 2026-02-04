// Centralized translations for hardcoded strings
// German is the fallback locale

export type Locale = "de-DE" | "en";

export type TranslationKey =
  | "navigation"
  | "legal"
  | "home"
  | "impressum"
  | "more"
  | "localResponsibilityGlobalPerspective";

const translations: Record<Locale, Record<TranslationKey, string>> = {
  "de-DE": {
    navigation: "Navigation",
    legal: "Rechtliches",
    home: "Startseite",
    impressum: "Impressum",
    more: "Mehr",
    localResponsibilityGlobalPerspective: "Lokale Verantwortung mit globaler Perspektive",
  },
  en: {
    navigation: "Navigation",
    legal: "Legal",
    home: "Home",
    impressum: "Imprint",
    more: "More",
    localResponsibilityGlobalPerspective: "Local Responsibility with Global Perspective",
  },
};

/**
 * Normalize locale code
 * Handles both "de" and "de-DE" formats
 * Returns "de-DE" for German, "en" for English
 */
export function normalizeLocale(locale: string): Locale {
  if (locale === "en" || locale.startsWith("en-")) {
    return "en";
  }
  // Default to de-DE for German (including "de" and "de-DE")
  return "de-DE";
}

/**
 * Get a translation by key for the given locale
 * Returns the German translation as fallback
 */
export function t(key: TranslationKey, locale: string): string {
  const normalizedLocale = normalizeLocale(locale);
  return translations[normalizedLocale]?.[key] ?? translations.de[key] ?? key;
}

/**
 * Get default locale
 */
export function getDefaultLocale(): Locale {
  return "de";
}
