import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (<div>
    <ul className={styles.dialogs__list}>
      <li className={styles.dialogs__item}>Dimych</li>
      <li className={styles.dialogs__item}>Andrey</li>
      <li className={styles.dialogs__item}>Sveta</li>
      <li className={styles.dialogs__item}>Sasha</li>
      <li className={styles.dialogs__item}>Viktor</li>
      <li className={styles.dialogs__item}>Valera</li>
    </ul>
  </div>)
}

export default Dialogs;