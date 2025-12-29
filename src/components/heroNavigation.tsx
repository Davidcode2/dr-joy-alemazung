import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

type HeroNavigationProps = {
  locale: string;
};

export default function HeroNavigation({ locale }: HeroNavigationProps) {
  return (
    <div className="rounded-lg relative shadow-lg dark:shadow-gray-950 bottom-10 mx-4 lg:mx-20 bg-(--ultralight-accent) xl:grid xl:grid-cols-3 p-10 lg:p-20 2xl:p-28 xl:grid-rows-[auto_1fr_auto] gap-x-20">
      <div className="contents p-10 lg:p-20 2xl:p-28">
        <h2 className="mb-4 xl:row-start-1 xl:col-start-1 text-2xl">
          Bürgermeisteramt
        </h2>
        <p className="xl:row-start-2 xl:col-start-1">
          Dr. Joy A. Alemazung über seine Arbeit und die Schwerpunkte als
          Bürgermeister von Heubach. Erfahren Sie mehr über aktuelle Projekte
          und Initiativen.
        </p>
        <Link
          href={`/${locale}/buergermeisterliches`}
          className="xl:row-start-3 xl:col-start-1"
        >
          <button className="group flex gap-x-4 mt-10 max-xl:my-10 px-8 py-2 border hover:bg-(--light-accent)/20 transition">
            Mehr
            <MoveRightIcon strokeWidth={1} className="group-hover:translate-x-1.5 transition" />
          </button>
        </Link>
      </div>
      <div className="contents p-10 lg:p-20 2xl:p-28">
        <h2 className="mb-4 text-2xl xl:row-start-1 xl:col-start-2">
          Wissenschaft und Publikationen
        </h2>
        <p className="xl:row-start-2 xl:col-start-2">
          Die wissenschaftliche Arbeit von Dr. Joy A. Alemazung – von Büchern
          und Fachartikeln bis hin zu Interviews. Einblicke in seine Forschung
          zu Nachhaltigkeit, Migration und internationaler Politik.
        </p>
        <Link
          href={`/${locale}/wissenschaft-und-publikationen`}
          className="xl:row-start-3 xl:col-start-2"
        >
          <button className="group flex gap-x-4 mt-10 max-xl:my-10 px-8 py-2 border hover:bg-(--light-accent)/20 transition">
            Mehr
            <MoveRightIcon strokeWidth={1} className="group-hover:translate-x-1.5 transition" />
          </button>
        </Link>
      </div>
      <div className="contents p-10 lg:p-20 2xl:p-28">
        <h2 className="mb-4 text-2xl xl:row-start-1 xl:col-start-3">
          Medien und Vorträge
        </h2>
        <p className="xl:row-start-2 xl:col-start-3">
          Ein Überblick über Dr. Joy A. Alemazungs Auftritte als Experte in
          Vorträgen, Panels und Medien. Entdecken Sie hier Presseberichte,
          TV-Interviews und Möglichkeiten für eine Buchungsanfrage.
        </p>
        <Link
          href={`/${locale}/vortraege-und-medien`}
          className="xl:row-start-3 xl:col-start-3"
        >
          <button className="group flex gap-x-4 mt-10 max-xl:my-10 px-8 py-2 border hover:bg-(--light-accent)/20 transition">
            Mehr
            <MoveRightIcon strokeWidth={1} className="group-hover:translate-x-1.5 transition" />
          </button>
        </Link>
      </div>
    </div>
  );
}
