import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header__img} src="https://i.pinimg.com/originals/b3/3a/42/b33a42368fdaff13589f87739c2e7a44.jpg" alt="logo"/>
    </header>
  );
}

export default Header;