import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <img className={styles.content__img} src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="mountains"/>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;