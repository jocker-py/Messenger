import React, {ChangeEvent} from 'react';
import Post, { PostType } from "./Post/Post";
import styles from "./MyPosts.module.css";
import {AddPostType, UpdatePostTextType} from "../../../redux/state";

type MyPostsType = {posts: PostType[], addPost: AddPostType, newPostText: string, updatePostText: UpdatePostTextType};
const MyPosts = (props:MyPostsType) => {
  const postsElements = props.posts.map(
    ({id, message, likes}) =>
      <Post key={id} id={id} likes={likes} message={message}/>);
  const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updatePostText(e.currentTarget.value)
  }
  const addPost = () => props.addPost();
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div><textarea value={props.newPostText} onChange={updatePostText}/></div>
      <div><button onClick={addPost}>Add post</button></div>
      <div className={styles.postList}>{postsElements}</div>
  </div>
  );
}

export default MyPosts;