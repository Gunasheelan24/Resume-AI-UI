import userApi from "@/api/api";
import { childEndpoints, httpMethods, parentEndpoints } from "@/api/endpoint";
import type { ResetPasswordReturnType, ResetPasswordType } from "./types";

const resetPasswordApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation<ResetPasswordReturnType, ResetPasswordType>(
      {
        query: (body) => ({
          url: `${parentEndpoints.auth}/${childEndpoints.resetPassword}`,
          method: httpMethods.post,
          body,
        }),
      },
    ),
  }),
});

export default resetPasswordApi.useResetPasswordMutation;
