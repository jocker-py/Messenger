import React, {FC} from 'react';
import {StoreType} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from '../../../redux/types';

type MyPostsContainerType = { store: StoreType };
const MyPostsContainer: FC<MyPostsContainerType> = (props) => {
  const state = props.store.getState().profilePage as ProfileType;
  const updatePostText = (text: string) => {
    props.store.dispatch(updateNewPostActionCreator(text))
  }
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  return (
    <MyPosts
      posts={state.posts}
      newPostText={state.newPostText}
      addPost={addPost}
      updatePostText={updatePostText}/>
  );
};

export default MyPostsContainer;