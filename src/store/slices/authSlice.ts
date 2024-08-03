import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../api/api";

export const fetchLogin = createAsyncThunk<any, any, any>("fetchLogin", async (data) => {
  const res = await AuthAPI.login(data);
  return res.data.data;
});


const initialState: {userId: number | null } = {
  userId: null
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.userId = action.payload.userId
    });
  },
});

export default authSlice.reducer;
