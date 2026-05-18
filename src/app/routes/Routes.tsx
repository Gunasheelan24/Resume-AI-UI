import AuthLayout from "../../layouts/AuthLayout";
import Signup from "../../features/auth/pages/Signup";
import SignIn from "@/features/auth/pages/Signin/Index";

import { createBrowserRouter } from "react-router-dom";

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
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
