import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from "./Message/Message";
import Dialog, {DialogType} from "./Dialog/Dialog";

type DialogsType = {
  dialogs:DialogType[],
  messages: MessageType[],
  newMessageText: string,
  updateNewMessageText: (text: string) => void,
  sendMessage: () => void,
};

const Dialogs = (props: DialogsType) => {
  const dialogsElements = props.dialogs.map(
    ({id, name}) => <Dialog key={id} name={name} id={id} />);
  const messagesElements = props.messages.map(
    ({id, message}) => <Message key={id} message={message} id={id} />)
  const messageText = props.newMessageText;
  const sendMessage = () => {
    props.sendMessage();
  }
  const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.updateNewMessageText(text);
  }

  return (<div className={styles.dialogs}>
    <div className={styles.dialogList}>{dialogsElements}</div>
    <div>
      <div className={styles.messagesList}>{messagesElements}</div>
      <div>
        <div>
          <textarea value={messageText}
                    placeholder={"Enter your message"}
                    onChange={changeNewMessageText}/>
        </div>
        <div>
          <button onClick={sendMessage}>Add message</button>
        </div>
      </div>
    </div>
  </div>)
}

export default Dialogs;