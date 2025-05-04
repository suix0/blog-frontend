const ConfirmDelete = ({ post, setDeletePost, deleteBlog }) => {
  return (
    <div className="bg-emerald-200 rounded-frutiger shadow-frutiger border border-white/60 p-frutiger absolute inset-0 w-[300px] mt-44 h-fit mx-auto text-center flex flex-col gap-4 my-auto">
      <p className="text-xl">
        Confirm deleting <span className="font-bold">{post.title}</span>?
      </p>
      <p>This action cannot be undone</p>
      <div className="flex gap-4 justify-center">
        <button
          className="rounded-frutiger shadow-frutiger border border-white/60 p-frutiger cursor-pointer"
          onClick={() => setDeletePost({ delete: false, post: {} })}
        >
          Cancel
        </button>
        <button
          className="bg-red-300 rounded-frutiger shadow-frutiger border border-white/60 p-frutiger cursor-pointer"
          onClick={deleteBlog}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
