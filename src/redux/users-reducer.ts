import {ActionType} from "../config/enums";
import {IAction, UsersType, UserType} from "./types";


type SetUsersACType = (users: Array<UserType>) => IAction;
export const setUsersAC: SetUsersACType = (users) => ({type: ActionType.setUsers, users});

type ToggleFollowACType = (id: number) => IAction;
export const toggleFollowAC: ToggleFollowACType = (id) => ({type: ActionType.toggleFollow, id});

type SetTotalUsersCountAC = (usersCount: number) => IAction;
export const setTotalUsersCountAC: SetTotalUsersCountAC = (usersCount) => ({
  type: ActionType.setTotalUsersCount,
  usersCount,
});

type SetCurrentPageAC = (page: number) => IAction;
export const setCurrentPageAC: SetCurrentPageAC = (page) => ({
  type: ActionType.setCurrentPage,
  page,
});

const initialState: UsersType = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
};

type UsersReducerType = (state: UsersType, action: IAction) => UsersType;
const usersReducer: UsersReducerType = (
  state = initialState,
  {id, type, users, usersCount, page},
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
    default :
      return state;
  }
};

export default usersReducer;