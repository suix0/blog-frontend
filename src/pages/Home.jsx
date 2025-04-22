import { useEffect, useState } from "react";
import Header from "../layouts/Header";
import RecentPosts from "../layouts/RecentPosts";
import server from "../services/API";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await server.getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="col-start-2 col-end-3">
      <Header></Header>
      <main className="flex pt-4">
        <section></section>
        <RecentPosts posts={posts}></RecentPosts>
      </main>
    </div>
  );
};

export default Home;
