import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {StateType, UsersType} from "../../redux/types";
import {
  setCurrentPage,
  follow,
  unfollow, togglePendingFollow, getUsers,
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends Component<UsersContainerPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPostChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
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
  follow: (userId: number) => void;
  unfollow: (id: number) => void;
  setCurrentPage: (page: number) => void
  togglePendingFollow: (userId: number, isPending: boolean) => void
  getUsers: (page: number, count: number) => void
}

// @ts-ignore
const withRedirectUsersContainer = withAuthRedirect(UsersContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  togglePendingFollow,
  getUsers,
})(withRedirectUsersContainer);