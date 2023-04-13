import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, StateType, UsersType, UserType} from "../../redux/types";
import {setUsersAC, toggleFollowAC} from "../../redux/users-reducer";


type MapStateToPropsType = (state: StateType) => (UsersType);
const mapStateToProps: MapStateToPropsType = (state) => state.usersPage;

type MapDispatchToPropsType = (dispatch: DispatchType) => ({
  setUsers: (users: Array<UserType>) => void,
  toggleFollow: (id: number) => void
})
const mapDispatchToProps: MapDispatchToPropsType = (dispatch) => ({
  setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
  toggleFollow: (id: number) => dispatch(toggleFollowAC(id)),
});

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType>(
  mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;