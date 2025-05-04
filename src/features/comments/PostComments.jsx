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
        className="flex xs:flex-col md:flex-row xs:items-start w-fit gap-2 items-end pb-4"
      >
        <textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a comment"
          className="resize-none bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger w-[100px] cursor-pointer"
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
