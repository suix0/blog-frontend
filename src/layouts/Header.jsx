import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const Header = () => {
  // Username to display in the UI
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    setUsername(null);
    navigate("/");
  };

  if (JSON.parse(localStorage.getItem("token")) && username === null) {
    const token = JSON.parse(localStorage.getItem("token"));
    const decoded = jwtDecode(token);
    setUsername(decoded.user.username);
  }

  return (
    <header className=" mt-4 mb-4 bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger xs:row-start-1 xs:row-end-2 md:grid xl:col-start-2 xs:col-start-1 md:col-start-2 md:col-end-3 h-fit">
      <nav
        className={
          username
            ? "flex justify-between h-[30px] items-center"
            : "flex justify-end"
        }
      >
        {username && (
          <p className="italic s:text-lg xs:text-xs">Welcome, {username}</p>
        )}
        <ul className="col-start-2 col-end-3 flex s:gap-4 xs:gap-2 xs:text-xs s:text-lg">
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
