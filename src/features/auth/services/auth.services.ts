import api from "@/api/axios";
import type { User } from "../pages/Signup/types";

export const getcreatedAccountDetails = async (data: User) => {
  try {
    const createdAccountDetails = await api.post("auth/create-account", data);
    console.log(createdAccountDetails);
  } catch (error) {
    console.log(error, "error");
  }
};
