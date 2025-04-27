import PostCard from "../../components/PostCard";
import { useContext } from "react";
import { PostContext } from "../../pages/Home";

const RecentPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <aside
      className="flex flex-col gap-4 items-center"
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
      <p>recent posts</p>
      {posts.map((post) => {
        return <PostCard post={post} key={crypto.randomUUID()}></PostCard>;
      })}
    </aside>
  );
};

export default RecentPosts;
