import { useState } from "react";
import server from "../../services/API";
import { formatDate } from "../../utils/formatDate";

const PostComments = ({ postId, username, comments, setComments }) => {
  const [displayError, setDisplayError] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (username === null) {
      setDisplayError(true);
    } else {
      let newComment = await server.postComments(postId, comment);
      console.log(newComment);
      newComment = formatDate(newComment);
      setComments([newComment, ...comments]);
      setComment("");
      setDisplayError(false);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <img
          src="/user.svg"
          alt="Account icon default"
          className="w-[24px] mb-2"
        />
        <p>{username === null ? "" : username}</p>
      </div>
      <form
        action={handleSubmit}
        method="POST"
        className="flex w-fit gap-2 items-end pb-4"
      >
        <textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a comment"
          className="resize-none border"
          style={{
            background: "rgba(255, 255, 255, 0.27)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
            border: "1px solid rgba(255, 255, 255, 0.62)",
            padding: "10px",
          }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="border w-[100px] cursor-pointer"
          style={{
            background: "rgba(255, 255, 255, 0.27)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
            border: "1px solid rgba(255, 255, 255, 0.62)",
            padding: "10px",
          }}
        >
          Post
        </button>
        {displayError && (
          <p className="text-red-500">
            You need to be logged in to make a comment.
          </p>
        )}
      </form>
    </>
  );
};

export default PostComments;
