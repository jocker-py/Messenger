import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType, UsersType} from "../../redux/types";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  toggleFollow,
} from "../../redux/users-reducer";
import axios from "axios";

export type UsersContainerPropsType = UsersType & {
  setUsers: (users: UsersType) => void;
  toggleFollow: (id: number) => void;
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (page: number) => void
  toggleFetching: (isFetching: boolean) => void
}

class UsersContainer extends Component<UsersContainerPropsType> {
  componentDidMount() {
    const page = this.props.currentPage;
    const count = this.props.pageSize;
    this.props.toggleFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.toggleFetching(false);
      });
  }

  onPostChanged = (page: number) => {
    const count = this.props.pageSize;
    this.props.setCurrentPage(page);
    this.props.toggleFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.toggleFetching(false);
      });
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
  toggleFollow,
  setTotalUsersCount,
  setCurrentPage,
  toggleFetching,
})(UsersContainer);