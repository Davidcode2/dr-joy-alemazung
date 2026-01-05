import PostPreviewCard from "./postPreviewCard";

type PropTypes = {
  posts: any;
  locale: string;
};

export default function PostGrid({ posts, locale }: PropTypes) {
  const postsOverview = () => {
    if (posts && posts.length > 0) {
      return posts.map((post: any) => {
        return <PostPreviewCard key={post.id} post={post} locale={locale} />;
      });
    }
  };
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {postsOverview()}
    </div>
  );
}
