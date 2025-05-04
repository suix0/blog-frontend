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
import EditPost from "../features/posts/EditPost";
import ConfirmDelete from "../features/posts/DeletePost";

const Author = () => {
  const [authorPosts, setAuthorPosts] = useState({
    publishedPosts: [],
    unpublishedPosts: [],
  });
  const [username, setUsername] = useState(null);
  const [createBlog, setCreateBlog] = useState(false);
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [error, setUnauthorizedError] = useState(null);

  const [editPost, setEditPost] = useState({
    edit: false,
    post: {},
  });

  const [deletePost, setDeletePost] = useState({
    delete: false,
    post: {},
  });

  useEffect(() => {
    const fetchAuthorPosts = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        setUnauthorizedError(true);
      } else {
        const decoded = jwtDecode(token);
        const authorPostsData = await server.getAuthorPosts(decoded.user.id);
        if (authorPostsData) {
          setAuthorPosts(authorPostsData);
        }
      }
    };
    fetchAuthorPosts();
  }, []);

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
    if (decoded.user.role === "USER") {
      setUnauthorizedError(true);
    } else {
      setUnauthorizedError(false);
    }
  }

  const postNewBlog = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    const post = await server.postBlog(blog, decoded.userId);

    if (post.published) {
      setAuthorPosts({
        ...authorPosts,
        publishedPosts: [...authorPosts.publishedPosts, post],
      });
    } else {
      setAuthorPosts({
        ...authorPosts,
        unpublishedPosts: [...authorPosts.unpublishedPosts, post],
      });
    }
    setBlog({ title: "", content: "" });
    setCreateBlog(false);
  };

  const deleteBlog = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    const newAuthorPosts = await server.deleteBlog(
      decoded.user.id,
      deletePost.post
    );
    setAuthorPosts(newAuthorPosts);
    setDeletePost({ delete: false, post: {} });
  };

  const updatePublishStatus = async (post) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    const newAuthorPosts = await server.updatePublishStatus(
      decoded.user.id,
      post
    );
    setAuthorPosts(newAuthorPosts);
  };

  const tinymceApi = import.meta.env.VITE_TINYMCE_API;

  return (
    <div className="h-fit grid 2xl:grid-cols-[1fr_1200px_1fr] md:grid-cols-[1fr_800px_1fr] xs:grid-rows-[80px_1fr] mx-8">
      <Header></Header>
      {error ? (
        <div className="flex mt-32 items-center flex-col gap-2 md:col-start-2 md:col-end-3 h-[100svh]">
          <p className="text-4xl font-bold">Error</p>
          <p>You are not authorized to view this page.</p>
        </div>
      ) : (
        <main className="relative pt-4 md:col-start-2 md:col-end-3">
          {editPost.edit ? (
            <EditPost
              post={editPost.post}
              authorPosts={authorPosts}
              setAuthorPosts={setAuthorPosts}
              setEditPost={setEditPost}
            ></EditPost>
          ) : !createBlog ? (
            <>
              <CreatePost setCreateBlog={setCreateBlog}></CreatePost>
              <PublishedPosts
                publishedPosts={authorPosts && authorPosts.publishedPosts}
                setEditPost={setEditPost}
                setDeletePost={setDeletePost}
                updatePublishStatus={updatePublishStatus}
              ></PublishedPosts>
              <UnpublishedPosts
                unpublishedPosts={authorPosts && authorPosts.unpublishedPosts}
                setEditPost={setEditPost}
                setDeletePost={setDeletePost}
                updatePublishStatus={updatePublishStatus}
              ></UnpublishedPosts>
              {deletePost.delete && (
                <ConfirmDelete
                  post={deletePost.post}
                  setDeletePost={setDeletePost}
                  deleteBlog={deleteBlog}
                ></ConfirmDelete>
              )}
            </>
          ) : (
            createBlog && (
              <>
                <div className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
                  <form action={postNewBlog} method="post">
                    <label htmlFor="blogTitle">
                      <input
                        required
                        type="text"
                        id="blogTitle"
                        placeholder="Title"
                        name="blogTitle"
                        className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger mb-4 self-start"
                        value={blog.title}
                        onChange={(e) =>
                          setBlog({ ...blog, title: e.target.value })
                        }
                      />
                    </label>
                    <Editor
                      apiKey={tinymceApi}
                      value={blog}
                      onEditorChange={(newValue, editor) =>
                        setBlog({ ...blog, content: newValue })
                      }
                      textareaName="blogCreate"
                      id="blogCreate"
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
                    />
                    <button
                      type="submit"
                      className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger w-[100px] mt-4 cursor-pointer hover:-translate-y-1 transition-all"
                    >
                      Post
                    </button>
                  </form>
                </div>
                <PublishedPosts
                  publishedPosts={authorPosts && authorPosts.publishedPosts}
                  setEditPost={setEditPost}
                  setDeletePost={setDeletePost}
                  updatePublishStatus={updatePublishStatus}
                ></PublishedPosts>
                <UnpublishedPosts
                  unpublishedPosts={authorPosts && authorPosts.unpublishedPosts}
                  setEditPost={setEditPost}
                  setDeletePost={setDeletePost}
                  updatePublishStatus={updatePublishStatus}
                ></UnpublishedPosts>
              </>
            )
          )}
        </main>
      )}
    </div>
  );
};

export default Author;
