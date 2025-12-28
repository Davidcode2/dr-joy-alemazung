import { fetchAPI } from "../../utils/fetch-api";
import BackButton from "@/src/components/backButton";
import StrapiRichText from "@/src/components/strapiRichText";
import { normalizeLocale } from "../../utils/locale-helpers";

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
  
  // Extract the rich text content from the body
  const richTextContent = post.content[0]?.body || [];
  return (
    <div className="m-8">
      <BackButton />
      <div className="pb-6 grid gap-y-2">
        <h2 className="text-5xl font-serif">{post.heading}</h2>
        <div>{new Date(post.published_date).toLocaleDateString()}</div>
      </div>
        <StrapiRichText content={richTextContent} />
    </div>
  );
}
