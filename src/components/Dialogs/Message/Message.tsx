import React from 'react';
import styles from "../Dialogs.module.css";

export type MessageType = {id: number, message: string};
const Message = (props: MessageType) => <div className={styles.messageItem}>{props.message}</div>

export default Message;