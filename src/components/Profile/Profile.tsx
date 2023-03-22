import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {store: StoreType};
const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;