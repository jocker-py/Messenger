import React, {LegacyRef} from 'react';
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {state:DialogsPageType};
const Dialogs = (props: DialogsType) => {
  const dialogsElements = props.state.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id} />);
  const messagesElements = props.state.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id} />)
  const newMessageElement: LegacyRef<HTMLTextAreaElement> = React.createRef();
  const showMessage = () => {
    alert(newMessageElement.current!.value);
    newMessageElement.current!.value = '';
  }
  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>{dialogsElements}</div>
    <div>
      <div className={styles.messagesList}>{messagesElements}</div>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={showMessage}>Add message</button>
        </div>
      </div>
    </div>
  </div>)
}

export default Dialogs;