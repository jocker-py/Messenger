import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>My posts
    <h2>New posts</h2>
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
    <div className={styles.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
  );
}

export default MyPosts;