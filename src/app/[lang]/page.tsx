import { fetchAPI } from "./utils/fetch-api";
import { getStrapiMedia } from "./utils/api-helpers";
import { normalizeLocale } from "./utils/locale-helpers";
import HeroImage from "@/src/components/heroImage";
import HeroNavigation from "@/src/components/heroNavigation";
import DescriptionText from "@/src/components/descriptionText";
import Quote from "@/src/components/quote";
import FamilyVita from "@/src/components/familyVita";
import Experience from "@/src/components/experience";
import VerticalDividerBracket from "@/src/components/verticalDividerBracket";

export async function generateStaticParams() {
  // Fetch all slugs from Strapi
  const pages = await fetchAPI("/pages", { fields: ["slug"] });
  console.log("Fetched pages for static params:", pages);
  if (pages.error) {
    throw new Error(`Failed to fetch pages: ${pages.error.message}`);
  }
  if (!pages.data || pages.data.length === 0) {
    return [];
  }
  return pages.data.map((page: any) => ({
    slug: page.slug,
  }));
}

type PropTypes = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PropTypes) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  
  const getData = async () => {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    const path = `/homepage`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        headerImage: { fields: ["url"] },
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject, {}, locale);
    return responseData.data;
  };

  const data = await getData();

  const imageUrl = getStrapiMedia(data.headerImage.url)!;

  return (
      <div>
        <HeroImage url={imageUrl}>
          <div className="h-full flex flex-col justify-center md:justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-20 lg:pb-24">
            <div className="max-w-2xl space-y-4 md:space-y-6 xl:pl-18">
              <h1 className="text-4xl md:text-5xl xl:text-7xl font-semibold font-serif text-white leading-tight">
                {data.heading}
              </h1>
              <h2 className="text-base md:text-xl xl:text-2xl font-semibold font-sans text-white leading-relaxed md:w-3/4">
                {data.subHeading}
              </h2>
            </div>
          </div>
        </HeroImage>
      <HeroNavigation locale={lang} />
      <DescriptionText />
      <VerticalDividerBracket color={"--background"} />
      <Quote />
      <VerticalDividerBracket />
      <Experience />
      <VerticalDividerBracket color={"--background"} />
      <FamilyVita />
    </div>
  );
}
