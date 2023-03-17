import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ProfilePageType} from "../../redux/state";

type ProfileType = {state:ProfilePageType, addPost: AddPostType};
const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}

export default Profile;