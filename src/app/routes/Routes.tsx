import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Signup from "../../features/auth/pages/Signup";

export const routerObject = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
