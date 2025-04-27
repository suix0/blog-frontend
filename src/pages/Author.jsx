import Header from "../layouts/Header";
import {
  PublishedPosts,
  UnpublishedPosts,
} from "../features/posts/AuthorPosts";
import { useState, useEffect } from "react";
import server from "../services/API";
import { jwtDecode } from "jwt-decode";

const Author = () => {
  const [authorPosts, setAuthorPosts] = useState({
    publishedPosts: [],
    unpublishedPosts: [],
  });
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchAuthorPosts = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const decoded = jwtDecode(token);
      const authorPostsData = await server.getAuthorPosts(decoded.user.id);
      setAuthorPosts(authorPostsData);
    };
    fetchAuthorPosts();
  }, []);

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
  }

  return (
    <div className="col-start-2 col-end-3">
      <Header></Header>
      <main>
        <PublishedPosts
          publishedPosts={authorPosts.publishedPosts}
        ></PublishedPosts>
        <UnpublishedPosts
          unpublishedPosts={authorPosts.unpublishedPosts}
        ></UnpublishedPosts>
      </main>
    </div>
  );
};

export default Author;
