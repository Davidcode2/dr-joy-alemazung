import { Home } from "lucide-react";
import Link from "next/link";

type MenuItemsProps = {
  mobile?: boolean;
  close?: () => void;
  locale: string;
};

export default function MenuItems({ mobile, close, locale }: MenuItemsProps) {
  return (
      <ul
        className={`flex ${mobile && "flex-col gap-y-10 justify-center text-center h-full items-center text-3xl"} gap-x-4`}
      >
        <li>
          <Link href={`/${locale}`} className="mr-4 flex" onClick={close}>
            <Home strokeWidth={1.2} />
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/buergermeisterliches`} className="mr-4" onClick={close}>
            Bürgermeisteramt
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/wissenschaft-und-publikationen`}
            className="mr-4"
            onClick={close}
          >
            Wissenschaft und Publikationen
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/vortraege-und-medien`} className="mr-4" onClick={close}>
            Vorträge und Medien
          </Link>
        </li>
      </ul>
  );
}
