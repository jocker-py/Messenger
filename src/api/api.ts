import axios from "axios";
import {EndPoint} from "../config/enums";

// base
const Request = axios.create({
  withCredentials: true,
  baseURL: EndPoint.root,
  headers: {
    "API-KEY": "094d9589-12fb-4e02-9b82-0b510c02fcd9",
  },
});

//Users
const getUsers = (page: number, count: number) => {
  return Request.get(EndPoint.users + `?page=${page}&count=${count}`);
};

const follow = (userId: number) => {
  return Request.post(EndPoint.follow + userId);

};

const unfollow = (userId: number) => {
  return Request.delete(EndPoint.follow + userId);
};

// Auth
const setAuthMe = () => {
  return Request.get(EndPoint.authMe);
};

//Profile
const getProfile = (userId: number) => {
  return Request.get(EndPoint.profile + userId);

};

const getProfileStatus = (userId: number) => {
  return Request.get(EndPoint.status + userId);
};

const updateProfileStatus = (status: string) => {
  return Request.put(EndPoint.status, {status: status});
};



export const authAPI = {
  setAuthMe,
};

export const usersAPI = {
  getUsers,
  follow,
  unfollow,
};

export const profileAPI = {
  getProfile,
  getProfileStatus,
  updateProfileStatus,
};