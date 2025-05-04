import { useEffect, useState, createContext, Fragment } from "react";
import Header from "../layouts/Header";
import RecentPosts from "../features/posts/RecentPosts";
import server from "../services/API";
import { formatDates, formatDate } from "../utils/formatDate";
import Comment from "../features/comments/Comment";
import PostComments from "../features/comments/PostComments";
import { jwtDecode } from "jwt-decode";
import parse from "html-react-parser";

const PostContext = createContext(null);

const Home = () => {
  // For posts in aside
  const [posts, setPosts] = useState([]);

  // For post to display
  const [postId, setPostId] = useState(undefined);
  const [post, setPost] = useState(undefined);
  const [comments, setComments] = useState(null);

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
        setComments(dataFormatted.comments);
      } else {
        return;
      }
    };
    fetchPost();
  }, [postId]);

  if (post && comments === null) {
    setComments(post.comments);
  }

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
  }

  return (
    <div className="h-fit grid 2xl:grid-cols-[1fr_1200px_1fr] md:grid-cols-[1fr_800px_1fr] xs:grid-rows-[80px_1fr] mx-8">
      <Header></Header>
      <main className="pt-4 md:col-start-2 md:col-end-3 xs:h-fit xs:row-start-2">
        {post !== undefined && (
          <div className="flex flex-col w-full">
            <section className=" w-full h-full flex flex-col gap-4 bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
              <h1 className="font-bold text-4xl">{post.title}</h1>
              <div className="flex flex-col gap-1 mt-4">
                <p>
                  blog created by:{" "}
                  <span className="font-bold">{post.User.username}</span>
                </p>
                <p className="text-neutral-600 text-xs">{post.createdAt}</p>
              </div>
              {parse(post.content)}
            </section>
            <section className="w-[80%] mt-4 ml-2 md:col-start-2 md:col-end-3">
              <h1 className="text-lg font-bold">
                comments ({comments !== null && comments.length})
              </h1>
              {comments !== null &&
                comments.map((comment) => {
                  return (
                    <Comment
                      comment={comment}
                      key={crypto.randomUUID()}
                    ></Comment>
                  );
                })}
              <PostComments
                postId={post && post.id}
                username={username}
                comments={comments}
                setComments={setComments}
              ></PostComments>
            </section>
          </div>
        )}
        <PostContext.Provider value={{ posts, setPostId }}>
          <RecentPosts></RecentPosts>
        </PostContext.Provider>
      </main>
    </div>
  );
};

export { Home, PostContext };
