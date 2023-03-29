import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';

type NavbarType = { state: NavbarLinkType[] };
const Navbar: FC<NavbarType> = (props) => {
  return (
    <nav className={styles.nav}>
      {props.state.map(({title, href, id}) =>
        <Link key={id} title={title} href={href} id={id}/>)}
    </nav>
  );
}

export type NavbarLinkType = { title: string; href: string; id: number; };
const Link: FC<NavbarLinkType> = (props) => {
  return (<div>
    <NavLink to={props.href} className={styles.link} activeClassName={styles.active}>
      {props.title}
    </NavLink>
  </div>)
}

export default Navbar;