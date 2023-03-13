import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  const links = ['Profile', 'Messages', 'News', 'Music', 'Settings'];
  return (
    <nav className={styles.nav}>
      {links.map((title, idx) => <Link key={idx} title={title} />)}
    </nav>
  );
}

type NavbarLinkPropsType = {
  title: string;
};

function Link(props:NavbarLinkPropsType){
  return <div><a href="#">{props.title}</a></div>
}

export default Navbar;