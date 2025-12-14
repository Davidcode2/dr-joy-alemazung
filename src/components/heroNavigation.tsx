export default function HeroNavigation() {
  return (
    <div className="bg-[var(--ultralight-accent)] xl:grid xl:grid-cols-3 p-10 lg:p-20 2xl:p-28 xl:grid-rows-[auto_1fr_auto] gap-x-20">
      <div className="contents !p-10 lg:!p-20 2xl:!p-28">
        <h2 className="mb-4 xl:row-start-1 xl:col-start-1 text-2xl">
          Bürgermeisterliches
        </h2>
        <p className="xl:row-start-2 xl:col-start-1">
          Dr. Joy A. Alemazung über seine Arbeit und die Schwerpunkte als
          Bürgermeister von Heubach. Erfahren Sie mehr über aktuelle Projekte
          und Initiativen.
        </p>
        <a
          href="/buergermeisterliches"
          className="xl:row-start-3 xl:col-start-1"
        >
          <button className="flex gap-x-4 !my-10 px-8 py-2 border bg-[var(--ghost-accent-color)]  hover:bg-[var(--ghost-accent-color)]/80 transition">
            Mehr
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </a>
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
        <a
          href="/wissenschaft-und-publikationen"
          className="xl:row-start-3 xl:col-start-2"
        >
          <button className="flex gap-x-4 my-10 px-8 py-2 border bg-[var(--ghost-accent-color)]  hover:bg-[var(--ghost-accent-color)]/80 transition">
            Mehr
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </a>
      </div>
      <div className="contents !p-10 lg:!p-20 2xl:!p-28">
        <h2 className="mb-4 text-2xl xl:row-start-1 xl:col-start-3">
          Medien und Vorträge
        </h2>
        <p className="xl:row-start-2 xl:col-start-3">
          Ein Überblick über Dr. Joy A. Alemazungs Auftritte als Experte in
          Vorträgen, Panels und Medien. Entdecken Sie hier Presseberichte,
          TV-Interviews und Möglichkeiten für eine Buchungsanfrage.
        </p>
        <a
          href="/vortraege-und-medien"
          className="xl:row-start-3 xl:col-start-3"
        >
          <button className="flex gap-x-4 !my-10 px-8 py-2 border bg-[var(--ghost-accent-color)]  hover:bg-[var(--ghost-accent-color)]/80 transition">
            Mehr
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
