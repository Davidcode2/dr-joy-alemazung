import type { Metadata } from "next";
import "../globals.css";
import TopNavigation from "@/src/components/menu/topNavigation";
import { ThemeProvider } from "@/src/theme-provider";
import Footer from "@/src/components/menu/footer";

export const metadata: Metadata = {
  title: {
    default: "Dr. Joy A. Alemazung - Bürgermeister von Heubach",
    template: "%s | Dr. Joy A. Alemazung"
  },
  description: "Dr. Joy A. Alemazung ist Bürgermeister von Heubach und Wissenschaftler mit Expertise in Nachhaltigkeit, Migrationspolitik und internationalen Beziehungen.",
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
      'de': '/de',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Dr. Joy A. Alemazung - Bürgermeister von Heubach",
    description: "Bürgermeister von Heubach und Wissenschaftler mit Expertise in Nachhaltigkeit, Migrationspolitik und internationalen Beziehungen.",
    url: "https://alemazung.com",
    siteName: "Dr. Joy A. Alemazung",
    locale: "de_DE",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  
  return (
    <ThemeProvider defaultTheme="light" enableSystem disableTransitionOnChange>
      <TopNavigation locale={lang} />
      {children}
      <Footer locale={lang} />
    </ThemeProvider>
  );
}
