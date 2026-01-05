import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

type NavigationElement = {
  id: number;
  header: string;
  description: string;
};

type HeroNavigationProps = {
  locale: string;
  navigationElements: NavigationElement[];
};

export default function HeroNavigation({
  locale,
  navigationElements,
}: HeroNavigationProps) {
  // Ensure we have exactly 3 elements
  const elements = navigationElements?.slice(0, 3) || [];
  
  // Links corresponding to each navigation element
  const links = [
    `/${locale}/buergermeisterliches`,
    `/${locale}/wissenschaft-und-publikationen`,
    `/${locale}/vortraege-und-medien`,
  ];

  return (
    <div className="rounded-lg relative shadow-lg dark:shadow-gray-950 bottom-10 mx-4 lg:mx-20 bg-(--ultralight-accent) xl:grid xl:grid-cols-3 p-10 lg:p-20 2xl:p-28 xl:grid-rows-[auto_1fr_auto] gap-x-20">
      {elements.map((element, index) => (
        <div key={element.id} className="contents p-10 lg:p-20 2xl:p-28">
          <h2 className={`mb-4 text-2xl xl:row-start-1 xl:col-start-${index + 1}`}>
            {element.header}
          </h2>
          <p className={`xl:row-start-2 xl:col-start-${index + 1}`}>
            {element.description}
          </p>
          <Link
            href={links[index]}
            className={`xl:row-start-3 xl:col-start-${index + 1}`}
          >
            <button className="group flex gap-x-4 mt-10 max-xl:my-10 px-8 py-2 border hover:bg-(--light-accent)/20 transition">
            { locale === "en" ? "More" : "Mehr" }
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
