import { fetchAPI } from "../../utils/fetch-api";
import Image from "next/image";
import BackButton from "@/src/components/backButton";
import StrapiRichText from "@/src/components/strapiRichText";
import { normalizeLocale } from "../../utils/locale-helpers";
import { getStrapiMedia } from "../../utils/api-helpers";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function Post({ params }: PropTypes) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);

  console.log(slug);
  const urlParamsObject = {
    filters: { slug },
    populate: {
      content: { populate: "*" },
    },
  };
  const response = await fetchAPI(`/posts`, urlParamsObject, {}, locale);
  const post = response?.data?.[0];
  console.log(post);

  return (
    <div className="m-8">
      <BackButton />
      <div className="pb-6 grid gap-y-2">
        <h2 className="text-5xl font-serif">{post.heading}</h2>
        <div>{new Date(post.published_date).toLocaleDateString()}</div>
      </div>
      {post.content.map((block: any, index: number) => {
        if (block.__component === "text.rich-text-block") {
          return <StrapiRichText content={block.body} key={index} />;
        }
        if (block.__component === "image.image-block") {
          return (
            <div className="my-6" key={index}>
              <Image
                src={getStrapiMedia(block.image.url)!}
                alt={block.image.altText || block.image.caption || ""}
                width={600}
                height={400}
                className="rounded-lg"
              />
              {block.image?.caption && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {block.image.caption}
                </p>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
