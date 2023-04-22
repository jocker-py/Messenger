import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import userPhoto from "../../assets/user.png";
import {UserType} from "../../redux/types";

type UserPropsType = {
  user: UserType
  follow: () => void
  unfollow: () => void
  path: string
  className: string
}

const User: FC<UserPropsType> = ({user, className, follow, unfollow, path}) => {
  return (
    <div className={className}>
      <NavLink to={path}>
        <div>
          <img className={s.userImg} src={user.photos.small || userPhoto} alt="userLogo"/>
        </div>
      </NavLink>
      <div>{user.name}</div>
      <button onClick={user.followed ? unfollow : follow}>
        {user.followed ? "follow" : "unfollow"}
      </button>
      <div>{user.uniqueUrlName}</div>
      <div>{user.status && user.status}</div>
    </div>
  );
};

export default User;