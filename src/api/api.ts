import axios from "axios";
import { LoginType } from "../types/types";

export const imageUrl =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const API_KEY = "d6ad6035-023d-4093-b438-0b99459c3256";
export const token = "e32bba8a-1aa3-4c8d-a3f4-7722e1db7398";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": API_KEY,
    // Authorization: `Bearer ${token}`,
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

  logout(){
    return instance.post('/auth/logout')
  },

  isAuth(newToken: string | null) {
    return instance.get("/auth/me", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${newToken}`
      }
    });
  },
};

export const ProfileAPI = {
  getProfile(userId?: string) {
    return instance.get(`/profile/${userId}`);
  },
};

//create LOGIN page and FETCH more USERS by scrolling
