const ConfirmDelete = ({ post, setDeletePost, deleteBlog }) => {
  return (
    <div className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger absolute inset-0 w-[300px] h-fit mt-44 mx-auto text-center flex flex-col gap-4">
      <p className="text-xl">
        Confirm deleting <span className="font-bold">{post.title}</span>?
      </p>
      <p>This action cannot be undone</p>
      <div className="flex gap-4 justify-center">
        <button
          className="rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer"
          onClick={() => setDeletePost({ delete: false, post: {} })}
        >
          Cancel
        </button>
        <button
          className="bg-red-300 rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer"
          onClick={deleteBlog}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
