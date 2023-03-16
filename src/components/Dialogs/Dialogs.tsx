import React from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {state:DialogsPageType};
const Dialogs = (props: DialogsType) => {
  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>
      {props.state.dialogs.map(
        ({id, name}) => <Dialog key={id} name={name} id={id} />)}
    </div>
    <div className={styles.messagesList}>
      {props.state.messages.map(
        ({id, message}) => <Message key={id} message={message} id={id} />)}
    </div>
  </div>)
}

export default Dialogs;