import { useContext } from "react";
import { PostContext } from "../pages/Home";
import parse from "html-react-parser";

const PostCard = ({ post }) => {
  const { setPostId } = useContext(PostContext);
  return (
    <div className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger h-[150px] w-full overflow-hidden mb-4">
      <div
        className="flex flex-col hover:underline cursor-pointer"
        onClick={() => setPostId(post.id)}
      >
        <p className="font-bold text-xl">{post.title}</p>
        <p className="text-xs">
          blog by: <span className="font-bold">{post.User.username}</span>
        </p>
        <p className="text-neutral-600 text-xs">{post.createdAt}</p>
        {parse(post.content)}
      </div>
    </div>
  );
};

export default PostCard;
