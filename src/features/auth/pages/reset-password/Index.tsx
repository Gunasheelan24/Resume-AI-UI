import React from "react";
import * as zod from "zod";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { resetPassword } from "@/assets/png/Index";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword: React.FC = () => {
  // validation schema
  const validationSchema = zod.object({
    email: zod.email("Invalid Email Address").nonempty("Email is required"),
  });

  // ReactHookhook
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(validationSchema),
  });

  // formHandler
  const resetPasswordHandler = (value: { email: string }) => {
    try {
      console.log(value, ":::::::");
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <main>
      <section>
        {/* APP LOGO */}
        <div className="flex items-center justify-between ps-4 pe-4 mt-4">
          <p className="text-sm h-full font-black tracking-[-0.04em] text-gray-900">
            Resume<span className="text-[rgba(59,130,246,0.6)]">Builder</span>
          </p>

          <p className="h-full text-md">
            Don't have an account{" "}
            <Link className="text-red-500 underline" to="/auth/signup">
              Register Now
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center mt-40">
          {/* Forget Password Image */}
          <img
            src={resetPassword}
            alt="reset-password"
            className="obejct-cover w-30"
          />

          {/* Forget Password Content */}
          <h2 className="text-center text-xl mt-4 font-medium">
            Forgot your password?
          </h2>
          <p className="text-center mt-1">
            Provide your email to receive a password reset link.
          </p>

          {/* Forget Password Form  */}
          <form
            onSubmit={handleSubmit(resetPasswordHandler)}
            className="w-[40%] mt-5"
          >
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    type="email"
                    placeholder="something@gmail.com"
                    className="ps-3 pe-3 pt-5 pb-5"
                    id="email"
                    {...register("email")}
                  />

                  <FieldDescription
                    className={`${errors.email && touchedFields.email && "text-red-500"}`}
                  >
                    {errors.email && touchedFields.email
                      ? errors.email?.message
                      : "Enter your registered email address"}
                  </FieldDescription>
                </Field>

                <Field>
                  <Button
                    className="ps-3 pe-3 pt-5 pb-5 bg-[#ff6329] cursor-pointer hover:bg-[#f8571c]"
                    type="submit"
                  >
                    Sent Email
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
