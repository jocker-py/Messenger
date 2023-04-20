import {ActionType} from "../config/enums";
import {IAction, UsersType, UserType} from "./types";


type SetUsersType = (users: Array<UserType>) => IAction;
export const setUsers: SetUsersType = (users) => ({type: ActionType.setUsers, users});

type ToggleFollowType = (id: number) => IAction;
export const toggleFollow: ToggleFollowType = (id) => ({type: ActionType.toggleFollow, id});

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

const initialState: UsersType = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
};

type UsersReducerType = (state: UsersType, action: IAction) => UsersType;
const usersReducer: UsersReducerType = (
  state = initialState,
  {id, type, users, usersCount, page, isFetching},
) => {
  switch (type) {
    case ActionType.setUsers:
      return users ? {...state, users: [...users]} : state;
    case ActionType.toggleFollow:
      return {
        ...state, users: state.users.map(user => user.id === id ?
          {...user, followed: !user.followed} : user),
      };
    case ActionType.setTotalUsersCount:
      return usersCount ? {...state, totalUsersCount: usersCount} : state;
    case ActionType.setCurrentPage:
      return page ? {...state, currentPage: page} : state;
    case ActionType.toggleFetching:
      return typeof isFetching === "boolean" ? {...state, isFetching} : state;
    default :
      return state;
  }
};

export default usersReducer;