import React, {FC} from "react";
import styles from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/types";
import {Loader} from "../../common/Loader/Loader";
import avatar from "../../../assets/user.png";
import react from "../../../assets/react.png";
import redux from "../../../assets/redux.png";
import ts from "../../../assets/ts.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";

type ProfileInfoType = {
  userProfile: UserProfileType
}

const ProfileInfo: FC<ProfileInfoType> = ({userProfile}) => {
  if (!userProfile) {
    return <Loader/>;
  }
  const icons: { [key: string]: string } = {react, redux, ts, js, css};
  const {
    userId, lookingForAJob, lookingForAJobDescription,
    fullName, contacts, photos,
  } = userProfile;
  console.log(userProfile);
  const wishlist = lookingForAJobDescription && lookingForAJobDescription.split(" ").map(item => {
    item = item.trim().toLowerCase().replaceAll(/\W/g, "");
    if (item in icons) {
      return <li><img className={styles.wishImg} src={icons[item]} alt={item}/></li>;
    }
    return <li>{item}</li>;
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img}
             src={photos.large || avatar}
             alt={fullName || "avatar"}/>
      </div>
      <div className={styles.description}>
        <h2>{fullName}</h2>
        <div>{userId}</div>
        <button>{lookingForAJob ? "I'm looking for a job" : "I'm happy working for company"}</button>
        {
          lookingForAJobDescription && (
            <div className={styles.wishContainer}>
              <h4 className={styles.wishTitle}>I would like to work with</h4>
              <ul className={styles.wishList}>
                {wishlist}
              </ul>
            </div>)
        }
      </div>
    </div>);
};

export default ProfileInfo;