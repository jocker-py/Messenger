import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/types";
import {Loader} from "../common/Loader/Loader";

type ProfilePropsType = ProfileType & {
  updateProfileStatus: (status: string) => void
}

const Profile: FC<ProfilePropsType> = ({profileStatus, updateProfileStatus, userProfile}) => {
  if (!userProfile) {
    return <Loader/>;
  }
  return (
    <div>
      <ProfileInfo userProfile={userProfile}
                   profileStatus={profileStatus}
                   updateStatus={updateProfileStatus}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;