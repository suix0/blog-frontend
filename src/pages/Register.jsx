import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "../components/FormElements";
import Header from "../layouts/Header";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const submitForm = async () => {
    const url = "http://blog-backend-production-0049.up.railway.app/api/users";
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
      setUserCredentials({
        username: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-[100svh] grid 2xl:grid-cols-[1fr_1200px_1fr] md:grid-cols-[1fr_800px_1fr] xs:grid-rows-[80px_1fr] mx-8">
      <Header></Header>
      <div className="flex justify-center items-center flex-col gap-4 mt-20 md:col-start-2 md:col-end-3 xs:h-fit xs:row-start-2">
        <p className="text-lg">Create a new account</p>
        <form
          action={submitForm}
          className="w-fit p-4 flex flex-col gap-2"
          style={{
            background: "rgba(255, 255, 255, 0.27)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
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
            type="password"
          >
            Password
          </InputField>
          <InputField
            value={userCredentials.confirmPassword}
            setUserCredentials={setUserCredentials}
            state={userCredentials}
            htmlFor="confirmPassword"
            type="password"
          >
            Confirm Password
          </InputField>
          <p>Wanna be an admin?</p>
          <div className="flex gap-4">
            <input
              type="radio"
              name="role"
              id="true"
              value="true"
              required
              onChange={() =>
                setUserCredentials({ ...userCredentials, role: true })
              }
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              name="role"
              id="false"
              value="false"
              required
              onChange={() =>
                setUserCredentials({ ...userCredentials, role: false })
              }
            />
            <label htmlFor="no">No</label>
          </div>
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
