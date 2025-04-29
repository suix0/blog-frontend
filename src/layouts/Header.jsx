import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const Header = () => {
  // Username to display in the UI
  const [username, setUsername] = useState(null);

  const signOut = () => {
    localStorage.removeItem("token");
    setUsername(null);
  };

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
  }

  return (
    <header className=" mt-4 mb-4 bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger">
      <nav className={username ? "flex justify-between" : "flex justify-end"}>
        {username && <p className="italic text-lg">Welcome, {username}</p>}
        <ul className="col-start-2 col-end-3 flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/author">Author</NavLink>
          {username === null || !username ? (
            <NavLink to="/signin">Sign in</NavLink>
          ) : (
            <a className="cursor-pointer" onClick={signOut}>
              Sign out
            </a>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
