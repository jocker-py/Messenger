import React, {FC} from "react";
import userPhoto from "../../assets/user.png";
import s from "./Users.module.css";
import {UsersContainerPropsType} from "./UsersContainer";

type UsersPropsType = UsersContainerPropsType & {
  onPostChanged: (page: number) => void;
}

const Users: FC<UsersPropsType> = (props) => {
  const usersElements = props.users.map((user) => (
    <div key={user.id} className={s.userItem}>
      <div>{user.name}</div>
      <button onClick={() => props.toggleFollow(user.id)}>
        {user.followed ? "follow" : "unfollow"}
      </button>
      <div>
        <img className={s.userImg} src={user.photos.small || userPhoto} alt="userLogo"/>
      </div>
      <div>{user.uniqueUrlName}</div>
      <div>{user.status}</div>
    </div>));
  const pages = Math.ceil(props.totalUsersCount / props.pageSize);
  const pagesElements = pages && new Array(pages).slice(0, 5).fill(1)
    .map((page, idx) => page + idx)
    .map(page => <div key={page}
                      onClick={() => props.onPostChanged(page)}
                      className={page === props.currentPage ?
                        `${s.pageItem} ${s.selectedPageItem}`
                        : s.pageItem}>{page}</div>);
  return (
    <>
      <div className={s.userList}>{usersElements}</div>
      <div className={s.pageList}>{pages && pagesElements}</div>
    </>
  );
};


export default Users;