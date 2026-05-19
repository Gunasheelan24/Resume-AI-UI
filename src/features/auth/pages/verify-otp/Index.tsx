import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiOutlineRefresh } from "react-icons/hi";
import { Field } from "@/components/ui/field";
import { verifyImg } from "@/assets/png/Index";
// import { useForm, Controller } from "react-hook-form";
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
import "./verifyOtp.module.scss";

const VerifyOtp: React.FC = () => {
  // React Hook Form
  // const {
  //   control,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, touchedFields },
  // } = useForm({
  //   defaultValues: {
  //     otp: "",
  //   },
  // });

  // // Handle Submit
  return (
    <main className="h-screen">
      {/* Header */}
      <section className="flex absolute w-full items-center justify-between ps-4 pe-4 mt-4">
        <p className="text-sm h-full font-black tracking-[-0.04em] text-gray-900">
          Resume<span className="text-[rgba(59,130,246,0.6)]">Builder</span>
        </p>

        <p className="text-md">
          Remember Your Password?{" "}
          <Link className="text-red-500 underline" to="/auth/signup">
            Login
          </Link>
        </p>
      </section>

      {/* OTP CONTENT */}
      <section className="flex flex-col items-center justify-center h-full">
        <form className="md:w-[70%] xl:w-[40%] w-[95%]">
          <Card>
            <CardHeader>
              <div className="flex justify-center">
                <img src={verifyImg} alt="verifyImage" className="w-15 mb-3" />
              </div>
              <CardTitle className="text-center">Almost There!</CardTitle>
              <CardDescription className="text-center">
                Enter the 6-digit verification code to securely reset your
                password
                <span className="block font-medium underline underline-offset-2">
                  gunasheelan16@gmail.com
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Field>
                <div className="relative h-15">
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <InputOTP maxLength={6} id="otp" required>
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
    </main>
  );
};

export default VerifyOtp;
