import type { ApiResponse } from "@/types/global";

export interface SignUser {
  email: string;
  password: string;
}

export interface ApiError {
  data: {
    message: string;
    error: string;
    statusCode: number;
  };
  status: number;
}

// LOGIN API RETURN RESPONSE TYPE
type ResponseDataType = Pick<SignUser, "email"> & {
  token: string;
  userName: string;
};

export type SignInResponse = ApiResponse<ResponseDataType>;
