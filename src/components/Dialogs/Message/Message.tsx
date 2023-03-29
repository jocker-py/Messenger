import React, {FC} from 'react';
import styles from "../Dialogs.module.css";
import {MessageType} from "../../../redux/types";


const Message: FC<MessageType> = (props) => <div className={styles.messageItem}>{props.message}</div>

export default Message;