import React, {FC} from "react";
import s from "./Users.module.css";
import {Loader} from "../common/Loader/Loader";
import {Path} from "../../config/enums";
import User from "./User";
import {UserType} from "../../redux/types";
import {UsersContainerPropsType} from "./UsersContainer";
import {getPages} from "../../helpers/getPages";


type UsersPropsType = UsersContainerPropsType & {
  onPostChanged: (page: number) => void;
}

const Users: FC<UsersPropsType> = ({
                                     users,
                                     follow,
                                     unfollow,
                                     totalUsersCount,
                                     pageSize,
                                     currentPage,
                                     onPostChanged,
                                     isFetching,
                                     isToggleFollowing,
                                   }) => {
  const usersElements = users.map((user: UserType) => {
    const onClickFollow = () => follow(user.id);
    const onClickUnfollow = () => unfollow(user.id);

    const pathToUser = `${Path.PROFILE}/${user.id}`;
    const disableUserButton = isToggleFollowing.some((id) => user.id === id);

    return <User key={user.id} className={s.userItem} user={user}
                 follow={onClickFollow} unfollow={onClickUnfollow} path={pathToUser}
                 disabled={disableUserButton}/>;

  });

  const pagesElements = getPages(totalUsersCount, pageSize).map(page => {
    const isCurrentPage = page === currentPage;
    const onClickPage = () => onPostChanged(page);
    return (
      <div key={page}
           onClick={onClickPage}
           className={isCurrentPage ?
             `${s.pageItem} ${s.selectedPageItem}`
             : s.pageItem}>{page}
      </div>
    );
  });
  return (
    <>
      {
        isFetching ?
          <Loader/> :
          <>
            <div className={s.userList}>{usersElements}</div>
            <div className={s.pageList}>{pagesElements}</div>
          </>
      }
    </>
  );
};


export default Users;