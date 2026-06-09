import type { ApiResponse } from "@/types/global";
import type { CreateAccountTypes } from "../signup/types";

export type VerifyOtpType = Pick<CreateAccountTypes, "password"> & {
  otp: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export type ResetPasswordFormTypes = Pick<
  VerifyOtpType,
  "otp" | "password" | "confirmPassword"
>;
export type ResetPasswordReturnTypes = ApiResponse<{ email: string }>;
