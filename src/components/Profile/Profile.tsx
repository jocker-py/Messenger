import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/types";

const Profile: FC<ProfileType> = (props) => {
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;