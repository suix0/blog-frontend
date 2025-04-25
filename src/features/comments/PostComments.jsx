import { InputField } from "../../components/FormElements";

const PostComments = ({ postId, username }) => {
  const postComments = async () => {
    const url = `https://localhost:5000/api/posts/${postId}/comments`;
  };

  return (
    <>
      <div className="flex gap-2">
        <img
          src="/user.svg"
          alt="Account icon default"
          className="w-[24px] mb-2"
        />
        <p>{username}</p>
      </div>
      <form
        action={postComments}
        method="POST"
        className="flex w-fit gap-2 items-end"
      >
        <textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a comment"
          className="resize-none border bg-frutiger p-2 shadow-frutiger  rounded-frutiger backdrop-blur-frutiger"
        />
        <button
          type="submit"
          className="border w-[100px] bg-frutiger shadow-frutiger  rounded-frutiger backdrop-blur-frutiger cursor-pointer"
        >
          Post
        </button>
      </form>
    </>
  );
};

export default PostComments;
