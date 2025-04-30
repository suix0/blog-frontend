const PostSection = ({ post }) => {
  return (
    <section className="w-full h-full bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p className="text-xs">
        Date uploaded: <span>{post.createdAt}</span>
      </p>
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
