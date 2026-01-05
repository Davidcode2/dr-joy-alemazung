"use client";

import { Globe } from "lucide-react";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const toggleLanguage = () => {
    const newLocale = locale === "de-DE" ? "en" : "de-DE";
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };
  return <Globe onClick={toggleLanguage} />;
}
