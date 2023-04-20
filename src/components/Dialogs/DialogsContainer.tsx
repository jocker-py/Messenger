import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsType, StateType} from "../../redux/types";
import {connect} from "react-redux";

type MapStateToPropsType = (state: StateType) => DialogsType;
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};


const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;