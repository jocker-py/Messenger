import React from 'react';
import Post, { PostType } from "./Post/Post";
import styles from "./MyPosts.module.css";

type MyPostsType = {posts: PostType[]}
const MyPosts = (props:MyPostsType) => {
  const postsElements = props.posts.map(
    ({id, message, likes}) =>
      <Post key={id} id={id} likes={likes} message={message}/>);
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div>
        <textarea ></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={styles.postList}>
        {postsElements}
      </div>
  </div>
  );
}

export default MyPosts;