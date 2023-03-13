import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

type PostType = {likes: number, message: string};

const MyPosts = () => {
  const posts:PostType[] = [
    {likes: 2, message: 'Hello, how are you?'},
    {likes: 3, message: "I'm fine, what about you?"}
  ]
  return (
    <div>My posts
    <h2>New posts</h2>
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
    <div className={styles.posts}>
      {posts.map(post => <Post likes={post.likes} message={post.message}/>)}
    </div>
  </div>
  );
}

export default MyPosts;