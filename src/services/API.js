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

  return { getPosts, getPost };
};

const server = API();

export default server;
