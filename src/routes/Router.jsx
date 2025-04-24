import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Author from "../pages/Author";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/author",
    element: <Author />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
