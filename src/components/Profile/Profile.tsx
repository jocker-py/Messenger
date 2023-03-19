import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchType, ProfilePageType} from "../../redux/types";

type ProfileType = {
  state:ProfilePageType,
  dispatch: DispatchType;
};
const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;