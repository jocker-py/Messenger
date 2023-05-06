import React, {FC} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {ProfileType} from "../../../redux/types";
import {AddTextForm, FormDataType} from "./AddTextForm/AddTextForm";


type MyPostsType = ProfileType & {
  addPost: (text: string) => void
};

const MyPosts: FC<MyPostsType> = (props) => {
  const postsElements = props.posts.map(
    ({id, message, likes}) =>
      <Post key={id} id={id} likes={likes} message={message}/>);
  const onAddPost = ({postMessage}: FormDataType) => {
    props.addPost(postMessage);
  };
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <AddTextForm onSubmit={onAddPost}/>
      <div className={styles.postList}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;