import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthAPI, token } from "../../api/api";
import { AuthMeDataType, LoginResponseDataType, LoginType } from "../../types/types";

export const fetchLogin = createAsyncThunk<
  LoginResponseDataType,
  LoginType,
  {}
>("fetchLogin", async (data) => {
  const res = await AuthAPI.login(data);
  return res.data.data;
});

export const fetchLogout = createAsyncThunk(
  'fetchLogout',
  async () => {
    const res = await AuthAPI.logout();
    return res.data.data
  }
)

export const fetchAuthMe = createAsyncThunk<AuthMeDataType, string | null, {}>(
  "fetchAuthMe",
  async (newToken) => {
    const res = await AuthAPI.isAuth(newToken);
    return res.data.data;
  }
);

type LoginInitState = {
  userId: number | null;
  token: string | null,
  loggedUser: {
    id?: number | null;
    email?: string;
    login?: string ;

  }
};

const initialState: LoginInitState = {
  userId: null,
  token: localStorage.getItem('token'),
  loggedUser: {},
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.userId = action.payload.userId,
      localStorage.setItem('token', action.payload.token)
    });

    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.loggedUser = {}
      localStorage.setItem('token', '')
    })

    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.loggedUser = action.payload
    });
  },
});


export default authSlice.reducer;
