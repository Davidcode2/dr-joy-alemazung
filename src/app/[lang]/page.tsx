import { fetchAPI } from "./utils/fetch-api";
import { getStrapiMedia } from "./utils/api-helpers";
import HeroImage from "@/src/components/heroImage";
import HeroNavigation from "@/src/components/heroNavigation";
import DescriptionText from "@/src/components/descriptionText";
import Quote from "@/src/components/quote";
import FamilyVita from "@/src/components/familyVita";
import Experience from "@/src/components/experience";

type PropTypes = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PropTypes) {

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
    const responseData = await fetchAPI(path, urlParamsObject);
    return responseData.data;
  };

  const data = await getData();

  const imageUrl = getStrapiMedia(data.headerImage.url)!;

  return (
    <div>
      <HeroImage url={imageUrl}>
        <h1 className="text-4xl xl:text-7xl font-semibold text-white">
          {data.heading}
        </h1>
        <h2 className="text-xl xl:text-3xl font-semibold text-white">
          {data.subHeading}
        </h2>
      </HeroImage>
      <HeroNavigation />
      <DescriptionText />
      <Quote />
      <Experience />
      <FamilyVita />
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {data.content[0].children[0].text}{" "}
      </p>
    </div>
  );
}
