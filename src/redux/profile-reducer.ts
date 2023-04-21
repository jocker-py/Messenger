import {ActionType} from "../config/enums";
import {IAction, PostType, ProfileType, UserProfileType} from "./types";


export type AddPostType = () => IAction;
export const addPost: AddPostType = () => ({type: ActionType.addPost});

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

const initialState: ProfileType = {
  posts: [
    {likes: 2, message: "Hello, how are you?", id: 1},
    {likes: 3, message: "I'm fine, what about you?", id: 2},
  ],
  newPostText: "",
  userProfile: null,
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
    default :
      return state;
  }
};

export default profileReducer;