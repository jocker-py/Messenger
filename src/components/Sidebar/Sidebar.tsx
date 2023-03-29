import React, {FC} from 'react';
import Navbar from "./Navbar/Navbar";
import styles from "./Sidbar.module.css";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../redux/types";

type SidebarPropsType = { state: SidebarType };
const Sidebar: FC<SidebarPropsType> = (props) => {
  return (
    <div className={styles.sidebar}>
      <Navbar state={props.state.navLinks}/>
      <Friends state={props.state.friends}/>
    </div>)
}


export default Sidebar;