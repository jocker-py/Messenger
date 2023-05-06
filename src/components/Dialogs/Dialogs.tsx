import React, {FC} from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {DialogsType} from "../../redux/types";
import {AddTextForm, FormDataType} from "./AddTextForm/AddTextForm";

type DialogsPropsType = DialogsType & {
  sendMessage: (text: string) => void,
};

const Dialogs: FC<DialogsPropsType> = (props) => {
  const dialogsElements = props.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id}/>);
  const messagesElements = props.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id}/>);
  const sendMessage = ({dialogsMessage}: FormDataType) => {
    props.sendMessage(dialogsMessage);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogList}>{dialogsElements}</div>
      <div>
        <div className={styles.messagesList}>{messagesElements}</div>
        <AddTextForm onSubmit={sendMessage}/>
      </div>
    </div>
  );
};


export default Dialogs;