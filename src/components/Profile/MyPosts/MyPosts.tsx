import React from 'react';
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>My posts
    <h2>New posts</h2>
    <div>
      <div className={styles.item}>post1</div>
      <div className={styles.item}>post2</div>
    </div>
  </div>
  );
}

export default MyPosts;