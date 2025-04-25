import { NavLink } from "react-router-dom";

const Header = ({ setUsername, username }) => {
  const signOut = () => {
    localStorage.removeItem("token");
    setUsername(null);
  };

  return (
    <header className="bg-frutiger rounded-frutiger backdrop-blur-frutiger shadow-frutiger border-frutiger p-frutiger mt-4">
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
