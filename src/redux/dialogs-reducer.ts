import {ActionType} from "../config/enums";
import {DialogsType} from "./types";

// initial state
const initialState: DialogsType = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo!"},
    {id: 4, message: "Yo!"},
    {id: 5, message: "Yo!"},
    {id: 6, message: "Yo!"},
  ],
};

// reducer
const dialogsReducer = (state = initialState, action: DialogsAction) => {
  switch (action.type) {
    case ActionType.sendMessage:
      const newMessage = {message: action.text, id: state.messages.length + 1};
      return {...state, messages: [...state.messages, newMessage]};
    default :
      return state;
  }
};

// types
type DialogsAction = ReturnType<typeof sendMessage>;

// actions
export const sendMessage = (text: string) => ({type: ActionType.sendMessage, text} as const);

export default dialogsReducer;
