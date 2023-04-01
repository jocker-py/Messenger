import React, {FC} from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DispatchType, StateType} from "../../redux/types";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessageText: (text: string) => dispatch(updateNewMessageTextActionCreator(text)),
  };
};

const DialogsContainer: FC = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;