import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import server from "../../services/API";
import { jwtDecode } from "jwt-decode";

const EditPost = ({ post, authorPosts, setAuthorPosts, setEditPost }) => {
  const [title, setTitle] = useState(post.title);
  const [editNewContent, setEditNewContent] = useState(post.content);
  const navigate = useNavigate();

  const tinymceApi = import.meta.env.VITE_TINYMCE_API;

  const postNewBlog = async () => {
    const user = jwtDecode(JSON.parse(localStorage.getItem("token")));
    const newUpdatedPost = await server.updatePost(
      post.id,
      title,
      editNewContent,
      user.id
    );
    console.log(authorPosts);
    if (newUpdatedPost.published) {
      const newAuthorPublishedPosts = authorPosts.publishedPosts.map((post) => {
        if (post.id === newUpdatedPost.id) {
          return newUpdatedPost;
        } else {
          return post;
        }
      });
      setAuthorPosts({
        unpublishedPosts: authorPosts.unpublishedPosts,
        publishedPosts: newAuthorPublishedPosts,
      });
      setEditPost({ post: {}, edit: false });
    } else {
      const newAuthorUnpublishedPosts = authorPosts.unpublishedPosts.map(
        (post) => {
          if (post.id === newUpdatedPost.id) {
            return newUpdatedPost;
          } else {
            return post;
          }
        }
      );
      setAuthorPosts({
        publishedPosts: authorPosts.publishedPosts,
        unpublishedPosts: newAuthorUnpublishedPosts,
      });
      setEditPost({ post: {}, edit: false });
    }
  };

  return (
    <form action={postNewBlog} method="post">
      <label htmlFor="blogTitle">
        <input
          required
          type="text"
          id="blogTitle"
          placeholder="Title"
          name="blogTitle"
          className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger mb-4 self-start"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <Editor
        apiKey={tinymceApi}
        initialValue={post.content}
        value={editNewContent}
        onEditorChange={(newValue, editor) => setEditNewContent(newValue)}
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
      <div className="flex gap-4">
        <button
          className="w-[150px] bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger mt-4 cursor-pointer hover:-translate-y-1 transition-all"
          onClick={() => {
            navigate("/");
          }}
        >
          Return
        </button>
        <button
          type="submit"
          className="w-[150px] bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger mt-4 cursor-pointer hover:-translate-y-1 transition-all"
        >
          Confirm changes
        </button>
      </div>
    </form>
  );
};

export default EditPost;
