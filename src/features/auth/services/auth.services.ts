import api from "@/api/axios";
import axios from "axios";
import { childEndpoints, parentEndpoint } from "@/api/endpoint";

// types
import type { User } from "../pages/Signup/types";
import type { SignUser } from "../pages/Signin/types";

// signup handler
export const getcreatedAccountDetails = async (data: User) => {
  try {
    const createdAccountDetails = await api.post(
      `${parentEndpoint.auth}/${childEndpoints.createAccount}`,
      data,
    );
    return createdAccountDetails;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

// signin handler
export const signInHandler = async (data: SignUser) => {
  try {
    const userDetails = await api.post(
      `${parentEndpoint.auth}/${childEndpoints.signIn}`,
      data,
    );
    return userDetails;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};

// reset password handler
export const getResetPasswordResponse = async (data: { email: string }) => {
  try {
    const getResetPasswordResponse = await api.post(
      `${parentEndpoint.auth}/${childEndpoints.resetPassword}`,
      data,
    );

    return getResetPasswordResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }

    throw error;
  }
};
