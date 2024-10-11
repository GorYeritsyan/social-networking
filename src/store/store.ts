import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import authSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";

const store = configureStore({
  reducer: {
    usersData: usersSlice,
    authData: authSlice,
    profileData: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
