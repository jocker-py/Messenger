import React, {FC} from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Sidbar.module.css";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../redux/types";


const Sidebar: FC<SidebarType> = (props) => {
  return (
    <div className={styles.sidebar}>
      <Navbar navLinks={props.navLinks}/>
      <Friends friends={props.friends}/>
    </div>);
};

export default Sidebar;