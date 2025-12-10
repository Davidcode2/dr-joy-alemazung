import { Home } from "lucide-react";
import Link from "next/link";
export default function MenuItems({
  mobile,
  close,
}: {
  mobile?: boolean;
  close?: () => void;
}) {
  return (
    <ul
      className={`flex ${mobile && "flex-col gap-y-10 justify-center text-center h-full items-center text-3xl"} gap-x-4`}
    >
      <li>
        <Link href="/" className="mr-4 flex" onClick={close}>
          <Home strokeWidth={1.2} />
        </Link>
      </li>
      <li>
        <Link href="/buergermeisterliches" className="mr-4" onClick={close}>
          Bürgermeisterliches
        </Link>
      </li>
      <li>
        <Link
          href="/wissenschaft-und-publikationen"
          className="mr-4"
          onClick={close}
        >
          Wissenschaft und Publikationen
        </Link>
      </li>
      <li>
        <Link href="/votraege-und-medien" className="mr-4" onClick={close}>
          Vorträge und Medien
        </Link>
      </li>
    </ul>
  );
}
