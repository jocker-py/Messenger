import {Types} from "../config/enums";
import {IAction} from "./types";

export type updateNewMessageTextActionCreatorType = (text:string) => IAction;
export const updateNewMessageTextActionCreator:updateNewMessageTextActionCreatorType = (text:string) => ({type: Types.updateNewMessageText, text: text});

export type sendMessageActionCreatorType = () => IAction;
export const sendMessageActionCreator:sendMessageActionCreatorType = () => ({type: Types.sendMessage});