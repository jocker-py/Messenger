import React, {Component} from "react";
import {UserType} from "../../redux/types";
import axios from "axios";
import userPhoto from "../../assets/user.png";

type UsersPropsType = {
  users: Array<UserType>;
  setUsers: (users: Array<UserType>) => void;
  toggleFollow: (id: number) => void;
}

export class Users extends Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => this.props.setUsers(res.data.items));
  }

  render() {
    const usersElements = this.props.users.map((user) => (
      <div key={user.id}>
        <div>{user.name}</div>
        <button onClick={() => this.props.toggleFollow(user.id)}>
          {user.followed ? "follow" : "unfollow"}
        </button>
        <div>
          <img src={user.photos.small || userPhoto} alt="userLogo"/>
        </div>
        <div>{user.uniqueUrlName}</div>
        <div>{user.status}</div>
      </div>));
    return (
      <div>
        {usersElements}
      </div>
    );
  }
};