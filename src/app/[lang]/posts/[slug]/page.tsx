import { fetchAPI } from "../../utils/fetch-api";
import BackButton from "@/src/components/shared/backButton";
import StrapiRichText from "@/src/components/post/strapiRichText";
import { normalizeLocale } from "../../utils/locale-helpers";
import ImageComponent from "@/src/components/post/imageComponent";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function Post({ params }: PropTypes) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);
  const urlParamsObject = {
    filters: { slug },
    populate: {
      content: { populate: "*" },
    },
  };
  const response = await fetchAPI(`/posts`, urlParamsObject, {}, locale);
  const post = response?.data?.[0];

  return (
    <div className="mx-8 sm:max-w-xl md:mx-auto my-12 lg:max-w-4xl ">
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
          return <ImageComponent image={block.image} key={index} />;
        }
      })}
    </div>
  );
}
