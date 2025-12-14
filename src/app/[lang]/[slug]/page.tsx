import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import SmallHeroImage from "@/src/components/shortHeroImage";

type PropTypes = {
  params: Promise<{ path: string}>;
}
export default async function SubPage({ params }: PropTypes) {
  const resolvedParams = await params;

  const fetchData = async () => {
    try {
      const path = `/${resolvedParams.path}`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          headerImage: { fields: ["url"] },
        },
      };
      const responseData = await fetchAPI(path, urlParamsObject);
      return responseData.data;
    } catch (error) {
      console.error(error);
    }
  };

  const data = await fetchData();

  const imageUrl = getStrapiMedia(data.headerImage.url)!;
  return (
    <div>
      <SmallHeroImage url={imageUrl}></SmallHeroImage>
      <div className="p-10">
        <h1 className="text-7xl font-semibold font-serif">{data.heading}</h1>
        <h2 className="text-3xl font-semibold">{data.subHeading}</h2>
      </div>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"></p>
    </div>
  );
}
