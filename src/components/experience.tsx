import Image from "next/image"

export default function Experience() {
  return (
    <section className="2xl:px-40 px-20 py-90">
      <h2 className="py-20 pt-0 mt-0 pb-40 text-5xl lg:text-6xl text-[var(--foreground)]">Kommunale und internationale Erfahrungen</h2>
      <div className="grid xl:grid-cols-3 gap-y-60 gap-x-20 2xl:gap-x-40">
        <div className="relative shadow-lg p-10 xl:py-20 border rounded-xl border-[var(--accent)]/20">
          <Image
            src="/images/undraw_nature_yf30.svg"
            alt=""
            className="absolute top-0 right-0 w-32 h-32 pointer-events-none -translate-y-1/2 -translate-x-1/5"
            width={256}
            height={256}
          />
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-gray-500 uppercase">Entwicklungspolitik</h4>
            <div className="text-lg leading-relaxed">Mehrjährige Erfahrung in kommunaler Entwicklungspolitik, Umsetzung der Agenda 2030 in den Kommunen</div>
          </div>
        </div>

        <div className="relative shadow-lg p-10 xl:py-20 border rounded-xl border-[var(--accent)]/20">
          <Image
            src="/images/undraw_appreciate-it_aans.svg"
            alt=""
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none -translate-y-1/2 -translate-x-1/8"
            width={256}
            height={256}
          />
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-gray-500 uppercase">Deutsch-Griechischer Austausch</h4>
            <div className="text-lg leading-relaxed">Zuständig für kommunale Entwicklung und Zusammenarbeit zwischen deutschen und griechischen Kommunen</div>
          </div>
        </div>

        <div className="relative shadow-lg p-10 xl:py-20 border rounded-xl border-[var(--accent)]/20">
          <Image
            src="/images/undraw_small-town_76a2.svg"
            alt=""
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none -translate-y-1/2 -translate-x-1/4"
            width={256}
            height={256}
          />
          <div className="relative z-10 pr-6">
            <h4 className="text-lg m-0 p-0 pb-5 text-gray-500 uppercase">Friedenspolitik</h4>
            <div className="text-lg leading-relaxed">Senior Berater und Referent für Frieden und Sicherheitspolitik am Global Governance Institute Brüssel, Belgien (www.globalgovernance.eu)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
