// Helper to normalize locale codes for Strapi
// Strapi typically uses formats like: "en", "de", "fr" or "en-US", "de-DE"
// This function handles both URL formats
export function normalizeLocale(locale: string): string {
  // If locale is already in correct format (e.g., "en", "de"), return as is
  if (locale.length === 2) {
    return locale;
  }

  // Handle formats like "de-DE" -> keep as is
  // Or convert to just language code if needed: "de-DE" -> "de"
  // Adjust based on your Strapi locale configuration
  return locale;
}

// Get default locale if none provided
export function getDefaultLocale(): string {
  return "de"; // or your default locale
}

type Locale = "de" | "en";

// Translation key type
type TranslationKey =
  | "navigation"
  | "legal"
  | "home"
  | "impressum"
  | "more"
  | "localResponsibilityGlobalPerspective";

// Translations object
const translations: Record<Locale, Record<TranslationKey, string>> = {
  de: {
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
 * Get a translation by key for the given locale
 * Returns the German translation as fallback
 */
export function t(key: TranslationKey, locale: string): string {
  const normalizedLocale = normalizeLocale(locale) as Locale;
  return translations[normalizedLocale]?.[key] || translations.de[key] || key;
}
