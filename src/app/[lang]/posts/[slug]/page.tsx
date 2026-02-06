import { fetchAPI } from "../../utils/fetch-api";
import BackButton from "@/src/components/shared/backButton";
import StrapiRichText from "@/src/components/post/strapiRichText";
import { normalizeLocale } from "../../utils/locale-helpers";
import ImageComponent from "@/src/components/post/imageComponent";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "de-DE" ? "de-DE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

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
      <div className="pb-8 grid gap-y-3">
        <h2 className="text-4xl md:text-5xl font-serif">{post.heading}</h2>
        <time
          dateTime={post.published_date}
          className="text-sm text-[var(--muted-accent)] tracking-wide uppercase"
        >
          {formatDate(post.published_date, locale)}
        </time>
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
