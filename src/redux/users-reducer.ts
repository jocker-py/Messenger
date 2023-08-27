import {ActionType} from "../config/enums";
import {UsersType, UserType} from "./types";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

// initial state
const initialState: UsersType = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
  isToggleFollowing: [],
};

// reducer
const usersReducer = (
  state = initialState,
  action: UsersAction,
) => {
  switch (action.type) {
    case ActionType.setUsers:
      return {...state, users: [...action.users]};
    case ActionType.follow:
      return {
        ...state, users: state.users.map(user => user.id === action.id ? {...user, followed: true} : user),
      };
    case ActionType.unfollow:
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user),
      };
    case ActionType.setTotalUsersCount:
      return {...state, totalUsersCount: action.usersCount};
    case ActionType.setCurrentPage:
      return {...state, currentPage: action.page};
    case ActionType.toggleFetching:
      return {...state, isFetching: action.isFetching};
    case ActionType.togglePendingFollow:
      return action.isPending ?
        {
          ...state,
          isToggleFollowing: [...state.isToggleFollowing, action.userId],
        } :
        {
          ...state,
          isToggleFollowing: state.isToggleFollowing.filter(id => id !== action.userId),
        };
    default :
      return state;
  }
};


// thunks
export const getUsers = (page: number, count: number) => {
  return (dispatch: Dispatch) => {
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
  return (dispatch: Dispatch) => {
    dispatch(togglePendingFollow(userId, true));
    usersAPI
      .follow(userId)
      .then((res) => res.data.resultCode === 0)
      .then(res => res && dispatch(followSuccess(userId)))
      .then(() => dispatch(togglePendingFollow(userId, false)));
  };
};

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(togglePendingFollow(userId, true));
    usersAPI
      .unfollow(userId)
      .then(res => res.data.resultCode === 0)
      .then(res => res && dispatch(unfollowSuccess(userId)))
      .then(() => dispatch(togglePendingFollow(userId, false)));
  };
};

// actions
export const setUsers = (users: Array<UserType>) => ({type: ActionType.setUsers, users} as const);
export const followSuccess = (id: number) => ({type: ActionType.follow, id} as const);
export const unfollowSuccess = (id: number) => ({type: ActionType.unfollow, id} as const);
export const setTotalUsersCount = (usersCount: number) => ({
  type: ActionType.setTotalUsersCount,
  usersCount,
} as const);
export const setCurrentPage = (page: number) => ({type: ActionType.setCurrentPage, page} as const);
export const toggleFetching = (isFetching: boolean) => ({type: ActionType.toggleFetching, isFetching} as const);
export const togglePendingFollow = (userId: number, isPending: boolean) => ({
  type: ActionType.togglePendingFollow,
  userId,
  isPending,
} as const);

// types
type UsersAction =
  ReturnType<typeof setUsers>
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof toggleFetching>
  | ReturnType<typeof togglePendingFollow>

export default usersReducer;
