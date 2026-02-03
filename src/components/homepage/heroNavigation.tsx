import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

type Page = {
  id: number;
  heading: string;
  slug: string;
};

type NavigationGroup = {
  id: number;
  label: string;
  slug: string;
  pages: Page[];
};

type HeroNavigationProps = {
  locale: string;
  navigationGroups: NavigationGroup[];
};

export default function HeroNavigation({
  locale,
  navigationGroups,
}: HeroNavigationProps) {
  const groups = navigationGroups?.slice(0, 3) || [];

  return (
    <div className="rounded-lg relative shadow-lg dark:shadow-gray-950 bottom-10 mx-4 lg:mx-20 bg-(--ultralight-accent) xl:grid xl:grid-cols-3 p-10 lg:p-20 2xl:p-28 xl:grid-rows-[auto_1fr_auto] gap-x-20">
      {groups.map((group, index) => (
        <div key={group.id} className="contents">
          <h2
            className={`mb-4 text-2xl xl:row-start-1 xl:col-start-${index + 1}`}
          >
            {group.label}
          </h2>
          <ul
            className={`xl:row-start-2 xl:col-start-${index + 1} flex flex-col gap-y-2`}
          >
            {group.pages.map((page) => (
              <li key={page.id}>
                <Link
                  href={`/${locale}/${page.slug}`}
                  className="text-(--muted-accent) hover:text-foreground transition-colors underline decoration-(--light-accent) underline-offset-4 hover:decoration-foreground"
                >
                  {page.heading}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/${group.pages[0]?.slug || group.slug}`}
            className={`xl:row-start-3 xl:col-start-${index + 1}`}
          >
            <button className="group flex gap-x-4 mt-10 max-xl:my-10 px-8 py-2 border hover:bg-(--light-accent)/20 transition">
              {locale === "en" ? "More" : "Mehr"}
              <MoveRightIcon
                strokeWidth={1}
                className="group-hover:translate-x-1.5 transition"
              />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
