import Image from "next/image";
import StrapiRichText from "../../post/strapiRichText";
import { t } from "../../app/[lang]/utils/locale-helpers";

export default function DescriptionText({
  content,
  locale,
}: {
  content: any;
  locale: string;
}) {
  return (
    <>
      <div className="pb-40 lg:pt-28">
        <div className="flex flex-col xl:grid xl:grid-cols-[60%_40%] lg:gap-x-10 mx-10 lg:mx-20 xl:mx-60 2xl:mx-90">
          <div className="order-2 xl:order-1 z-30">
            <section className="z-30 lg:text-2xl ">
              <StrapiRichText
                content={content}
                className="leading-7 lg:leading-12"
              />
            </section>
          </div>
          <div className="py-20 xl:py-0 order-1 xl:order-2 z-10 opacity-20 font-extrabold text-4xl md:text-7xl lg:text-7xl text-(--accent)">
            <div className="font-serif">
              {t("localResponsibilityGlobalPerspective", locale)}
            </div>
          </div>
        </div>

        <div className="pt-32 flex justify-center gap-x-5 md:gap-x-20">
          <Image
            width={20}
            height={20}
            src="/images/cdu_logo.svg"
            alt="CDU Logo"
            className="w-32 lg:w-60"
          />
          <Image
            width={20}
            height={20}
            src="/images/he_for_she_logo.svg"
            alt="He for She Logo"
            className="w-32 lg:w-60"
          />
        </div>
      </div>
    </>
  );
}
