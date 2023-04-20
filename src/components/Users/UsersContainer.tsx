import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {DispatchType, StateType, UsersType, UserType} from "../../redux/types";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC} from "../../redux/users-reducer";
import axios from "axios";

export type UsersContainerPropsType = UsersType & {
  setUsers: (users: UsersType) => void;
  toggleFollow: (id: number) => void;
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (page: number) => void
}

class UsersContainer extends Component<UsersContainerPropsType> {
  componentDidMount() {
    const page = this.props.currentPage;
    const count = this.props.pageSize;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPostChanged = (page: number) => {
    const count = this.props.pageSize;
    this.props.setCurrentPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  };

  render() {
    return <Users onPostChanged={this.onPostChanged} {...this.props} />;
  }
}

type MapStateToPropsType = (state: StateType) => UsersType;
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  };
};

type MapDispatchToPropsType = (dispatch: DispatchType) => ({
  setUsers: (users: Array<UserType>) => void
  toggleFollow: (id: number) => void
  setTotalUsersCount: (usersCount: number) => void
  setCurrentPage: (page: number) => void
})


const mapDispatchToProps: MapDispatchToPropsType = (dispatch) => ({
  setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
  toggleFollow: (id: number) => dispatch(toggleFollowAC(id)),
  setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount)),
  setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
});


export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, mapDispatchToProps)(UsersContainer);