import {DialogType} from "../components/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Dialogs/Message/Message";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {NavbarType} from "../components/Navbar/Navbar";

export type ProfilePageType = {posts: PostType[]};
export type DialogsPageType = {messages: MessageType[], dialogs: DialogType[]};
export type StateType = { navBar: NavbarType, profilePage: ProfilePageType, dialogsPage: DialogsPageType};

const state : StateType = {
  navBar : {
    links: [{
      title: 'Profile',
      href: '/profile',
      id: 'link_1',
    },
      {
        title: 'Messages',
        href: '/dialogs',
        id: 'link_2',
      },
      {
        title: 'News',
        href: '/news',
        id: 'link_3',
      },
      {
        title: 'Music',
        href: '/music',
        id: 'link_4',
      },
      {
        title: 'Settings',
        href: '/settings',
        id: 'link_5',
      }]
  },
  profilePage:{
    posts: [
      {likes: 2, message: 'Hello, how are you?', id: 'message_1'},
      {likes: 3, message: "I'm fine, what about you?", id: 'message_2'}
    ],
  },
  dialogsPage: {
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
  },
}

export default state;