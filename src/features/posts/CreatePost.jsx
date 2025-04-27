const CreatePost = ({ setCreateBlog }) => {
  return (
    <div
      className=" w-full h-full mt-4 cursor-pointer hover:-translate-y-1 transition-all"
      style={{
        background: "rgba(255, 255, 255, 0.27)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(1.5px)",
        WebkitBackdropFilter: "blur(1.5px)",
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
