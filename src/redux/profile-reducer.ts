import {Types} from "../config/enums";
import {IAction} from "./types";

export type addPostActionCreatorType = () => IAction;
export const addPostActionCreator:addPostActionCreatorType = () => ({type: Types.addPost});

export type updatePostActionCreatorType = (text:string) => IAction
export const updateNewPostActionCreator:updatePostActionCreatorType = (text) => ({type: Types.updateNewPost, text: text});