import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../assets/user.png";
import {UserType} from "../../redux/types";

type UserPropsType = {
  user: UserType
  toggleFollow: (e: React.MouseEvent<HTMLButtonElement>) => void
  path: string
  className: string
}

const User: FC<UserPropsType> = ({user, className, toggleFollow, path}) => {
  return (
    <div className={className}>
      <div>{user.name}</div>
      <button onClick={toggleFollow}>
        {user.followed ? "follow" : "unfollow"}
      </button>
      <NavLink to={path}>
        <div>
          <img className={s.userImg} src={user.photos.small || userPhoto} alt="userLogo"/>
        </div>
      </NavLink>
      <div>{user.uniqueUrlName}</div>
      <div>{user.status}</div>
    </div>
  );
};

export default User;