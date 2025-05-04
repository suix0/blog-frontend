import PostCard from "../../components/PostCard";
import { useContext } from "react";
import { PostContext } from "../../pages/Home";

const RecentPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <aside className="items-center bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 backdrop-blur-frutiger overflow-y-scroll p-5 w-full xl:col-start-3 xl:col-end-4 xl:h-[400px] xs:h-[300px] s:h-[400px] md:h-[400px] md:col-start-2 md:col-end-3 xl:row-start-2 mb-4">
      <p className="md:text-center mb-4">recent posts</p>
      {posts.map((post) => {
        return <PostCard post={post} key={crypto.randomUUID()}></PostCard>;
      })}
    </aside>
  );
};

export default RecentPosts;
