import React from 'react';
import Navbar from "./Navbar/Navbar";
import styles from "./Sidbar.module.css";
import {SidebarType} from "../../redux/state";
import Friends from "./Friends/Friends";

type SidebarPropsType = {state: SidebarType};
const Sidebar = (props: SidebarPropsType) => {
  return (
    <div className={styles.sidebar}>
      <Navbar state={props.state.navLinks}/>
      <Friends state={props.state.friends}/>
    </div>)
}


export default Sidebar;