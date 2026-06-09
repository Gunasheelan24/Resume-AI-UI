import React, { useState } from "react";
import ErrorPopup from "@/components/common/error-popup/ErrorPopup";
import useCreateAccountMutation from "./signupApi";
import * as zod from "zod";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { HrImage } from "@/assets/png/Index";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import type { CreateAccountTypes } from "./types";
import type { PopupType } from "@/types/popup-types";
import "./signup.module.scss";
import type { GlobalApiError } from "@/types/global";
import Loader from "@/components/common/app-loader";
import { useAppDispatch } from "@/app/store/hooks";
import { loginSlice } from "../signin/signInSlice";

const Signup: React.FC = () => {
  // hooks
  const [popup, setPopup] = useState<PopupType>({
    isSuccess: false,
    message: "",
    popupToogle: false,
  });

  // dispatch
  const [createAccountHandler, { isLoading }] = useCreateAccountMutation();
  const dispatch = useAppDispatch();

  // validation
  const signupValidation = zod.object({
    email: zod
      .email("Please enter a valid email")
      .nonempty("Email is required"),
    userName: zod
      .string()
      .nonempty("User is required")
      .min(8, "Username must be at least 8 characters")
      .max(16, "Username cannot exceed 16 characters"),
    fullName: zod
      .string()
      .nonempty("Fullname is required")
      .min(8, "FullName must be at least 8 characters")
      .max(16, "FullName cannot exceed 16 characters"),
    password: zod
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(21, "Password cannot exceed 16 characters"),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<CreateAccountTypes>({
    defaultValues: {
      email: "",
      userName: "",
      fullName: "",
      password: "",
    },
    resolver: zodResolver(signupValidation),
  });

  // handle Submit
  const createAccount = async (value: CreateAccountTypes) => {
    try {
      const createAccountResponse = await createAccountHandler(value).unwrap();

      if (createAccountResponse.statusCode == 201) {
        setPopup((prev) => {
          return {
            ...prev,
            isSuccess: true,
            message: "User created succesfull",
            popupToogle: true,
          };
        });

        dispatch(
          loginSlice({
            isAuthorised: false,
            ...createAccountResponse.data,
          }),
        );
      }
    } catch (error) {
      const apiError = error as GlobalApiError;
      if (apiError.data.statusCode == 401) {
        setPopup((prev) => {
          return {
            ...prev,
            isSuccess: false,
            message: apiError.data.message,
            popupToogle: true,
          };
        });
      } else {
        setPopup((prev) => {
          return {
            ...prev,
            isSuccess: false,
            message: "Something went wrong",
            popupToogle: true,
          };
        });
      }
      console.log(apiError);
    } finally {
      reset();
    }
  };

  // handle google login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="h-screen w-screen flex">
          <section className="flex-1 flex flex-col items-center justify-center">
            <p className="text-sm absolute top-5 left-2 font-black tracking-[-0.04em] text-gray-900 mb-4">
              Resume<span className="text-[rgba(59,130,246,0.6)]">Builder</span>
            </p>

            <div className="w-[90%] md:w-[70%]">
              {/* Header Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6"
              >
                <motion.h1
                  className="text-2xl font-bold text-gray-800"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(59,130,246,0.0)",
                      "0 0 12px rgba(59,130,246,0.6)",
                      "0 0 0px rgba(59,130,246,0.0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Hi! Welcome to ResumeBuilder
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-gray-500"
                >
                  Create professional resumes powered by AI.
                </motion.p>
              </motion.div>

              {/* Google And Github Btn */}
              <div className="flex flex-wrap justify-between md:gap-3 gap-1">
                <Button
                  onClick={() => handleGoogleLogin()}
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
              </div>

              {/* OR Content */}
              <div className="flex items-center gap-4 mb-3">
                <hr className="flex-1" />
                <p className="text-[0.7rem]">OR</p>
                <hr className="flex-1" />
              </div>

              {/* Create Account Form */}
              <form onSubmit={handleSubmit(createAccount)}>
                <FieldSet>
                  <FieldGroup>
                    {/* fullName Field */}
                    <Field className="space-y-0">
                      <FieldLabel htmlFor="fullName">FullName</FieldLabel>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter Your FullName"
                        className="p-5"
                        {...register("fullName")}
                      />
                      {errors.fullName && touchedFields.fullName && (
                        <FieldDescription>
                          {errors.fullName.message}
                        </FieldDescription>
                      )}
                    </Field>

                    {/* userName Field */}
                    <Field className="space-y-0">
                      <FieldLabel htmlFor="userName">UserName</FieldLabel>
                      <Input
                        id="userName"
                        type="text"
                        autoComplete="username"
                        placeholder="Enter Your Username"
                        className="p-5"
                        {...register("userName")}
                      />
                      {errors.userName && touchedFields.userName && (
                        <FieldDescription>
                          {errors.userName.message}
                        </FieldDescription>
                      )}
                    </Field>

                    {/* Email Field */}
                    <Field className="space-y-0">
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="text"
                        placeholder="Enter Your Email Address"
                        className="p-5"
                        {...register("email")}
                      />
                      {errors.email && touchedFields.email && (
                        <FieldDescription>
                          {errors.email.message}
                        </FieldDescription>
                      )}
                    </Field>

                    <Field className="space-y-0">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter Your Password"
                        className="p-5"
                        {...register("password")}
                      />
                      {errors.password && touchedFields.password && (
                        <FieldDescription>
                          {errors.password.message}
                        </FieldDescription>
                      )}
                    </Field>

                    {/* Button */}
                    <Field>
                      <Button
                        className="w-full p-5 cursor-pointer hover:"
                        type="submit"
                      >
                        Create Account
                      </Button>
                    </Field>
                    <p className="text-sm text-center">
                      Already have an account?
                      <Link
                        to={"/auth/signin"}
                        className="text-red-500 underline cursor-pointer hover:text-red-800"
                      >
                        {" "}
                        Login
                      </Link>
                    </p>
                  </FieldGroup>
                </FieldSet>
              </form>
            </div>
            <ErrorPopup
              isSuccess={popup.isSuccess}
              message={popup.message}
              popupToogle={popup.popupToogle}
              closePopup={() =>
                setPopup((prev) => {
                  return {
                    ...prev,
                    message: "",
                    popupToogle: false,
                  };
                })
              }
            />
          </section>
          <section className="flex-1 hidden md:flex">
            <img
              src={HrImage}
              alt="hr-images"
              className="h-full w-full object-cover"
            />
            <ErrorPopup
              isSuccess={popup.isSuccess}
              message={popup.message}
              popupToogle={popup.popupToogle}
              closePopup={() =>
                setPopup((prev) => {
                  return {
                    ...prev,
                    message: "",
                    popupToogle: false,
                  };
                })
              }
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Signup;
