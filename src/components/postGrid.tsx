import Post from "./post";

type PropTypes = {
  posts: any;
};

export default function PostGrid({ posts }: PropTypes) {
  const postsOverview = () => {
    if (posts && posts.length > 0) {
      return posts.map((post: any) => {
        return <Post key={post.id} post={post} />;
      });
    }
  };
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {postsOverview()}
    </div>
  );
}
