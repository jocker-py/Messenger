import {ActionType} from "../config/enums";
import {DialogsType, IAction} from "./types";

export type sendMessageType = (text: string) => IAction;
export const sendMessage: sendMessageType = (text) => ({type: ActionType.sendMessage, text});

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

type DialogsReducerType = (state: DialogsType, action: IAction) => DialogsType;
const dialogsReducer: DialogsReducerType = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.sendMessage:
      const newMessage = {message: action.text || '', id: state.messages.length + 1};
      return {...state, messages: [...state.messages, newMessage], newMessageText: ""};
    default :
      return state;
  }
};

export default dialogsReducer;