import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ProfilePageType, UpdatePostTextType} from "../../redux/state";

type ProfileType = {state:ProfilePageType, addPost: AddPostType, updatePostText: UpdatePostTextType};
const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}
               addPost={props.addPost}
               newPostText={props.state.newPostText}
               updatePostText={props.updatePostText}/>
    </div>
  );
}

export default Profile;