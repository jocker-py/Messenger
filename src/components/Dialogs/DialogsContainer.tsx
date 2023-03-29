import React, {FC} from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/types";

type DialogsContainerType = { store: StoreType };
const DialogsContainer: FC<DialogsContainerType> = (props) => {
  const state = props.store.getState().dialogsPage as DialogsPageType;
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  const updateNewMessageText = (text: string) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }
  return (
    <Dialogs dialogs={state.dialogs}
             messages={state.messages}
             newMessageText={state.newMessageText}
             sendMessage={sendMessage}
             updateNewMessageText={updateNewMessageText}/>
  );
};

export default DialogsContainer;