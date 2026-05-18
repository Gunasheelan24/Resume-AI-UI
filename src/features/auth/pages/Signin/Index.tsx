import React from "react";
import * as zod from "zod";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignUser } from "./types";
import { signInImg } from "@/assets/png/Index";

const SignIn: React.FC = () => {
  const validationSchema = zod.object({
    email: zod
      .email("Please enter a valid email")
      .nonempty("Email is required"),
    password: zod
      .string("invalid password")
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(21, "Password cannot exceed 16 characters"),
  });

  // RHF Logic
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validationSchema),
  });

  // form submit handler
  const loginAccount = (value: SignUser) => {
    try {
      console.log(value);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <main className="flex h-screen w-screen">
      <section className="flex-1 flex items-center justify-center flex-col">
        <div className="w-[70%]">
          <p className="text-sm absolute top-5 left-2 font-black tracking-[-0.04em] text-gray-900 mb-4">
            Resume<span className="text-[rgba(59,130,246,0.6)]">Builder</span>
          </p>

          {/* Welcome Back */}
          <h1 className="text-xl font-medium text-center">
            Continue your journey
          </h1>
          <p className="mb-5 mt-1 text-muted-foreground text-center">
            Sign in to create ATS-friendly resumes with AI.
          </p>

          {/* Login Form */}
          <form className="mb-5" onSubmit={handleSubmit(loginAccount)}>
            <FieldSet>
              <FieldGroup>
                <Field className="space-y-0">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder="email@domain.com"
                    className="p-5"
                    {...register("email")}
                  />
                  {errors.email && touchedFields.email && (
                    <FieldDescription className="text-red-500">
                      {errors.email.message}
                    </FieldDescription>
                  )}
                </Field>

                <Field className="space-y-0">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="enter your password"
                    {...register("password")}
                    className="p-5"
                  />
                  {errors.password && touchedFields.password && (
                    <FieldDescription className="text-red-500">
                      {errors.password.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* forget password */}
                <Field>
                  <p className="text-red-500 cursor-pointer text-sm text-end">
                    Forget Password?
                  </p>
                </Field>

                <Field>
                  <Button
                    className="!p-5 bg-blue-700 font-normal cursor-pointer hover:bg-blue-800"
                    type="submit"
                  >
                    Login
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>

          {/* OR Content */}
          <div className="flex items-center gap-4 mb-5">
            <hr className="flex-1" />
            <p className="text-[0.7rem]">OR</p>
            <hr className="flex-1" />
          </div>

          {/* Google And Github Btn */}
          <div className="flex flex-wrap justify-between md:gap-3 gap-1">
            <Button
              onClick={() =>
                (window.location.href = "http://localhost:3000/auth/google")
              }
              variant="outline"
              className="flex-1 p-5"
            >
              <FcGoogle className="!h-5 !w-5" />
              Sign up with google
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "http://localhost:3000/auth/github")
              }
              variant="outline"
              className="flex-1 mb-3 p-5"
            >
              <FaGithub className="!h-5 !w-5" /> Sign up with GitHub
            </Button>

            <p className="text-sm text-center w-full">
              You dont have an account yet?{" "}
              <Link
                to={"/auth/signup"}
                className="text-red-500 underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="flex-1">
        <img
          src={signInImg}
          alt="login-image"
          className="object-cover h-full w-full"
        />
      </section>
    </main>
  );
};

export default SignIn;
