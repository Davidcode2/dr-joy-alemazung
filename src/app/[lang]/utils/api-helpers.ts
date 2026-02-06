export function getStrapiURL(path = "") {
  const url = process.env.NODE_ENV === "development" 
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL_DEV
    : process.env.STRAPI_API_URL_PROD

  // Fallback to production URL in production, localhost only in development
  const fallbackUrl = process.env.NODE_ENV === "production"
    ? "https://api.alemazung.immoly.io"
    : "http://localhost:1337";

  return `${url || fallbackUrl}${path}`;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
