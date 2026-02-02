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
  id: number;
  label: string;
  slug: string;
  order: number;
  pages: PageHeader[];
};

function DropdownGroup({
  group,
  locale,
}: {
  group: NavGroup;
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
          {group.pages.map((page) => (
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
  navGroups: NavGroup[];
  pageHeaders: PageHeader[];
};

export default function DesktopNav({ locale, navGroups, pageHeaders }: DesktopNavProps) {
  // If nav groups are available from CMS, use them
  if (navGroups.length > 0) {
    const sorted = [...navGroups].sort((a, b) => a.order - b.order);
    return (
      <ul className="flex items-center gap-x-1">
        <li>
          <Link href={`/${locale}`} className="px-3 py-2 font-serif text-sm font-medium">
            JAA
          </Link>
        </li>
        {sorted.map((group) => (
          <li key={group.id}>
            <DropdownGroup group={group} locale={locale} />
          </li>
        ))}
      </ul>
    );
  }

  // Fallback: flat list of all pages (if no groups configured yet)
  return (
    <ul className="flex items-center gap-x-4">
      <li>
        <Link href={`/${locale}`} className="mr-4 font-serif">
          JAA
        </Link>
      </li>
      {pageHeaders.map((page) => (
        <li key={page.id}>
          <Link href={`/${locale}/${page.slug}`} className="mr-4 text-sm">
            {page.heading}
          </Link>
        </li>
      ))}
    </ul>
  );
}
