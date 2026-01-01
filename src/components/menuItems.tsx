"use client";

import MenuItemsList from "./menuItemsList";

type PageHeader = {
  id: number;
  documentId: string;
  heading: string;
  slug: string;
};

type MenuItemsProps = {
  mobile?: boolean;
  close?: () => void;
  locale: string;
  pageHeaders: PageHeader[];
};

export default function MenuItems({
  mobile,
  close,
  locale,
  pageHeaders,
}: MenuItemsProps) {
  return (
    <MenuItemsList
      mobile={mobile}
      close={close}
      locale={locale}
      pageHeaders={pageHeaders}
    />
  );
}
