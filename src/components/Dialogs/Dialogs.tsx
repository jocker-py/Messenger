import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (<div className={styles.dialogs}>
    <div className={styles.dialogs__list}>
      <div className={styles.dialogs__item}>Dimych</div>
      <div className={styles.dialogs__item}>Andrey</div>
      <div className={styles.dialogs__item}>Sveta</div>
      <div className={styles.dialogs__item}>Sasha</div>
      <div className={styles.dialogs__item}>Viktor</div>
      <div className={styles.dialogs__item}>Valera</div>
    </div>
    <div className={styles.messages__list}>
      <div className={styles.messages__list}>Hi</div>
      <div className={styles.messages__list}>How is your it-kamasutra?</div>
      <div className={styles.messages__list}>Yo!</div>
    </div>
  </div>)
}

export default Dialogs;