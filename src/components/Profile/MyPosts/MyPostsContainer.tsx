import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType, StateType} from "../../../redux/types";
import {connect} from "react-redux";

type MapStateToPropsType = (state: StateType) => ProfileType
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    posts: state.profilePage.posts,
    userProfile: state.profilePage.userProfile,
  };
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;