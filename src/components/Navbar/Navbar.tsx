import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

export type NavbarLinkType = {
  title: string;
  href: string;
  id: string;
};

type NavbarType = {links: NavbarLinkType[]};
const Navbar = (props: NavbarType) => {
  return (
    <nav className={styles.nav}>
      {props.links.map(({title, href, id}) => <Link key={id} title={title} href={href} id={id} />)}
    </nav>
  );
}

function Link(props:NavbarLinkType){
  return (<div>
    <NavLink id={props.id}
             to={props.href}
             className={styles.link}
             activeClassName={styles.active}>
      {props.title}
    </NavLink>
  </div>)
}

export default Navbar;