import React from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from "./Message/Message";
import Dialog, {DialogType} from "./Dialog/Dialog";

export type DialogsType = {dialogs: DialogType[], messages: MessageType[] }
const Dialogs = (props: DialogsType) => {
  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>
      {props.dialogs.map(
        ({id, name}) => <Dialog key={id} name={name} id={id} />)}
    </div>
    <div className={styles.messagesList}>
      {props.messages.map(
        ({id, message}) => <Message key={id} message={message} id={id} />)}
    </div>
  </div>)
}

export default Dialogs;