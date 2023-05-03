import React, {FC} from "react";
import s from "./Users.module.css";
import {Loader} from "../common/Loader/Loader";
import {Path} from "../../config/enums";
import User from "./User";
import {usersAPI} from "../../api/api";
import {UserType} from "../../redux/types";
import {UsersContainerPropsType} from "./UsersContainer";


type UsersPropsType = UsersContainerPropsType & {
  onPostChanged: (page: number) => void;
}

const Users: FC<UsersPropsType> = (props) => {
  const usersElements = props.users.map((user: UserType) => {
    const pathToUser = `${Path.PROFILE}/${user.id}`;
    const follow = () => {
      props.togglePendingFollow(user.id, true);
      usersAPI
        .follow(user.id)
        .then(res => res && props.follow(user.id))
        .then(() => props.togglePendingFollow(user.id, false));
    };
    const unfollow = () => {
      props.togglePendingFollow(user.id, true);
      usersAPI
        .unfollow(user.id)
        .then(res => res && props.unfollow(user.id))
        .then(() => props.togglePendingFollow(user.id, false));
    };
    const disableUserButton = props.isToggleFollowing.some((id) => user.id === id);
    return <User key={user.id} className={s.userItem} user={user}
                 follow={follow} unfollow={unfollow} path={pathToUser}
                 disabled={disableUserButton}/>;

  });
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
      {
        props.isFetching ?
          <Loader/> :
          <>
            <div className={s.userList}>{usersElements}</div>
            <div className={s.pageList}>{pages && pagesElements}</div>
          </>
      }
    </>
  );
};


export default Users;