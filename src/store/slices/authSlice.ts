import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../api/api";
import { AuthMeDataType, LoginResponseDataType, LoginType } from "../../types/types";



export const fetchLogin = createAsyncThunk<
  LoginResponseDataType,
  LoginType,
  {}
>("fetchLogin", async (data) => {
  const res = await AuthAPI.login(data);
  return res.data.data;
});

export const authMe = createAsyncThunk<AuthMeDataType, void, {}>(
  "authMe",
  async () => {
    const res = await AuthAPI.isAuth();
    return res.data.data;
  }
);

type LoginInitState = {
  userId: number | null;
  token?: string;
  id?: number | null;
  email: string;
  login: string ;
};

const initialState: LoginInitState = {
  userId: null,
  id: null,
  email: '',
  login: '',
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.userId = action.payload.userId
    });

    builder.addCase(authMe.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.id = action.payload.id
    });
  },
});


export default authSlice.reducer;
