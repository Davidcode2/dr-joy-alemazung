import type { Metadata } from "next";
import {
  Playfair_Display,
  Geist,
  Geist_Mono,
  Fira_Code,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Joy A. Alemazung - Bürgermeister von Heubach",
    template: "%s | Dr. Joy A. Alemazung",
  },
  description:
    "Dr. Joy A. Alemazung ist Bürgermeister von Heubach und Wissenschaftler mit Expertise in Nachhaltigkeit, Migrationspolitik und internationalen Beziehungen.",
  keywords: [
    "Dr. Joy A. Alemazung",
    "Bürgermeister Heubach",
    "Mayor Heubach",
    "Nachhaltigkeit",
    "Sustainability",
    "Migrationspolitik",
    "Migration Policy",
    "Internationale Beziehungen",
    "International Relations",
    "Wissenschaft",
    "Publications",
  ],
  authors: [{ name: "Dr. Joy A. Alemazung" }],
  creator: "Dr. Joy A. Alemazung",
  metadataBase: new URL("https://alemazung.com"),
  alternates: {
    canonical: "https://alemazung.com",
    languages: {
      de: "/de",
      en: "/en",
    },
  },
  openGraph: {
    title: "Dr. Joy A. Alemazung - Bürgermeister von Heubach",
    description:
      "Bürgermeister von Heubach und Wissenschaftler mit Expertise in Nachhaltigkeit, Migrationspolitik und internationalen Beziehungen.",
    url: "https://alemazung.com",
    siteName: "Dr. Joy A. Alemazung",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${playfairSerif.variable} ${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <Script
          src="https://analytics.jakob-lingel.dev/script.js"
          data-website-id="80162986-705f-410d-b56e-ba2a61b9ae5e"
          strategy="afterInteractive"
        ></Script>
        {children}
      </body>
    </html>
  );
}
