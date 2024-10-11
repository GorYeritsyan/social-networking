import axios from "axios";

import { EditProfileDataType, LoginType } from "../types/types";

export const imageUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

//Authorization
const API_KEY = process.env.REACT_APP_API_KEY;
export const token = process.env.REACT_APP_TOKEN;

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": API_KEY,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const UsersAPI = {
  getUsers(page = 1) {
    return instance.get(`/users?count=20&page=${page}`);
  },
};

export const AuthAPI = {
  login(data: LoginType) {
    return instance.post(`/auth/login`, data);
  },

  logout() {
    return instance.post("/auth/logout");
  },

  isAuth(newToken: string | null) {
    return instance.get("/auth/me", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    });
  },
};

export const ProfileAPI = {
  getProfile(userId?: string) {
    return instance.get(`/profile/${userId}`);
  },
  editProfile(data: EditProfileDataType) {
    return instance.put("/profile", data, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  },

  editProfilePhoto(file: FormData) {
    return instance.put(`/profile/photo`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  },
};
