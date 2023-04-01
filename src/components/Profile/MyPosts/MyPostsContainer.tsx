import React, {FC} from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from "../../../redux/types";
import {StoreContext} from "../../../redux/StoreContext";

const MyPostsContainer: FC = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        const state = store.getState().profilePage as ProfileType;
        const updatePostText = (text: string) => {
          store.dispatch(updateNewPostActionCreator(text));
        };
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        return (
          <MyPosts
            posts={state.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            updatePostText={updatePostText}/>
        );
      }
    }
  </StoreContext.Consumer>;
};

export default MyPostsContainer;