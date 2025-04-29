import { useContext } from "react";
import { PostContext } from "../pages/Home";

const PostCard = ({ post }) => {
  const { setPostId } = useContext(PostContext);
  return (
    <div className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
      <div
        className="flex flex-col hover:underline cursor-pointer"
        onClick={() => setPostId(post.id)}
      >
        <p className="font-bold text-xl">{post.title}</p>
        <p className="text-xs">
          blog by: <span className="font-bold">{post.User.username}</span>
        </p>
        <p className="text-neutral-600 text-xs">{post.createdAt}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
