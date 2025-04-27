import { useContext } from "react";
import { PostContext } from "../pages/Home";

const PostCard = ({ post }) => {
  const { setPostId } = useContext(PostContext);
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.27)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(1.5px)",
        WebkitBackdropFilter: "blur(1.5px)",
        border: "1px solid rgba(255, 255, 255, 0.62)",
        padding: "10px",
      }}
    >
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
