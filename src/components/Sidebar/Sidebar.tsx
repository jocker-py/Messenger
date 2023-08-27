import React, {FC} from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Sidbar.module.css";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../redux/types";


const Sidebar: FC<SidebarType> = ({friends, navLinks}) => {
  return (
    <div className={styles.sidebar}>
      <Navbar navLinks={navLinks}/>
      <Friends friends={friends}/>
    </div>);
};

export default Sidebar;