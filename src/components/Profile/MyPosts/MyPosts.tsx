import React, {ChangeEvent, FC} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {ProfileType} from "../../../redux/types";

type MyPostsType = ProfileType & {
  addPost: () => void,
};

const MyPosts: FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map(
    ({id, message, likes}) =>
      <Post key={id} id={id} likes={likes} message={message}/>);
  const addPost = () => {
    props.addPost();
  };
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div><textarea/></div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.postList}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;