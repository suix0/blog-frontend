import parse from "html-react-parser";

const PostSection = ({ post, setEditPost, setDeletePost }) => {
  return (
    <section className="w-full h-full bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger relative">
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p className="text-xs">
        Date uploaded: <span>{post.createdAt}</span>
      </p>
      {parse(post.content)}
      <div className="absolute right-0 top-0 flex gap-4 m-[10px]">
        <button
          className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer"
          onClick={() => setEditPost({ edit: true, post: post })}
        >
          Edit
        </button>
        <button
          className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer"
          onClick={() => setDeletePost({ delete: true, post: post })}
        >
          Delete
        </button>
        <button className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer">
          {post.published ? "Unpublish" : "Publish"}
        </button>
      </div>
    </section>
  );
};

export default PostSection;
