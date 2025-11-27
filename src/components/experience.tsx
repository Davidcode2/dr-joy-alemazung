import Image from "next/image"

export default function Experience() {
return (
    <section className="bg-linear-to-br dark:from-gray-950 from-gray-100 via-white dark:via-black dark:to-gray-950 to-gray-50 2xl:px-40 px-20 py-90">
      <h2 className="py-20 pt-0 mt-0 pb-40 text-6xl lg:text-7xl text-[var(--ghost-accent-color)]">Kommunale und internationale Erfahrungen</h2>
      <div className="grid xl:grid-cols-3 gap-y-60 gap-x-20 2xl:gap-x-40">
        <div className="grid grid-cols-2 relative shadow-lg p-10 xl:p-20 border rounded-xl border-[var(--ghost-accent-color)] ">
          <Image
            src="/images/undraw_nature_yf30.svg"
            alt=""
            className="absolute -top-20 -right-10 rounded-xl mb-10 w-50 lg:w-60"
            width={300}
            height={300}
          />
          <div>
            <h4 className="text-xl m-0 p-0 pb-5 text-gray-500 uppercase">Entwicklungspolitik</h4>
            <div className="z-20 2xl:text-3xl leading-12">Mehrjährige Erfahrung in kommunaler Entwicklungspolitik, Umsetzung der Agenda 2030 in den Kommunen</div>
          </div>
        </div>
        <div className="grid grid-cols-2 relative shadow-lg p-10 xl:p-20 border rounded-xl border-[var(--ghost-accent-color)] ">
          <Image
            src="/images/undraw_appreciate-it_aans.svg"
            alt=""
            className="z-10 absolute -top-20 -right-15 rounded-xl mb-10 w-80"
            width={300}
            height={300}
          />
          <h4 className="col-span-2 text-xl m-0 p-0 pb-5 text-gray-500 uppercase">Deutsch-Griechischer Austausch</h4>
          <div className="">
            <div className="2xl:text-3xl leading-12">Zuständig für kommunale Entwicklung und Zusammenarbeit zwischen deutschen und griechischen Kommunen</div>
          </div>
        </div>
        <div className="relative shadow-lg p-10 xl:p-20 border rounded-xl border-[var(--ghost-accent-color)]">
          <Image
            src="/images/undraw_small-town_76a2.svg"
            alt=""
            className="absolute -top-30 right-5 rounded-xl mb-10 w-80"
            width={300}
            height={300}
          />
          <div>
            <h4 className="text-xl m-0 p-0 pb-5 text-gray-500 uppercase">Friedenspolitik</h4>
            <div className="2xl:text-3xl leading-12" >Senior Berater und Referent für Frieden und Sicherheitspolitik am Global Governance Institute Brüssel, Belgien (www.globalgovernance.eu)</div>
          </div>
        </div>
      </div>
    </section>

  )
}
