import { useEffect, useState, createContext } from "react";
import Header from "../layouts/Header";
import RecentPosts from "../features/posts/RecentPosts";
import server from "../services/API";
import { formatDates, formatDate } from "../utils/formatDate";
import Comment from "../features/comments/Comment";
import PostComments from "../features/comments/PostComments";
import { jwtDecode } from "jwt-decode";

const PostContext = createContext(null);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(undefined);
  const [post, setPost] = useState(undefined);
  const [username, setUsername] = useState(null);

  // Retrieve all posts
  useEffect(() => {
    const fetchPosts = async () => {
      let data = await server.getPosts();

      // Format dates of posts
      let dataFormatted = formatDates(data);
      setPosts(dataFormatted);
      setPostId(dataFormatted[0].id);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      if (postId !== undefined) {
        const data = await server.getPost(postId);
        // Format dates of post to display
        let dataFormatted = formatDate(data[0]);
        // Format comments of post to display
        dataFormatted.comments = formatDates(dataFormatted.comments);
        setPost(dataFormatted);
      } else {
        return;
      }
    };
    fetchPost();
  }, [postId]);

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
  }

  return (
    <div className="col-start-2 col-end-3">
      <Header username={username} setUsername={setUsername}></Header>
      <main className="flex pt-4 justify-between gap-4">
        {post !== undefined && (
          <div className="flex flex-col w-full">
            <section className="border-frutiger shadow-frutiger p-frutiger rounded-frutiger backdrop-blur-frutiger w-full h-full relative">
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="flex flex-col gap-1 mt-4">
                <p>
                  blog created by:{" "}
                  <span className="font-bold">{post.User.username}</span>
                </p>
                <p className="text-neutral-600 text-xs">{post.createdAt}</p>
              </div>
              <p className="mt-4">{post.content}</p>
              <div className="flex gap-1.5 absolute bottom-0 mb-4 items-center">
                <img src="/like.svg" alt="Likes count" className="w-9" />
                <p className="text-xl">{post.likes}</p>
              </div>
            </section>
          </div>
        )}
        <PostContext.Provider value={{ posts, setPostId }}>
          <RecentPosts></RecentPosts>
        </PostContext.Provider>
      </main>
      <section className="w-[80%] mt-4 ml-2">
        <h1 className="text-lg font-bold">
          comments ({post && post.comments.length})
        </h1>
        {post &&
          post.comments.map((comment) => {
            console.log(comment);
            return (
              <Comment comment={comment} key={crypto.randomUUID()}></Comment>
            );
          })}
        <PostComments
          postId={post && post.id}
          username={username !== null && username}
        ></PostComments>
      </section>
    </div>
  );
};

export { Home, PostContext };
