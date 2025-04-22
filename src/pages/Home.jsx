import { useEffect, useState, createContext } from "react";
import Header from "../layouts/Header";
import RecentPosts from "../layouts/RecentPosts";
import server from "../services/API";

const PostContext = createContext(null);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(undefined);

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
        <section>
          {/* {post && 
          
          } */}
        </section>
        <PostContext.Provider value={{ posts, setPost }}>
          <RecentPosts></RecentPosts>
        </PostContext.Provider>
      </main>
    </div>
  );
};

export { Home, PostContext };
