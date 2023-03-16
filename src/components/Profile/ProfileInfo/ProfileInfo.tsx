import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (<div>
      <div>
        <img className={styles.img}
             src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600"
             alt="mountains"/>
      </div>
      <div className={styles.description}>ava + description</div>
    </div>)
}

export default ProfileInfo;