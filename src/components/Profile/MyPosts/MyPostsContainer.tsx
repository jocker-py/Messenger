import React, {FC} from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {DispatchType, StateType} from "../../../redux/types";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    updatePostText: (text: string) => dispatch(updateNewPostActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer: FC = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;