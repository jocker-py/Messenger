import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/types";
import {Loader} from "../common/Loader/Loader";

const Profile: FC<ProfileType> = (props) => {
  if (!props.userProfile) {
    return <Loader/>;
  }
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;