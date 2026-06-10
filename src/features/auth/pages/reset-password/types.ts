import type { ApiResponse } from "@/types/global";

export type ResetPasswordType = { email: string };
export type ResetPasswordReturnType = ApiResponse<ResetPasswordType>;
