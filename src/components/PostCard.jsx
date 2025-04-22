import { useContext } from "react";
import { PostContext } from "../pages/Home";

const PostCard = ({ post }) => {
  const { setPostId } = useContext(PostContext);
  return (
    <div className="bg-frutiger p-frutiger shadow-frutiger w-full rounded-frutiger backdrop-blur-frutiger">
      <div
        className="flex flex-col hover:underline cursor-pointer"
        onClick={() => setPostId(post.id)}
      >
        <p className="font-bold text-xl">{post.title}</p>
        <p>{post.content}</p>
      </div>
      <div className="flex gap-1.5">
        <img src="/like.svg" alt="Like count" className="w-[18px]" />
        <p>{post.likes}</p>
      </div>
    </div>
  );
};

export default PostCard;
