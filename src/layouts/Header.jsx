import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-frutiger rounded-frutiger backdrop-blur-frutiger shadow-frutiger border-frutiger p-frutiger mt-4">
      <nav className="flex justify-between">
        <ul className="col-start-2 col-end-3 flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/author">Author</NavLink>
        </ul>
        <NavLink to="/signin">Sign in</NavLink>
      </nav>
    </header>
  );
};

export default Header;
