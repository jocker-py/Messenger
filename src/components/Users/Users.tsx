import React, {FC, MouseEvent} from "react";
import s from "./Users.module.css";
import {UsersContainerPropsType} from "./UsersContainer";
import {Loader} from "../common/Loader/Loader";
import {Path} from "../../config/enums";
import User from "./User";

type UsersPropsType = UsersContainerPropsType & {
  onPostChanged: (page: number) => void;
}

const Users: FC<UsersPropsType> = (props) => {
  const usersElements = props.users.map((user) => {
    const pathToUser = `${Path.PROFILE}/${user.id}`;
    const toggleFollow = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      props.toggleFollow(user.id);
    };
    return <User key={user.id}
                 className={s.userItem}
                 user={user}
                 toggleFollow={toggleFollow}
                 path={pathToUser}/>
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