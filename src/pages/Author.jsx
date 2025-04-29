import Header from "../layouts/Header";
import {
  PublishedPosts,
  UnpublishedPosts,
} from "../features/posts/AuthorPosts";
import CreatePost from "../features/posts/CreatePost";
import { useState, useEffect } from "react";
import server from "../services/API";
import { jwtDecode } from "jwt-decode";
import { Editor } from "@tinymce/tinymce-react";

const Author = () => {
  const [authorPosts, setAuthorPosts] = useState({
    publishedPosts: [],
    unpublishedPosts: [],
  });
  const [username, setUsername] = useState(null);
  const [createBlog, setCreateBlog] = useState(false);

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

  const tinymceApi = import.meta.env.VITE_TINYMCE_API;

  return (
    <div className="col-start-2 col-end-3">
      <Header></Header>
      <main>
        {!createBlog && <CreatePost setCreateBlog={setCreateBlog}></CreatePost>}
        {createBlog && (
          <div className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
            <Editor
              apiKey={tinymceApi}
              init={{
                content_style: `
                body {
                  background: linear-gradient(135deg, #9be1e7, #a1e7a6);
                }
              `,
                plugins: [
                  // Core editing features
                  "anchor",
                  "autolink",
                  "charmap",
                  "codesample",
                  "emoticons",
                  "lists",
                  "searchreplace",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
              initialValue="Welcome to TinyMCE!"
            />
          </div>
        )}
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
