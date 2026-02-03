"use client";

import { MoveRightIcon } from "lucide-react";

type MoreButtonProps = {
  locale: string;
};

const translations: Record<string, Record<string, string>> = {
  de: { more: "Mehr" },
  en: { more: "More" },
};

function moreKey(key: string, locale: string): string {
  const normalizedLocale = locale.length === 2 ? locale : locale.slice(0, 2);
  return translations[normalizedLocale]?.[key] || translations.de[key] || key;
}

export default function MoreButton({ locale }: MoreButtonProps) {
  return (
    <button className="flex gap-x-4 mt-4 hover:text-(--accent)/80 transition">
      {moreKey("more", locale)}
      <MoveRightIcon strokeWidth={1}/>
    </button>
  );
}
