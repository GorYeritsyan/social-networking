import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProfileAPI } from "../../api/api";
import {
  EditProfileDataType,
  ProfileResponseType,
  UserPhoto,
} from "../../types/types";

export const fetchProfile = createAsyncThunk<
  ProfileResponseType,
  string | undefined,
  {}
>("fetchProfile", async (userId) => {
  const res = await ProfileAPI.getProfile(userId);
  return res.data;
});

export const editProfile = createAsyncThunk<unknown, EditProfileDataType, {}>(
  "editProfile",
  async (data) => {
    const res = await ProfileAPI.editProfile(data);
    return res.data;
  }
);

export const fetchEditedPhoto = createAsyncThunk<UserPhoto, FormData, {}>(
  "fetchEditedPhoto",
  async (file) => {
    const res = await ProfileAPI.editProfilePhoto(file);
    return res.data.data.photos;
  }
);

type ProfileInitState = {
  myProfile: ProfileResponseType;
};

const initialState: ProfileInitState = {
  myProfile: {},
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.myProfile = action.payload;
    });

    builder.addCase(fetchEditedPhoto.fulfilled, (state, action) => {
      state.myProfile.photos = action.payload
      localStorage.setItem("photos", JSON.stringify(action.payload));
    });
  },
});

export default profileSlice.reducer;
