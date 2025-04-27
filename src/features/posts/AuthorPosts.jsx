import PostSection from "../../components/PostSection";
import { formatDates } from "../../utils/formatDate";

const PublishedPosts = ({ publishedPosts }) => {
  const formattedPublishedPosts = formatDates(publishedPosts);

  return (
    <div className="mt-4">
      <p className="ml-4 text-lg ">Published posts</p>
      <div
        className=" w-full h-full"
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
        {formattedPublishedPosts &&
          formattedPublishedPosts.map((post) => {
            return <PostSection post={post}></PostSection>;
          })}
      </div>
    </div>
  );
};

const UnpublishedPosts = ({ unpublishedPosts }) => {
  const formattedUnpublishedPosts = formatDates(unpublishedPosts);

  return (
    <div className="mt-4">
      <p className="ml-4 text-lg ">Unpublished posts</p>
      <div
        className="w-full h-full"
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
        {formattedUnpublishedPosts &&
          formattedUnpublishedPosts.map((post) => {
            return <PostSection post={post}></PostSection>;
          })}
      </div>
    </div>
  );
};

export { PublishedPosts, UnpublishedPosts };
