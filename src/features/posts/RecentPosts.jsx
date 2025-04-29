import PostCard from "../../components/PostCard";
import { useContext } from "react";
import { PostContext } from "../../pages/Home";

const RecentPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <aside
      className="flex flex-col gap-4 items-center bg-frutiger
        rounded-frutiger
        shadow-frutiger
        border
      border-white/60
        p-frutiger
        backdrop-blur-frutiger"
    >
      <p>recent posts</p>
      {posts.map((post) => {
        return <PostCard post={post} key={crypto.randomUUID()}></PostCard>;
      })}
    </aside>
  );
};

export default RecentPosts;
