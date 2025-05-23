const CreatePost = ({ setCreateBlog }) => {
  return (
    <div
      className=" w-full mt-4 cursor-pointer hover:-translate-y-1 transition-all"
      style={{
        background: "rgba(255, 255, 255, 0.27)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.62)",
        padding: "10px",
      }}
      onClick={() => setCreateBlog(true)}
    >
      Write a blog
    </div>
  );
};

export default CreatePost;
