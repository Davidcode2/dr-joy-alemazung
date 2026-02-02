"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type PageHeader = {
  id: number;
  documentId: string;
  heading: string;
  slug: string;
};

type NavGroup = {
  label: string;
  slug: string;
  children: PageHeader[];
};

function groupPages(pages: PageHeader[]): NavGroup[] {
  const slugMap = new Map(pages.map((p) => [p.slug, p]));

  const groups: NavGroup[] = [
    {
      label: "Politik & Amt",
      slug: "buergermeisterliches",
      children: [
        "buergermeisterliches",
        "aktuelles-und-positionen",
        "engagement-und-ehrenamt",
      ]
        .map((s) => slugMap.get(s))
        .filter(Boolean) as PageHeader[],
    },
    {
      label: "Wissenschaft & Medien",
      slug: "wissenschaft-und-publikationen",
      children: [
        "wissenschaft-und-publikationen",
        "vortraege-und-medien",
        "internationale-zusammenarbeit",
      ]
        .map((s) => slugMap.get(s))
        .filter(Boolean) as PageHeader[],
    },
    {
      label: "Über mich",
      slug: "zur-person",
      children: ["zur-person", "kontakt"]
        .map((s) => slugMap.get(s))
        .filter(Boolean) as PageHeader[],
    },
  ];

  return groups;
}

function DropdownGroup({
  group,
  locale,
}: {
  group: NavGroup;
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={`/${locale}/${group.slug}`}
        className="px-3 py-2 text-sm font-medium transition-colors hover:text-(--accent)"
      >
        {group.label}
      </Link>

      <div
        className={`
          absolute left-0 top-full pt-2 z-50
          transition-all duration-200 ease-out origin-top
          ${open
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
          }
        `}
      >
        <div className="bg-(--background) border border-(--ultralight-accent)/60 rounded-lg shadow-lg py-2 min-w-56">
          {group.children.map((page) => (
            <Link
              key={page.id}
              href={`/${locale}/${page.slug}`}
              className="block px-4 py-2.5 text-sm transition-colors hover:bg-(--ultralight-accent)/40 hover:text-(--accent)"
            >
              {page.heading}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

type DesktopNavProps = {
  locale: string;
  pageHeaders: PageHeader[];
};

export default function DesktopNav({ locale, pageHeaders }: DesktopNavProps) {
  const groups = groupPages(pageHeaders);

  return (
    <ul className="flex items-center gap-x-1">
      <li>
        <Link href={`/${locale}`} className="px-3 py-2 font-serif text-sm font-medium">
          JAA
        </Link>
      </li>
      {groups.map((group) => (
        <li key={group.slug}>
          <DropdownGroup group={group} locale={locale} />
        </li>
      ))}
    </ul>
  );
}
