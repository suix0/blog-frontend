import { format } from "date-fns";

const formatDates = (postsArr) => {
  const newPostsArr = postsArr.map((post) => {
    return {
      ...post,
      createdAt: (post.createdAt = format(
        new Date(post.createdAt),
        "MM/dd/yyyy, H:m aaa"
      )),
    };
  });
  return newPostsArr;
};

const formatDate = (post) => {
  console.log(post);
  const newDate = format(new Date(post.createdAt), "MM/dd/yyyy, H:m aaa");
  post.createdAt = newDate;
  return post;
};

export { formatDates, formatDate };
