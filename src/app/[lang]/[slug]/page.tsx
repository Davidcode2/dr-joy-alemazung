import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import { normalizeLocale } from "../utils/locale-helpers";
import SmallHeroImage from "@/src/components/homepage/shortHeroImage";
import PostGrid from "@/src/components/posts/postGrid";
import StrapiRichText from "@/src/components/post/strapiRichText";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function SubPage({ params }: PropTypes) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);

  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug: slug },
    populate: {
      heroImage: { fields: ["url"] },
      content: { populate: "*" },
      posts: { populate: "*" },
    },
  };
  const response = await fetchAPI(path, urlParamsObject, {}, locale);
  const page = response?.data?.[0];

  if (!page) {
    return <div className="p-10">Not found</div>;
  }

  const heroImageUrl = page.heroImage?.url
    ? getStrapiMedia(page.heroImage.url)
    : null;
  const content = page.content ?? [];
  const posts = page.posts ?? [];

  return (
    <div>
      {heroImageUrl && <SmallHeroImage url={heroImageUrl} />}
      <div className="p-10">
        <h1 className="text-4xl md:text-7xl font-semibold font-serif">
          {page.heading}
        </h1>
        {page.subHeading && (
          <h2 className="text-3xl font-semibold">{page.subHeading}</h2>
        )}
        {content.length > 0 && (
          <section className="py-10">
            {content.map((block: any, index: number) => {
              if (block.body) {
                return <StrapiRichText content={block.body} key={index} />;
              }
              return null;
            })}
          </section>
        )}
        {posts.length > 0 && <PostGrid posts={posts} locale={locale} />}
      </div>
    </div>
  );
}
