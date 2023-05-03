import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType, UsersType, UserType} from "../../redux/types";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  follow,
  unfollow, togglePendingFollow,
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends Component<UsersContainerPropsType> {
  getUsers(page: number, count: number) {
    this.props.toggleFetching(true);
    usersAPI
      .getUsers(page, count)
      .then(res => {
        this.props.setUsers(res.items);
        this.props.setTotalUsersCount(res.totalCount);
        this.props.toggleFetching(false);
      });
  }

  componentDidMount() {
    this.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPostChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.getUsers(page, this.props.pageSize);
  };

  render() {
    return <Users onPostChanged={this.onPostChanged} {...this.props} />;
  }
}

type MapStateToPropsType = UsersType
const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
  isToggleFollowing: state.usersPage.isToggleFollowing,
});

type MapDispatchToPropsType = {
  setUsers: (users: Array<UserType>) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (page: number) => void
  toggleFetching: (isFetching: boolean) => void
  togglePendingFollow: (userId: number, isPending: boolean) => void
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  toggleFetching,
  togglePendingFollow,
})(UsersContainer);