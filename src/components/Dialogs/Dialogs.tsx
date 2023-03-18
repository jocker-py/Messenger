import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {
  DialogsPageType,
  DispatchType,
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/state";

type DialogsType = {state:DialogsPageType, dispatch: DispatchType};
const Dialogs = (props: DialogsType) => {
  const dialogsElements = props.state.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id} />);
  const messagesElements = props.state.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id} />)
  const messageText = props.state.newMessageText;
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }
  const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>{dialogsElements}</div>
    <div>
      <div className={styles.messagesList}>{messagesElements}</div>
      <div>
        <div>
          <textarea value={messageText} placeholder={"Enter your message"} onChange={changeNewMessageText}/>
        </div>
        <div>
          <button onClick={sendMessage}>Add message</button>
        </div>
      </div>
    </div>
  </div>)
}

export default Dialogs;