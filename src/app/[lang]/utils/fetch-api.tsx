// ./frontend/stc/app/[lang]/utils/fetch-api.tsx
import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
  locale?: string, // Add locale parameter
) {
  try {
    const token =
      process.env.NODE_ENV === "production"
        ? process.env.STRAPI_API_TOKEN_PROD
        : process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_DEV;
    
    // Fallback to ALEMAZUNG_STRAPI_BOT_API_TOKEN if the primary token is not set
    const authToken = token || process.env.ALEMAZUNG_STRAPI_BOT_API_TOKEN;
    
    // Add locale to urlParamsObject if provided
    const paramsWithLocale = locale
      ? { ...urlParamsObject, locale }
      : urlParamsObject;
    
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(paramsWithLocale);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    );
  }
}
