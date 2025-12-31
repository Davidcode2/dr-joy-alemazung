"use client";

import { useEffect, useState } from "react";

type ObfuscatedEmailProps = {
  encoded: string;
  className?: string;
  showIcon?: boolean;
  label?: string;
};

export default function ObfuscatedEmail({
  encoded,
  className = "",
  showIcon = false,
  label,
}: ObfuscatedEmailProps) {
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
      <span className={className}>
        {label && <span className="font-semibold">{label} </span>}
        <span className="text-blue-600 dark:text-blue-400">Loading...</span>
      </span>
    );
  }

  return (
    <span className={className}>
      {label && <span className="font-semibold">{label} </span>}
      <a
        href={`mailto:${email}`}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {email}
      </a>
    </span>
  );
}

// Utility function to encode email for use in components
// Usage: encodeEmail("example@domain.com")
export function encodeEmail(email: string): string {
  const reversed = email.split("").reverse().join("");
  return btoa(reversed);
}
