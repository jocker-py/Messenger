import {ActionType} from "../config/enums";
import {IAction, PostType, ProfileType} from "./types";


export type addPostActionCreatorType = () => IAction;
export const addPostActionCreator: addPostActionCreatorType = () => ({type: ActionType.addPost});

export type updatePostActionCreatorType = (text: string) => IAction
export const updateNewPostActionCreator: updatePostActionCreatorType = (text) => ({
  type: ActionType.updateNewPost,
  text: text,
});

const initialState: ProfileType = {
  posts: [
    {likes: 2, message: "Hello, how are you?", id: 1},
    {likes: 3, message: "I'm fine, what about you?", id: 2},
  ],
  newPostText: "",
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
    default :
      return state;
  }
};

export default profileReducer;