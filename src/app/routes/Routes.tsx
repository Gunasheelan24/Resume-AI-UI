import AuthLayout from "../../layouts/AuthLayout";
import Signup from "../../features/auth/pages/signup";
import SignIn from "@/features/auth/pages/signin/Index";
import ResetPassword from "@/features/auth/pages/reset-password/Index";

import { createBrowserRouter } from "react-router-dom";
import VerifyOtp from "@/features/auth/pages/verify-otp/Index";
import ResumeLayout from "@/layouts/ResumeLayout";

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
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-otp/:email",
        element: <VerifyOtp />,
      },
    ],
  },
  {
    path: "resume",
    element: <ResumeLayout />,
  },
]);
