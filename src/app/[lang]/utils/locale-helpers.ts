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
