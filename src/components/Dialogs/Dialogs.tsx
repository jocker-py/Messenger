import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

type DialogsItemType = {
  id: number;
  name: string;
}

const DialogsItem = (props: DialogsItemType) => {
  let path = '/dialogs/' + props.id;
  return (<NavLink to={path}
                   className={styles.dialogs__item}
                   activeClassName={styles.dialogs__item_active}>{props.name}</NavLink>)
}

const Dialogs = () => {
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
      <div className={styles.messages__list}>Hi</div>
      <div className={styles.messages__list}>How is your it-kamasutra?</div>
      <div className={styles.messages__list}>Yo!</div>
    </div>
  </div>)
}

export default Dialogs;