const Button = ({ onClick, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-frutiger p-1 w-full mt-4 rounded-lg shadow-frutiger"
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
        className="bg-frutiger outline-frutiger rounded-lg p-1 shadow-frutiger"
      />
    </label>
  );
};

export { Button, InputField };
