import { useState } from "react";
import { Button, InputField } from "../components/FormElements";
import Header from "../layouts/Header";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const submitForm = async () => {
    const url = "http://localhost:5000/api/users/sessions";
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
        setErrors([data]);
        return;
      }

      // Remove errors if there exists after successful authentication
      // Then save token to local storage
      setErrors(null);
      const token = await response.json();
      localStorage.setItem("token", JSON.stringify(token.token));
      setUserCredentials({ username: "", password: "" });
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
          className="w-fit border-frutiger shadow-frutiger bg-frutiger backdrop-blur-frutiger rounded-frutiger p-4 flex flex-col gap-2"
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
          <Button type="submit">Submit</Button>
        </form>
        {errors !== null && (
          <ul>
            {errors.map((err) => {
              return (
                <li className="text-red-700" key={crypto.randomUUID()}>
                  {err.error}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SignIn;
