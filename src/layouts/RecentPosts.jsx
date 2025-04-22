import PostCard from "../components/PostCard";

const RecentPosts = ({ posts }) => {
  return (
    <aside className="flex flex-col gap-4 items-center border-frutiger shadow-frutiger p-frutiger rounded-4xl">
      <p>recent posts</p>
      {posts.map((post) => {
        return <PostCard post={post} key={crypto.randomUUID()}></PostCard>;
      })}
    </aside>
  );
};

export default RecentPosts;
