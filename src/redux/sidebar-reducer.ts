import {IAction, SidebarType} from "./types";

type SidebarReducerType = (state: SidebarType, action: IAction) => SidebarType;
const sidebarReducer: SidebarReducerType = (state, action) => {
  switch (action.type) {
    default : return state;
  }
}

export default sidebarReducer;