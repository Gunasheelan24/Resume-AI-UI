import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "@/features/auth/pages/signin/signInSlice";
import userApi from "@/api/api";

const appStore = configureStore({
  reducer: {
    signIn: signInReducer,

    // API
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

export type AppStoreType = ReturnType<typeof appStore.getState>;
export type AppDispatchType = typeof appStore.dispatch;
export default appStore;
