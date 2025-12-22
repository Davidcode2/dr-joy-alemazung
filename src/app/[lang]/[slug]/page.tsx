import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import SmallHeroImage from "@/src/components/shortHeroImage";
import PostGrid from "@/src/components/postGrid";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function SubPage({ params }: PropTypes) {
  const { lang, slug } = await params;
  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug: slug },
    populate: {
      heroImage: { fields: ["url"] },
      posts: { populate: "*" },
    },
  };
  const response = await fetchAPI(path, urlParamsObject);
  const page = response?.data?.[0];

  if (!page?.content?.[0]?.children) {
    return <div className="p-10">Not found</div>;
  }
  const data = response.data[0];

  const imageUrl = getStrapiMedia(data.heroImage.url)!;
  return (
    <div>
      <SmallHeroImage url={imageUrl} />
      <div className="p-10">
        <h1 className="text-7xl font-semibold font-serif">{data.heading}</h1>
        <h2 className="text-3xl font-semibold">{data.subHeading}</h2>
        <section className="py-10">
          <p className="max-w-4xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {data.content[0].children[0].text}
          </p>
        </section>
        <PostGrid posts={data.posts} />
      </div>
    </div>
  );
}
