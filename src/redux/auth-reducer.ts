import {ActionType} from "../config/enums";
import {AuthType} from "./types";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";


// initial state
const initialState: AuthType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

// reducer
const authReducer = (
  state = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
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

// thunks
export const setAuthMe = () => {
  return (dispatch: Dispatch) => {
    authAPI
      .setAuthMe()
      .then(res => res.data.resultCode === 0 ? res.data.data : null)
      .then(data => data && dispatch(setAuthData(data.userId, data.email, data.login)));
  };
};

// types
type AuthAction = ReturnType<typeof setAuthData>;

// actions
export const setAuthData = (userId: number, email: string, login: string) => ({
  type: ActionType.setAuthData, userId, login, email,
} as const);

export default authReducer;
