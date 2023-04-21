import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType, StateType} from "../../../redux/types";
import {connect} from "react-redux";

type MapStateToPropsType = (state: StateType) => ProfileType
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.profilePage.userProfile,
  };
};

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;