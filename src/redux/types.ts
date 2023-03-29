import {ActionType} from "../config/enums";

export type PostType = {
  likes: number,
  message: string,
  id: number
};

export type MessageType = {
  id: number,
  message: string
};

export type DialogType = {
  id: number;
  name: string;
}

export type NavbarLinkType = {
  title: string;
  href: string;
  id: number;
};

export type FriendType = {
  id: number,
  name: string,
  src: string
}


export type ProfileType = {
  posts: Array<PostType>,
  newPostText: string
};

export type DialogsType = {
  messages: Array<MessageType>,
  dialogs: Array<DialogType>,
  newMessageText: string
};

export type SidebarType = {
  navLinks: Array<NavbarLinkType>,
  friends: Array<FriendType>
};

export type StateType = {
  sidebar: SidebarType,
  profilePage: ProfileType,
  dialogsPage: DialogsType
};

export type IAction = { type: ActionType, text?: string }
export type DispatchType = (action: IAction) => void;