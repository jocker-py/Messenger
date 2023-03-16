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

type MessageType = {message: string};
const Message = (props: MessageType) => <div className={styles.messages__list}>{props.message}</div>

const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ];
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
    {id: 6, message: 'Yo!'},
  ];
  return (<div className={styles.dialogs}>
    <div className={styles.dialogs__list}>
      <DialogsItem name={"Dimych"} id={1}/>
      <DialogsItem name={"Andrey"} id={2}/>
      <DialogsItem name={"Sveta"} id={3}/>
      <DialogsItem name={"Sasha"} id={4}/>
      <DialogsItem name={"Viktor"} id={5}/>
      <DialogsItem name={"Valera"} id={6}/>
    </div>
    <div className={styles.messages__list}>
      <Message message={"Hi"}/>
      <Message message={"How is your it-kamasutra?"}/>
      <Message message={"Yo!"}/>
      <Message message={"Yo!"}/>
      <Message message={"Yo!"}/>
      <Message message={"Yo!"}/>
    </div>
  </div>)
}

export default Dialogs;