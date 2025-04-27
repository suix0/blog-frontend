const PostSection = ({ post }) => {
  return (
    <section>
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p className="text-xs">
        Date uploaded: <span>{post.createdAt}</span>
      </p>
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
