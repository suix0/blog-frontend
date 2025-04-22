const PostCard = ({ post }) => {
  return (
    <div className="bg-frutiger p-frutiger shadow-frutiger w-full rounded-4xl">
      <p>{post.title}</p>
      <p>{post.content}</p>
      <div>
        <p>{post.likes}</p>
      </div>
    </div>
  );
};

export default PostCard;
