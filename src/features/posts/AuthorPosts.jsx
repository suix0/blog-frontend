import PostSection from "../../components/PostSection";
import { formatDates } from "../../utils/formatDate";

const PublishedPosts = ({ publishedPosts }) => {
  const formattedPublishedPosts = formatDates(publishedPosts);

  return (
    <div className="mt-4">
      <p className="ml-4 text-lg ">Published posts</p>
      <div className="border-frutiger shadow-frutiger p-frutiger rounded-frutiger backdrop-blur-frutiger w-full h-full">
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
      <div className="border-frutiger shadow-frutiger p-frutiger rounded-frutiger backdrop-blur-frutiger w-full h-full">
        {formattedUnpublishedPosts &&
          formattedUnpublishedPosts.map((post) => {
            return <PostSection post={post}></PostSection>;
          })}
      </div>
    </div>
  );
};

export { PublishedPosts, UnpublishedPosts };
