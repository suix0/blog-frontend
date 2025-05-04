import { format } from "date-fns";

const formatDates = (postsArr) => {
  console.log(postsArr);
  const newPostsArr = postsArr.map((post) => {
    const formattedDate = format(
      new Date(post.createdAt),
      "MM/dd/yyyy, H:mm aaa"
    );
    return {
      ...post,
      createdAt: formattedDate,
    };
  });
  console.log(newPostsArr);
  return newPostsArr;
};

const formatDate = (post) => {
  console.log(post);
  const newDate = format(new Date(post.createdAt), "MM/dd/yyyy, H:mm aaa");
  post.createdAt = newDate;
  return post;
};

export { formatDates, formatDate };
