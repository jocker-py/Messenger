import React from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from "./Message/Message";
import Dialog, {DialogType} from "./Dialog/Dialog";

const Dialogs = () => {
  const dialogs: DialogType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ];
  const messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
    {id: 6, message: 'Yo!'},
  ];
  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>
      {dialogs.map(
        ({id, name}) => <Dialog key={id} name={name} id={id} />)}
    </div>
    <div className={styles.messagesList}>
      {messages.map(
        ({id, message}) => <Message key={id} message={message} id={id} />)}
    </div>
  </div>)
}

export default Dialogs;