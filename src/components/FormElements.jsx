const Button = ({ onClick, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-4 bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger cursor-pointer"
    >
      {children}
    </button>
  );
};

const InputField = ({
  setUserCredentials,
  state,
  value,
  children,
  htmlFor,
}) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1">
      {children}
      <input
        type="text"
        value={value}
        name={htmlFor}
        id={htmlFor}
        onChange={(e) =>
          setUserCredentials({ ...state, [htmlFor]: e.target.value })
        }
        className="bg-frutiger rounded-frutiger shadow-frutiger border border-white/60 p-frutiger backdrop-blur-frutiger"
      />
    </label>
  );
};

export { Button, InputField };
