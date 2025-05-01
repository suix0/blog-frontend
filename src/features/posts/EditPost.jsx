import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditPost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [editNewContent, setEditNewContent] = useState("");
  const [initialValue, setInitialValue] = useState(post.content);

  const tinymceApi = import.meta.env.VITE_TINYMCE_API;

  const postNewBlog = () => {};

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
        initialValue={initialValue}
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
      <button
        type="submit"
        className="w-[150px] bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger w-[100px] mt-4 cursor-pointer hover:-translate-y-1 transition-all"
      >
        Confirm changes
      </button>
    </form>
  );
};

export default EditPost;
