import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>My posts
    <h2>New posts</h2>
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
    <div>
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