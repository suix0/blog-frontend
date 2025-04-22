const Header = () => {
  return (
    <header className="bg-frutiger backdrop-blur-[10px] shadow-frutiger border-frutiger p-frutiger rounded-4xl mt-4">
      <nav>
        <ul className="col-start-2 col-end-3 flex gap-4">
          <li>Home</li>
          <li>Author</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
