import { fetchAPI } from "./utils/fetch-api";
import { getStrapiMedia } from "./utils/api-helpers";
import { normalizeLocale } from "./utils/locale-helpers";
import HeroImage from "@/src/components/homepage/heroImage";
import HeroNavigation from "@/src/components/homepage/heroNavigation";
import DescriptionText from "@/src/components/homepage/description/descriptionText";
import Quote from "@/src/components/homepage/quote/quote";
import FamilyVita from "@/src/components/homepage/familyVita/familyVita";
import Experience from "@/src/components/homepage/experience/experience";
import VerticalDividerBracket from "@/src/components/shared/verticalDividerBracket";

export async function generateStaticParams() {
  // Fetch all slugs from Strapi
  const pages = await fetchAPI("/pages", { fields: ["slug"] });
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
      console.error("Error fetching homepage data:", error);
      throw error; // Re-throw to handle at page level
    }
  };

  const fetchData = async () => {
    const path = `/homepage`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      populate: {
        headerImage: { fields: ["url"] },
        navigationElements: { populate: "*" },
        quote: { populate: "*" },
        experienceSection: {
          populate: {
            experienceCards: { populate: "*" },
          },
        },
        familyVita: {
          populate: {
            vitaItems: { populate: "*" },
            image: { fields: ["url", "alternativeText", "width", "height"] },
          },
        },
      },
      fields: ["heading", "subHeading", "content"],
    };
    const responseData = await fetchAPI(path, urlParamsObject, {}, locale);
    return responseData.data;
  };

  const data = await getData();

  // Add safety checks
  if (!data || !data.headerImage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Error loading homepage content. Please try again later.
        </p>
      </div>
    );
  }

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
        <HeroNavigation
          locale={lang}
          navigationElements={data.navigationElements}
        />
      <DescriptionText content={data.content} />
      <VerticalDividerBracket color={"--background"} />
      <Quote data={data.quote} />
      <VerticalDividerBracket />
      <Experience data={data.experienceSection} />
      <VerticalDividerBracket color={"--megalight-accent"}/>
      <FamilyVita data={data.familyVita} />
    </div>
  );
}

