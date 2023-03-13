import React from "react";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img className={styles.content__img} src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="mountains"/>
      <div>ava + description</div>
      <div>My posts
        <div>New posts</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;