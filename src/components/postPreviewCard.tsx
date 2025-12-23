import Link from "next/link";
import MoreButton from "./moreButton";

type PropTypes = {
  post: any;
};

export default function PostPreviewCard({ post }: PropTypes) {
  const postContent = post.content[0].body[0].children[0].text;
  const postContentPreview =
    postContent.slice(0, 200) + (postContent.length > 200 ? "..." : "");

  return (
    <div className="p-10 shadow dark:shadow-stone-900">
      <div className="pb-6 grid gap-y-2">
        <h2 className="text-2xl font-serif">{post.heading}</h2>
        <div>{new Date(post.published_date).toLocaleDateString()}</div>
      </div>
      <p>{postContentPreview}</p>
      <Link href={`/posts/${post.slug}`}>
        <MoreButton />
      </Link>
    </div>
  );
}
