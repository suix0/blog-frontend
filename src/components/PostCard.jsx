import { useContext } from "react";
import { PostContext } from "../pages/Home";

const PostCard = ({ post }) => {
  const { setPost } = useContext(PostContext);
  return (
    <div className="bg-frutiger p-frutiger shadow-frutiger w-full rounded-frutiger backdrop-blur-frutiger">
      <div
        className="flex flex-col hover:underline cursor-pointer"
        onClick={() => setPost(post.id)}
      >
        <p className="font-bold">{post.title}</p>
        <p>{post.content}</p>
      </div>
      <div className="flex">
        <img src="/like.svg" alt="Like count" className="w-[18px]" />
        <p>{post.likes}</p>
      </div>
    </div>
  );
};

export default PostCard;
