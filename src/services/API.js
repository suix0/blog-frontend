const API = () => {
  const serverUrl = "http://localhost:5000";

  const getPosts = async () => {
    try {
      const res = await fetch(`${serverUrl}/api/posts`, {
        mode: "cors",
      });
      if (!res.ok) {
        throw new Error("Error in fetching data.");
      }
      const data = await res.json();
      return data.posts;
    } catch (err) {
      console.error(err);
    }
  };

  const getPost = async (postId) => {
    try {
      const res = await fetch(`${serverUrl}/api/posts/${postId}`, {
        mode: "cors",
      });
      if (!res.ok) {
        throw new Error("Error in fetching data.");
      }
      const data = await res.json();
      return data.post;
    } catch (err) {
      console.error(err);
    }
  };

  const postComments = async (postId, comment) => {
    try {
      const res = await fetch(`${serverUrl}/api/posts/${postId}/comments`, {
        mode: "cors",
        method: "post",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ comment }),
      });

      if (!res.ok) {
        throw new Error("Error in posting comment");
      }
      const data = await res.json();
      return data.comment;
    } catch (err) {
      console.error(err);
    }
  };

  const getAuthorPosts = async (userId) => {
    try {
      const res = await fetch(`${serverUrl}/api/authors/${userId}/posts`, {
        mode: "cors",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (!res.ok) {
        throw new Error("Error in getting author posts.");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const postBlog = async (blog, userId) => {
    try {
      const res = await fetch(`${serverUrl}/api/authors/${userId}/posts`, {
        method: "post",
        mode: "cors",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      if (!res.ok) {
        throw new Error("Error in uploading post");
      }
      const data = await res.json();
      return data.newPost;
    } catch (err) {
      console.error(err);
    }
  };

  return { getPosts, getPost, postComments, getAuthorPosts, postBlog };
};

const server = API();

export default server;
