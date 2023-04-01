import React, {FC} from "react";
import styles from "./Friends.module.css";
import {FriendType} from "../../../redux/types";

type FriendsType = { friends: FriendType[] }
const Friends: FC<FriendsType> = (props) => {
  return (<div>
    <h3>Friends</h3>
    <div className={styles.list}>
      {props.friends.map(({id, src, name}) => <Friend key={id} id={id} src={src} name={name}/>)}
    </div>
  </div>);
};

const Friend: FC<FriendType> = (props) => {
  return (<div className={styles.item}>
    <div className={styles.boxImg}>
      <img className={styles.img} src={props.src} alt={props.name}/>
    </div>
    <div className={styles.name}>
      {props.name}
    </div>
  </div>);
};


export default Friends;