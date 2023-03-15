import React from "react";
import styles from './Navbar.module.css';

type NavbarLinkPropsType = {
  title: string;
  href: string;
  id: string;
};

const Navbar = () => {
  const links: NavbarLinkPropsType[] = [{
    title: 'Profile',
    href: '/profile',
    id: 'link_1',
  }, {
    title: 'Messages',
    href: '/dialogs',
    id: 'link_2',
  }, {
    title: 'News',
    href: '/news',
    id: 'link_3',
  }, {
    title: 'Music',
    href: '/music',
    id: 'link_4',
  }, {
    title: 'Settings',
    href: '/settings',
    id: 'link_5',
  }];
  return (
    <nav className={styles.nav}>
      {links.map(({title, href, id}) => <Link key={id}
                                              title={title}
                                              href={href}
                                              id={id} />)}
    </nav>
  );
}

function Link(props:NavbarLinkPropsType){
  return (<div>
    <a id={props.id}
       href={props.href}
       className={styles.link}>
      {props.title}
    </a>
  </div>)
}

export default Navbar;