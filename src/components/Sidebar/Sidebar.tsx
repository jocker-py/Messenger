import React, {FC} from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Sidbar.module.css";
import Friends from "./Friends/Friends";
import {SidebarType} from "../../redux/types";
import {StoreContext} from "../../redux/StoreContext";

const Sidebar: FC = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const sidebar = store.getState().sidebar as SidebarType;
        return (
          <div className={styles.sidebar}>
            <Navbar state={sidebar.navLinks}/>
            <Friends state={sidebar.friends}/>
          </div>);
      }
      }
    </StoreContext.Consumer>
  );
};


export default Sidebar;