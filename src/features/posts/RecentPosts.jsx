import PostCard from "../../components/PostCard";
import { useContext } from "react";
import { PostContext } from "../../pages/Home";

const RecentPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <aside
      className=" items-center bg-frutiger
        rounded-frutiger
        shadow-frutiger
        border
      border-white/60
        backdrop-blur-frutiger
        h-[500px]
        w-[350px]
        overflow-y-scroll
        p-5
        "
    >
      <p className="text-center mb-4">recent posts</p>
      {posts.map((post) => {
        return <PostCard post={post} key={crypto.randomUUID()}></PostCard>;
      })}
    </aside>
  );
};

export default RecentPosts;
