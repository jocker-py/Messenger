import React, {FC} from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsType} from "../../redux/types";
import {StoreContext} from "../../redux/StoreContext";

type DialogsContainerType = { store: StoreType };
const DialogsContainer: FC<DialogsContainerType> = (props) => {
  return <StoreContext.Consumer>
    {
      store => {
        const state = store.getState().dialogsPage as DialogsType;
        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        const updateNewMessageText = (text: string) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs dialogs={state.dialogs}
                   messages={state.messages}
                   newMessageText={state.newMessageText}
                   sendMessage={sendMessage}
                   updateNewMessageText={updateNewMessageText}/>
        );
      }
    }
  </StoreContext.Consumer>;
};

export default DialogsContainer;