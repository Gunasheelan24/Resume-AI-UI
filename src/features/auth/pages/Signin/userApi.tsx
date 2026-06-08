import userApi from "@/api/api";
import type { SignInResponse, SignUser } from "./types";

export const getUserResponse = userApi.injectEndpoints({
  // the endpoints provide a builder from rtk we need to sent a callback function
  endpoints: (builder) => ({
    // Endpoint definitions
    // after the endpoint Name we need to tell the rtk what kind of method
    // we are going to use now its mutation mean a post request it return an object
    signIn: builder.mutation<SignInResponse, SignUser>({
      // query is the main property and its an callback fn we need to return the object of the query
      query: (body) => ({
        url: `/auth/signin`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export default getUserResponse.useSignInMutation;
