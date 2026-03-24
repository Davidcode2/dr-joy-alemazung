"use client";

import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

type ObfuscatedEmailButtonProps = {
  encoded: string;
  lang: string;
};

export default function ObfuscatedEmailButton({
  lang,
}: ObfuscatedEmailButtonProps) {
  return (
    <Link
      href={`/${lang}/kontakt`}
      className="flex gap-x-3 mt-4 text-sm hover:border-b w-fit border-(--accent) transition cursor-pointer"
    >
      <MoveRightIcon strokeWidth={1} />
      <span>{lang === "en" ? "Contact me!" : "Kontaktieren Sie mich!"}</span>
    </Link>
  );
}
