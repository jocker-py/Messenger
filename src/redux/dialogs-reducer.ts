import {Types} from "../config/enums";
import {DialogsPageType, IAction} from "./types";

export type updateNewMessageTextActionCreatorType = (text:string) => IAction;
export const updateNewMessageTextActionCreator:updateNewMessageTextActionCreatorType = (text:string) => ({type: Types.updateNewMessageText, text: text});

export type sendMessageActionCreatorType = () => IAction;
export const sendMessageActionCreator:sendMessageActionCreatorType = () => ({type: Types.sendMessage});

type DialogsReducerType = (state:DialogsPageType, action: IAction) => DialogsPageType;
const dialogsReducer: DialogsReducerType = (state, action) => {
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