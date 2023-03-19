import {Types} from "../config/enums";
import {IAction, ProfilePageType} from "./types";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

export type addPostActionCreatorType = () => IAction;
export const addPostActionCreator:addPostActionCreatorType = () => ({type: Types.addPost});

export type updatePostActionCreatorType = (text:string) => IAction
export const updateNewPostActionCreator:updatePostActionCreatorType = (text) => ({type: Types.updateNewPost, text: text});


type ProfileReducerType = (state: ProfilePageType, action: IAction) => ProfilePageType;
const profileReducer: ProfileReducerType = (state, action) => {
  switch (action.type) {
    case Types.addPost:
    const newPost: PostType = {
      likes: 0,
      message: state.newPostText,
      id: state.posts.length + 1,
    }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case Types.updateNewPost :
    state.newPostText = action.text || '';
    return state;
    default : return state;
  }
}

export default profileReducer;