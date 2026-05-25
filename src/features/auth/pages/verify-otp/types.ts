import type { User } from "../signup/types";

export type VerifyOtpType = Pick<User, "password"> & {
  otp: string;
  password: string;
  confirmPassword: string;
};
