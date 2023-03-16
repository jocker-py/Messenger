import React from 'react';
import Post, { PostType } from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  const posts:PostType[] = [
    {likes: 2,
      message: 'Hello, how are you?',
      id: 'message_1'},
    {likes: 3,
      message: "I'm fine, what about you?",
      id: 'message_2'}
  ]
  return (
    <div className={styles.posts__block}>
      <h3>My posts</h3>
      <div>
        <textarea ></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        {posts.map(
          ({id, message, likes}) =>
            <Post key={id} id={id} likes={likes} message={message}/>)}
      </div>
  </div>
  );
}

export default MyPosts;