import Image from "next/image";
import ChevronIconSvg from "./chevronIconSvg";

export default function Experience() {
  return (
    <section className="2xl:px-40 px-5 md:px-20 max-sm:pt-10 max-sm:pb-32 py-32 lg:py-42">
      <h2 className="py-0 mt-0 pb-40 md:pb-48 text-5xl lg:text-4xl text-foreground) font-serif">
        Kommunale und internationale Erfahrungen
      </h2>
      <div className="grid xl:grid-cols-3 gap-y-32 md:gap-y-60 gap-x-20 2xl:gap-x-40">
        <div className="relative shadow-lg p-10 xl:py-20 border border-(--accent)/20">
          <div className="absolute top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-40 h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
            <ChevronIconSvg />
          </div>
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
              Entwicklungspolitik
            </h4>
            <div className="text-lg leading-relaxed">
              Mehrjährige Erfahrung in kommunaler Entwicklungspolitik, Umsetzung
              der Agenda 2030 in den Kommunen
            </div>
          </div>
        </div>

        <div className="relative shadow-lg p-10 xl:py-20 border border-(--accent)/20">
          <div className="absolute top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-40 h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
            <ChevronIconSvg />
          </div>
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
              Deutsch-Griechischer Austausch
            </h4>
            <div className="text-lg leading-relaxed">
              Zuständig für kommunale Entwicklung und Zusammenarbeit zwischen
              deutschen und griechischen Kommunen
            </div>
          </div>
        </div>

        <div className="relative shadow-lg p-10 xl:py-20 border border-(--accent)/20">
          <div className="absolute top-0 max-md:right-0 max-md:rotate-180 md:left-0 w-40 h-40 pointer-events-none -translate-y-1/2 max-md:translate-x-1/10 -translate-x-1/2 ">
            <ChevronIconSvg />
          </div>
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-(--muted-accent) uppercase">
              Friedenspolitik
            </h4>
            <div className="text-lg leading-relaxed">
              Senior Berater und Referent für Frieden und Sicherheitspolitik am
              Global Governance Institute Brüssel, Belgien
              (www.globalgovernance.eu)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
