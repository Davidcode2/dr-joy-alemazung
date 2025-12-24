import { fetchAPI } from "../../utils/fetch-api";
import BackButton from "@/src/components/backButton";

type PropTypes = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function Post({ params }: PropTypes) {
  const { lang, slug } = await params;
  console.log(slug);
  const urlParamsObject = {
    filters: { slug },
    populate: {
      content: { populate: "*" },
    },
  };
  const response = await fetchAPI(`/posts`, urlParamsObject);
  const post = response?.data?.[0];
  const postContent = post.content[0].body[0].children[0].text;
  return (
    <div className="m-8">
      <BackButton />
      <div className="pb-6 grid gap-y-2">
        <h2 className="text-5xl font-serif">{post.heading}</h2>
        <div>{new Date(post.published_date).toLocaleDateString()}</div>
      </div>
      <p>{postContent}</p>
    </div>
  );
}
