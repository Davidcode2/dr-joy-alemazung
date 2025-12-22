type PropTypes = {
  post: any;
};

export default function Post({ post }: PropTypes) {
  return (
    <div className="p-10 shadow dark:shadow-stone-900">
      <div className="pb-6 grid gap-y-2">
        <h2 className="text-2xl font-serif">{post.heading}</h2>
        <div>{new Date(post.published_date).toLocaleDateString()}</div>
      </div>
      <p>{post.content[0].body[0].children[0].text}</p>
    </div>
  );
}

