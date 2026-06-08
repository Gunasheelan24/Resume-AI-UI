import api from "@/api/axios";
import axios from "axios";
import { childEndpoints, parentEndpoints } from "@/api/endpoint";

import type { VerifyOtp } from "../pages/verify-otp/types";

// reset password handler
export const getResetPasswordResponse = async (data: { email: string }) => {
  try {
    const getResetPasswordResponse = await api.post(
      `${parentEndpoints.auth}/${childEndpoints.resetPassword}`,
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

// verify otp
export const verifyOneTimePasswordHandler = async (
  value: VerifyOtp & { email: string },
) => {
  try {
    const response = await api.post(
      `${parentEndpoints.auth}/${childEndpoints.verifyOtp}`,
      value,
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.request?.data;
    }

    throw error;
  }
};
