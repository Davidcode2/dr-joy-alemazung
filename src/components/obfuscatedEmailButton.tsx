"use client";

import { useEffect, useState } from "react";
import { MoveRightIcon } from "lucide-react";

type ObfuscatedEmailButtonProps = {
  encoded: string;
  lang: string;
};

export default function ObfuscatedEmailButton({
  encoded,
  lang,
}: ObfuscatedEmailButtonProps) {
  const [email, setEmail] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Decode the email from base64 and reverse it
    try {
      const decoded = atob(encoded);
      const reversed = decoded.split("").reverse().join("");
      setEmail(reversed);
    } catch (error) {
      console.error("Failed to decode email:", error);
    }
  }, [encoded]);

  if (!mounted || !email) {
    return (
      <div className="flex gap-x-3 mt-4 text-sm w-fit opacity-50">
        <MoveRightIcon strokeWidth={1} />
        <span>{lang === "en" ? "Contact me!" : "Kontaktieren Sie mich!"}</span>
      </div>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className="flex gap-x-3 mt-4 text-sm hover:border-b w-fit border-(--accent) transition cursor-pointer"
    >
      <MoveRightIcon strokeWidth={1} />
      <button className="cursor-pointer">
        {lang === "en" ? "Contact me!" : "Kontaktieren Sie mich!"}
      </button>
    </a>
  );
}
