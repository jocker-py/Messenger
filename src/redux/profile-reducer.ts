import {ActionType} from "../config/enums";
import {IAction, PostType, ProfileType, UserProfileType} from "./types";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


export type AddPostType = (text: string) => IAction;
export const addPost: AddPostType = (text) => ({type: ActionType.addPost, text});

export type UpdateNewPostTextType = (text: string) => IAction
export const updateNewPostText: UpdateNewPostTextType = (text) => ({
  type: ActionType.updateNewPost,
  text: text,
});

export type SetUserProfileType = (userProfile: UserProfileType) => IAction
export const setUserProfile: SetUserProfileType = (userProfile) => {
  return {
    type: ActionType.setUserProfile,
    userProfile: userProfile,
  };
};

export type SetProfileStatusType = (status: string) => IAction
export const setProfileStatus: SetProfileStatusType = (status) => ({
  type: ActionType.setProfileStatus,
  profileStatus: status,
});

const initialState: ProfileType = {
  posts: [
    {likes: 2, message: "Hello, how are you?", id: 1},
    {likes: 3, message: "I'm fine, what about you?", id: 2},
  ],
  newPostText: "",
  userProfile: null,
  profileStatus: "",
};

type ProfileReducerType = (state: ProfileType, action: IAction) => ProfileType;
const profileReducer: ProfileReducerType = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.addPost:
      const newPost: PostType = {
        likes: 0,
        message: state.newPostText,
        id: state.posts.length + 1,
      };
      const updatedPosts = [newPost, ...state.posts];
      return {...state, posts: updatedPosts, newPostText: ""};
    case ActionType.updateNewPost :
      return {...state, newPostText: action.text || ""};
    case ActionType.setUserProfile :
      return {...state, userProfile: action.userProfile || null};
    case ActionType.setProfileStatus :
      return {...state, profileStatus: action.profileStatus || ""};
    default :
      return state;
  }
};

export const getProfile = (userId: number) => {
  return (dispatch: Dispatch<IAction>) => {
    return profileAPI
      .getProfile(userId)
      .then(res => dispatch(setUserProfile(res.data)));
  };
};

export const getProfileStatus = (userId: number) => {
  return (dispatch: Dispatch<IAction>) => {
    return profileAPI
      .getProfileStatus(userId)
      .then(res => dispatch(setProfileStatus(res.data)));
  };
};

export const updateProfileStatus = (status: string) => {
  return (dispatch: Dispatch<IAction>) => {
    return profileAPI
      .updateProfileStatus(status)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setProfileStatus(status));
        }
      });
  };
};

export default profileReducer;