import {ActionType} from "../config/enums";
import {IAction, UsersType, UserType} from "./types";


type SetUsersType = (users: Array<UserType>) => IAction;
export const setUsers: SetUsersType = (users) => ({type: ActionType.setUsers, users});

type FollowType = (id: number) => IAction;
export const follow: FollowType = (id) => ({type: ActionType.follow, id});

type UnfollowType = (id: number) => IAction;
export const unfollow: UnfollowType = (id) => ({type: ActionType.unfollow, id});

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

export default usersReducer;