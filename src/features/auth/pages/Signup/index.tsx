import React from "react";
import * as zod from "zod";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { HrImage } from "@/assets/png/Index";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "./types";
import "./SignIn.module.scss";
import { getcreatedAccountDetails } from "../../services/auth.services";

const Signup: React.FC = () => {
  // validation
  const signupValidation = zod.object({
    email: zod.email().nonempty(),
    userName: zod.string().nonempty().min(8).max(16),
    fullName: zod.string().nonempty().min(8).max(16),
    password: zod.string().nonempty().min(8).max(21),
  });

  // React Hook Form
  const { register, handleSubmit, reset } = useForm<User>({
    defaultValues: {
      email: "",
      userName: "",
      fullName: "",
      password: "",
    },
    resolver: zodResolver(signupValidation),
  });

  // handle Submit
  const createAccount = (value: User) => {
    try {
      getcreatedAccountDetails(value);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  // handle google login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
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
            <Button variant="outline" className="flex-1 mb-3 p-5">
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
                </Field>

                {/* userName Field */}
                <Field className="space-y-0">
                  <FieldLabel htmlFor="userName">UserName</FieldLabel>
                  <Input
                    id="userName"
                    type="text"
                    placeholder="Enter Your Username"
                    className="p-5"
                    {...register("userName")}
                  />
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
                </Field>

                <Field className="space-y-0">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className="p-5"
                    {...register("password")}
                  />
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
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </section>
      <section className="flex-1 hidden md:flex">
        <img
          src={HrImage}
          alt="hr-images"
          className="h-full w-full object-cover"
        />
      </section>
    </main>
  );
};

export default Signup;
