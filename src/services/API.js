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

  return { getPosts };
};

const server = API();

export default server;
