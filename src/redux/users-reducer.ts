import {ActionType} from "../config/enums";
import {IAction, UsersType, UserType} from "./types";


type SetUsersACType = (users: Array<UserType>) => IAction;
export const setUsersAC: SetUsersACType = (users) => ({type: ActionType.setUsers, users});

type ToggleFollowACType = (id: number) => IAction;
export const toggleFollowAC: ToggleFollowACType = (id) => ({type: ActionType.toggleFollow, id});

const initialState = {
  users: [],
};

type UsersReducerType = (state: UsersType, action: IAction) => UsersType;
const usersReducer: UsersReducerType = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.setUsers:
      if (action.users && action.users.length) {
        return {users: [...state.users, ...action.users]};
      }
      return state;
    case ActionType.toggleFollow:
      return {
        users: state.users.map(user => user.id === action.id ?
          {...user, followed: !user.followed} : user),
      };
    default :
      return state;
  }
};

export default usersReducer;