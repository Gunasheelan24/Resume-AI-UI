import React, { useState } from "react";
import ErrorPopup from "@/components/common/error-popup/ErrorPopup";
import Loader from "@/components/common/app-loader";
import useVerifyPasswordMutation from "./verifyOtpApi";
import z from "zod";

import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiOutlineRefresh } from "react-icons/hi";
import { verifyImg } from "@/assets/png/Index";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import type { PopupType } from "@/types/popup-types";
import type { ResetPasswordFormTypes } from "./types";
import type { GlobalApiError } from "@/types/global";

const VerifyOtp: React.FC = () => {
  // React Router Hook
  const { email } = useParams();
  const navigate = useNavigate();

  // RTK
  const [resetPasswordHandler, { isLoading }] = useVerifyPasswordMutation();

  // error popup hook
  const [popup, setPopup] = useState<PopupType>({
    isSuccess: false,
    message: "",
    popupToogle: false,
  });

  // Validation Schema
  const validationSchema = z
    .object({
      otp: z
        .string("Otp should be a string")
        .nonempty("Otp is required")
        .min(6, "Otp must be at least 6 characters")
        .max(6, "Otp cannot exceed 6 characters"),
      password: z
        .string("password should be a string")
        .nonempty("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(21, "Password cannot exceed 16 characters"),
      confirmPassword: z
        .string("confirmPassword should be a string")
        .nonempty("confirmPassword is required")
        .min(8, "confirmPassword must be at least 8 characters")
        .max(21, "confirmPassword cannot exceed 16 characters"),
    })
    .refine((data) => data.password == data.confirmPassword, {
      error: "Passwords did not match",
      path: ["confirmPassword"],
    });

  // React Hook Form
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors, touchedFields },
  } = useForm<ResetPasswordFormTypes>({
    defaultValues: {
      otp: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(validationSchema),
  });

  // Handle Submit
  const handleVerifyOtp = async (value: ResetPasswordFormTypes) => {
    try {
      const resetPasswordResponse = await resetPasswordHandler({
        ...value,
        email: email as string,
      }).unwrap();

      if (resetPasswordResponse.statusCode == 201) {
        setPopup({
          isSuccess: true,
          popupToogle: true,
          message: resetPasswordResponse.message,
        });
        navigate("/auth/signin?redirect=true&resetPassword=successfull");
      }
    } catch (exception) {
      const error = exception as GlobalApiError;
      if (error?.status == 401) {
        setPopup({
          isSuccess: false,
          popupToogle: true,
          message: error?.data?.message,
        });
        return;
      }

      setPopup({
        isSuccess: false,
        popupToogle: true,
        message: "Something went wrong",
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
        <main className="h-screen">
          {/* Header */}
          <section className="flex absolute w-full items-center justify-between ps-4 pe-4 mt-4">
            <p className="text-sm h-full font-black tracking-[-0.04em] text-gray-900">
              Resume<span className="text-[rgba(59,130,246,0.6)]">Builder</span>
            </p>

            <p className="text-md">
              Remember Your Password?{" "}
              <Link className="text-red-500 underline" to="/auth/signin ">
                Login
              </Link>
            </p>
          </section>

          {/* OTP CONTENT */}
          <section className="flex flex-col items-center justify-center h-full">
            <form
              className="md:w-[70%] xl:w-[40%] w-[95%]"
              onSubmit={handleSubmit(handleVerifyOtp)}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-center">
                    <img
                      src={verifyImg}
                      alt="verifyImage"
                      className="w-15 mb-3"
                    />
                  </div>
                  <CardTitle className="text-center">Almost There!</CardTitle>
                  <CardDescription className="text-center">
                    Enter the 6-digit verification code to securely reset your
                    password
                    <span className="block font-medium underline underline-offset-2">
                      {email ? email : "something@gmail.com"}
                    </span>
                  </CardDescription>
                </CardHeader>

                <FieldSet className="flex items-center">
                  <FieldGroup className="w-[90%]">
                    <Field>
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        autoComplete="password"
                        placeholder="Enter your password"
                        className="h-10"
                        {...register("password")}
                      />
                      {errors.password && touchedFields.password && (
                        <FieldDescription className="text-red-500">
                          {errors.password.message}
                        </FieldDescription>
                      )}
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="confirm-password">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        type="password"
                        id="confirmPassword"
                        autoComplete="confirmPassword"
                        placeholder="Enter your confirm password"
                        className="h-10"
                        {...register("confirmPassword")}
                      />
                      {errors.confirmPassword &&
                        touchedFields.confirmPassword && (
                          <FieldDescription className="text-red-500">
                            {errors.confirmPassword.message}
                          </FieldDescription>
                        )}
                    </Field>
                  </FieldGroup>
                </FieldSet>

                <CardContent>
                  <Controller
                    name="otp"
                    control={control}
                    rules={{
                      required: "OTP Is required",
                      minLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                      },
                    }}
                    render={({ field }) => (
                      <FieldSet className="mb-2">
                        <FieldGroup>
                          <Field>
                            <div className="relative h-20">
                              <div className="absolute left-1/2 -translate-x-1/2">
                                <p className="text-center mb-3 underline text-emerald-950">
                                  Verification Code
                                </p>
                                <InputOTP
                                  maxLength={6}
                                  id="otp"
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  value={field.value}
                                >
                                  <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                  </InputOTPGroup>
                                  <InputOTPSeparator className="mx-2" />
                                  <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                  </InputOTPGroup>
                                </InputOTP>
                              </div>
                            </div>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    )}
                  />
                  {errors.otp && touchedFields.otp && (
                    <FieldDescription className="text-red-500 text-center">
                      {errors.otp.message}
                    </FieldDescription>
                  )}
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-5">
                  <Button size="lg" variant="outline" className="flex-1">
                    <HiOutlineRefresh />
                    Resend Code
                  </Button>
                  <Button className="flex-1" size="lg">
                    Verify
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </section>
          <ErrorPopup
            isSuccess={popup.isSuccess}
            message={popup.message}
            popupToogle={popup.popupToogle}
            closePopup={() =>
              setPopup((prev) => {
                return {
                  ...prev,
                  isSuccess: false,
                  message: "",
                  popupToogle: false,
                };
              })
            }
          />
        </main>
      )}
    </>
  );
};

export default VerifyOtp;
