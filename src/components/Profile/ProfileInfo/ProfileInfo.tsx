import React, {FC} from "react";
import styles from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/types";
import {Loader} from "../../common/Loader/Loader";

type ProfileInfoType = {
  userProfile: UserProfileType
}

const ProfileInfo: FC<ProfileInfoType> = ({userProfile}) => {
  if (!userProfile) {
    return <Loader/>;
  }
  const {userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos} = userProfile;
  const contactsElements = [];
  for (let i in contacts) {
    const contact = <div>{i}</div>;
    contactsElements.push(contact);
  }
  const photosElements = [];
  for (let i in photos) {
    const photo = <div>{i}</div>;
    photosElements.push(photo);
  }
  return (
    <div>
      <div>
        <img className={styles.img}
             src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600"
             alt="mountains"/>
      </div>
      <div className={styles.description}>ava + description</div>
      <div>{userId}</div>
      <div>{lookingForAJob}</div>
      <div>{lookingForAJobDescription}</div>
      <div>{fullName}</div>
      <div>
        <div>{contactsElements}</div>
        <div>{photosElements}</div>
      </div>
      <div></div>
    </div>);
};

export default ProfileInfo;