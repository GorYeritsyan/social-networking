import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileAPI } from "../../api/api";
import { ProfileResponseType, UserPhoto } from "../../types/types";

export const fetchProfile = createAsyncThunk<
  ProfileResponseType,
  string | undefined,
  {}
>("fetchProfile", async (userId) => {
  const res = await ProfileAPI.getProfile(userId);
  return res.data;
});


type ProfileInitState = {
  myProfile: ProfileResponseType | null;
};

const initialState: ProfileInitState = {
  myProfile: null,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.myProfile = action.payload;
    });
  },
});

export default profileSlice.reducer;
