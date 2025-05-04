const API = () => {
  const serverUrl = "https://blog-backend-production-0049.up.railway.app";

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
        method: "POST",
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
        return false;
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
        method: "POST",
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

  const updatePost = async (postId, title, content, userId) => {
    try {
      const res = await fetch(`${serverUrl}/api/authors/${userId}/posts`, {
        method: "PUT",
        mode: "cors",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, title, content }),
      });
      if (!res.ok) {
        throw new Error("Error in uploading post");
      }
      const data = await res.json();
      return data.updatedPost;
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBlog = async (userId, post) => {
    try {
      const res = await fetch(`${serverUrl}/api/authors/${userId}/posts`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!res.ok) {
        throw new Error("Error in deleting post");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const updatePublishStatus = async (userId, post) => {
    try {
      const res = await fetch(
        `${serverUrl}/api/authors/${userId}/posts?${
          post.published ? "publish=true" : "unpublish=true"
        }`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      if (!res.ok) {
        throw new Error("Error in updating post publish status");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getPosts,
    getPost,
    postComments,
    getAuthorPosts,
    postBlog,
    updatePost,
    deleteBlog,
    updatePublishStatus,
  };
};

const server = API();

export default server;
