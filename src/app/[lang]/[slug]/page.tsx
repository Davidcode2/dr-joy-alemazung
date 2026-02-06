import { fetchAPI } from "../utils/fetch-api";
import { getStrapiMedia } from "../utils/api-helpers";
import { normalizeLocale } from "../utils/locale-helpers";
import SmallHeroImage from "@/src/components/homepage/shortHeroImage";
import PostGrid from "@/src/components/posts/postGrid";
import StrapiRichText from "@/src/components/post/strapiRichText";
import SocialLinksSection from "@/src/components/shared/socialLinksSection";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function SubPage({ params }: PropTypes) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);

  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      heroImage: { fields: ["url"] },
      posts: { populate: "*" },
    },
  };

  // Try fetching with locale first, fallback to without locale
  let response = await fetchAPI(path, urlParamsObject, {}, locale);
  let page = response?.data?.[0];

  if (!page) {
    // Fallback: try without locale (default locale content)
    response = await fetchAPI(path, urlParamsObject);
    page = response?.data?.[0];
  }

  if (!page) {
    return <div className="p-10">Not found</div>;
  }

  const heroImageUrl = page.heroImage?.url
    ? getStrapiMedia(page.heroImage.url)
    : null;
  const content = page.content ?? [];
  const posts = page.posts ?? [];

  // Fetch social links if enabled for this page
  let socialLinksData = null;
  if (page.showSocialLinks) {
    const socialLinksResponse = await fetchAPI(
      "/social-links",
      { populate: { links: { populate: "*" } } },
      {},
      locale
    );
    socialLinksData = socialLinksResponse?.data;
  }

  return (
    <div>
      {heroImageUrl && <SmallHeroImage url={heroImageUrl} />}
      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-4xl md:text-7xl font-semibold font-serif">
          {page.heading}
        </h1>
        {page.subHeading && (
          <h2 className="text-3xl font-serif italic text-[var(--muted-accent)] mt-6">{page.subHeading}</h2>
        )}
        {content.length > 0 && (
          <section className="pt-8 pb-10">
            {content.map((block: any, index: number) => {
              if (block.__component === "text.rich-text-block" && block.body) {
                return <StrapiRichText content={block.body} key={index} />;
              }
              if (block.children) {
                return <StrapiRichText content={[block]} key={index} />;
              }
              return null;
            })}
          </section>
        )}
        {posts.length > 0 && <PostGrid posts={posts} locale={locale} />}
      </div>
      {socialLinksData && <SocialLinksSection data={socialLinksData} />}
    </div>
  );
}
