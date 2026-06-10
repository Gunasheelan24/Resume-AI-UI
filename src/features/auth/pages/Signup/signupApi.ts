import userApi from "@/api/api";
import { childEndpoints, httpMethods, parentEndpoints } from "@/api/endpoint";
import type { SignInResponse } from "../signin/types";
import type { CreateAccountTypes } from "./types";

const signupApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation<SignInResponse, CreateAccountTypes>({
      query: (body) => ({
        url: `${parentEndpoints.auth}/${childEndpoints.createAccount}`,
        method: httpMethods.post,
        body,
      }),
    }),
  }),
});

export default signupApi.useCreateAccountMutation;
