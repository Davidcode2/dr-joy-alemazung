import Image from "next/image";

export default function DescriptionText() {
  return (
    <div className="pb-40 lg:pt-40">
      <div className="flex flex-col xl:grid xl:grid-cols-[60%_40%] lg:gap-x-10 mx-10 lg:mx-90">
        <div className="order-2 xl:order-1 z-30">
          <section className="">
            <p className="z-30 lg:text-2xl leading-12">
              Dr. Joy A. Alemazung verkörpert die Brücke zwischen lokaler
              Verantwortung und globaler Perspektive. Geboren in Kamerun und
              heute Bürgermeister der Stadt Heubach, verbindet er seine
              wissenschaftliche Expertise als Sozialwissenschaftler mit
              praktischer politischer Arbeit. Sein Engagement geht dabei weit
              über das Rathaus hinaus: Als Mitglied der CDU und Experte für
              Nachhaltigkeit, Migration und internationale Politik bringt er
              seine Erkenntnisse in zahlreiche öffentliche Debatten und Gremien
              ein. Ob als HeForShe-Botschafter der UN Women, Mitglied des
              Kreistags oder durch seine Arbeit an Projekten zur nachhaltigen
              Entwicklung – Dr. Alemazung ist überzeugt, dass globale
              Herausforderungen nur durch ein starkes, gemeinschaftliches
              Handeln auf lokaler Ebene gemeistert werden können. Seine
              Biografie ist ein eindrucksvolles Beispiel dafür, wie Empathie,
              interkulturelles Verständnis und ein unermüdlicher Einsatz für das
              Gemeinwohl das Leben von Menschen nachhaltig positiv beeinflussen
              können.
            </p>
          </section>
        </div>
        <div className="pb-20 xl:pb-0 order-1 xl:order-2 z-10 opacity-20 font-extrabold text-5xl md:text-7xl lg:text-7xl text-[var(--accent)]">
          <div className="xl:rotate-90">
            Lokale Verantwortung mit globaler Perspektive
          </div>
        </div>
      </div>

      <div className="pt-60 flex justify-center gap-x-20">
        <Image
          width={20}
          height={20}
          src="/images/cdu_logo.svg"
          alt="CDU Logo"
          className="w-40 lg:w-80"
        />
        <Image
          width={20}
          height={20}
          src="/images/he_for_she_logo.svg"
          alt="He for She Logo"
          className="w-40 lg:w-80"
        />
      </div>
    </div>
  );
}
