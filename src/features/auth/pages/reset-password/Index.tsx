import React, { useState } from "react";
import Loader from "@/components/common/app-loader";
import ErrorPopup from "@/components/common/error-popup/ErrorPopup";
import useResetPasswordMutation from "./resetPasswordApi";
import * as zod from "zod";

import { useForm } from "react-hook-form";
import { resetPassword } from "@/assets/png/Index";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { successResponses } from "@/common/response.constant";
import type { Popup } from "@/components/common/error-popup/types";
import type { errorType } from "@/types/popup-types";

const ResetPassword: React.FC = () => {
  // resetPassword Redux API Hook
  const [resetpasswordApi, { isLoading }] = useResetPasswordMutation();

  // validation schema
  const validationSchema = zod.object({
    email: zod.email("Invalid Email Address").nonempty("Email is required"),
  });

  // React Hooks
  const navigate = useNavigate();
  const [popup, setPopup] = useState<Popup>({
    message: "",
    isSuccess: false,
    popupToogle: false,
  });

  // ReactHookForm
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
  const resetPasswordHandler = async (value: { email: string }) => {
    try {
      const resetPasswordResponse = await resetpasswordApi(value).unwrap();

      if (resetPasswordResponse?.statusCode == 201) {
        setPopup((prev) => {
          return {
            ...prev,
            isError: true,
            message: resetPasswordResponse?.message as string,
            tooglePopup: true,
          };
        });

        navigate(`/auth/verify-otp/${value.email}?passwordReset=otp-sent`);
      }
    } catch (error) {
      const errors = error as errorType;

      if (errors.statusCode == 401) {
        setPopup((prev) => {
          return {
            ...prev,
            isSuccess: false,
            message: errors.message,
            popupToogle: true,
          };
        });
      }

      setPopup((prev) => {
        return {
          ...prev,
          isSuccess: false,
          message: successResponses.somethingWentWrong,
          popupToogle: true,
        };
      });
    } finally {
      reset();
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <section>
            {/* APP LOGO */}
            <div className="flex items-center justify-between ps-4 pe-4 mt-4">
              <p className="text-sm h-full font-black tracking-[-0.04em] text-gray-900">
                Resume
                <span className="text-[rgba(59,130,246,0.6)]">Builder</span>
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
                className="md:w-[55%] xl:w-[40%] w-[85%] mt-5"
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

                <div className="text-end w-full">
                  <p className="mt-3 text-sm text-end">
                    Remember your password?{" "}
                    <Link className="text-red-500 underline" to="/auth/signin">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </section>
          <section>
            <ErrorPopup
              message={popup.message}
              popupToogle={popup.popupToogle}
              isSuccess={popup.isSuccess}
              closePopup={() =>
                setPopup((prev) => {
                  return {
                    ...prev,
                    isSuccess: false,
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

export default ResetPassword;
