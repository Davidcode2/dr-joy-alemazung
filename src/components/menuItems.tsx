import Link from "next/link";
import { fetchAPI } from "../app/[lang]/utils/fetch-api";

type MenuItemsProps = {
  mobile?: boolean;
  close?: () => void;
  locale: string;
};

type PageHeader = {
  id: number;
  documentId: string;
  heading: string;
  slug: string;
};

export default async function MenuItems({
  mobile,
  close,
  locale,
}: MenuItemsProps) {
  const pageHeaders = await fetchAPI("/pages", { fields: ["heading", "slug"] });
  if (!pageHeaders.data) {
    return <div className="p-10">No page headers found</div>;
  }
  return (
    <ul
      className={`flex ${mobile && "flex-col gap-y-10 justify-center text-center h-full items-center text-3xl"} gap-x-4`}
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
      {pageHeaders.data.map((page: PageHeader) => (
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
