import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Signup from "../../features/auth/pages/signup";
import SignIn from "@/features/auth/pages/signin/Index";
import ResetPassword from "@/features/auth/pages/reset-password/Index";
import VerifyOtp from "@/features/auth/pages/verify-otp/Index";
import ResumeLayout from "@/layouts/ResumeLayout";

export const routerObject = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "signup",
        element: <Signup />,
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
