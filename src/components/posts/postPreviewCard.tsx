import Link from "next/link";
import MoreButton from "../shared/moreButton";

type PropTypes = {
  post: any;
  locale: string;
};

function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "de-DE" ? "de-DE" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostPreviewCard({ post, locale }: PropTypes) {
  const postContent = post.content[0].body[0].children[0].text;
  const postContentPreview =
    postContent.slice(0, 200) + (postContent.length > 200 ? "..." : "");

  return (
    <div className="p-8 md:p-10 border border-[var(--ultralight-accent)] dark:border-[var(--grey-accent)] rounded-sm">
      <div className="pb-6 grid gap-y-3">
        <h2 className="text-2xl font-serif">{post.heading}</h2>
        <time
          dateTime={post.published_date}
          className="text-sm text-[var(--muted-accent)] tracking-wide uppercase"
        >
          {formatDate(post.published_date, locale)}
        </time>
      </div>
      <p className="text-[var(--foreground)] leading-relaxed">{postContentPreview}</p>
      <Link href={`/${locale}/posts/${post.slug}`}>
        <MoreButton locale={locale} />
      </Link>
    </div>
  );
}
