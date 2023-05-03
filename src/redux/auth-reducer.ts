import {ActionType} from "../config/enums";
import {AuthType, IAction} from "./types";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

type SetAuthDataType = (userId: number, email: string, login: string) => IAction;
export const setAuthData: SetAuthDataType = (userId, email, login) => ({
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

export const setAuthMe = () => {
  return (dispatch: Dispatch<IAction>) => {
    authAPI
      .setAuthMe()
      .then(data => data &&
        dispatch(setAuthData(data.userId, data.email, data.login)));
  };
};

export default authReducer;