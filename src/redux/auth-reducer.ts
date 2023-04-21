import {ActionType} from "../config/enums";
import {AuthType, IAction} from "./types";

type SetAuthDataType = (userId: number, login: string, email: string) => IAction;
export const setAuthData: SetAuthDataType = (userId, login, email) => ({
  type: ActionType.setAuthData,
  userId,
  login,
  email,
});


const initialState: AuthType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

type AuthReducerType = (state: AuthType, action: IAction) => AuthType;
const authReducer: AuthReducerType = (
  state = initialState,
  {type, ...action},
) => {
  switch (type) {
    case ActionType.setAuthData:
      return {
        ...state,
        ...action,
        isAuth: true,
      };
    default :
      return state;
  }
};

export default authReducer;