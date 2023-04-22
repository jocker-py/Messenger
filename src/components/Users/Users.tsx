import React, {FC} from "react";
import s from "./Users.module.css";
import {UsersContainerPropsType} from "./UsersContainer";
import {Loader} from "../common/Loader/Loader";
import {EndPoint, Path} from "../../config/enums";
import User from "./User";
import axios from "axios";


type UsersPropsType = UsersContainerPropsType & {
  onPostChanged: (page: number) => void;
}

const Users: FC<UsersPropsType> = (props) => {
  const usersElements = props.users.map((user) => {
    const pathToUser = `${Path.PROFILE}/${user.id}`;
    const follow = () => {
      axios.post(EndPoint.follow + user.id, {
        headers: {
          "API-KEY": "094d9589-12fb-4e02-9b82-0b510c02fcd9",
        },
      }, {
        withCredentials: true,
      }).then((res) => {
        if (res.data.resultCode === 0) {
          props.follow(user.id);
        }
      });
    };
    const unfollow = () => {
      axios.delete(EndPoint.follow + user.id, {
        withCredentials: true,
      }).then((res) => {
        if (res.data.resultCode === 0) {
          props.unfollow(user.id);
        }
      });
    };
    return <User key={user.id}
                 className={s.userItem}
                 user={user}
                 follow={follow}
                 unfollow={unfollow}
                 path={pathToUser}/>;
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