import type { User } from "../Signup/types";

export type VerifyOtp = Pick<User, "password"> & {
  otp: string;
  password: string;
  confirmPassword: string;
};
