import userApi from "@/api/api";
import { childEndpoints, httpMethods, parentEndpoints } from "@/api/endpoint";
import type { ResetPasswordReturnType, VerifyOtpType } from "./types";

const resetPasswordApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyPassword: builder.mutation<ResetPasswordReturnType, VerifyOtpType>({
      query: (body) => ({
        url: `${parentEndpoints.auth}/${childEndpoints.verifyOtp}`,
        method: httpMethods.post,
        body,
      }),
    }),
  }),
});

export default resetPasswordApi.useVerifyPasswordMutation;
