import {ActionType} from "../config/enums";
import {PostType, ProfileType, UserProfileType} from "./types";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

// initial state
const initialState: ProfileType = {
  posts: [
    {likes: 2, message: "Hello, how are you?", id: 1},
    {likes: 3, message: "I'm fine, what about you?", id: 2},
  ],
  userProfile: null,
  profileStatus: "",
};

// reducer
const profileReducer = (state = initialState, action: ProfileAction) => {
  switch (action.type) {
    case ActionType.addPost:
      const newPost: PostType = {
        likes: 0,
        message: action.text,
        id: state.posts.length + 1,
      };
      const updatedPosts = [newPost, ...state.posts];
      return {...state, posts: updatedPosts};
    case ActionType.setUserProfile :
      return {...state, userProfile: action.userProfile};
    case ActionType.setProfileStatus :
      return {...state, profileStatus: action.profileStatus};
    default :
      return state;
  }
};

// thunks
export const getProfile = (userId: number) => {
  return (dispatch: Dispatch) => {
    return profileAPI
      .getProfile(userId)
      .then(res => dispatch(setUserProfile(res.data)));
  };
};

export const getProfileStatus = (userId: number) => {
  return (dispatch: Dispatch) => {
    return profileAPI
      .getProfileStatus(userId)
      .then(res => dispatch(setProfileStatus(res.data)));
  };
};

export const updateProfileStatus = (status: string) => {
  return (dispatch: Dispatch) => {
    return profileAPI
      .updateProfileStatus(status)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setProfileStatus(status));
        }
      });
  };
};

// types
type ProfileAction =
  ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setProfileStatus>;

// actions
export const addPost = (text: string) => ({type: ActionType.addPost, text: text} as const);
export const setUserProfile = (userProfile: UserProfileType) => ({
  type: ActionType.setUserProfile,
  userProfile: userProfile,
} as const);
export const setProfileStatus = (status: string) => ({
  type: ActionType.setProfileStatus,
  profileStatus: status,
} as const);



export default profileReducer;
