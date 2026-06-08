import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SignInTypes {
  email: string;
  userName: string;
  token: string;
  isAuthorised: boolean;
}

const initialState: SignInTypes = {
  email: "",
  token: "",
  userName: "",
  isAuthorised: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<SignInTypes>) => {
      // payload data
      const data = actions.payload;

      // storing the data in the state
      state.email = data.email;
      state.userName = data.userName;
      state.token = data.token;

      // here returning the state value
      return state;
    },
  },
});

export const { login } = signInSlice.actions;
export default signInSlice.reducer;
