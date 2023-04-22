import axios from "axios";
import {EndPoint} from "../config/enums";

const Request = axios.create({
  withCredentials: true,
  baseURL: EndPoint.root,
  headers: {
    "API-KEY": "094d9589-12fb-4e02-9b82-0b510c02fcd9",
  },
});

const getUsers = (page: number, count: number) => {
  return Request
    .get(EndPoint.users + `?page=${page}&count=${count}`)
    .then(res => res.data);
};

const getProfile = (userId: number) => {
  return Request
    .get(EndPoint.profile + userId)
    .then(res => res.data);
};

const follow = (userId: number) => {
  return Request
    .post(EndPoint.follow + userId)
    .then((res) => res.data.resultCode === 0);
};

const unfollow = (userId: number) => {
  return Request
    .delete(EndPoint.follow + userId)
    .then(res => res.data.resultCode === 0);
};

const setAuthMe = () => {
  return Request
    .get(EndPoint.authMe)
    .then(res => res.data.resultCode === 0 ? res.data.data : null);
};

export const authAPI = {
  setAuthMe,
};

export const usersAPI = {
  getUsers,
  getProfile,
  follow,
  unfollow,
};