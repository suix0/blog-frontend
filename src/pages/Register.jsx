import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../components/FormElements";
import Header from "../layouts/Header";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const submitForm = async () => {
    const url = "http://localhost:5000/api/users";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(userCredentials),
      });

      // Display error message for incorrect credentials
      if (!response.ok) {
        const data = await response.json();
        setErrors(data.errors);
        return;
      }

      // Remove errors if there exists after successful authentication
      // Then save token to local storage
      setErrors(null);
      setUserCredentials({ username: "", password: "", confirmPassword: "" });
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-start-2 col-end-3">
      <Header></Header>
      <div className="flex justify-center items-center flex-col gap-4 mt-48">
        <p className="text-lg">Sign in</p>
        <form
          action={submitForm}
          className="w-fit p-4 flex flex-col gap-2"
          style={{
            background: "rgba(255, 255, 255, 0.27)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
            border: "1px solid rgba(255, 255, 255, 0.62)",
            padding: "10px",
          }}
        >
          <InputField
            value={userCredentials.username}
            setUserCredentials={setUserCredentials}
            state={userCredentials}
            htmlFor="username"
          >
            Username
          </InputField>
          <InputField
            value={userCredentials.password}
            setUserCredentials={setUserCredentials}
            state={userCredentials}
            htmlFor="password"
          >
            Password
          </InputField>
          <InputField
            value={userCredentials.confirmPassword}
            setUserCredentials={setUserCredentials}
            state={userCredentials}
            htmlFor="confirmPassword"
          >
            Confirm Password
          </InputField>
          <Button type="submit">Submit</Button>
        </form>
        {errors !== null && (
          <ul>
            {errors.map((err) => {
              return (
                <li
                  className="text-red-700 text-[12px]"
                  key={crypto.randomUUID()}
                >
                  {err.msg}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Register;
