import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogType} from "./components/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostType} from "./components/Profile/MyPosts/Post/Post";

export type StoreType = {dialogs: DialogType[], messages: MessageType[], posts: PostType[]};
const store : StoreType = {
  dialogs: [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
],
 messages: [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra?'},
  {id: 3, message: 'Yo!'},
  {id: 4, message: 'Yo!'},
  {id: 5, message: 'Yo!'},
  {id: 6, message: 'Yo!'},
],
  posts: [
  {likes: 2, message: 'Hello, how are you?', id: 'message_1'},
  {likes: 3, message: "I'm fine, what about you?", id: 'message_2'}
],
}

ReactDOM.render(
  <App dialogs={store.dialogs} messages={store.messages} posts={store.posts}/>,
  document.getElementById('root')
);
