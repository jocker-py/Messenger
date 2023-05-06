import React, {ChangeEvent, FC} from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {DialogsType} from "../../redux/types";

type DialogsPropsType = DialogsType & {
  sendMessage: () => void,
};

const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id}/>);
  const messagesElements = props.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id}/>);
  const sendMessage = () => {
    props.sendMessage();
  };

  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>{dialogsElements}</div>
    <div>
      <div className={styles.messagesList}>{messagesElements}</div>
      <div>
        <div>
          <textarea placeholder={"Enter your message"}/>
        </div>
        <div>
          <button onClick={sendMessage}>Add message</button>
        </div>
      </div>
    </div>
  </div>);
};

export default Dialogs;