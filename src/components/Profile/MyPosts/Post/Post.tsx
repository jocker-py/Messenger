import React from 'react';
import styles from "./Post.module.css";

export type PostType = {likes: number, message: string};

const Post = (props: PostType) => {
  return (
    <div className={styles.item}>
      <img className={styles.img}
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eQbUCAZ2d69KWQrjdiu7lepxp3Yswe18Ozhk4B0jDQ&s"
         alt="avatar"/>
      {props.message}
      <div>
        <span>{'likes: ' + props.likes}</span>
      </div>
  </div>)
}

export default Post;