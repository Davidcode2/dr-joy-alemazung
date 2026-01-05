"use client";

import { useRouter } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="hover:opacity-70 transition-opacity"
      aria-label="Go back"
    >
      <MoveLeftIcon strokeWidth={1} size={48} className="mb-10" />
    </button>
  );
}
