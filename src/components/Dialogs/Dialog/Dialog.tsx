import React, {FC} from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Path} from "../../../config/enums";
import {DialogType} from "../../../redux/types";

const Dialog: FC<DialogType> = (props) => {
  const path = Path.DIALOGS + props.id;
  return (<NavLink to={path}
                   className={styles.dialog}
                   activeClassName={styles.dialogActive}>{props.name}</NavLink>)
}

export default Dialog;