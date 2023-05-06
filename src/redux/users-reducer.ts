import {ActionType} from "../config/enums";
import {IAction, UsersType, UserType} from "./types";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


type SetUsersType = (users: Array<UserType>) => IAction;
export const setUsers: SetUsersType = (users) => ({type: ActionType.setUsers, users});

type FollowSuccessType = (id: number) => IAction;
export const followSuccess: FollowSuccessType = (id) => ({type: ActionType.follow, id});

type UnfollowSuccessType = (id: number) => IAction;
export const unfollowSuccess: UnfollowSuccessType = (id) => ({type: ActionType.unfollow, id});

type SetTotalUsersCountType = (usersCount: number) => IAction;
export const setTotalUsersCount: SetTotalUsersCountType = (usersCount) => ({
  type: ActionType.setTotalUsersCount,
  usersCount,
});

type SetCurrentPageType = (page: number) => IAction;
export const setCurrentPage: SetCurrentPageType = (page) => ({
  type: ActionType.setCurrentPage,
  page,
});

type ToggleFetchingType = (isFetching: boolean) => IAction;
export const toggleFetching: ToggleFetchingType = (isFetching) => ({
  type: ActionType.toggleFetching,
  isFetching,
});

type TogglePendingFollow = (userId: number, isPending: boolean) => IAction;
export const togglePendingFollow: TogglePendingFollow = (userId, isPending) => ({
  type: ActionType.togglePendingFollow,
  userId,
  isPending,
});

const initialState: UsersType = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
  isToggleFollowing: [],
};

type UsersReducerType = (state: UsersType, action: IAction) => UsersType;
const usersReducer: UsersReducerType = (
  state = initialState,
  {id, type, users, usersCount, page, isFetching, isPending, userId},
) => {
  switch (type) {
    case ActionType.setUsers:
      return users ? {...state, users: [...users]} : state;
    case ActionType.follow:
      return {
        ...state, users: state.users.map(user => user.id === id ?
          {...user, followed: true} : user),
      };
    case ActionType.unfollow:
      return {
        ...state, users: state.users.map(user => user.id === id ?
          {...user, followed: false} : user),
      };
    case ActionType.setTotalUsersCount:
      return usersCount ? {...state, totalUsersCount: usersCount} : state;
    case ActionType.setCurrentPage:
      return page ? {...state, currentPage: page} : state;
    case ActionType.toggleFetching:
      return typeof isFetching === "boolean" ? {...state, isFetching} : state;
    case ActionType.togglePendingFollow:
      if (userId) {
        return isPending ?
          {...state, isToggleFollowing: [...state.isToggleFollowing, userId]} :
          {...state, isToggleFollowing: state.isToggleFollowing.filter(id => id !== userId)};
      }
      return state;

    default :
      return state;
  }
};

export const getUsers = (page: number, count: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(toggleFetching(true));
    usersAPI
      .getUsers(page, count)
      .then(res => res.data)
      .then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleFetching(false));
      });
  };
};

export const follow = (userId: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(togglePendingFollow(userId, true));
    usersAPI
      .follow(userId)
      .then((res) => res.data.resultCode === 0)
      .then(res => res && dispatch(followSuccess(userId)))
      .then(() => dispatch(togglePendingFollow(userId, false)));
  };
};

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(togglePendingFollow(userId, true));
    usersAPI
      .unfollow(userId)
      .then(res => res.data.resultCode === 0)
      .then(res => res && dispatch(unfollowSuccess(userId)))
      .then(() => dispatch(togglePendingFollow(userId, false)));
  };
};

export default usersReducer;