import type { User } from "../Signup/types";

export type VerifyOtpType = Pick<User, "password"> & {
  otp: string;
  password: string;
  confirmPassword: string;
};
