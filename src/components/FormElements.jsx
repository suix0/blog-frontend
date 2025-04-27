const Button = ({ onClick, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: "rgba(255, 255, 255, 0.27)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(1.5px)",
        WebkitBackdropFilter: "blur(1.5px)",
        border: "1px solid rgba(255, 255, 255, 0.62)",
        padding: "10px",
      }}
      className="cursor-pointer mt-4"
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
        style={{
          background: "rgba(255, 255, 255, 0.27)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
          border: "1px solid rgba(255, 255, 255, 0.62)",
          padding: "10px",
        }}
      />
    </label>
  );
};

export { Button, InputField };
