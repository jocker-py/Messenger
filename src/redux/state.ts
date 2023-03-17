import {DialogType} from "../components/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Dialogs/Message/Message";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import { FriendType } from "../components/Sidebar/Friends/Friends";
import {NavbarLinkType} from "../components/Sidebar/Navbar/Navbar";
import renderEntireThree from "../render";

export type ProfilePageType = {posts: PostType[]};
export type DialogsPageType = {messages: MessageType[], dialogs: DialogType[]};
export type SidebarType = {navLinks: NavbarLinkType[], friends: FriendType[]};
export type StateType = { sidebar: SidebarType, profilePage: ProfilePageType, dialogsPage: DialogsPageType};

const state : StateType = {
  sidebar : {
    navLinks: [{
      title: 'Profile',
      href: '/profile',
      id: 1,
    },
      {
        title: 'Messages',
        href: '/dialogs',
        id: 2,
      },
      {
        title: 'News',
        href: '/news',
        id: 3,
      },
      {
        title: 'Music',
        href: '/music',
        id: 4,
      },
      {
        title: 'Settings',
        href: '/settings',
        id: 5,
      }],
    friends: [
      {id: 1, src: 'data:image/png;base64,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', name: 'Andrew'},
      {id: 2, src: 'data:image/png;base64,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', name: 'Sasha'},
      {id: 3, src: 'data:image/png;base64,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', name: 'Sveta'},

    ]
  },
  profilePage:{
    posts: [
      {likes: 2, message: 'Hello, how are you?', id: 1},
      {likes: 3, message: "I'm fine, what about you?", id: 2}
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

export type AddPostType = (message: string) => void;
export const addPost:AddPostType = (message) => {
  const newPost: PostType = {
    likes: 0,
    message: message,
    id: state.profilePage.posts.length + 1,
  }
  state.profilePage.posts.push(newPost);
  renderEntireThree(state);
}

export default state;