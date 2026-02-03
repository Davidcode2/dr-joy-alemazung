"use client";

import Link from "next/link";

type PageHeader = {
  id: number;
  documentId: string;
  heading: string;
  slug: string;
};

type MenuItemsListProps = {
  mobile?: boolean;
  close?: () => void;
  locale: string;
  pageHeaders: PageHeader[];
};

export default function MenuItemsList({
  mobile,
  close,
  locale,
  pageHeaders,
}: MenuItemsListProps) {
  return (
    <ul
      className={`flex ${mobile && "flex-col gap-y-6 justify-center h-full items-start text-xl px-6"} gap-x-4`}
    >
      <li>
        <Link
          href={`/${locale}`}
          className="mr-4 flex font-serif"
          onClick={close}
        >
          JAA
        </Link>
      </li>
      {pageHeaders.map((page) => (
        <li key={page.id}>
          <Link
            href={`/${locale}/${page.slug}`}
            className="mr-4"
            onClick={close}
          >
            {page.heading}
          </Link>
        </li>
      ))}
    </ul>
  );
}
