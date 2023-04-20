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

type PhotoType = {
  small: null | string
  large: null | string
}

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: PhotoType
  status: null | string
  uniqueUrlName: null | string
}

export type UsersType = {
  users: Array<UserType>
  totalUsersCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
}

export type NavbarLinkType = {
  title: string;
  href: string;
  id: number;
};

export type FriendType = {
  id: number;
  name: string;
  src: string;
}


export type ProfileType = {
  posts: Array<PostType>;
  newPostText: string;
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
  dialogsPage: DialogsType,
  usersPage: UsersType,
};

export type IAction = {
  type: ActionType,
  text?: string,
  users?: Array<UserType>,
  id?: number,
  usersCount?: number,
  page?: number,
  isFetching?: boolean,
};

export type DispatchType = (action: IAction) => void;