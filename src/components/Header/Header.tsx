import React, {FC} from "react";
import styles from "./Header.module.css";
import {HeaderPropsType} from "./HeaderContainer";
import user from "../../assets/user.png";

const Header: FC<HeaderPropsType> = ({email, login, userId, isAuth}) => {
  const icon = <img className={styles.userImg}
                    src={user}
                    alt={login ? login : ""}
                    title={login ? login : ""}/>;

  const loginButton = <button>Login</button>;
  return (
    <header className={styles.header}>
      <img className={styles.img} src="https://i.pinimg.com/originals/b3/3a/42/b33a42368fdaff13589f87739c2e7a44.jpg"
           alt="logo"/>
      {
        isAuth ? icon : loginButton
      }
    </header>
  );
};

export default Header;