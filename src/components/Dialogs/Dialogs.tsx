import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

type DialogsItemType = {id: number; name: string;}
const DialogsItem = (props: DialogsItemType) => {
  let path = '/dialogs/' + props.id;
  return (<NavLink to={path}
                   className={styles.dialogs__item}
                   activeClassName={styles.dialogs__item_active}>{props.name}</NavLink>)
}

type MessageType = {id: number, message: string};
const Message = (props: MessageType) => <div className={styles.messages__list}>{props.message}</div>

const Dialogs = () => {
  const dialogs: DialogsItemType[] = [
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
    <div className={styles.dialogs__list}>
      {dialogs.map(
        ({id, name}) => <DialogsItem key={id} name={name} id={id} />)}
    </div>
    <div className={styles.messages__list}>
      {messages.map(
        ({id, message}) => <Message key={id} message={message} id={id} />)}
    </div>
  </div>)
}

export default Dialogs;