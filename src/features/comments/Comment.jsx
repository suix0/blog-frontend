const Comment = ({ comment }) => {
  return (
    <div className="py-4">
      <div className="flex gap-2">
        <img src="/user.svg" alt="Account icon default" className="w-[24px]" />
        <p className="flex justify-between w-full">
          {comment.User.username}{" "}
          <span className="text-neutral-600 text-xs italic">
            {comment.createdAt}
          </span>
        </p>
      </div>
      <p className="mt-2">{comment.comment}</p>
      <hr className="border-emerald-700 mt-2" />
    </div>
  );
};

export default Comment;
