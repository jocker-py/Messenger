import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = DialogsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

// @ts-ignore
const withRedirectDialogs = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(withRedirectDialogs);

export default DialogsContainer;