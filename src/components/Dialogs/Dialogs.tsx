import React from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {state:DialogsPageType};
const Dialogs = (props: DialogsType) => {
  const dialogsElements = props.state.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id} />);
  const messagesElements = props.state.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id} />)
  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>{dialogsElements}</div>
    <div className={styles.messagesList}>{messagesElements}</div>
  </div>)
}

export default Dialogs;