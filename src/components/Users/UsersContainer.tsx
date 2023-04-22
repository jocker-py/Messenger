import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType, UsersType} from "../../redux/types";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  follow,
  unfollow,
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";

export type UsersContainerPropsType = UsersType & {
  setUsers: (users: UsersType) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (page: number) => void
  toggleFetching: (isFetching: boolean) => void
}

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

type MapStateToPropsType = (state: StateType) => UsersType;
const mapStateToProps: MapStateToPropsType = (state) => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  isFetching: state.usersPage.isFetching,
});

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  toggleFetching,
})(UsersContainer);