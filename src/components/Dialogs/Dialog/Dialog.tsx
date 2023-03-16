import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogType = {id: number; name: string;}
const Dialog = (props: DialogType) => {
  let path = '/dialogs/' + props.id;
  return (<NavLink to={path}
                   className={styles.dialog}
                   activeClassName={styles.dialogActive}>{props.name}</NavLink>)
}

export default Dialog;