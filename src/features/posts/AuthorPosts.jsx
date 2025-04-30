import PostSection from "../../components/PostSection";
import { formatDates } from "../../utils/formatDate";

const PublishedPosts = ({ publishedPosts }) => {
  const formattedPublishedPosts = formatDates(publishedPosts);

  return (
    <div className="mt-4">
      <p className="ml-4 text-lg ">Published posts</p>
      <div className="w-full h-full bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger flex flex-col gap-4">
        {formattedPublishedPosts &&
          formattedPublishedPosts.map((post) => {
            return (
              <PostSection post={post} key={crypto.randomUUID()}></PostSection>
            );
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
      <div className="w-full h-full bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger flex flex-col gap-4">
        {formattedUnpublishedPosts &&
          formattedUnpublishedPosts.map((post) => {
            return (
              <PostSection post={post} key={crypto.randomUUID()}></PostSection>
            );
          })}
      </div>
    </div>
  );
};

export { PublishedPosts, UnpublishedPosts };
