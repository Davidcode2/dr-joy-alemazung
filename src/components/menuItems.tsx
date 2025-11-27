import Link from "next/link";
export default function MenuItems({ mobile }: { mobile?: boolean }) {
  return (
    <ul className={`flex ${mobile && "flex-col gap-y-10 justify-center h-full items-center text-3xl"}`}>
      <li>
        <Link href="/" className="mr-4">
          Home
        </Link>
      </li>
      <li>
        <Link href="/buergermeisterliches" className="mr-4">
          Bürgermeisterliches
        </Link>
      </li>
      <li>
        <Link href="/votraege-und-medien" className="mr-4">
          Vorträge und Medien
        </Link>
      </li>
    </ul>
  );
}
