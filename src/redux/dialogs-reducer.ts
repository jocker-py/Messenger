import {Types} from "../config/enums";
import {DialogsPageType, IAction} from "./types";

export type updateNewMessageTextActionCreatorType = (text:string) => IAction;
export const updateNewMessageTextActionCreator:updateNewMessageTextActionCreatorType = (text:string) => ({type: Types.updateNewMessageText, text: text});

export type sendMessageActionCreatorType = () => IAction;
export const sendMessageActionCreator:sendMessageActionCreatorType = () => ({type: Types.sendMessage});

const initialState:DialogsPageType = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
    {id: 6, message: 'Yo!'},
  ],
  newMessageText: '',
};

type DialogsReducerType = (state:DialogsPageType, action: IAction) => DialogsPageType;
const dialogsReducer: DialogsReducerType = (state = initialState, action) => {
 switch (action.type) {
 case Types.sendMessage:
   const newMessage = {message: state.newMessageText, id: state.messages.length + 1}
   state.messages.push(newMessage);
   state.newMessageText = '';
   return state;
 case Types.updateNewMessageText:
   state.newMessageText = action.text || '';
   return state;
 default :
   return state;
 }
};

export default dialogsReducer;