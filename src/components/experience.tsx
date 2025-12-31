import ChevronIconSvg from "./chevronIconSvg";

export default function Experience() {
  return (
    <div className="bg-(--megalight-accent)">
      <section className="mx-4 md:mx-auto md:w-2/3 max-sm:pt-10 max-sm:pb-32 py-32 lg:py-42">
        <h2 className="text-center py-0 mt-0 max-sm:pt-20 pb-40 md:pb-48 text-5xl lg:text-4xl text-foreground font-serif">
          Kommunale und internationale Erfahrungen
        </h2>
        <div className="mx-auto xl:grid-cols-3 bg-(--ultralight-accent) rounded-lg grid md:gap-y-32 gap-x-20 ">
          <div className="relative p-10 xl:py-20">
            <div className="absolute top-13 md:top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-26 md:w-40 md:h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
              <ChevronIconSvg />
            </div>
            <div className="relative z-10 pr-6 xl:pr-0">
              <h4 className="md:text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
                Entwicklungspolitik
              </h4>
              <div className="text-lg leading-relaxed">
                Mehrjährige Erfahrung in kommunaler Entwicklungspolitik,
                Umsetzung der Agenda 2030 in den Kommunen
              </div>
            </div>
          </div>

          <div className="relative p-10 xl:py-20 ">
            <div className="absolute top-13 md:top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-26 md:w-40 md:h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
              <ChevronIconSvg />
            </div>
            <div className="relative z-10 pr-6 xl:pr-0">
              <h4 className="md:text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
                Deutsch-Griechischer Austausch
              </h4>
              <div className="text-lg leading-relaxed">
                Zuständig für kommunale Entwicklung und Zusammenarbeit zwischen
                deutschen und griechischen Kommunen
              </div>
            </div>
          </div>

          <div className="relative p-10 xl:py-20">
            <div className="absolute top-13 md:top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-26 md:w-40 md:h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
              <ChevronIconSvg />
            </div>
            <div className="relative z-10 pr-6 xl:pr-0">
              <h4 className="md:text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
                Friedenspolitik
              </h4>
              <div className="text-lg leading-relaxed">
                Senior Berater und Referent für Frieden und Sicherheitspolitik
                am Global Governance Institute Brüssel, Belgien
                (www.globalgovernance.eu)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
