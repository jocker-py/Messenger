import React, {LegacyRef} from 'react';
import Post, { PostType } from "./Post/Post";
import styles from "./MyPosts.module.css";

type MyPostsType = {posts: PostType[]}
const MyPosts = (props:MyPostsType) => {
  const postsElements = props.posts.map(
    ({id, message, likes}) =>
      <Post key={id} id={id} likes={likes} message={message}/>);
  const newPostElement:LegacyRef<HTMLTextAreaElement> = React.createRef();
  const showPost = () => {
    alert(newPostElement.current!.value);
    newPostElement.current!.value = '';
  };
  return (
    <div className={styles.posts}>
      <h3>My posts</h3>
      <div><textarea ref={newPostElement} /></div>
      <div><button onClick={showPost}>Add post</button></div>
      <div className={styles.postList}>{postsElements}</div>
  </div>
  );
}

export default MyPosts;